import "server-only";
import nodemailer, { type Transporter } from "nodemailer";
import { siteConfig } from "@/config/site";
import type { ContactData } from "./validation";

/**
 * Server-only email delivery via SMTP.
 *
 * Required environment variables (never prefix these with NEXT_PUBLIC_):
 *   SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS
 * Optional:
 *   SMTP_SECURE ("true" for port 465), CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL
 *
 * For a Gmail inbox, use an App Password with smtp.gmail.com:465.
 */

interface MailConfig {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  pass: string;
  to: string;
  from: string;
}

export function getMailConfig(): MailConfig | null {
  const host = process.env.SMTP_HOST?.trim();
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS;
  if (!host || !user || !pass) return null;

  const port = Number(process.env.SMTP_PORT ?? 465);
  const secure = process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : port === 465;
  return {
    host,
    port: Number.isFinite(port) ? port : 465,
    secure,
    user,
    pass,
    to: process.env.CONTACT_TO_EMAIL?.trim() || siteConfig.contact.email,
    from: process.env.CONTACT_FROM_EMAIL?.trim() || user,
  };
}

export function isEmailConfigured(): boolean {
  return getMailConfig() !== null;
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

/** Remove CR/LF so user input can never inject extra mail headers. */
function headerSafe(value: string): string {
  return value.replace(/[\r\n]+/g, " ").slice(0, 200);
}

export type SendResult = { ok: true; messageId: string } | { ok: false; reason: "not_configured" | "send_failed" };

let cachedTransport: Transporter | null = null;
let cachedKey = "";

function getTransport(config: MailConfig) {
  const key = `${config.host}:${config.port}:${config.user}`;
  if (!cachedTransport || cachedKey !== key) {
    cachedTransport = nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: config.secure,
      auth: { user: config.user, pass: config.pass },
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 15_000,
    });
    cachedKey = key;
  }
  return cachedTransport;
}

export async function sendContactEmail(data: ContactData, meta: { ip: string; userAgent: string }): Promise<SendResult> {
  const config = getMailConfig();
  if (!config) return { ok: false, reason: "not_configured" };

  const rows: Array<[string, string]> = [
    ["Name", data.fullName],
    ["Email", data.email],
    ["Phone", data.phone],
    ["Service", data.service],
    ["Budget", data.budget ?? "Not specified"],
  ];

  const text = [
    `New project enquiry from the ${siteConfig.name} website`,
    "",
    ...rows.map(([k, v]) => `${k}: ${v}`),
    "",
    "Project details:",
    data.details,
    "",
    "---",
    `Consent to contact: yes`,
    `Submitted: ${new Date().toISOString()}`,
    `IP: ${meta.ip}`,
    `User agent: ${meta.userAgent}`,
  ].join("\n");

  const html = `
  <div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#1d1d1d;line-height:1.5">
    <h2 style="margin:0 0 12px">New project enquiry</h2>
    <table cellpadding="6" style="border-collapse:collapse">
      ${rows
        .map(
          ([k, v]) =>
            `<tr><td style="color:#585959;vertical-align:top"><strong>${escapeHtml(k)}</strong></td><td>${escapeHtml(v)}</td></tr>`,
        )
        .join("")}
    </table>
    <h3 style="margin:16px 0 6px">Project details</h3>
    <p style="white-space:pre-wrap;margin:0">${escapeHtml(data.details)}</p>
    <hr style="border:none;border-top:1px solid #dfdfdf;margin:16px 0" />
    <p style="color:#585959;font-size:12px;margin:0">Consent to contact: yes · IP ${escapeHtml(meta.ip)}</p>
  </div>`;

  try {
    const info = await getTransport(config).sendMail({
      from: `"${siteConfig.name} Website" <${config.from}>`,
      to: config.to,
      replyTo: `"${headerSafe(data.fullName)}" <${headerSafe(data.email)}>`,
      subject: headerSafe(`New enquiry: ${data.service} — ${data.fullName}`),
      text,
      html,
    });
    // Treat as delivered only if the SMTP server accepted at least one recipient.
    if (Array.isArray(info.accepted) && info.accepted.length > 0) {
      return { ok: true, messageId: info.messageId };
    }
    return { ok: false, reason: "send_failed" };
  } catch (error) {
    console.error("[contact] SMTP send failed:", error instanceof Error ? error.message : error);
    return { ok: false, reason: "send_failed" };
  }
}
