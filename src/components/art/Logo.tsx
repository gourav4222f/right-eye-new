import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Official RightEyeTechnology logo (supplied artwork, see /brand-source).
 * Variants live in /public/brand:
 *   logo-header-{dark,light}  mark + wordmark, no tagline (header, menus)
 *   logo-full-{dark,light}    full lockup with tagline (footer, large uses)
 *   logo-mark-{dark,light}    "R" eye mark only
 * "dark" = dark artwork for light backgrounds; "light" = for dark backgrounds.
 */

const HEADER = { width: 1200, height: 209 };
const FULL = { width: 1400, height: 279 };
const MARK = { width: 453, height: 372 };

type Tone = "dark" | "light";

/**
 * Header lockup. Both tones are rendered and cross-faded so the header can
 * switch tone on scroll without a network flash.
 */
export function Logo({ tone = "dark", className, priority }: { tone?: Tone; className?: string; priority?: boolean }) {
  return (
    <span className={cn("relative block h-9 md:h-10", className)} style={{ aspectRatio: `${HEADER.width} / ${HEADER.height}` }}>
      <Image
        src="/brand/logo-header-dark.webp"
        alt="RightEyeTechnology"
        width={HEADER.width}
        height={HEADER.height}
        priority={priority}
        sizes="240px"
        className={cn("absolute inset-0 size-full object-contain transition-opacity duration-500", tone === "dark" ? "opacity-100" : "opacity-0")}
        aria-hidden={tone !== "dark"}
      />
      <Image
        src="/brand/logo-header-light.webp"
        alt={tone === "light" ? "RightEyeTechnology" : ""}
        width={HEADER.width}
        height={HEADER.height}
        priority={priority}
        sizes="240px"
        className={cn("absolute inset-0 size-full object-contain transition-opacity duration-500", tone === "light" ? "opacity-100" : "opacity-0")}
        aria-hidden={tone !== "light"}
      />
    </span>
  );
}

/** Full lockup with tagline. */
export function LogoFull({ tone = "dark", className }: { tone?: Tone; className?: string }) {
  return (
    <Image
      src={`/brand/logo-full-${tone}.webp`}
      alt="RightEyeTechnology — One Technology Partner. From Idea to Growth."
      width={FULL.width}
      height={FULL.height}
      sizes="(min-width: 1024px) 420px, 80vw"
      className={cn("h-auto w-full", className)}
    />
  );
}

/** "R" eye mark only. Decorative by default. */
export function LogoMark({ tone = "dark", className, title }: { tone?: Tone; className?: string; title?: string }) {
  return (
    <Image
      src={`/brand/logo-mark-${tone}.webp`}
      alt={title ?? ""}
      width={MARK.width}
      height={MARK.height}
      sizes="64px"
      className={cn("h-auto object-contain", className)}
    />
  );
}
