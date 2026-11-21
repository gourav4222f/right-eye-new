import { getArticle, publishedArticles } from "@/data/insights";
import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "RightEyeTechnology insights article";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return publishedArticles.map((a) => ({ slug: a.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = getArticle(slug);
  return renderOgImage({ eyebrow: a ? `Insights · ${a.category}` : "Insights", title: a?.title ?? "Insights" });
}
