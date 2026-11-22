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

/** The live domain. Production builds use it unless NEXT_PUBLIC_SITE_URL overrides it. */
export const productionUrl = "https://righteyetechnology.com";

const fallbackUrl = process.env.NODE_ENV === "production" ? productionUrl : "http://localhost:3000";

/** Absolute site origin without a trailing slash. */
export const siteUrl = (rawSiteUrl && rawSiteUrl.length > 0 ? rawSiteUrl : fallbackUrl).replace(/\/+$/, "");

/** True when canonical URLs point at a real public domain. */
export const hasConfiguredSiteUrl = !/localhost|127\.0\.0\.1/.test(siteUrl);

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
  /** Name variants, so search engines can tell us apart from unrelated "RightEye" companies. */
  alternateNames: ["RightEye Technology", "Right Eye Technology"],
  tagline: "One Technology Partner. From Idea to Growth.",
  description:
    "RightEyeTechnology is a full-service technology company in India. We build websites, web and mobile apps, custom software and CRMs, and run digital marketing, cloud hosting, SaaS engineering and AI automation for growing businesses.",
  founder: {
    name: "Shravan Thakur",
    role: "Founder & CEO",
  },
  contact: {
    email: "info@righteyetechnology.com",
    phoneDisplay,
    phoneE164,
    phoneHref: `tel:${phoneE164}`,
    emailHref: "mailto:info@righteyetechnology.com",
  },
  whatsapp: {
    enabled: whatsappNumber.length >= 10,
    url: whatsappNumber.length >= 10
      ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello RightEyeTechnology, I'd like to discuss a project.")}`
      : "",
  },
  analytics: {
    /** Google Tag Manager container. GA4 is set up inside GTM. Override with NEXT_PUBLIC_GTM_ID. */
    gtmId: (process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-PG5RNS7X").trim(),
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
