import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CoverImage } from "@/components/ui/CoverImage";
import { industryImages } from "@/config/assets";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { industrySolutions } from "@/data/solutions";

/**
 * Theme's "Selected work" composition (sticky heading left, tall cards with
 * tag pills right), used for industry solutions — not client projects.
 */
export function IndustriesShowcase() {
  return (
    <section className="section-pad" aria-labelledby="industries-title">
      <div className="container-site grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.4fr)] lg:gap-16">
        <div className="lg:sticky lg:top-[calc(var(--header-h)+40px)] lg:self-start">
          <svg viewBox="0 0 24 24" className="size-8" aria-hidden="true">
            <path d="M3 3h8v8H3zM13 13h8v8h-8z" fill="#f0460e" />
            <path d="M13 3h8v8h-8z" fill="#1d1d1d" />
          </svg>
          <h2 id="industries-title" className="heading-xl mt-5 max-w-[11ch]">
            Solutions for the industries we serve
          </h2>
          <p className="mt-6 max-w-md text-muted">
            Every sector has its own bottlenecks. These are the six we focus on, with the systems and marketing that address their
            specific challenges.
          </p>
          <div className="mt-8">
            <ButtonLink href="/solutions">View all solutions</ButtonLink>
          </div>
        </div>

        <ul className="flex flex-col gap-12 lg:gap-16">
          {industrySolutions.map((s) => (
            <li key={s.slug} data-reveal>
              <Link href={`/solutions/${s.slug}`} className="group block">
                <div className="overflow-hidden rounded-[var(--radius-card)]">
                  <CoverImage image={industryImages[s.slug]} decorative sizes="(min-width: 1024px) 50vw, 100vw" className="aspect-[10/7]" imgClassName="transition-transform duration-[1200ms] ease-(--ease-basic) group-hover:scale-[1.04]" />
                </div>
                <div className="mt-5 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="min-w-0">
                    <h3 className="flex items-center gap-2 text-2xl font-medium tracking-[-0.04em] md:text-[1.75rem]">
                      {s.name}
                      <ArrowUpRight className="size-5 transition-transform duration-500 group-hover:rotate-45" aria-hidden="true" />
                    </h3>
                    <p className="mt-2 max-w-[48ch] text-muted">{s.summary}</p>
                  </div>
                  <ul className="flex max-w-xs flex-wrap gap-1.5 md:justify-end" aria-label={`${s.name} solutions`}>
                    {s.tags.map((t) => (
                      <li key={t} className="rounded-full border border-line px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.04em] text-ink/80">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
