import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Clock, Mail, MapPin, Phone, TrainFront } from "lucide-react";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FaqSection } from "@/components/sections/FaqSection";
import { PageHero } from "@/components/sections/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CoverImage } from "@/components/ui/CoverImage";
import { TagLabel } from "@/components/ui/TagLabel";
import { images } from "@/config/assets";
import { siteConfig } from "@/config/site";
import { focusServices } from "@/data/focus-services";
import { allServiceAreaNames, serviceAreas } from "@/data/locations";
import { projectsDelivered } from "@/data/portfolio";
import { breadcrumbJsonLd, buildMetadata, localBusinessJsonLd } from "@/lib/seo";

const path = "/locations/delhi-ncr";

export const metadata: Metadata = buildMetadata({
  title: "Digital Marketing, Social Media & Website Agency in Delhi NCR — Rohini",
  description:
    "RightEyeTechnology is a digital marketing agency in Rohini, Delhi, near Rithala Metro. Social media management, Google & Meta ads, websites, video production, PR and SEO for businesses across Delhi, Gurugram, Noida and the NCR.",
  path,
});

const faqs = [
  {
    question: "Where is your office in Delhi?",
    answer: `Our office is in Rohini, New Delhi, near Rithala Metro Station (Red Line). Part of the team works from the office and part works remotely, so please call ${siteConfig.contact.phoneDisplay} before visiting so the right people are there.`,
  },
  {
    question: "Do you work with businesses outside Rohini?",
    answer:
      "Yes. We work with businesses across Delhi and the NCR, including Gurugram, Noida, Ghaziabad and Faridabad, and remotely with clients anywhere in India. For shoots and strategy meetings in the NCR, we schedule visits in advance.",
  },
  {
    question: "Can you visit our shop or office for a shoot or meeting?",
    answer:
      "Yes. North and North-West Delhi — Rohini, Pitampura, Shalimar Bagh, Prashant Vihar and nearby — are quickest for us to reach. For other areas we plan visits around shoot days.",
  },
  {
    question: "Which services do Delhi businesses ask for most?",
    answer:
      "Most of our Delhi clients start with social media management and Google or Meta ads, often together with a new or improved website. Video production for Reels, SEO and Google Business Profile work usually follow once the basics are in place.",
  },
];

