import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { images } from "@/config/assets";
import { cn } from "@/lib/utils";

/** Rotating scalloped badge (theme's "Let's Talk" badge). The shape rotates; the label stays upright. */
export function ScallopBadge({ href, label, className }: { href: string; label: string; className?: string }) {
  return (
    <Link href={href} className={cn("group relative grid size-28 place-items-center text-white md:size-32", className)}>
      <Image
        src={images.badgeScallop.src}
        alt=""
        width={images.badgeScallop.width}
        height={images.badgeScallop.height}
        unoptimized
        className="absolute inset-0 size-full animate-spin-slow transition-transform group-hover:scale-105"
      />
      <span className="relative flex flex-col items-center gap-1 text-center text-[0.8rem] font-semibold leading-tight tracking-[-0.02em]">
        <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:rotate-45" aria-hidden="true" />
        {label}
      </span>
    </Link>
  );
}
