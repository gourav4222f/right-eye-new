/**
 * Central company configuration.
 *
 * Everything here is public (it ships to the browser). Never put secrets in
 * this file — SMTP credentials live in server-only environment variables
 * read by `src/lib/email.ts`.
 *
 * Values marked "configure" are read from environment variables so the
 * business can set them per environment without code changes.
 */

const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

/** Absolute site origin without a trailing slash. No production domain has been supplied yet. */
export const siteUrl = (rawSiteUrl && rawSiteUrl.length > 0 ? rawSiteUrl : "http://localhost:3000").replace(/\/+$/, "");

/** True once a real public domain has been configured. */
export const hasConfiguredSiteUrl = Boolean(rawSiteUrl && !/localhost|127\.0\.0\.1/.test(rawSiteUrl));

const phoneDisplay = "+91-8744867110";
const phoneE164 = "+918744867110";

/** WhatsApp number in international format without "+" (e.g. 918744867110). Not enabled until confirmed. */
const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") ?? "";

export type SocialKey = "linkedin" | "instagram" | "facebook" | "youtube" | "x" | "github";

export interface SocialLink {
  key: SocialKey;
  label: string;
  url: string;
}

/**
 * Social profiles. A profile is rendered only when its URL is configured,
 * so there are never dead "#" links. Set these in `.env.local` or your host.
 */
const socialCandidates: Array<{ key: SocialKey; label: string; url: string | undefined }> = [
  { key: "linkedin", label: "LinkedIn", url: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN },
  { key: "instagram", label: "Instagram", url: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM },
  { key: "facebook", label: "Facebook", url: process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK },
  { key: "youtube", label: "YouTube", url: process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE },
  { key: "x", label: "X", url: process.env.NEXT_PUBLIC_SOCIAL_X },
  { key: "github", label: "GitHub", url: process.env.NEXT_PUBLIC_SOCIAL_GITHUB },
];

export const socialLinks: SocialLink[] = socialCandidates
  .filter((s): s is { key: SocialKey; label: string; url: string } => Boolean(s.url && /^https:\/\//.test(s.url)))
  .map((s) => ({ key: s.key, label: s.label, url: s.url }));

export const siteConfig = {
  name: "RightEyeTechnology",
  shortName: "RightEye",
  legalName: "RightEyeTechnology",
  tagline: "One Technology Partner. From Idea to Growth.",
  description:
    "RightEyeTechnology is a full-service technology company in India. We build websites, web and mobile apps, custom software and CRMs, and run digital marketing, cloud hosting, SaaS engineering and AI automation for growing businesses.",
  founder: {
    name: "Shravan Thakur",
    role: "Founder & CEO",
  },
  contact: {
    email: "righteyetech@gmail.com",
    phoneDisplay,
    phoneE164,
    phoneHref: `tel:${phoneE164}`,
    emailHref: "mailto:righteyetech@gmail.com",
  },
  whatsapp: {
    enabled: whatsappNumber.length >= 10,
    url: whatsappNumber.length >= 10
      ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello RightEyeTechnology, I'd like to discuss a project.")}`
      : "",
  },
  market: "India",
  timezone: "Asia/Kolkata",
  locale: "en_IN",
  logo: "/brand/logo-square.png",
  social: socialLinks,
  seo: {
    titleTemplate: "%s | RightEyeTechnology",
    defaultTitle: "RightEyeTechnology — Websites, Software, Marketing, Cloud & AI",
    keywords: [
      "technology company India",
      "website development",
      "web application development",
      "mobile app development",
      "custom CRM development",
      "custom software development",
      "SEO services",
      "digital marketing",
      "cloud hosting",
      "SaaS development",
      "AI automation",
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
