import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import { DivisionGlyph } from "@/components/art/DivisionGlyph";
import { CoverImage } from "@/components/ui/CoverImage";
import { divisionImages, industryImages } from "@/config/assets";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FaqSection } from "@/components/sections/FaqSection";
import { PageHero } from "@/components/sections/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { TagLabel } from "@/components/ui/TagLabel";
import { FocusServicePage } from "@/components/services/FocusServicePage";
import { focusServices, getFocusService } from "@/data/focus-services";
import { divisionBySlug, getDivision, serviceDivisions } from "@/data/services";
import { solutionBySlug } from "@/data/solutions";
import { buildMetadata, serviceJsonLd } from "@/lib/seo";

// Every slug is prerendered at build time; navigation fetches that static payload, so a brief blocking
// navigation is acceptable (no Suspense skeleton needed for a fully static page).
export const instant = false;

export function generateStaticParams() {
  return [...focusServices, ...serviceDivisions].map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const focus = getFocusService(slug);
  if (focus) {
    return buildMetadata({ title: focus.metaTitle, description: focus.metaDescription, path: `/services/${focus.slug}`, defaultImage: false });
  }
  const division = getDivision(slug);
  if (!division) return {};
  return buildMetadata({
    title: division.metaTitle,
    description: division.metaDescription,
    path: `/services/${division.slug}`,
    defaultImage: false,
  });
}

export default async function ServiceDivisionPage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const focus = getFocusService(slug);
  if (focus) return <FocusServicePage service={focus} />;
  const division = getDivision(slug);
  if (!division) notFound();

  const path = `/services/${division.slug}`;
  const allItems = division.groups.flatMap((g) => g.items);

  return (
    <>
      <PageHero
        kicker={`Division ${division.number}`}
        title={division.heroTitle}
        intro={division.heroIntro}
        breadcrumbs={[
          { name: "Services", path: "/services" },
          { name: division.name, path },
        ]}
        actions={
          <>
            <ButtonLink href="/contact" variant="signal">
              Start a Project
            </ButtonLink>
            <ButtonLink href="#capabilities" variant="light" withOrb={false} external={false}>
              See capabilities
            </ButtonLink>
          </>
        }
        aside={
          <CoverImage
            image={divisionImages[division.slug]}
            priority
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="ml-auto aspect-[4/3] w-full max-w-[480px] rounded-[1.75rem] ring-1 ring-white/10"
          />
        }
      />

      {/* Overview */}
      <section className="section-pad" aria-labelledby="overview-title">
        <div className="container-site grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-16">
          <div>
            <TagLabel>{division.name}</TagLabel>
            <h2 id="overview-title" className="heading-lg mt-5 max-w-[16ch]">
              What this division does for you
            </h2>
          </div>
          <div className="flex flex-col gap-5 text-lg leading-relaxed text-muted" data-reveal>
            {division.overview.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="pb-20 lg:pb-28" aria-labelledby="problems-title">
        <div className="container-site">
          <h2 id="problems-title" className="heading-md">
            Problems we help solve
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4" data-reveal-stagger>
            {division.problems.map((p, i) => (
              <li key={p.title} className="flex flex-col gap-6 rounded-[var(--radius-card)] border border-line p-6">
                <span className="text-sm font-semibold tabular-nums text-ember">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-lg font-medium tracking-[-0.03em]">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="panel section-pad scroll-mt-24 bg-mist" aria-labelledby="capabilities-title">
        <div className="container-site">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 id="capabilities-title" className="heading-lg max-w-[16ch]">
              Capabilities in this division
            </h2>
            <p className="max-w-sm text-muted">{allItems.length} services, grouped by what they help you achieve.</p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {division.groups.map((g) => (
              <div key={g.title} className="rounded-[var(--radius-card)] bg-paper p-6 md:p-8" data-reveal>
                <h3 className="text-2xl font-medium tracking-[-0.04em]">{g.title}</h3>
                <p className="mt-3 text-muted">{g.body}</p>
                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {g.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[0.95rem]">
                      <Check className="mt-1 size-4 shrink-0 text-signal" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables + approach */}
      <section className="section-pad" aria-labelledby="approach-title">
        <div className="container-site grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="heading-md">What you receive</h2>
            <ul className="mt-8 border-t border-line">
              {division.deliverables.map((d) => (
                <li key={d} className="flex items-start gap-3 border-b border-line py-4">
                  <Check className="mt-1 size-4 shrink-0 text-signal" aria-hidden="true" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-muted">Exact deliverables are confirmed in your written proposal.</p>
          </div>
          <div>
            <h2 id="approach-title" className="heading-md">
              How we approach it
            </h2>
            <ol className="mt-8 flex flex-col gap-3" data-reveal-stagger>
              {division.approach.map((step, i) => (
                <li key={step.title} className="flex gap-5 rounded-[var(--radius-card)] bg-mist p-5 md:p-6">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-ink text-sm font-semibold tabular-nums text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-medium tracking-[-0.03em]">{step.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="panel on-dark section-pad bg-ink text-white" aria-labelledby="related-title">
        <div className="container-site">
          <h2 id="related-title" className="heading-lg max-w-[18ch] text-white">
            Where this division is often used
          </h2>
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {division.relatedIndustries.map((slug) => {
              const s = solutionBySlug.get(slug)!;
              return (
                <li key={slug}>
                  <Link href={`/solutions/${slug}`} className="group block">
                    <div className="overflow-hidden rounded-[var(--radius-card)]">
                      <CoverImage image={industryImages[slug]} decorative sizes="(min-width: 1024px) 50vw, 100vw" className="aspect-[10/7]" imgClassName="transition-transform duration-1000 group-hover:scale-[1.04]" />
                    </div>
                    <h3 className="mt-4 flex items-center gap-2 text-xl font-medium tracking-[-0.03em]">
                      {s.name}
                      <ArrowUpRight className="size-5 transition-transform duration-500 group-hover:rotate-45" aria-hidden="true" />
                    </h3>
                  </Link>
                </li>
              );
            })}
          </ul>

          <h3 className="mt-16 text-lg font-medium tracking-[-0.03em] text-white/80">Works well alongside</h3>
          <ul className="mt-5 grid gap-3 md:grid-cols-3">
            {division.relatedDivisions.map((slug) => {
              const d = divisionBySlug.get(slug)!;
              return (
                <li key={slug}>
                  <Link
                    href={`/services/${slug}`}
                    className="group flex h-full items-center gap-4 rounded-[var(--radius-card)] border border-white/10 p-4 transition-colors hover:bg-white/5"
                  >
                    <DivisionGlyph slug={slug} className="w-16 shrink-0 rounded-xl" />
                    <span className="min-w-0 flex-1 font-medium tracking-[-0.02em]">{d.name}</span>
                    <ArrowUpRight className="size-5 shrink-0 transition-transform duration-500 group-hover:rotate-45" aria-hidden="true" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <FaqSection faqs={division.faqs} title={`${division.shortName} questions`} />
      <CtaBanner />

      <JsonLd
        data={serviceJsonLd({
          name: division.name,
          description: division.metaDescription,
          path,
          serviceTypes: allItems,
        })}
      />
    </>
  );
}
