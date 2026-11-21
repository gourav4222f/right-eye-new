import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { DivisionGlyph } from "@/components/art/DivisionGlyph";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { capabilityCount, serviceDivisions } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Technology Services — Development, Software, Marketing, Cloud & AI",
  description:
    "Explore RightEyeTechnology's six service divisions: digital product development, business software and CRM, digital marketing, cloud hosting, SaaS engineering and AI automation.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Everything your business needs from technology, in one place"
        intro={`Six service divisions and ${capabilityCount} capabilities — from your first website to custom software, marketing, infrastructure and automation. Start with one, connect them as you grow.`}
        breadcrumbs={[{ name: "Services", path: "/services" }]}
        actions={
          <>
            <ButtonLink href="/contact" variant="signal">
              Start a Project
            </ButtonLink>
            <ButtonLink href="/how-we-work" variant="light" withOrb={false}>
              How we work
            </ButtonLink>
          </>
        }
      />

      <section className="section-pad" aria-labelledby="divisions-title">
        <div className="container-site">
          <h2 id="divisions-title" className="sr-only">
            Service divisions
          </h2>
          <ul className="grid gap-4 md:grid-cols-2" data-reveal-stagger>
            {serviceDivisions.map((d) => (
              <li key={d.slug}>
                <Link
                  href={`/services/${d.slug}`}
                  className="group flex h-full flex-col gap-8 rounded-[var(--radius-card)] bg-mist p-6 transition-colors duration-500 hover:bg-fog md:p-8"
                >
                  <div className="flex items-start justify-between gap-6">
                    <DivisionGlyph slug={d.slug} className="w-24 rounded-2xl md:w-28" />
                    <span className="text-2xl font-medium tabular-nums text-stone">[{d.number}]</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="flex items-center gap-2 text-[clamp(1.5rem,2.4vw,2.125rem)] font-medium leading-tight tracking-[-0.045em]">
                      {d.name}
                      <ArrowUpRight className="size-6 shrink-0 transition-transform duration-500 group-hover:rotate-45" aria-hidden="true" />
                    </h3>
                    <p className="mt-3 text-muted">{d.summary}</p>
                  </div>
                  <ul className="flex flex-wrap gap-1.5" aria-label={`${d.name} capabilities`}>
                    {d.groups
                      .flatMap((g) => g.items)
                      .slice(0, 6)
                      .map((item) => (
                        <li key={item} className="rounded-full bg-paper px-3 py-1.5 text-xs font-medium">
                          {item}
                        </li>
                      ))}
                    <li className="rounded-full px-3 py-1.5 text-xs font-semibold text-ember">
                      +{d.groups.reduce((n, g) => n + g.items.length, 0) - 6} more
                    </li>
                  </ul>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="panel section-pad bg-mist" aria-labelledby="full-list-title">
        <div className="container-site">
          <h2 id="full-list-title" className="heading-lg max-w-[18ch]">
            The full list of what we do
          </h2>
          <p className="mt-5 max-w-xl text-muted">
            Every capability belongs to a division, so you always know who is responsible and how it connects to the rest of your
            setup.
          </p>
          <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {serviceDivisions.map((d) => (
              <div key={d.slug}>
                <h3 className="flex items-baseline gap-2 border-b border-line pb-3 text-lg font-medium tracking-[-0.03em]">
                  <span className="text-sm tabular-nums text-ember">{d.number}</span>
                  <Link href={`/services/${d.slug}`} className="link-underline">
                    {d.name}
                  </Link>
                </h3>
                <ul className="mt-4 grid gap-1.5 text-[0.95rem] text-muted">
                  {d.groups.flatMap((g) => g.items).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Not sure where to start? Tell us the problem."
        body="Many projects touch more than one division. Describe what you're trying to achieve and we'll recommend the right combination — and the right order."
      />
    </>
  );
}
