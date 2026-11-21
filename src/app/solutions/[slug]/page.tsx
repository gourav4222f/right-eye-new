import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check, Sparkles, TrendingUp, Zap } from "lucide-react";
import { DivisionGlyph } from "@/components/art/DivisionGlyph";
import { CoverImage } from "@/components/ui/CoverImage";
import { industryImages } from "@/config/assets";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FaqSection } from "@/components/sections/FaqSection";
import { PageHero } from "@/components/sections/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { TagLabel } from "@/components/ui/TagLabel";
import { divisionBySlug } from "@/data/services";
import { getSolution, industrySolutions } from "@/data/solutions";
import { buildMetadata, serviceJsonLd } from "@/lib/seo";

// Every slug is prerendered at build time; navigation fetches that static payload, so a brief blocking
// navigation is acceptable (no Suspense skeleton needed for a fully static page).
export const instant = false;

export function generateStaticParams() {
  return industrySolutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/solutions/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) return {};
  return buildMetadata({ title: solution.metaTitle, description: solution.metaDescription, path: `/solutions/${solution.slug}`, defaultImage: false });
}

export default async function IndustrySolutionPage({ params }: PageProps<"/solutions/[slug]">) {
  const { slug } = await params;
  const s = getSolution(slug);
  if (!s) notFound();
  const path = `/solutions/${s.slug}`;
  const others = industrySolutions.filter((o) => o.slug !== s.slug);

  return (
    <>
      <PageHero
        kicker={s.name}
        title={s.heroTitle}
        intro={s.heroIntro}
        breadcrumbs={[
          { name: "Solutions", path: "/solutions" },
          { name: s.name, path },
        ]}
        actions={
          <ButtonLink href="/contact" variant="signal">
            Start a {s.name} project
          </ButtonLink>
        }
        aside={
          <div className="overflow-hidden rounded-[1.75rem] ring-1 ring-white/10">
            <CoverImage image={industryImages[s.slug]} priority sizes="(min-width: 1024px) 40vw, 100vw" className="aspect-[10/8]" />
          </div>
        }
      />

      {/* Introduction */}
      <section className="section-pad" aria-labelledby="intro-title">
        <div className="container-site grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-16">
          <div>
            <TagLabel>The landscape</TagLabel>
            <h2 id="intro-title" className="heading-lg mt-5 max-w-[16ch]">
              Where technology makes the difference
            </h2>
          </div>
          <div className="flex flex-col gap-5 text-lg leading-relaxed text-muted" data-reveal>
            {s.introduction.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="panel section-pad bg-mist" aria-labelledby="challenges-title">
        <div className="container-site">
          <h2 id="challenges-title" className="heading-lg max-w-[18ch]">
            Common challenges in {s.name.toLowerCase()}
          </h2>
          <ul className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-3" data-reveal-stagger>
            {s.challenges.map((c, i) => (
              <li key={c.title} className={`rounded-[var(--radius-card)] bg-paper p-6 md:p-7 ${i === 0 ? "lg:col-span-2" : ""}`}>
                <span className="text-sm font-semibold tabular-nums text-ember">Challenge {String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-xl font-medium tracking-[-0.035em]">{c.title}</h3>
                <p className="mt-2 text-muted">{c.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Solutions */}
      <section className="section-pad" aria-labelledby="solutions-title">
        <div className="container-site grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.4fr)] lg:gap-16">
          <div className="lg:sticky lg:top-[calc(var(--header-h)+32px)] lg:self-start">
            <TagLabel>Recommended solutions</TagLabel>
            <h2 id="solutions-title" className="heading-lg mt-5 max-w-[14ch]">
              What we would build for you
            </h2>
            <p className="mt-5 max-w-md text-muted">
              Not every business needs all of these. We prioritise based on where you lose the most time or opportunity today.
            </p>
          </div>
          <ol className="border-t border-line">
            {s.solutions.map((sol, i) => (
              <li key={sol.title} className="grid grid-cols-[auto_1fr] gap-5 border-b border-line py-7" data-reveal>
                <span className="text-lg font-medium tabular-nums text-stone">[{String(i + 1).padStart(2, "0")}]</span>
                <div>
                  <h3 className="text-2xl font-medium tracking-[-0.04em]">{sol.title}</h3>
                  <p className="mt-2 max-w-[60ch] text-muted">{sol.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Relevant divisions */}
      <section className="pb-20 lg:pb-28" aria-labelledby="divisions-title">
        <div className="container-site">
          <h2 id="divisions-title" className="heading-md">
            Relevant development services
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {s.relevantDivisions.map(({ slug: dSlug, reason }) => {
              const d = divisionBySlug.get(dSlug)!;
              return (
                <li key={dSlug}>
                  <Link href={`/services/${dSlug}`} className="group flex h-full flex-col gap-5 rounded-[var(--radius-card)] bg-mist p-5 transition-colors hover:bg-fog">
                    <DivisionGlyph slug={dSlug} tone="light" className="w-16 rounded-xl ring-1 ring-black/5" />
                    <div className="flex-1">
                      <h3 className="flex items-start justify-between gap-2 font-medium leading-snug tracking-[-0.02em]">
                        {d.name}
                        <ArrowUpRight className="size-4 shrink-0 transition-transform duration-500 group-hover:rotate-45" aria-hidden="true" />
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{reason}</p>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Automation + growth */}
      <section className="panel on-dark section-pad bg-ink text-white" aria-labelledby="opportunities-title">
        <div className="container-site">
          <h2 id="opportunities-title" className="heading-lg max-w-[20ch] text-white">
            Automation and growth opportunities
          </h2>
          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            <div className="rounded-[var(--radius-card)] bg-white/[0.06] p-6 md:p-8">
              <h3 className="flex items-center gap-3 text-xl font-medium tracking-[-0.03em]">
                <Zap className="size-5 text-glow" aria-hidden="true" /> Software &amp; automation
              </h3>
              <ul className="mt-6 grid gap-3">
                {s.automation.map((a) => (
                  <li key={a} className="flex gap-3 text-white/80">
                    <Check className="mt-1 size-4 shrink-0 text-glow" aria-hidden="true" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[var(--radius-card)] bg-white/[0.06] p-6 md:p-8">
              <h3 className="flex items-center gap-3 text-xl font-medium tracking-[-0.03em]">
                <TrendingUp className="size-5 text-glow" aria-hidden="true" /> Growth &amp; marketing
              </h3>
              <ul className="mt-6 grid gap-3">
                {s.growth.map((g) => (
                  <li key={g} className="flex gap-3 text-white/80">
                    <Check className="mt-1 size-4 shrink-0 text-glow" aria-hidden="true" />
                    {g}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Connected journey */}
      <section className="section-pad" aria-labelledby="connected-title">
        <div className="container-site">
          <TagLabel>How it works together</TagLabel>
          <h2 id="connected-title" className="heading-lg mt-5 max-w-[20ch]">
            One connected journey, from first contact to repeat business
          </h2>
          <ol className="mt-12 grid gap-3 md:grid-cols-5" data-reveal-stagger>
            {s.connected.map((step, i) => (
              <li key={step.title} className="relative flex flex-col gap-4 rounded-[var(--radius-card)] border border-line p-5">
                <span
                  className={`grid size-10 place-items-center rounded-full text-sm font-semibold tabular-nums ${i === 0 ? "bg-signal text-white" : "bg-ink text-white"}`}
                >
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
      </section>

      {/* Benefits */}
      <section className="panel section-pad bg-mist" aria-labelledby="benefits-title">
        <div className="container-site grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div>
            <h2 id="benefits-title" className="heading-lg max-w-[14ch]">
              What these solutions are designed to deliver
            </h2>
            <p className="mt-5 max-w-md text-sm text-muted">
              Results depend on your market, team and starting point. We set measurable goals together at the start and review them
              honestly.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {s.benefits.map((b) => (
              <li key={b} className="flex gap-3 rounded-[var(--radius-card)] bg-paper p-5">
                <Sparkles className="mt-0.5 size-5 shrink-0 text-signal" aria-hidden="true" />
                <span className="font-medium tracking-[-0.02em]">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FaqSection faqs={s.faqs} title={`${s.name} questions`} />

      {/* Other industries */}
      <section className="pb-20 lg:pb-24" aria-labelledby="other-title">
        <div className="container-site">
          <h2 id="other-title" className="heading-md">
            Other industries we serve
          </h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {others.map((o) => (
              <li key={o.slug}>
                <Link
                  href={`/solutions/${o.slug}`}
                  className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-line px-4 text-sm font-medium transition-colors hover:border-ink hover:bg-ink hover:text-white"
                >
                  {o.name} <ArrowUpRight className="size-4" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner title={`Ready to modernise your ${s.name.toLowerCase()} business?`} />

      <JsonLd
        data={serviceJsonLd({
          name: `${s.name} technology solutions`,
          description: s.metaDescription,
          path,
          serviceTypes: s.solutions.map((x) => x.title),
        })}
      />
    </>
  );
}
