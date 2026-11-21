import type { Metadata } from "next";
import { CalendarClock, FileText, Handshake, KeyRound, MessagesSquare, Repeat } from "lucide-react";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FaqSection } from "@/components/sections/FaqSection";
import { ProcessSection } from "@/components/sections/home/ProcessSection";
import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { TagLabel } from "@/components/ui/TagLabel";
import { CoverImage } from "@/components/ui/CoverImage";
import { images } from "@/config/assets";
import { engagementPrinciples } from "@/data/process";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "How We Work — Our Project Process",
  description:
    "How RightEyeTechnology runs projects: discovery, strategy, design, development, testing and launch, then ongoing support — with written scopes, visible progress and clear ownership.",
  path: "/how-we-work",
});

const engagementModels = [
  {
    Icon: FileText,
    title: "Fixed-scope projects",
    body: "Websites, defined software modules and setups with a clear scope. Quoted as a fixed price with milestone payments.",
  },
  {
    Icon: Repeat,
    title: "Ongoing retainers",
    body: "Marketing, maintenance, hosting and support delivered monthly, with an agreed set of activities and reporting.",
  },
  {
    Icon: CalendarClock,
    title: "Sprint-based product work",
    body: "For SaaS products and evolving applications. Work is planned in short cycles and priorities adjust as you learn.",
  },
];

const icons = [MessagesSquare, FileText, Handshake, KeyRound];

const processFaqs = [
  {
    question: "How involved do I need to be during the project?",
    answer:
      "Most involvement happens at the start (discovery and scope) and at review points after each milestone. We'll ask for a decision-maker who can give feedback within a few working days so the project keeps moving.",
  },
  {
    question: "What happens if we need to change the scope?",
    answer:
      "Changes are normal. We'll explain the effect on timeline and cost in writing, and only proceed once you approve. Small adjustments are often absorbed; larger additions become a change request or a later phase.",
  },
  {
    question: "How do you share progress?",
    answer:
      "Through regular updates and a staging link where you can see work in progress. For longer projects we schedule short review calls at each milestone.",
  },
  {
    question: "What do you need from us to start?",
    answer:
      "A signed proposal, the agreed initial payment, access to any existing accounts (domain, hosting, analytics) and a point of contact. For websites, early access to content and brand assets helps a great deal.",
  },
];

export default function HowWeWorkPage() {
  return (
    <>
      <PageHero
        title="A clear process, from first conversation to launch and beyond"
        intro="Good technology projects are predictable. We work in visible stages, agree scope in writing and keep you informed — so you always know what's happening, what's next and what it costs."
        breadcrumbs={[{ name: "How we work", path: "/how-we-work" }]}
        actions={
          <ButtonLink href="/contact" variant="signal">
            Start with a discovery call
          </ButtonLink>
        }
      />

      <section className="section-pad" aria-labelledby="principles-title">
        <div className="container-site">
          <TagLabel>Our commitments</TagLabel>
          <h2 id="principles-title" className="heading-lg mt-5 max-w-[18ch]">
            What you can expect on every project
          </h2>
          <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4" data-reveal-stagger>
            {engagementPrinciples.map((p, i) => {
              const Icon = icons[i]!;
              return (
                <li key={p.title} className="rounded-[var(--radius-card)] bg-mist p-6">
                  <Icon className="size-6 text-signal" aria-hidden="true" strokeWidth={1.6} />
                  <h3 className="mt-8 text-lg font-medium tracking-[-0.03em]">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <CoverImage image={images.officeWide} parallax={14} sizes="100vw" className="panel mb-2 aspect-[16/9] md:aspect-[21/7] lg:mb-3" />

      <ProcessSection showDetails showCta={false} />

      <section className="section-pad" aria-labelledby="models-title">
        <div className="container-site grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] lg:gap-16">
          <div>
            <TagLabel>Engagement models</TagLabel>
            <h2 id="models-title" className="heading-lg mt-5 max-w-[14ch]">
              Ways to work together
            </h2>
            <p className="mt-5 max-w-md text-muted">
              We recommend the model that fits the work. Many clients combine them — for example, a fixed-scope website followed by a
              monthly marketing and maintenance retainer.
            </p>
          </div>
          <ul className="flex flex-col gap-3">
            {engagementModels.map(({ Icon, title, body }) => (
              <li key={title} className="flex gap-5 rounded-[var(--radius-card)] border border-line p-6" data-reveal>
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-ink text-white">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-xl font-medium tracking-[-0.035em]">{title}</h3>
                  <p className="mt-1.5 text-muted">{body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FaqSection faqs={processFaqs} title="Questions about the process" />
      <CtaBanner />
    </>
  );
}
