import Image from "next/image";
import { teamPhotos } from "@/data/team";
import { cn } from "@/lib/utils";

/** Grid of real team photos. Renders nothing when no verified photos exist. */
export function TeamMosaic({ className, priority = false }: { className?: string; priority?: boolean }) {
  if (teamPhotos.length === 0) return null;
  return (
    <ul className={cn("grid grid-cols-4 gap-1.5 sm:gap-2", className)} aria-label="The RightEyeTechnology team">
      {teamPhotos.map((photo, i) => (
        <li key={photo.src} className="relative aspect-[3/4] overflow-hidden rounded-xl bg-mist sm:rounded-2xl">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            priority={priority && i < 4}
            sizes="(min-width: 1024px) 15vw, 25vw"
            className="object-cover object-top"
          />
        </li>
      ))}
    </ul>
  );
}
