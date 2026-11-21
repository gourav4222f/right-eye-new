import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CoverImage } from "@/components/ui/CoverImage";
import { industryImages } from "@/config/assets";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { industrySolutions } from "@/data/solutions";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Industry Solutions — Travel, Restaurants, Real Estate, Healthcare, Retail & Education",
  description:
    "Technology and marketing solutions designed for travel and tourism, restaurants, real estate, healthcare and clinics, retail and e-commerce, and education businesses in India.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        title="Industry solutions built around how your sector really works"
        intro="Six industries, each with its own bottlenecks. We combine software, websites, marketing and automation to address the specific problems your business faces — not a one-size-fits-all package."
        breadcrumbs={[{ name: "Solutions", path: "/solutions" }]}
        actions={
          <ButtonLink href="/contact" variant="signal">
            Discuss your industry
          </ButtonLink>
        }
      />

      <section className="section-pad" aria-labelledby="industries-list-title">
        <div className="container-site">
          <h2 id="industries-list-title" className="sr-only">
            Industries we serve
          </h2>
          <ul className="grid gap-x-6 gap-y-14 md:grid-cols-2">
            {industrySolutions.map((s, i) => (
              <li key={s.slug} data-reveal className={i % 2 ? "md:mt-24" : undefined}>
                <Link href={`/solutions/${s.slug}`} className="group block">
                  <div className="overflow-hidden rounded-[var(--radius-card)]">
                    <CoverImage image={industryImages[s.slug]} decorative sizes="(min-width: 1024px) 50vw, 100vw" className="aspect-[10/7]" imgClassName="transition-transform duration-[1200ms] ease-(--ease-basic) group-hover:scale-[1.04]" />
                  </div>
                  <h3 className="mt-5 flex items-center gap-2 text-[1.75rem] font-medium tracking-[-0.04em]">
                    {s.name}
                    <ArrowUpRight className="size-6 transition-transform duration-500 group-hover:rotate-45" aria-hidden="true" />
                  </h3>
                  <p className="mt-2 max-w-[52ch] text-muted">{s.summary}</p>
                  <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={`${s.name} solutions`}>
                    {s.tags.map((t) => (
                      <li key={t} className="rounded-full border border-line px-3 py-1 text-xs font-medium">
                        {t}
                      </li>
                    ))}
                  </ul>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="panel section-pad bg-mist" aria-labelledby="other-industry-title">
        <div className="container-site grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <div>
            <h2 id="other-industry-title" className="heading-lg max-w-[18ch]">
              Your industry isn&rsquo;t listed?
            </h2>
            <p className="mt-5 max-w-xl text-muted">
              These are the sectors we focus on, but the underlying problems — capturing leads, managing operations, reaching
              customers — are common to most businesses. Tell us about yours and we&rsquo;ll say honestly whether we&rsquo;re a good
              fit.
            </p>
          </div>
          <div className="lg:justify-self-end">
            <ButtonLink href="/contact">Tell us about your business</ButtonLink>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
