import Image from "next/image";
import type { SiteImage } from "@/config/assets";
import { cn } from "@/lib/utils";

/**
 * Fixed-aspect, object-cover image (prevents layout shift).
 * - `reveal`: theme-style image reveal on scroll ("clip" wipe + zoom by default, "zoom", or "none").
 * - `parallax`: image drifts inside its frame as the page scrolls (percentage, e.g. 12).
 * Pass `decorative` when nearby text already describes the image.
 */
export function CoverImage({
  image,
  className,
  imgClassName,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority,
  decorative,
  reveal = "clip",
  parallax,
}: {
  image: SiteImage;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  decorative?: boolean;
  reveal?: "clip" | "zoom" | "none";
  parallax?: number;
}) {
  return (
    <div
      className={cn("relative overflow-hidden bg-mist", className)}
      data-img-reveal={reveal === "none" || parallax ? undefined : reveal}
      data-parallax-img={parallax ? String(parallax) : undefined}
    >
      <Image
        src={image.src}
        alt={decorative ? "" : image.alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn("object-cover", imgClassName)}
      />
    </div>
  );
}
