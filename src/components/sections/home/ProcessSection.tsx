import { Check } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { TagLabel } from "@/components/ui/TagLabel";
import { processSteps } from "@/data/process";

/** Six-step process as the theme's stacked sticky cards inside a dark panel. */
export function ProcessSection({ showDetails = false, showCta = true }: { showDetails?: boolean; showCta?: boolean }) {
  return (
    <section className="panel on-dark section-pad mt-2 bg-graphite text-white lg:mt-3" aria-labelledby="process-title">
      <div className="container-site grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] lg:gap-16">
        <div className="lg:sticky lg:top-[calc(var(--header-h)+40px)] lg:self-start">
          <TagLabel className="text-white/80">Our process</TagLabel>
          <h2 id="process-title" className="heading-lg mt-5 max-w-[14ch] text-white">
            From first conversation to continuous improvement
          </h2>
          <p className="mt-5 max-w-md text-white/70">
            A clear, staged process keeps decisions visible and surprises rare. Each stage ends with something you can review and
            approve.
          </p>
          {showCta ? (
            <div className="mt-8">
              <ButtonLink href="/how-we-work" variant="light">
                See how we work
              </ButtonLink>
            </div>
          ) : null}
        </div>

        <ol className="sticky-stack flex flex-col gap-4">
          {processSteps.map((step, i) => (
            <li
              key={step.number}
              className="rounded-[var(--radius-card)] border border-white/10 p-6 shadow-[0_-20px_40px_-20px_rgb(0_0_0/0.6)] md:p-8"
              style={{ backgroundColor: i % 2 ? "#1b1b1b" : "#242424", top: `calc(var(--header-h) + 24px + ${i * 14}px)` }}
            >
              <div className="flex items-start justify-between gap-6">
                <div className="min-w-0">
                  <p className="text-sm font-semibold tabular-nums text-glow">Step {step.number}</p>
                  <h3 className="mt-2 text-[clamp(1.6rem,3vw,2.5rem)] font-medium tracking-[-0.05em] text-white">{step.title}</h3>
                </div>
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-signal text-lg font-semibold tabular-nums" aria-hidden="true">
                  {i + 1}
                </span>
              </div>
              <p className="mt-4 max-w-[52ch] text-white/75">{step.summary}</p>
              {showDetails ? (
                <>
                  <ul className="mt-5 grid gap-2">
                    {step.details.map((d) => (
                      <li key={d} className="flex gap-2.5 text-sm text-white/80">
                        <Check className="mt-0.5 size-4 shrink-0 text-glow" aria-hidden="true" />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 border-t border-white/10 pt-4 text-sm text-white/60">
                    <span className="font-semibold text-white">Outcome:</span> {step.outcome}
                  </p>
                </>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
