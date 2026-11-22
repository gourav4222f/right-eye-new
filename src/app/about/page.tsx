import type { Metadata } from "next";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { LeadershipSection } from "@/components/sections/home/LeadershipSection";
import { TechnologySection } from "@/components/sections/home/TechnologySection";
import { differentiators } from "@/components/sections/home/WhyChooseUs";
import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { TagLabel } from "@/components/ui/TagLabel";
import { TeamMosaic } from "@/components/team/TeamMosaic";
import { siteConfig } from "@/config/site";
import { serviceDivisions } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Us — Digital Marketing & Technology Team in Rohini, Delhi",
  description:
    "Meet RightEyeTechnology, a digital marketing and technology company in Rohini, Delhi, founded by Rakesh Mehta. Social media, ads, websites, video, PR and SEO for businesses across Delhi NCR.",
  path: "/about",
});

const values = [
  {
    title: "Clarity before code",
    body: "We make sure everyone understands the problem, the scope and the trade-offs before anything is built.",
  },
  {
    title: "Honest recommendations",
    body: "If an off-the-shelf tool, a smaller scope or a different partner would serve you better, we'll say so.",
  },
  {
    title: "Built to be maintained",
    body: "Readable code, documented setups and accounts in your name mean you're never locked in.",
  },
  {
    title: "Measured, not guessed",
    body: "We set up tracking and agree what success looks like, then report on it in plain language.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="One technology partner, from idea to growth"
        intro={`${siteConfig.name} is a Rohini-based team for social media, ads, websites, video, PR and SEO — plus the software and automation behind them — so your online presence works as one system, with one accountable team.`}
        breadcrumbs={[{ name: "About", path: "/about" }]}
        actions={
          <>
            <ButtonLink href="/contact" variant="signal">
              Work with us
            </ButtonLink>
            <ButtonLink href="/how-we-work" variant="light" withOrb={false}>
              How we work
            </ButtonLink>
          </>
        }
      />

      <TeamMosaic priority className="container-site mt-6 lg:mt-8" />

      <section className="section-pad" aria-labelledby="story-title">
        <div className="container-site grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-16">
          <div>
            <TagLabel>Who we are</TagLabel>
            <h2 id="story-title" className="heading-lg mt-5 max-w-[15ch]">
              Built for businesses that need more than a website
            </h2>
          </div>
          <div className="flex flex-col gap-5 text-lg leading-relaxed text-muted" data-reveal>
            <p>
              Businesses rarely have a single technology need. A new website raises questions about hosting and email. A marketing
              campaign needs a landing page and a way to follow up on leads. A growing team needs software to replace spreadsheets —
              and eventually, automation to remove repetitive work.
            </p>
            <p>
              Working with separate vendors for each of these often means gaps: tracking that nobody set up, systems that don&rsquo;t
              talk to each other, and no one responsible for the whole picture. {siteConfig.name} was set up to close those gaps.
            </p>
            <p>
              We work from Rohini, near Rithala Metro, with a hybrid team spread across Delhi NCR. Our clients are shops, clinics,
              coaching institutes, property consultants, restaurants and growing brands — primarily in Delhi NCR, and remotely across
              India. Whether you need one service or several, you get a single team that understands how the pieces fit together.
            </p>
          </div>
        </div>
      </section>

      <section className="panel section-pad bg-mist" aria-labelledby="divisions-overview-title">
        <div className="container-site">
          <h2 id="divisions-overview-title" className="heading-lg max-w-[18ch]">
            What we do, in six divisions
          </h2>
          <ol className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3" data-reveal-stagger>
            {serviceDivisions.map((d) => (
              <li key={d.slug} className="rounded-[var(--radius-card)] bg-paper p-6">
                <span className="text-sm font-semibold tabular-nums text-ember">{d.number}</span>
                <h3 className="mt-3 text-xl font-medium tracking-[-0.035em]">{d.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{d.summary}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-pad" aria-labelledby="values-title">
        <div className="container-site grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] lg:gap-16">
          <div>
            <TagLabel>How we think</TagLabel>
            <h2 id="values-title" className="heading-lg mt-5 max-w-[12ch]">
              Principles we work by
            </h2>
          </div>
          <ul className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
            {values.map((v) => (
              <li key={v.title} className="border-t-2 border-ink pt-5" data-reveal>
                <h3 className="text-xl font-medium tracking-[-0.035em]">{v.title}</h3>
                <p className="mt-2 text-muted">{v.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="panel on-dark section-pad bg-ink text-white" aria-labelledby="why-about-title">
        <div className="container-site">
          <h2 id="why-about-title" className="heading-lg max-w-[18ch] text-white">
            What working with us looks like
          </h2>
          <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {differentiators.map(({ Icon, title, body }) => (
              <li key={title} className="rounded-[var(--radius-card)] bg-white/[0.06] p-6">
                <Icon className="size-6 text-glow" aria-hidden="true" strokeWidth={1.6} />
                <h3 className="mt-6 text-lg font-medium tracking-[-0.03em]">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <LeadershipSection />
      <TechnologySection />
      <CtaBanner />
    </>
  );
}
