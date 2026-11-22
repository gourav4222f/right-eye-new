import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CoverImage } from "@/components/ui/CoverImage";
import { TagLabel } from "@/components/ui/TagLabel";
import { focusServices } from "@/data/focus-services";

/** Homepage: the six services we lead with, as image cards. */
export function FocusServices() {
  return (
    <section className="section-pad" aria-labelledby="focus-title">
      <div className="container-site">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:items-end">
          <div>
            <TagLabel>What we do</TagLabel>
            <h2 id="focus-title" className="heading-lg mt-5 max-w-[20ch]">
              Social media, ads, websites, video, PR and SEO — one team in Delhi
            </h2>
          </div>
          <div className="flex flex-col gap-5 lg:items-end">
            <p className="max-w-md text-muted lg:text-right">
              Pick one service or let us run them together, so your content, campaigns and website pull in the same direction.
            </p>
            <ButtonLink href="/services">All services</ButtonLink>
          </div>
        </div>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3" data-reveal-stagger>
          {focusServices.map((s, i) => (
            <li key={s.slug}>
              <Link href={`/services/${s.slug}`} className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] bg-mist">
                <CoverImage
                  image={s.image}
                  decorative
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="aspect-[16/10]"
                  imgClassName="transition-transform duration-1000 group-hover:scale-[1.04]"
                />
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <span className="text-sm font-semibold tabular-nums text-ember">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="flex items-center gap-2 text-xl font-medium tracking-[-0.035em]">
                    {s.name}
                    <ArrowUpRight className="size-5 transition-transform duration-500 group-hover:rotate-45" aria-hidden="true" />
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">{s.summary}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
