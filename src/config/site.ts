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
    "RightEyeTechnology is a digital marketing and technology company in Rohini, Delhi. We manage social media, run Google and Meta ads, build websites, produce and edit video, handle PR and SEO, and build custom software for businesses across Delhi NCR and India.",
  /**
   * Office address. Shown on the site and in LocalBusiness schema, so it must
   * match Google Business Profile exactly. TODO: add the street/building and PIN code.
   */
  address: {
    streetAddress: "",
    landmark: "Near Rithala Metro Station",
    locality: "Rohini",
    city: "New Delhi",
    region: "Delhi",
    postalCode: "",
    country: "IN",
    display: "Rohini, New Delhi (near Rithala Metro Station)",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Rithala+Metro+Station+Rohini+Delhi",
  },
  /**
   * Opening hours. TODO: confirm, then fill in (e.g. days Mon–Sat, opens "10:00", closes "19:00").
   * Left empty, hours are hidden on the site and in schema.
   */
  hours: { label: "", days: [] as string[], opens: "", closes: "" },
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
    defaultTitle: "RightEyeTechnology — Digital Marketing, Social Media, Ads, Video, PR & Websites in Delhi",
    keywords: [
      "digital marketing agency in Delhi",
      "social media marketing agency Delhi",
      "social media management Rohini",
      "Google Ads agency Delhi",
      "Meta ads agency Delhi",
      "website development company Delhi",
      "video production Delhi",
      "PR agency Delhi",
      "SEO company Delhi",
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
