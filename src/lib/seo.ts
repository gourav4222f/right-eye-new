import type { Metadata } from "next";
import { siteConfig, siteUrl } from "@/config/site";
import { absoluteUrl } from "./utils";

interface PageSeo {
  title: string;
  description: string;
  /** Site-relative path, e.g. "/services". Used for the canonical URL. */
  path: string;
  /** Absolute title bypasses the "%s | RightEyeTechnology" template. */
  absoluteTitle?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
  /**
   * Use the site-wide share image. Set false on routes that have their own
   * colocated `opengraph-image` file (services/solutions/insights detail pages).
   */
  defaultImage?: boolean;
}

const defaultOgImage = { url: "/opengraph-image", width: 1200, height: 630, alt: `${siteConfig.name} — ${siteConfig.tagline}` };

/**
 * Build per-page metadata with canonical, Open Graph and Twitter fields.
 * Detail routes get their social image from colocated `opengraph-image`
 * files; every other page uses the site-wide image.
 */
export function buildMetadata({
  title,
  description,
  path,
  absoluteTitle,
  type = "website",
  publishedTime,
  modifiedTime,
  noIndex,
  defaultImage = true,
}: PageSeo): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${siteConfig.name}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      title: fullTitle,
      description,
      url: path,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      ...(defaultImage ? { images: [defaultOgImage] } : {}),
      ...(type === "article" ? { publishedTime, modifiedTime: modifiedTime ?? publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      ...(defaultImage ? { images: [defaultOgImage.url] } : {}),
    },
    ...(noIndex ? { robots: { index: false, follow: true } } : {}),
  };
}

/* ------------------------------------------------------------------ */
/* JSON-LD builders. Only truthful, supplied company facts are used.  */
/* ------------------------------------------------------------------ */

const orgId = `${siteUrl}/#organization`;
const websiteId = `${siteUrl}/#website`;

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": orgId,
    name: siteConfig.name,
    url: siteUrl,
    logo: absoluteUrl("/brand/logo-square.png"),
    description: siteConfig.description,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phoneE164,
    founder: { "@type": "Person", name: siteConfig.founder.name, jobTitle: siteConfig.founder.role },
    areaServed: { "@type": "Country", name: "India" },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: siteConfig.contact.email,
        telephone: siteConfig.contact.phoneE164,
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
    ],
    ...(siteConfig.social.length > 0 ? { sameAs: siteConfig.social.map((s) => s.url) } : {}),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    name: siteConfig.name,
    url: siteUrl,
    inLanguage: "en-IN",
    publisher: { "@id": orgId },
  };
}

export function serviceJsonLd(input: { name: string; description: string; path: string; serviceTypes: string[] }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    provider: { "@id": orgId },
    areaServed: { "@type": "Country", name: "India" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: input.name,
      itemListElement: input.serviceTypes.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s },
      })),
    },
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function articleJsonLd(input: {
  title: string;
  description: string;
  path: string;
  publishedAt: string;
  updatedAt?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    mainEntityOfPage: absoluteUrl(input.path),
    url: absoluteUrl(input.path),
    datePublished: input.publishedAt,
    dateModified: input.updatedAt ?? input.publishedAt,
    image: absoluteUrl(`${input.path}/opengraph-image`),
    author: { "@id": orgId, "@type": "Organization", name: siteConfig.name },
    publisher: { "@id": orgId },
    inLanguage: "en-IN",
  };
}

export function faqJsonLd(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}
