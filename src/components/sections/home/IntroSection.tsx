import Image from "next/image";
import Link from "next/link";
import { images } from "@/config/assets";
import { ArrowUpRight } from "lucide-react";
import { LogoMark } from "@/components/art/Logo";
import { TagLabel } from "@/components/ui/TagLabel";

const audiences = ["Startup founders", "Small & medium businesses", "Growing companies", "Entrepreneurs"];

/** Theme's About block: oversized statement with an inline pill, then three columns. */
export function IntroSection() {
  return (
    <section className="pb-8 pt-20 lg:pt-28" aria-labelledby="intro-title">
      <div className="container-site">
        <TagLabel>About us</TagLabel>
        <h2 id="intro-title" className="mt-6 max-w-[24ch] text-[clamp(1.9rem,4.4vw,4rem)] font-medium leading-[1.06] tracking-[-0.05em]" data-split="scrub">
          We design, build and run the technology businesses depend on — so you can work with one partner from first idea to steady growth.{" "}
          <Link
            href="/contact"
            className="btn btn-dark relative -top-1 inline-flex align-middle text-sm"
          >
            Get in touch <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:mt-20 lg:grid-cols-[1fr_1.1fr_1fr] lg:gap-10" data-reveal-stagger>
          <div className="flex flex-col justify-between gap-8">
            <div>
              <LogoMark className="w-12" />
              <p className="mt-5 max-w-[30ch] font-medium leading-snug tracking-[-0.02em]">
                Who we work with: organisations that need technology to do real work — win customers, run operations and scale.
              </p>
            </div>
            <ul className="flex flex-wrap gap-2" aria-label="Who we serve">
              {audiences.map((a) => (
                <li key={a} className="rounded-full border border-line px-3.5 py-1.5 text-sm text-muted">
                  {a}
                </li>
              ))}
            </ul>
          </div>

          <div data-img-reveal="clip" className="on-dark relative flex min-h-[360px] flex-col justify-end overflow-hidden rounded-[var(--radius-card)] bg-ink p-7 text-white md:row-span-2 lg:row-span-1 lg:min-h-[440px]">
            <Image
              src={images.teamLaptop.src}
              alt={images.teamLaptop.alt}
              fill
              sizes="(min-width: 1024px) 36vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" aria-hidden="true" />
            <p className="relative text-sm font-semibold text-glow">Our name</p>
            <p className="relative mt-3 max-w-[22ch] text-2xl font-medium leading-tight tracking-[-0.04em]">
              The right eye for technology: seeing the problem clearly before choosing the tools.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <p className="text-lg font-medium leading-snug tracking-[-0.03em]">Why integrated technology matters</p>
            <p className="text-muted">
              A website that isn&rsquo;t connected to your CRM loses leads. A campaign without proper tracking wastes budget. Software on
              poorly managed hosting goes down at the worst moment.
            </p>
            <p className="text-muted">
              When development, marketing, infrastructure and automation are planned together, the pieces support each other — and
              you have one accountable team instead of several vendors pointing at one another.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
