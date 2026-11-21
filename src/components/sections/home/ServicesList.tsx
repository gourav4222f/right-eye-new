import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { TagLabel } from "@/components/ui/TagLabel";
import { divisionImages, images } from "@/config/assets";
import { capabilityCount, serviceDivisions } from "@/data/services";

/**
 * Theme's numbered services list ("[01] UI/UX Design" rows with a
 * thumbnail and a sticky image on the left), mapped to the six divisions.
 */
export function ServicesList({ headingLevel = "h2" }: { headingLevel?: "h2" | "h1" }) {
  const Heading = headingLevel;
  return (
    <section className="section-pad" aria-labelledby="services-title">
      <div className="container-site">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <TagLabel>Our services</TagLabel>
            <Heading id="services-title" className="heading-lg mt-5 max-w-[18ch]">
              Six service divisions, one accountable team
            </Heading>
          </div>
          <p className="max-w-sm text-muted">
            {capabilityCount} individual capabilities, organised so you can start with one need and add others as you grow.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,2fr)] lg:gap-16">
          <div className="hidden lg:block">
            <div className="sticky top-[calc(var(--header-h)+32px)]">
              <div className="overflow-hidden rounded-[var(--radius-card)]" data-img-reveal="clip">
                <Image
                  src={images.deviceMarble.src}
                  alt={images.deviceMarble.alt}
                  width={images.deviceMarble.width}
                  height={images.deviceMarble.height}
                  sizes="26vw"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <p className="mt-5 text-xl font-medium leading-tight tracking-[-0.03em]">
                Build it, grow it and keep it running — with the same people.
              </p>
            </div>
          </div>

          <div>
            <ol className="border-t border-line" data-reveal-stagger>
              {serviceDivisions.map((d) => (
                <li key={d.slug} className="border-b border-line">
                  <Link
                    href={`/services/${d.slug}`}
                    className="group grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-3 py-7 md:grid-cols-[auto_1fr_auto] md:gap-x-8 lg:py-9"
                  >
                    <span className="self-start pt-2 text-lg font-medium tabular-nums text-stone transition-colors group-hover:text-signal md:text-2xl">
                      [{d.number}]
                    </span>
                    <span className="min-w-0">
                      <span className="flex items-center gap-2 text-[clamp(1.6rem,3.4vw,3rem)] font-medium leading-[1.02] tracking-[-0.05em] text-ink/45 transition-colors duration-500 group-hover:text-ink">
                        {d.name}
                        <ArrowUpRight
                          className="size-7 shrink-0 -translate-x-2 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100"
                          aria-hidden="true"
                        />
                      </span>
                      <span className="mt-3 block max-w-[56ch] text-[0.975rem] leading-relaxed text-muted">{d.summary}</span>
                    </span>
                    <span className="hidden overflow-hidden rounded-[1.25rem] md:block">
                      <Image
                        src={divisionImages[d.slug].src}
                        alt=""
                        width={divisionImages[d.slug].width}
                        height={divisionImages[d.slug].height}
                        sizes="176px"
                        className="aspect-[4/3] w-36 object-cover transition-transform duration-700 ease-(--ease-basic) group-hover:scale-[1.06] lg:w-44"
                      />
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
            <div className="mt-10">
              <ButtonLink href="/contact">Discuss your project</ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
