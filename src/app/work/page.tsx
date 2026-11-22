import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ProjectCard } from "@/components/work/ProjectCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { projectsDelivered, publishedProjects } from "@/data/portfolio";
import { industrySolutions } from "@/data/solutions";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Our Work — Websites and Systems We Have Delivered",
  description: `A selection of the ${projectsDelivered} websites, booking sites, CMS and workflow tools the RightEyeTechnology team has delivered for travel, real estate, healthcare and other businesses in India.`,
  path: "/work",
});

/** Group projects by industry page, in the same order as /solutions; anything without one goes last. */
type Group = { key: string; label: string; href: string; projects: typeof publishedProjects };

function groupByIndustry(): Group[] {
  const groups: Group[] = industrySolutions
    .map((s) => ({ key: s.slug, label: s.name, href: `/solutions/${s.slug}`, projects: publishedProjects.filter((p) => p.industry === s.slug) }))
    .filter((g) => g.projects.length > 0);
  const other = publishedProjects.filter((p) => !p.industry);
  if (other.length > 0) groups.push({ key: "other", label: "Other industries", href: "", projects: other });
  return groups;
}

export default function WorkPage() {
  const groups = groupByIndustry();
  return (
    <>
      <PageHero
        title="Work our team has delivered"
        intro={`Our team has designed and built ${projectsDelivered} websites and business systems — booking sites, property listings, CMS and workflow tools. Here is a selection of live projects you can visit today.`}
        breadcrumbs={[{ name: "Work", path: "/work" }]}
        actions={
          <ButtonLink href="/contact" variant="signal">
            Start a Project
          </ButtonLink>
        }
      />

      <section className="section-pad" aria-labelledby="work-title">
        <div className="container-site">
          <h2 id="work-title" className="sr-only">
            Projects by industry
          </h2>

          {groups.length > 1 ? (
            <nav aria-label="Jump to industry" className="mb-12">
              <ul className="flex flex-wrap gap-2">
                {groups.map((g) => (
                  <li key={g.key}>
                    <a href={`#${g.key}`} className="inline-flex min-h-10 items-center rounded-full border border-line px-4 text-sm font-semibold hover:bg-mist">
                      {g.label} <span className="ml-1.5 tabular-nums text-muted">{g.projects.length}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}

          <div className="flex flex-col gap-16">
            {groups.map((g) => (
              <section key={g.key} id={g.key} aria-labelledby={`${g.key}-title`} className="scroll-mt-[calc(var(--header-h)+24px)]">
                <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-line pb-4">
                  <h3 id={`${g.key}-title`} className="heading-md">
                    {g.label}
                  </h3>
                  {g.href ? (
                    <Link href={g.href} className="link-underline text-sm font-semibold text-ember">
                      Our {g.label.toLowerCase()} solutions
                    </Link>
                  ) : null}
                </div>
                <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" data-reveal-stagger>
                  {g.projects.map((p) => (
                    <li key={p.slug}>
                      <ProjectCard project={p} />
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner title="Want your business on this list?" />
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Work", path: "/work" }])} />
    </>
  );
}
