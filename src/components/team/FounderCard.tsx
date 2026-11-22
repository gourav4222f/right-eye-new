import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { founder } from "@/data/team";
import { initials } from "@/lib/utils";

/**
 * Founder profile. Photo and biography render only when supplied in
 * src/data/team.ts — nothing about his background is invented here.
 */
export function FounderCard() {
  return (
    <article className="grid gap-8 overflow-hidden rounded-[var(--radius-card)] bg-mist p-6 md:grid-cols-[260px_1fr] md:p-8 lg:grid-cols-[320px_1fr] lg:gap-12">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-ink">
        {founder.profileImage ? (
          <Image
            src={founder.profileImage}
            alt={`${founder.name}, ${founder.designation} of RightEyeTechnology`}
            fill
            sizes="(min-width: 1024px) 320px, (min-width: 768px) 260px, 100vw"
            className="object-cover"
          />
        ) : (
          <div className="on-dark grid size-full place-items-center text-white" aria-hidden="true">
            <svg viewBox="0 0 200 200" className="absolute inset-0 size-full opacity-40">
              <circle cx="100" cy="100" r="92" fill="none" stroke="#f0460e" strokeWidth="10" strokeDasharray="40 12" />
              <circle cx="100" cy="100" r="70" fill="none" stroke="#fff" strokeOpacity="0.3" />
            </svg>
            <span className="relative text-6xl font-semibold tracking-[-0.06em]">{initials(founder.name)}</span>
          </div>
        )}
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-sm font-semibold text-ember">
          {founder.designation}
          {founder.yearsExperience > 0 ? <> &middot; {founder.yearsExperience}+ years in technology</> : null}
        </p>
        <h3 className="heading-lg mt-2">{founder.name}</h3>
        {founder.biography ? (
          <p className="mt-5 max-w-[60ch] text-muted">{founder.biography}</p>
        ) : (
          <p className="mt-5 max-w-[60ch] text-muted">
            Shravan founded RightEyeTechnology to give businesses one dependable technology partner — a team that can plan, build,
            market and maintain their digital systems together. He leads the company&rsquo;s direction and oversees how projects are
            scoped and delivered.
          </p>
        )}
        {founder.expertise.length > 0 ? (
          <ul className="mt-5 flex flex-wrap gap-1.5" aria-label={`${founder.name}'s expertise`}>
            {founder.expertise.map((e) => (
              <li key={e} className="rounded-full bg-paper px-3 py-1 text-xs font-medium">
                {e}
              </li>
            ))}
          </ul>
        ) : null}
        {founder.linkedin ? (
          <a
            href={founder.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-ember underline underline-offset-4"
          >
            LinkedIn profile <ExternalLink className="size-4" aria-hidden="true" />
          </a>
        ) : null}
      </div>
    </article>
  );
}
