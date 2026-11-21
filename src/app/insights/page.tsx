import type { Metadata } from "next";
import { ArticleCard } from "@/components/insights/ArticleCard";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PageHero } from "@/components/sections/PageHero";
import { publishedArticles } from "@/data/insights";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Insights — Practical Guides on Websites, Software, Marketing & Cloud",
  description:
    "Practical, plain-language guides from RightEyeTechnology on planning websites, choosing business software, digital marketing, hosting and automation.",
  path: "/insights",
});

export default function InsightsPage() {
  const [featured, ...rest] = publishedArticles;
  return (
    <>
      <PageHero
        title="Insights for business owners making technology decisions"
        intro="Practical guides on planning, building and running digital products — written in plain language, without the sales pitch."
        breadcrumbs={[{ name: "Insights", path: "/insights" }]}
      />

      <section className="section-pad" aria-labelledby="articles-title">
        <div className="container-site">
          <h2 id="articles-title" className="sr-only">
            Latest articles
          </h2>
          {featured ? (
            <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
              <ArticleCard article={featured} />
              <ul className="flex flex-col gap-12">
                {rest.map((a) => (
                  <li key={a.slug}>
                    <ArticleCard article={a} />
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="text-muted">New articles are on the way. In the meantime, ask us anything directly.</p>
          )}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
