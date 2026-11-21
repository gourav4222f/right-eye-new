import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/utils";

/** Allow crawling of the whole public site; keep API endpoints out of indexes. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
