import Link from "next/link";
import { ArrowUpRight, Check, MapPin } from "lucide-react";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FaqSection } from "@/components/sections/FaqSection";
import { PageHero } from "@/components/sections/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CoverImage } from "@/components/ui/CoverImage";
import { TagLabel } from "@/components/ui/TagLabel";
import { ProjectCard } from "@/components/work/ProjectCard";
import { siteConfig } from "@/config/site";
import { focusServices, type FocusService } from "@/data/focus-services";
import { publishedProjects } from "@/data/portfolio";
import { divisionBySlug } from "@/data/services";
import { serviceAreas } from "@/data/locations";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo";

/** Landing page for one focus service (social media, ads, web, video, PR, SEO). */
export function FocusServicePage({ service }: { service: FocusService }) {
  const path = `/services/${service.slug}`;
  const work = service.relatedWork
    .map((slug) => publishedProjects.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
  const division = divisionBySlug.get(service.relatedDivision);
  const others = focusServices.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHero
        kicker={`${service.shortName} · Delhi NCR`}
        title={service.heroTitle}
        intro={service.heroIntro}
        breadcrumbs={[
          { name: "Services", path: "/services" },
          { name: service.name, path },
        ]}
        actions={
          <>
            <ButtonLink href="/contact" variant="signal">
              Get a quote
            </ButtonLink>
            <ButtonLink href={siteConfig.contact.phoneHref} variant="light" withOrb={false}>
              Call {siteConfig.contact.phoneDisplay}
            </ButtonLink>
          </>
        }
        aside={
          <CoverImage
            image={service.image}
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
            <TagLabel>{service.name}</TagLabel>
            <h2 id="overview-title" className="heading-lg mt-5 max-w-[16ch]">
              {service.name} in Delhi, done properly
            </h2>
            <p className="mt-6 flex items-start gap-2 text-sm text-muted">
              <MapPin className="mt-0.5 size-4 shrink-0 text-signal" aria-hidden="true" />
              Team based in {siteConfig.address.display}, serving all of Delhi NCR.
            </p>
          </div>
          <div className="flex flex-col gap-5 text-lg leading-relaxed text-muted" data-reveal>
            {service.overview.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Included */}
      <section className="panel section-pad bg-mist" aria-labelledby="included-title">
        <div className="container-site">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-end">
            <h2 id="included-title" className="heading-lg max-w-[18ch]">
              What&rsquo;s included
            </h2>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.08em] text-ink/75">{service.coverage.label}</p>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {service.coverage.items.map((item) => (
                  <li key={item} className="rounded-full bg-paper px-3 py-1.5 text-xs font-medium">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3" data-reveal-stagger>
            {service.included.map((item) => (
              <li key={item.title} className="rounded-[var(--radius-card)] bg-paper p-6">
                <Check className="size-5 text-signal" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-medium tracking-[-0.03em]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Guide — the informative part */}
      <section className="section-pad" aria-labelledby="guide-title">
        <div className="container-site grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] lg:gap-16">
          <div className="lg:sticky lg:top-[calc(var(--header-h)+32px)] lg:self-start">
            <TagLabel>Practical guide</TagLabel>
            <h2 id="guide-title" className="heading-lg mt-5 max-w-[14ch]">
              {service.guide.title}
            </h2>
            <CoverImage
              image={service.detailImage}
              sizes="(min-width: 1024px) 35vw, 100vw"
              className="mt-8 hidden aspect-[4/3] rounded-[var(--radius-card)] lg:block"
            />
          </div>
          <ol className="flex flex-col">
            {service.guide.points.map((point, i) => (
              <li key={point.title} className="flex gap-5 border-t border-line py-7 first:border-t-2 first:border-ink" data-reveal>
                <span className="text-sm font-semibold tabular-nums text-ember">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-xl font-medium tracking-[-0.035em]">{point.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{point.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Scopes */}
      <section className="panel on-dark section-pad bg-ink text-white" aria-labelledby="scopes-title">
        <div className="container-site">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 id="scopes-title" className="heading-lg max-w-[18ch] text-white">
              Plans to fit where you are
            </h2>
            <p className="max-w-sm text-white/70">
              Every plan is quoted in writing after a short call, so you know exactly what&rsquo;s included before you start.
            </p>
          </div>
          <ul className="mt-12 grid gap-3 md:grid-cols-3">
            {service.scopes.map((scope, i) => (
              <li
                key={scope.name}
                className={i === 1 ? "flex flex-col rounded-[var(--radius-card)] bg-signal-strong p-6 text-white md:p-8" : "flex flex-col rounded-[var(--radius-card)] bg-white/[0.06] p-6 md:p-8"}
              >
                <h3 className="text-2xl font-medium tracking-[-0.04em]">{scope.name}</h3>
                <p className={i === 1 ? "mt-2 text-sm text-white/85" : "mt-2 text-sm text-white/65"}>{scope.forWho}</p>
                <ul className="mt-6 flex flex-1 flex-col gap-2.5">
                  {scope.includes.map((inc) => (
                    <li key={inc} className="flex items-start gap-2.5 text-[0.95rem]">
                      <Check className={i === 1 ? "mt-1 size-4 shrink-0 text-white" : "mt-1 size-4 shrink-0 text-glow"} aria-hidden="true" />
                      {inc}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={i === 1 ? "btn btn-light mt-8 self-start" : "btn btn-signal mt-8 self-start"}
                >
                  Get a quote
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="section-pad" aria-labelledby="process-title">
        <div className="container-site">
          <h2 id="process-title" className="heading-lg max-w-[16ch]">
            How we work
          </h2>
          <ol className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4" data-reveal-stagger>
            {service.process.map((step, i) => (
              <li key={step.title} className="rounded-[var(--radius-card)] bg-mist p-6">
                <span className="grid size-10 place-items-center rounded-full bg-ink text-sm font-semibold tabular-nums text-white">{i + 1}</span>
                <h3 className="mt-6 text-lg font-medium tracking-[-0.03em]">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Related work */}
      {work.length > 0 ? (
        <section className="pb-20 lg:pb-28" aria-labelledby="work-title">
          <div className="container-site">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <h2 id="work-title" className="heading-lg max-w-[18ch]">
                Live projects you can visit
              </h2>
              <ButtonLink href="/work">See all work</ButtonLink>
            </div>
            <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {work.map((p) => (
                <li key={p.slug}>
                  <ProjectCard project={p} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {/* Areas */}
      <section className="panel section-pad bg-mist" aria-labelledby="areas-title">
        <div className="container-site grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-16">
          <div>
            <h2 id="areas-title" className="heading-md max-w-[18ch]">
              {service.shortName} across Delhi NCR
            </h2>
            <p className="mt-4 text-muted">
              Our office is in Rohini, near Rithala Metro Station. We meet clients across Delhi and the NCR, and work remotely with
              businesses anywhere in India.
            </p>
            <div className="mt-6">
              <ButtonLink href="/locations/delhi-ncr">Areas we serve</ButtonLink>
            </div>
          </div>
          <ul className="flex flex-wrap content-start gap-2">
            {serviceAreas.flatMap((g) => g.places).map((place) => (
              <li key={place} className="rounded-full bg-paper px-3.5 py-1.5 text-sm font-medium">
                {place}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FaqSection faqs={service.faqs} title={`${service.shortName} questions`} />

      {/* Other services */}
      <section className="pb-20 lg:pb-28" aria-labelledby="other-title">
        <div className="container-site">
          <h2 id="other-title" className="heading-md">
            Works well with
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="group flex h-full items-center justify-between gap-4 rounded-[var(--radius-card)] border border-line p-5 transition-colors hover:bg-mist">
                  <span>
                    <span className="block font-medium tracking-[-0.02em]">{s.name}</span>
                    <span className="mt-1 block text-sm text-muted">{s.summary}</span>
                  </span>
                  <ArrowUpRight className="size-5 shrink-0 transition-transform duration-500 group-hover:rotate-45" aria-hidden="true" />
                </Link>
              </li>
            ))}
            {division ? (
              <li>
                <Link href={`/services/${division.slug}`} className="group flex h-full items-center justify-between gap-4 rounded-[var(--radius-card)] bg-ink p-5 text-white">
                  <span>
                    <span className="block font-medium tracking-[-0.02em]">{division.name}</span>
                    <span className="mt-1 block text-sm text-white/70">The full division this service belongs to</span>
                  </span>
                  <ArrowUpRight className="size-5 shrink-0 transition-transform duration-500 group-hover:rotate-45" aria-hidden="true" />
                </Link>
              </li>
            ) : null}
          </ul>
        </div>
      </section>

      <CtaBanner title={`Let's talk about your ${service.shortName.toLowerCase()}.`} />

      <JsonLd
        data={[
          serviceJsonLd({
            name: service.name,
            description: service.metaDescription,
            path,
            serviceTypes: service.coverage.items,
            areaServed: serviceAreas.flatMap((g) => g.places),
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.name, path },
          ]),
        ]}
      />
    </>
  );
}
