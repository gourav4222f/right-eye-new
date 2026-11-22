"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AlertCircle, ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";
import { siteConfig } from "@/config/site";
import {
  budgetOptions,
  contactSchema,
  serviceOptions,
  toFieldErrors,
  type FieldErrors,
} from "@/lib/validation";
import { cn } from "@/lib/utils";

type Status =
  | { state: "idle" }
  | { state: "submitting" }
  | { state: "success"; message: string; waUrl?: string }
  | { state: "error"; message: string; code?: string };

const fieldOrder = ["fullName", "email", "phone", "service", "details", "budget", "consent"] as const;

/**
 * Project enquiry form. Validates in the browser, then opens WhatsApp with
 * the enquiry pre-filled for our business number (the visitor presses Send).
 * A copy is also posted to /api/contact, which emails it when SMTP is set up.
 */
export function ContactForm() {
  const formId = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const startedAt = useRef(0);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>({ state: "idle" });

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  function focusFirstError(errs: FieldErrors) {
    const first = fieldOrder.find((f) => errs[f]);
    if (first) formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status.state === "submitting") return;
    const fd = new FormData(e.currentTarget);
    const payload = {
      fullName: String(fd.get("fullName") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      service: String(fd.get("service") ?? ""),
      details: String(fd.get("details") ?? ""),
      budget: String(fd.get("budget") ?? ""),
      consent: fd.get("consent") === "on",
      website: String(fd.get("website") ?? ""),
      startedAt: startedAt.current || Date.now(),
    };

    const parsed = contactSchema.safeParse(payload);
    if (!parsed.success) {
      const errs = toFieldErrors(parsed.error);
      setErrors(errs);
      setStatus({ state: "error", message: "Please correct the highlighted fields." });
      focusFirstError(errs);
      return;
    }

    setErrors({});
    setStatus({ state: "submitting" });

    // 1) Open WhatsApp with the enquiry pre-filled. Must run inside the click handler so
    //    browsers don't block the new tab.
    const d = parsed.data;
    const text = [
      `New enquiry from the website (${window.location.hostname})`,
      "",
      `Name: ${d.fullName}`,
      `Phone: ${d.phone}`,
      `Email: ${d.email}`,
      `Service: ${d.service}`,
      d.budget ? `Budget: ${d.budget}` : null,
      "",
      `Details: ${d.details}`,
    ]
      .filter((line) => line !== null)
      .join("\n");
    const waUrl = `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(text)}`;
    // ("noopener" in the features string makes window.open return null, so detach manually.)
    const win = window.open(waUrl, "_blank");
    if (win) win.opener = null;
    else window.location.href = waUrl;

    // 2) Also send a copy by email when SMTP is configured (best effort, never blocks the visitor).
    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      keepalive: true,
    }).catch(() => {});

    setStatus({
      state: "success",
      message:
        "WhatsApp has opened with your enquiry filled in — just press Send. If it didn't open, use the button below or call us.",
      waUrl,
    });
    formRef.current?.reset();
  }

  if (status.state === "success") {
    return (
      <div role="status" className="rounded-[var(--radius-card)] bg-mist p-8 md:p-10">
        <CheckCircle2 className="size-10 text-signal" aria-hidden="true" />
        <h2 className="heading-md mt-5">Almost done — send it on WhatsApp</h2>
        <p className="mt-3 max-w-[52ch] text-muted">{status.message}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {status.waUrl ? (
            <a href={status.waUrl} target="_blank" rel="noopener noreferrer" className="btn btn-signal">
              Open WhatsApp
            </a>
          ) : null}
          <a href={siteConfig.contact.phoneHref} className="btn btn-light">
            Call {siteConfig.contact.phoneDisplay}
          </a>
          <button type="button" onClick={() => setStatus({ state: "idle" })} className="btn btn-dark">
            Send another enquiry
          </button>
        </div>
      </div>
    );
  }

  const submitting = status.state === "submitting";
  const err = (name: keyof FieldErrors) => errors[name];
  const describedBy = (name: string, hint?: boolean) =>
    [hint ? `${formId}-${name}-hint` : null, errors[name as keyof FieldErrors] ? `${formId}-${name}-error` : null]
      .filter(Boolean)
      .join(" ") || undefined;

  return (
    <form ref={formRef} onSubmit={onSubmit} method="post" noValidate className="grid gap-5" aria-describedby={`${formId}-required`}>
      <p id={`${formId}-required`} className="text-sm text-muted">
        Fields marked <span aria-hidden="true">*</span>
        <span className="sr-only">with an asterisk</span> are required.
      </p>

      <div className="grid gap-5 md:grid-cols-2">
        <Field id={`${formId}-fullName`} label="Full name" required error={err("fullName")}>
          <input
            id={`${formId}-fullName`}
            name="fullName"
            type="text"
            autoComplete="name"
            required
            maxLength={100}
            placeholder="e.g. Priya Sharma…"
            aria-invalid={Boolean(err("fullName"))}
            aria-describedby={describedBy("fullName")}
            className={inputClass(err("fullName"))}
          />
        </Field>
        <Field id={`${formId}-email`} label="Business email" required error={err("email")}>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            spellCheck={false}
            required
            maxLength={160}
            placeholder="name@company.com…"
            aria-invalid={Boolean(err("email"))}
            aria-describedby={describedBy("email")}
            className={inputClass(err("email"))}
          />
        </Field>
        <Field id={`${formId}-phone`} label="Phone number" required error={err("phone")}>
          <input
            id={`${formId}-phone`}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            maxLength={20}
            placeholder="+91 98765 43210…"
            aria-invalid={Boolean(err("phone"))}
            aria-describedby={describedBy("phone")}
            className={inputClass(err("phone"))}
          />
        </Field>
        <Field id={`${formId}-service`} label="Required service" required error={err("service")}>
          <select
            id={`${formId}-service`}
            name="service"
            required
            defaultValue=""
            aria-invalid={Boolean(err("service"))}
            aria-describedby={describedBy("service")}
            className={cn(inputClass(err("service")), "cursor-pointer appearance-none bg-[length:16px] bg-[right_1rem_center] bg-no-repeat pr-10")}
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%231d1d1d' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
            }}
          >
            <option value="" disabled>
              Choose a service…
            </option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field id={`${formId}-details`} label="Project details" required error={err("details")} hint="What do you want to build, fix or grow? Include any deadlines or existing systems.">
        <textarea
          id={`${formId}-details`}
          name="details"
          required
          rows={6}
          maxLength={4000}
          placeholder="e.g. We need a website with online booking for our clinic…"
          aria-invalid={Boolean(err("details"))}
          aria-describedby={describedBy("details", true)}
          className={cn(inputClass(err("details")), "min-h-40 resize-y py-3.5")}
        />
      </Field>

      <Field id={`${formId}-budget`} label="Budget (optional)" error={err("budget")}>
        <select
          id={`${formId}-budget`}
          name="budget"
          defaultValue=""
          aria-describedby={describedBy("budget")}
          className={cn(inputClass(err("budget")), "cursor-pointer appearance-none bg-[length:16px] bg-[right_1rem_center] bg-no-repeat pr-10")}
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%231d1d1d' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
          }}
        >
          <option value="">Prefer not to say</option>
          {budgetOptions.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </Field>

      {/* Honeypot: hidden from people and assistive tech; bots tend to fill it. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={`${formId}-website`}>Leave this field empty</label>
        <input id={`${formId}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor={`${formId}-consent`} className="flex min-h-11 cursor-pointer items-start gap-3 text-sm leading-relaxed">
          <input
            id={`${formId}-consent`}
            name="consent"
            type="checkbox"
            required
            aria-invalid={Boolean(err("consent"))}
            aria-describedby={describedBy("consent")}
            className="mt-0.5 size-5 shrink-0 cursor-pointer accent-signal"
          />
          <span>
            I agree that {siteConfig.name} may use these details to respond to my enquiry, as described in the{" "}
            <a href="/privacy-policy" className="font-semibold text-ember underline underline-offset-2">
              privacy policy
            </a>
            . <span aria-hidden="true">*</span>
          </span>
        </label>
        {err("consent") ? <ErrorText id={`${formId}-consent-error`}>{err("consent")}</ErrorText> : null}
      </div>

      <div aria-live="polite" className="min-h-0">
        {status.state === "error" ? (
          <div role="alert" className="flex gap-3 rounded-2xl border border-ember/30 bg-ember/5 p-4 text-sm text-ink">
            <AlertCircle className="mt-0.5 size-5 shrink-0 text-ember" aria-hidden="true" />
            <div>
              <p>{status.message}</p>
              {status.code === "not_configured" || status.code === "send_failed" ? (
                <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1 font-semibold">
                  <a href={siteConfig.contact.emailHref} className="text-ember underline underline-offset-2">
                    Email {siteConfig.contact.email}
                  </a>
                  <a href={siteConfig.contact.phoneHref} className="text-ember underline underline-offset-2">
                    Call {siteConfig.contact.phoneDisplay}
                  </a>
                </p>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>

      <div>
        <button type="submit" disabled={submitting} className="btn btn-signal min-w-48 disabled:cursor-wait disabled:opacity-80">
          {submitting ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden="true" /> Opening WhatsApp…
            </>
          ) : (
            <>
              Send on WhatsApp <ArrowUpRight className="size-4" aria-hidden="true" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

function inputClass(error?: string) {
  return cn(
    "min-h-12 w-full rounded-2xl border bg-white px-4 text-[1rem] text-ink transition-[border-color,box-shadow] placeholder:text-stone",
    "focus-visible:border-ink focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-signal/40",
    error ? "border-ember" : "border-line hover:border-stone",
  );
}

function Field({
  id,
  label,
  required,
  error,
  hint,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}) {
  const name = id.split("-").pop();
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-semibold tracking-[-0.01em]">
        {label}
        {required ? <span aria-hidden="true"> *</span> : null}
      </label>
      {hint ? (
        <p id={`${id.slice(0, id.lastIndexOf("-"))}-${name}-hint`} className="-mt-1 text-sm text-muted">
          {hint}
        </p>
      ) : null}
      {children}
      {error ? <ErrorText id={`${id.slice(0, id.lastIndexOf("-"))}-${name}-error`}>{error}</ErrorText> : null}
    </div>
  );
}

function ErrorText({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <p id={id} className="flex items-center gap-1.5 text-sm font-medium text-ember">
      <AlertCircle className="size-4 shrink-0" aria-hidden="true" />
      {children}
    </p>
  );
}
