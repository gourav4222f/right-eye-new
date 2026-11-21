import { cn } from "@/lib/utils";

/**
 * CSS-only marquee (theme: carouselTicker). The duplicate set is hidden from
 * assistive tech. Pauses on hover/focus; under reduced motion the track stops
 * and wraps so every item stays visible.
 */
export function Marquee({ children, className, label }: { children: React.ReactNode; className?: string; label: string }) {
  return (
    <div className={cn("marquee group relative overflow-hidden", className)} role="region" aria-label={label}>
      <div className="marquee-track flex w-max animate-marquee motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center">
        <ul className="flex shrink-0 items-center motion-reduce:flex-wrap motion-reduce:justify-center">{children}</ul>
        <ul className="flex shrink-0 items-center motion-reduce:hidden" aria-hidden="true">
          {children}
        </ul>
      </div>
    </div>
  );
}
