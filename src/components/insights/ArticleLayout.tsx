import Link from "next/link";
import { MotionBeacon } from "@/components/motion/MotionBeacon";
import { ArticleCard } from "@/components/insights/ArticleCard";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CoverImage } from "@/components/ui/CoverImage";
import { articleImages, images } from "@/config/assets";
import { siteConfig } from "@/config/site";
import { publishedArticles, type Article, type ArticleBlock } from "@/data/insights";
import { articleJsonLd } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

/**
 * Reusable layout for Insights articles: header, cover, table of contents,
 * structured body blocks, related posts and Article JSON-LD.
 */
export function ArticleLayout({ article }: { article: Article }) {
  const path = `/insights/${article.slug}`;
  const toc = article.body.filter((b): b is Extract<ArticleBlock, { type: "h2" }> => b.type === "h2");
  const related = publishedArticles.filter((a) => a.slug !== article.slug).slice(0, 2);
  const cover = articleImages[article.slug] ?? images.deskMug;

  return (
    <>
      <article>
        <header className="panel on-dark mt-2 bg-ink pb-14 pt-[calc(var(--header-h)+40px)] text-white lg:mt-3 lg:pb-20 lg:pt-[calc(var(--header-h)+64px)]">
          <div className="container-site">
            <MotionBeacon />
            <Breadcrumbs
              tone="light"
              items={[
                { name: "Insights", path: "/insights" },
                { name: article.title, path },
              ]}
            />
            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-white/70">
              <span className="rounded-full bg-signal px-3 py-1 text-xs font-semibold text-white">{article.category}</span>
              <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
              <span aria-hidden="true">·</span>
              <span>{article.readingMinutes} min read</span>
            </div>
            <h1 data-split="rise" className="heading-xl mt-5 max-w-[20ch] text-white">{article.title}</h1>
            <p className="lede mt-6 max-w-[62ch] text-white/80">{article.description}</p>
            <p className="mt-6 text-sm text-white/60">By {article.author}</p>
          </div>
        </header>

        <div className="container-site">
          <CoverImage
            image={cover}
            priority
            sizes="(min-width: 1440px) 1344px, 100vw"
            className="mx-auto mt-8 aspect-[21/9] max-w-[1100px] rounded-[var(--radius-card)]"
          />
        </div>

        <div className="container-site grid gap-12 py-14 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16 lg:py-20">
          <aside className="lg:sticky lg:top-[calc(var(--header-h)+32px)] lg:self-start">
            {toc.length > 0 ? (
              <nav aria-label="In this article">
                <h2 className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">In this article</h2>
                <ol className="mt-4 flex flex-col gap-2.5 border-l border-line pl-4 text-sm">
                  {toc.map((h) => (
                    <li key={h.id}>
                      <a href={`#${h.id}`} className="text-muted hover:text-ink">
                        {h.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            ) : null}
          </aside>

          <div className="prose-article max-w-[68ch]">
            {article.body.map((block, i) => (
              <Block key={i} block={block} />
            ))}
            <div className="!mt-14 rounded-[var(--radius-card)] bg-mist p-6">
              <p className="text-lg font-medium tracking-[-0.03em] text-ink">Want a second opinion on your project?</p>
              <p className="mt-2 text-[0.975rem] text-muted">
                {siteConfig.name} can review your plans and recommend a practical next step.{" "}
                <Link href="/contact" className="font-semibold text-ember underline underline-offset-4">
                  Get in touch
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </article>

      {related.length > 0 ? (
        <section className="pb-20 lg:pb-28" aria-labelledby="related-articles">
          <div className="container-site">
            <h2 id="related-articles" className="heading-md">
              More insights
            </h2>
            <ul className="mt-8 grid gap-10 md:grid-cols-2">
              {related.map((a) => (
                <li key={a.slug}>
                  <ArticleCard article={a} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <CtaBanner />
      <JsonLd
        data={articleJsonLd({
          title: article.title,
          description: article.description,
          path,
          publishedAt: article.publishedAt,
          updatedAt: article.updatedAt,
        })}
      />
    </>
  );
}

function Block({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case "p":
      return <p>{block.text}</p>;
    case "h2":
      return <h2 id={block.id}>{block.text}</h2>;
    case "h3":
      return <h3>{block.text}</h3>;
    case "ul":
      return (
        <ul>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      );
    case "callout":
      return (
        <aside className="rounded-[var(--radius-card)] border-l-4 border-signal bg-mist px-6 py-5 text-ink">
          <p>{block.text}</p>
        </aside>
      );
  }
}
