import type { MetadataRoute } from "next";
import { publishedArticles } from "@/data/insights";
import { serviceDivisions } from "@/data/services";
import { industrySolutions } from "@/data/solutions";
import { absoluteUrl } from "@/lib/utils";

/**
 * Public, canonical, indexable pages only. Drafts, unpublished team
 * profiles, API routes and the 404 page are excluded by construction.
 */
const CONTENT_DATE = "2026-11-22";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }> = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    { path: "/solutions", priority: 0.9, changeFrequency: "monthly" },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" },
    { path: "/how-we-work", priority: 0.7, changeFrequency: "monthly" },
    { path: "/work", priority: 0.8, changeFrequency: "monthly" },
    { path: "/insights", priority: 0.7, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
    { path: "/privacy-policy", priority: 0.2, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.2, changeFrequency: "yearly" },
  ];

  return [
    ...staticPages.map((p) => ({ url: absoluteUrl(p.path), lastModified: CONTENT_DATE, changeFrequency: p.changeFrequency, priority: p.priority })),
    ...serviceDivisions.map((d) => ({
      url: absoluteUrl(`/services/${d.slug}`),
      lastModified: CONTENT_DATE,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...industrySolutions.map((s) => ({
      url: absoluteUrl(`/solutions/${s.slug}`),
      lastModified: CONTENT_DATE,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...publishedArticles.map((a) => ({
      url: absoluteUrl(`/insights/${a.slug}`),
      lastModified: a.updatedAt ?? a.publishedAt,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
