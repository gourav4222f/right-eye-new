import { NextRequest } from "next/server";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { resetRateLimits } from "@/lib/rate-limit";
import { serviceOptions } from "@/lib/validation";

vi.mock("@/lib/email", () => ({
  isEmailConfigured: vi.fn(() => false),
  sendContactEmail: vi.fn(async () => ({ ok: true, messageId: "test" })),
}));

const { POST } = await import("@/app/api/contact/route");
const email = await import("@/lib/email");

let ipCounter = 0;

const body = (overrides: Record<string, unknown> = {}) => ({
  fullName: "Priya Sharma",
  email: "priya@example.com",
  phone: "+91 98765 43210",
  service: serviceOptions[0],
  details: "We need a new website with online booking for our clinic.",
  budget: "",
  consent: true,
  website: "",
  startedAt: Date.now() - 10_000,
  ...overrides,
});

function req(payload: unknown, headers: Record<string, string> = {}) {
  ipCounter += 1;
  return new NextRequest("http://localhost:3000/api/contact", {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "content-type": "application/json",
      origin: "http://localhost:3000",
      host: "localhost:3000",
      "sec-fetch-site": "same-origin",
      "x-forwarded-for": `10.0.0.${ipCounter}`,
      ...headers,
    },
  });
}

describe("POST /api/contact", () => {
  beforeEach(() => {
    resetRateLimits();
    vi.mocked(email.isEmailConfigured).mockReturnValue(false);
  });

  it("rejects cross-site requests", async () => {
    const res = await POST(req(body(), { origin: "https://evil.example", "sec-fetch-site": "cross-site" }));
    expect(res.status).toBe(403);
  });

  it("rejects requests without an Origin header", async () => {
    const r = req(body());
    r.headers.delete("origin");
    expect((await POST(r)).status).toBe(403);
  });

  it("rejects honeypot and too-fast submissions without claiming success", async () => {
    expect((await POST(req(body({ website: "spam" })))).status).toBe(400);
    expect((await POST(req(body({ startedAt: Date.now() })))).status).toBe(400);
  });

  it("returns field errors for invalid input", async () => {
    const res = await POST(req(body({ email: "bad" })));
    expect(res.status).toBe(422);
    const json = await res.json();
    expect(json.fieldErrors.email).toBeTruthy();
  });

  it("returns 503 (not a fake success) when email is not configured", async () => {
    const res = await POST(req(body()));
    expect(res.status).toBe(503);
    expect((await res.json()).ok).toBe(false);
  });

  it("returns success only when the mail service accepts the message", async () => {
    vi.mocked(email.isEmailConfigured).mockReturnValue(true);
    const ok = await POST(req(body()));
    expect(ok.status).toBe(200);
    vi.mocked(email.sendContactEmail).mockResolvedValueOnce({ ok: false, reason: "send_failed" });
    const fail = await POST(req(body()));
    expect(fail.status).toBe(502);
  });

  it("rate-limits repeated submissions from one IP", async () => {
    const headers = { "x-forwarded-for": "10.9.9.9" };
    for (let i = 0; i < 5; i++) await POST(req(body(), headers));
    expect((await POST(req(body(), headers))).status).toBe(429);
  });
});
