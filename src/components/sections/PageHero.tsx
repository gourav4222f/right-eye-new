import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";
import { MotionBeacon } from "@/components/motion/MotionBeacon";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  intro?: string;
  breadcrumbs: Crumb[];
  /** Small label above the title, e.g. the division number. */
  kicker?: string;
  tone?: "ink" | "signal";
  actions?: React.ReactNode;
  /** Optional visual for the right column. */
  aside?: React.ReactNode;
}

/** Inner-page hero: a rounded coloured panel the transparent header sits over. */
export function PageHero({ title, intro, breadcrumbs, kicker, tone = "ink", actions, aside }: PageHeroProps) {
  return (
    <section
      className={cn(
        "panel on-dark relative mt-2 overflow-hidden pb-14 pt-[calc(var(--header-h)+40px)] text-white lg:mt-3 lg:pb-20 lg:pt-[calc(var(--header-h)+64px)]",
        tone === "signal" ? "on-signal bg-signal" : "bg-ink",
      )}
    >
      {/* Faint iris rings — echo of the homepage visual */}
      <svg
        data-parallax="160"
        viewBox="0 0 600 600"
        className="pointer-events-none absolute -right-40 -top-40 size-[560px] opacity-[0.14] lg:-right-24 lg:-top-24"
        aria-hidden="true"
      >
        <circle cx="300" cy="300" r="290" fill="none" stroke="#fff" strokeWidth="1" strokeDasharray="2 10" />
        <circle cx="300" cy="300" r="220" fill="none" stroke="#fff" strokeWidth="18" strokeDasharray="60 22" />
        <circle cx="300" cy="300" r="150" fill="none" stroke="#fff" strokeWidth="1" />
      </svg>

      <div className={cn("container-site relative grid gap-10", aside ? "lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:items-end" : undefined)}>
        <div>
          <Breadcrumbs items={breadcrumbs} tone="light" />
          <MotionBeacon />
          {kicker ? (
            <p className={cn("mt-8 text-sm font-semibold tabular-nums", tone === "signal" ? "text-white/85" : "text-glow")}>{kicker}</p>
          ) : null}
          <h1 data-split="rise" className={cn("heading-xl max-w-[18ch] text-white", kicker ? "mt-3" : "mt-8")}>{title}</h1>
          {intro ? <p data-split="lines" data-delay="0.2" className="lede mt-6 max-w-[60ch] text-white/80">{intro}</p> : null}
          {actions ? <div data-reveal data-delay="0.45" className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
        </div>
        {aside ? <div className="relative">{aside}</div> : null}
      </div>
    </section>
  );
}
