import { focusServices, getFocusService } from "@/data/focus-services";
import { getDivision, serviceDivisions } from "@/data/services";
import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "RightEyeTechnology service division";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return [...focusServices, ...serviceDivisions].map((d) => ({ slug: d.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const f = getFocusService(slug);
  if (f) return renderOgImage({ eyebrow: "Delhi NCR", title: f.name });
  const d = getDivision(slug);
  return renderOgImage({ eyebrow: d ? `Division ${d.number}` : "Services", title: d?.name ?? "Technology services" });
}
