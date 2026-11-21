import type { Metadata } from "next";
import { MotionBeacon } from "@/components/motion/MotionBeacon";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { images } from "@/config/assets";
import { serviceDivisions } from "@/data/services";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

/** Custom 404 (theme: large "404" with portrait image). Returns HTTP 404. */
export default function NotFound() {
  return (
    <section className="panel on-dark mt-2 overflow-hidden bg-ink text-white lg:mt-3">
      <div className="container-site grid min-h-[80svh] gap-10 pb-16 pt-[calc(var(--header-h)+48px)] lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div>
          <MotionBeacon />
          <p className="text-[clamp(6rem,18vw,14rem)] font-semibold leading-[0.8] tracking-[-0.07em] text-signal" aria-hidden="true">
            404          
          </p>
          <h1 data-split="rise" className="heading-lg mt-6 max-w-[16ch] text-white">This page doesn&rsquo;t exist</h1>
          <p className="mt-4 max-w-[48ch] text-white/75">
            The link may be out of date, or the address may have a typo. Try one of these instead.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/" variant="signal">
              Back to home
            </ButtonLink>
            <ButtonLink href="/contact" variant="light" withOrb={false}>
              Contact us
            </ButtonLink>
          </div>
          <ul className="mt-10 flex flex-wrap gap-2">
            {serviceDivisions.map((d) => (
              <li key={d.slug}>
                <Link
                  href={`/services/${d.slug}`}
                  className="inline-flex min-h-10 items-center rounded-full border border-white/20 px-4 text-sm hover:bg-white hover:text-ink"
                >
                  {d.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative mx-auto hidden aspect-square w-full max-w-[460px] overflow-hidden rounded-[var(--radius-card)] lg:block">
          <Image src={images.notFound.src} alt="" fill sizes="460px" className="object-cover grayscale" />
        </div>
      </div>
    </section>
  );
}
