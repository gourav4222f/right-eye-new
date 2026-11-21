import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { images } from "@/config/assets";
import { LocalTime } from "@/components/ui/LocalTime";
import { siteConfig } from "@/config/site";

/**
 * Closing call to action (theme: the large dark image banner with a
 * local-time badge), using the theme's particle photograph.
 */
export function CtaBanner({
  title = "Have an Idea? Let's Turn It Into Technology.",
  body = "Share what you want to build, fix or grow. We'll come back with questions, options and a clear next step — not a sales script.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="panel on-dark relative mt-2 overflow-hidden bg-ink text-white lg:mt-3" aria-labelledby="cta-title" data-parallax-img="16">
      <Image src={images.ctaParticles.src} alt="" fill sizes="100vw" className="object-cover" />
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(180deg, rgb(0 0 0 / 0.35) 0%, rgb(0 0 0 / 0.1) 40%, rgb(0 0 0 / 0.75) 100%)",
        }}
      />
      <div className="container-site relative flex min-h-[460px] flex-col justify-between gap-12 py-12 lg:min-h-[560px] lg:py-16">
        <div className="flex items-center justify-between gap-4 text-sm text-white/80">
          <span className="font-semibold tracking-[-0.02em] text-white" translate="no">
            {siteConfig.name}
          </span>
          <span className="rounded-full border border-white/30 px-3.5 py-1.5">
            <LocalTime label="Local time" />
          </span>
        </div>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:items-end">
          <h2 id="cta-title" className="heading-xl max-w-[16ch] text-white">
            {title}
          </h2>
          <div data-reveal>
            <p className="lede text-white/80">{body}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href="/contact" variant="signal">
                Start a Project
              </ButtonLink>
              <a href={siteConfig.contact.phoneHref} className="btn btn-outline min-h-12 text-white">
                Call {siteConfig.contact.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