export default function DelhiNcrPage() {
  const { address, contact } = siteConfig;
  return (
    <>
      <PageHero
        kicker="Rohini · Delhi NCR"
        title="Your digital marketing team in Delhi NCR"
        intro={`Based in Rohini near Rithala Metro, our team manages social media, runs ads, builds websites, shoots video and handles PR and SEO for businesses across Delhi, Gurugram, Noida and the NCR — and has delivered ${projectsDelivered} websites and systems along the way.`}
        breadcrumbs={[
          { name: "Areas we serve", path },
        ]}
        actions={
          <>
            <ButtonLink href="/contact" variant="signal">
              Book a call
            </ButtonLink>
            <ButtonLink href={address.mapUrl} variant="light" withOrb={false}>
              Get directions
            </ButtonLink>
          </>
        }
        aside={
          <CoverImage
            image={images.teamWide}
            priority
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="ml-auto aspect-[4/3] w-full max-w-[480px] rounded-[1.75rem] ring-1 ring-white/10"
          />
        }
      />

      {/* Office */}
      <section className="section-pad" aria-labelledby="office-title">
        <div className="container-site grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <TagLabel>Visit or call</TagLabel>
            <h2 id="office-title" className="heading-lg mt-5 max-w-[16ch]">
              Our office in Rohini
            </h2>
            <p className="mt-6 max-w-[56ch] text-lg leading-relaxed text-muted">
              We work as a hybrid team: some of us from the Rohini office, some from home across Delhi NCR. That means we can meet
              you in person when it helps — for a strategy session, a shoot or a website handover — and work efficiently online the
              rest of the time.
            </p>
            <ul className="mt-8 flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 size-5 shrink-0 text-signal" aria-hidden="true" />
                <span>
                  {address.streetAddress ? `${address.streetAddress}, ` : ""}
                  {address.locality}, {address.city}, {address.region}
                  {address.postalCode ? ` ${address.postalCode}` : ""}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <TrainFront className="mt-1 size-5 shrink-0 text-signal" aria-hidden="true" />
                <span>{address.landmark} (Red Line)</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-1 size-5 shrink-0 text-signal" aria-hidden="true" />
                <a href={contact.phoneHref} className="link-underline font-medium">
                  {contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-1 size-5 shrink-0 text-signal" aria-hidden="true" />
                <a href={contact.emailHref} className="link-underline font-medium">
                  {contact.email}
                </a>
              </li>
              {siteConfig.hours.label ? (
                <li className="flex items-start gap-3">
                  <Clock className="mt-1 size-5 shrink-0 text-signal" aria-hidden="true" />
                  <span>{siteConfig.hours.label}</span>
                </li>
              ) : null}
            </ul>
          </div>
          <a
            href={address.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden rounded-[var(--radius-card)] bg-ink"
            aria-label="Open our location near Rithala Metro Station in Google Maps"
          >
            <CoverImage image={images.officeWide} decorative sizes="(min-width: 1024px) 45vw, 100vw" className="aspect-[4/3] opacity-70 transition-opacity duration-500 group-hover:opacity-50" />
            <span className="on-dark absolute inset-x-6 bottom-6 flex items-center justify-between gap-4 rounded-2xl bg-white p-5 text-ink">
              <span>
                <span className="block text-sm font-semibold text-ember">Rohini, New Delhi</span>
                <span className="block font-medium">Open in Google Maps</span>
              </span>
              <ArrowUpRight className="size-5 shrink-0 transition-transform duration-500 group-hover:rotate-45" aria-hidden="true" />
            </span>
          </a>
        </div>
      </section>

      {/* Areas */}
      <section className="panel section-pad bg-mist" aria-labelledby="areas-title">
        <div className="container-site">
          <h2 id="areas-title" className="heading-lg max-w-[18ch]">
            Areas we serve across Delhi NCR
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {serviceAreas.map((area) => (
              <article key={area.id} id={area.id} className="flex flex-col gap-5 rounded-[var(--radius-card)] bg-paper p-6 md:p-8" data-reveal>
                <h3 className="text-2xl font-medium tracking-[-0.04em]">{area.title}</h3>
                <p className="leading-relaxed text-muted">{area.body}</p>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-ink/75">Localities</p>
                  <ul className="mt-2 flex flex-wrap gap-1.5">
                    {area.places.map((place) => (
                      <li key={place} className="rounded-full bg-mist px-3 py-1 text-sm">
                        {place}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-ink/75">Businesses we often help here</p>
                  <ul className="mt-2 grid gap-1 text-sm text-muted sm:grid-cols-2">
                    {area.businesses.map((b) => (
                      <li key={b}>· {b}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-pad" aria-labelledby="delhi-services-title">
        <div className="container-site">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 id="delhi-services-title" className="heading-lg max-w-[18ch]">
              What we do for Delhi businesses
            </h2>
            <ButtonLink href="/services">All services</ButtonLink>
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" data-reveal-stagger>
            {focusServices.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="group block h-full overflow-hidden rounded-[var(--radius-card)] bg-mist">
                  <CoverImage image={s.image} decorative sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="aspect-[16/10]" imgClassName="transition-transform duration-1000 group-hover:scale-[1.04]" />
                  <div className="p-6">
                    <h3 className="flex items-center gap-2 text-xl font-medium tracking-[-0.035em]">
                      {s.name}
                      <ArrowUpRight className="size-5 transition-transform duration-500 group-hover:rotate-45" aria-hidden="true" />
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{s.summary}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FaqSection faqs={faqs} title="Delhi NCR questions" />
      <CtaBanner title="Let's meet in Rohini — or wherever you are." />

      <JsonLd
        data={[
          localBusinessJsonLd(allServiceAreaNames),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Areas we serve", path },
          ]),
        ]}
      />
    </>
  );
}
