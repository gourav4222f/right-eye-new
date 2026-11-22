import Image from "next/image";
import { publishedTeam, type TeamMember } from "@/data/team";
import { initials } from "@/lib/utils";

/**
 * Reusable team grid. Renders ONLY verified + published members, so the
 * proposed placeholder roster never appears publicly. Returns null when
 * nobody is published.
 */
export function TeamGrid({ members = publishedTeam }: { members?: TeamMember[] }) {
  const visible = members.filter((m) => m.isVerified && m.isPublished);
  if (visible.length === 0) return null;

  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" data-reveal-stagger>
      {visible.map((m) => (
        <li key={m.id}>
          <TeamProfileCard member={m} />
        </li>
      ))}
    </ul>
  );
}

export function TeamProfileCard({ member }: { member: TeamMember }) {
  return (
    <article className="h-full overflow-hidden rounded-[var(--radius-card)] bg-mist">
      <div className="relative aspect-square bg-ink">
        {member.profileImage ? (
          <Image src={member.profileImage} alt={`${member.name}, ${member.designation}`} fill sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" className="object-cover" />
        ) : (
          <span className="grid size-full place-items-center text-4xl font-semibold tracking-[-0.05em] text-white" aria-hidden="true">
            {initials(member.name)}
          </span>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-medium tracking-[-0.03em]">{member.name}</h3>
        <p className="text-sm text-muted">
          {member.designation}
          {member.yearsExperience > 0 ? <> &middot; {member.yearsExperience}+ years</> : null}
        </p>
        {member.biography ? <p className="mt-3 text-sm leading-relaxed text-muted">{member.biography}</p> : null}
        {member.expertise.length > 0 ? (
          <ul className="mt-3 flex flex-wrap gap-1.5" aria-label={`${member.name}'s expertise`}>
            {member.expertise.map((e) => (
              <li key={e} className="rounded-full bg-paper px-2.5 py-1 text-[0.72rem] font-medium">
                {e}
              </li>
            ))}
          </ul>
        ) : null}
        {member.linkedin ? (
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm font-semibold text-ember underline underline-offset-4">
            LinkedIn
          </a>
        ) : null}
      </div>
    </article>
  );
}
