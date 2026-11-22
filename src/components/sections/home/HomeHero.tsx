import Image from "next/image";
import { MotionBeacon } from "@/components/motion/MotionBeacon";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ScallopBadge } from "@/components/ui/ScallopBadge";
import { images } from "@/config/assets";
import { siteConfig } from "@/config/site";

/**
 * Homepage hero, following the theme's composition: full orange panel with
 * the theme's hero photograph, floating "Let's talk" badge top-left,
 * vertical email on the right edge, a small "how we work" image card
 * bottom-left and a huge uppercase headline.
 */
export function HomeHero() {
  return (
    <section
      data-mouse-parallax
      className="panel on-signal relative mt-2 overflow-hidden bg-signal text-white lg:mt-3"
      aria-labelledby="hero-title"
    >
      <div className="absolute -inset-[4%]" data-depth="-0.12" aria-hidden="true">
        <Image src={images.heroBackground.src} alt="" fill priority sizes="110vw" className="object-cover" />
      </div>
      <div className="pointer-events-none absolute inset-0" data-depth="0.35">
      <Image
        data-parallax="160"
        data-parallax-dir="down"
        src={images.heroFigure.src}
        alt={images.heroFigure.alt}
        width={images.heroFigure.width}
        height={images.heroFigure.height}
        priority
        sizes="(min-width: 1024px) 75vw, 230vw"
        className="pointer-events-none absolute bottom-0 left-1/2 h-[88%] w-auto max-w-none -translate-x-1/2 object-contain object-bottom lg:left-[42%]"
      />
      </div>
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(180deg, rgb(0 0 0 / 0.18) 0%, rgb(0 0 0 / 0) 30%, rgb(0 0 0 / 0) 50%, rgb(40 10 0 / 0.55) 100%)",
        }}
      />

      <div className="container-site relative flex min-h-[max(680px,100svh)] flex-col pb-8 pt-[calc(var(--header-h)+24px)] lg:pb-10">
        <MotionBeacon />
        <div className="hidden justify-start lg:flex">
          <div data-depth="-0.6">
            <ScallopBadge href="/contact" label="Let's talk" className="hero-rise" />
          </div>
        </div>

        <a
          href={siteConfig.contact.emailHref}
          className="absolute top-1/2 hidden -translate-y-1/2 rotate-90 text-sm font-medium tracking-[-0.01em] text-white/90 hover:text-white xl:block"
          style={{ right: "-3.5rem" }}
        >
          {siteConfig.contact.email}
        </a>

        <div className="mt-auto grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.6fr)] lg:items-end">
          <div className="order-2 flex flex-col gap-6 lg:order-1" data-depth="0.18">
            <Link
              href="/how-we-work"
              className="group hidden w-full max-w-[220px] overflow-hidden rounded-[1.25rem] bg-white/14 p-2 backdrop-blur-md transition-colors hover:bg-white/22 lg:block"
            >
              <Image
                src={images.collabSwatches.src}
                alt=""
                width={images.collabSwatches.width}
                height={images.collabSwatches.height}
                sizes="220px"
                className="aspect-[4/3] w-full rounded-xl object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <span className="mt-2 flex items-center justify-between px-1.5 pb-1 text-sm font-semibold">
                How we work
                <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:rotate-45" aria-hidden="true" />
              </span>
            </Link>
            <p data-split="lines" data-delay="0.45" className="max-w-[34ch] text-[0.975rem] leading-relaxed text-white">
              From our office in Rohini, we manage social media, run Google and Meta ads, build websites, shoot and edit video,
              and handle PR and SEO for businesses across Delhi NCR.
            </p>
          </div>

          <div className="order-1 lg:order-2">
            <p data-split="lines" className="text-sm font-semibold tracking-[-0.01em] text-white">
              {siteConfig.tagline}
            </p>
            <h1 id="hero-title" data-split="rise" data-delay="0.1" className="display-hero mt-4 text-white">
              Social media, ads &amp; websites that grow Delhi businesses.
            </h1>
            <div data-reveal data-delay="0.7" className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contact" variant="dark">
                Start a Project
              </ButtonLink>
              <ButtonLink href="/services" variant="light" withOrb={false}>
                Explore Our Services
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
