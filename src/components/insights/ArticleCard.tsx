import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CoverImage } from "@/components/ui/CoverImage";
import { articleImages, images } from "@/config/assets";
import type { Article } from "@/data/insights";
import { formatDate } from "@/lib/utils";

export function ArticleCard({ article, headingLevel = "h3" }: { article: Article; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  const cover = articleImages[article.slug] ?? images.deskMug;
  return (
    <Link href={`/insights/${article.slug}`} className="group flex h-full flex-col">
      <CoverImage
        image={cover}
        decorative
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="aspect-[4/3] rounded-[var(--radius-card)]"
        imgClassName="transition-transform duration-[1200ms] ease-(--ease-basic) group-hover:scale-[1.04]"
      />
      <div className="mt-5 flex items-center gap-3 text-sm text-muted">
        <span className="rounded-full bg-mist px-3 py-1 text-xs font-semibold text-ink">{article.category}</span>
        <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
        <span aria-hidden="true">·</span>
        <span>{article.readingMinutes} min read</span>
      </div>
      <Heading className="mt-3 text-xl font-medium leading-snug tracking-[-0.035em] md:text-[1.4rem]">
        <span className="link-underline">{article.title}</span>
        <ArrowUpRight className="ml-1 inline size-5 align-[-3px] transition-transform duration-500 group-hover:rotate-45" aria-hidden="true" />
      </Heading>
      <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{article.description}</p>
    </Link>
  );
}
