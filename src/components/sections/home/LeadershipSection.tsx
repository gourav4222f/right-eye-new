import { FounderCard } from "@/components/team/FounderCard";
import { TeamGrid } from "@/components/team/TeamGrid";
import { TeamMosaic } from "@/components/team/TeamMosaic";
import { TagLabel } from "@/components/ui/TagLabel";
import { practiceAreas, publishedTeam } from "@/data/team";

/**
 * Founder + team. The team grid appears only when verified profiles are
 * published; until then we describe how the work is organised.
 */
export function LeadershipSection() {
  return (
    <section className="section-pad" aria-labelledby="leadership-title">
      <div className="container-site">
        <TagLabel>Leadership &amp; team</TagLabel>
        <h2 id="leadership-title" className="heading-lg mt-5 max-w-[18ch]">
          The people accountable for your project
        </h2>

        <div className="mt-12" data-reveal>
          <FounderCard />
        </div>

        <TeamMosaic className="mt-6" />

        {publishedTeam.length > 0 ? (
          <div className="mt-6">
            <TeamGrid />
          </div>
        ) : null}

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4" data-reveal-stagger>
          {practiceAreas.map((p) => (
            <div key={p.department} className="rounded-[var(--radius-card)] border border-line p-6">
              <h3 className="text-lg font-medium tracking-[-0.03em]">{p.department}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.focus}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
