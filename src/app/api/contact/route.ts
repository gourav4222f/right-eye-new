import { NextResponse, type NextRequest } from "next/server";
import { siteConfig, siteUrl } from "@/config/site";
import { isEmailConfigured, sendContactEmail } from "@/lib/email";
import { rateLimit } from "@/lib/rate-limit";
import {
  antiSpamSchema,
  contactSchema,
  MAX_FORM_AGE_MS,
  MIN_FILL_TIME_MS,
  toFieldErrors,
} from "@/lib/validation";

const MAX_BODY_BYTES = 16 * 1024;

type ApiResponse =
  | { ok: true; message: string }
  | { ok: false; code: string; message: string; fieldErrors?: Record<string, string> };

function json(body: ApiResponse, status: number, headers?: Record<string, string>) {
  return NextResponse.json(body, { status, headers: { "Cache-Control": "no-store", ...headers } });
}

function clientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]!.trim();
  return request.headers.get("x-real-ip")?.trim() || "unknown";
}

/**
 * CSRF / cross-site protection: only accept same-origin browser requests.
 * The form posts JSON, which cross-origin pages cannot send without a CORS
 * preflight (which this handler never approves), and we additionally check
 * the Origin and Sec-Fetch-Site headers.
 */
function isSameOrigin(request: NextRequest): boolean {
  const fetchSite = request.headers.get("sec-fetch-site");
  if (fetchSite && fetchSite !== "same-origin") return false;

  const origin = request.headers.get("origin");
  if (!origin) return false;

  let originHost: string;
  try {
    originHost = new URL(origin).host;
  } catch {
    return false;
  }

  const allowed = new Set<string>();
  const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  if (host) allowed.add(host);
  try {
    allowed.add(new URL(siteUrl).host);
  } catch {
    /* ignore malformed config */
  }
  return allowed.has(originHost);
}

const unavailableMessage = `Online enquiries aren't connected yet. Please email ${siteConfig.contact.email} or call ${siteConfig.contact.phoneDisplay} and we'll respond directly.`;

export async function POST(request: NextRequest) {
  if (!isSameOrigin(request)) {
    return json({ ok: false, code: "forbidden", message: "This request could not be verified. Refresh the page and try again." }, 403);
  }

  if (!request.headers.get("content-type")?.includes("application/json")) {
    return json({ ok: false, code: "unsupported", message: "Unsupported request format." }, 415);
  }

  const ip = clientIp(request);
  const limit = rateLimit(`contact:${ip}`, 5, 10 * 60 * 1000);
  if (!limit.allowed) {
    return json(
      {
        ok: false,
        code: "rate_limited",
        message: `Too many enquiries from this connection. Wait ${Math.ceil(limit.retryAfterSec / 60)} minute(s) and try again, or email ${siteConfig.contact.email}.`,
      },
      429,
      { "Retry-After": String(limit.retryAfterSec) },
    );
  }

  const raw = await request.text();
  if (raw.length > MAX_BODY_BYTES) {
    return json({ ok: false, code: "too_large", message: "Your message is too long. Shorten the project details and try again." }, 413);
  }

  let body: unknown;
  try {
    body = JSON.parse(raw);
  } catch {
    return json({ ok: false, code: "bad_request", message: "The form data couldn't be read. Refresh the page and try again." }, 400);
  }

  const record = (body && typeof body === "object" ? body : {}) as Record<string, unknown>;

  // Spam checks: honeypot and minimum fill time. Bots get a generic 400 —
  // never a fake success — so a misfiring check can't silently drop a real enquiry.
  const spam = antiSpamSchema.safeParse({ website: record.website ?? "", startedAt: record.startedAt });
  const elapsed = spam.success ? Date.now() - spam.data.startedAt : -1;
  if (!spam.success || elapsed < MIN_FILL_TIME_MS || elapsed > MAX_FORM_AGE_MS) {
    return json(
      {
        ok: false,
        code: "spam_check",
        message: "We couldn't verify this submission. Wait a few seconds, then submit again — or email us directly.",
      },
      400,
    );
  }

  const parsed = contactSchema.safeParse(record);
  if (!parsed.success) {
    return json(
      { ok: false, code: "validation", message: "Some fields need attention.", fieldErrors: toFieldErrors(parsed.error) },
      422,
    );
  }

  if (!isEmailConfigured()) {
    console.warn("[contact] SMTP is not configured; enquiry was NOT delivered.");
    return json({ ok: false, code: "not_configured", message: unavailableMessage }, 503);
  }

  const result = await sendContactEmail(parsed.data, {
    ip,
    userAgent: request.headers.get("user-agent")?.slice(0, 300) ?? "unknown",
  });

  if (!result.ok) {
    return json(
      {
        ok: false,
        code: result.reason,
        message: `Your enquiry couldn't be sent right now. Please try again shortly, or email ${siteConfig.contact.email}.`,
      },
      502,
    );
  }

  return json(
    {
      ok: true,
      message: "Thank you — your enquiry has been sent. We'll get back to you by email or phone.",
    },
    200,
  );
}

export function GET() {
  return json({ ok: false, code: "method_not_allowed", message: "Use POST to submit an enquiry." }, 405, { Allow: "POST" });
}
