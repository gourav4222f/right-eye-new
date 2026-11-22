import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import { displayHost, type PortfolioProject } from "@/data/portfolio";

/** One portfolio entry. Links out to the live site; shows a screenshot when one is supplied. */
export function ProjectCard({ project }: { project: PortfolioProject }) {
  const host = displayHost(project.url);
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] bg-mist">
      <a
        href={project.url}
        target="_blank"
        rel="noopener"
        className="group relative block aspect-[16/10] overflow-hidden bg-ink"
        aria-label={`Visit ${project.name} (${host}), opens in a new tab`}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={`Homepage of ${project.name}`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-[1200ms] group-hover:scale-[1.03]"
          />
        ) : (
          <div className="on-dark flex size-full flex-col justify-between p-6 text-white">
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="size-2.5 rounded-full bg-white/25" />
              <span className="size-2.5 rounded-full bg-white/25" />
              <span className="size-2.5 rounded-full bg-signal" />
            </div>
            <p className="text-[clamp(1.5rem,2.6vw,2rem)] font-medium leading-tight tracking-[-0.045em]">{project.name}</p>
            <p className="flex items-center gap-1.5 text-sm text-white/70">
              {host}
              <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:rotate-45" aria-hidden="true" />
            </p>
          </div>
        )}
      </a>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
          <span className="rounded-full bg-paper px-3 py-1">{project.sector}</span>
          <span className="rounded-full border border-line px-3 py-1 text-ink/80">{project.type}</span>
        </div>
        <div>
          <h3 className="text-xl font-medium tracking-[-0.035em]">{project.name}</h3>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-muted">
            <MapPin className="size-3.5 shrink-0" aria-hidden="true" />
            {project.location}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted">{project.summary}</p>
        </div>
        {project.built.length > 0 ? (
          <ul className="mt-auto flex flex-wrap gap-1.5 pt-2" aria-label={`What we built for ${project.name}`}>
            {project.built.map((b) => (
              <li key={b} className="rounded-full bg-paper px-2.5 py-1 text-[0.72rem] font-medium">
                {b}
              </li>
            ))}
          </ul>
        ) : null}
        <a
          href={project.url}
          target="_blank"
          rel="noopener"
          className="inline-flex min-h-11 items-center gap-1.5 self-start text-sm font-semibold text-ember underline underline-offset-4"
        >
          Visit {host} <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
