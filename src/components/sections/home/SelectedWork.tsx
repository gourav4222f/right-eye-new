import { ButtonLink } from "@/components/ui/ButtonLink";
import { TagLabel } from "@/components/ui/TagLabel";
import { ProjectCard } from "@/components/work/ProjectCard";
import { featuredProjects, projectsDelivered } from "@/data/portfolio";

/** Homepage proof strip: featured live projects. Renders nothing until projects are featured. */
export function SelectedWork() {
  if (featuredProjects.length === 0) return null;
  return (
    <section className="section-pad" aria-labelledby="selected-work-title">
      <div className="container-site">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:items-end">
          <div>
            <TagLabel>Selected work</TagLabel>
            <h2 id="selected-work-title" className="heading-lg mt-5 max-w-[20ch]">
              {projectsDelivered} websites and systems delivered
            </h2>
          </div>
          <div className="flex flex-col gap-5 lg:items-end">
            <p className="max-w-md text-muted lg:text-right">
              Live projects for travel operators, property consultants, healthcare providers and more. Visit them and see for yourself.
            </p>
            <ButtonLink href="/work">See all work</ButtonLink>
          </div>
        </div>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" data-reveal-stagger>
          {featuredProjects.slice(0, 4).map((p) => (
            <li key={p.slug}>
              <ProjectCard project={p} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
