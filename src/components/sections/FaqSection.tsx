import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { Accordion } from "@/components/ui/Accordion";
import { CoverImage } from "@/components/ui/CoverImage";
import { images } from "@/config/assets";
import { TagLabel } from "@/components/ui/TagLabel";
import { siteConfig } from "@/config/site";
import type { Faq } from "@/data/services";
import { faqJsonLd } from "@/lib/seo";

/** Theme FAQ layout: heading + help card on the left, numbered accordion on the right. */
export function FaqSection({
  faqs,
  title = "Questions we're often asked",
  intro = "Straight answers about how we work. If yours isn't here, ask us directly.",
}: {
  faqs: Faq[];
  title?: string;
  intro?: string;
}) {
  return (
    <section className="section-pad" aria-labelledby="faq-title">
      <div className="container-site grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] lg:gap-16">
        <div className="lg:sticky lg:top-[calc(var(--header-h)+32px)] lg:self-start">
          <TagLabel>FAQ</TagLabel>
          <h2 id="faq-title" className="heading-lg mt-5 max-w-[14ch]">
            {title}
          </h2>
          <p className="mt-5 max-w-md text-muted">{intro}</p>
          <CoverImage image={images.deskMug} decorative sizes="(min-width: 1024px) 30vw, 100vw" className="mt-10 aspect-[16/9] rounded-[var(--radius-card)]" />
          <div className="mt-3 rounded-[var(--radius-card)] bg-mist p-6">
            <p className="text-lg font-medium tracking-[-0.03em]">Still have a question?</p>
            <p className="mt-2 text-sm text-muted">
              Email{" "}
              <a href={siteConfig.contact.emailHref} className="font-medium text-ember underline underline-offset-2">
                {siteConfig.contact.email}
              </a>{" "}
              or call{" "}
              <a href={siteConfig.contact.phoneHref} className="font-medium text-ember underline underline-offset-2">
                {siteConfig.contact.phoneDisplay}
              </a>
              .
            </p>
            <Link href="/contact" className="btn btn-dark mt-5">
              Send an enquiry
            </Link>
          </div>
        </div>
        <div data-reveal>
          <Accordion items={faqs} />
        </div>
      </div>
      <JsonLd data={faqJsonLd(faqs)} />
    </section>
  );
}
