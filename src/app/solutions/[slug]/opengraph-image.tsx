import { getSolution, industrySolutions } from "@/data/solutions";
import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "RightEyeTechnology industry solution";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return industrySolutions.map((s) => ({ slug: s.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getSolution(slug);
  return renderOgImage({ eyebrow: "Industry solutions", title: s ? `Technology for ${s.name}` : "Industry solutions" });
}
