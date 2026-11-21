import { Blocks, Compass, Gauge, LifeBuoy, MessagesSquare, Puzzle, Wrench } from "lucide-react";
import Image from "next/image";
import { TagLabel } from "@/components/ui/TagLabel";
import { images } from "@/config/assets";
import { siteConfig } from "@/config/site";

export const differentiators = [
  {
    Icon: Blocks,
    title: "Integrated technology capabilities",
    body: "Development, software, marketing, cloud and AI under one roof, so nothing falls between vendors.",
  },
  {
    Icon: Compass,
    title: "Business-focused problem solving",
    body: "We start with the outcome you need — more enquiries, fewer manual steps — and work back to the technology.",
  },
  {
    Icon: Wrench,
    title: "Custom technology solutions",
    body: "Built around your process where that matters, with off-the-shelf tools recommended where they fit better.",
  },
  {
    Icon: Puzzle,
    title: "Connected development and growth",
    body: "Websites built with tracking, SEO and lead handling in mind, so marketing has a solid foundation.",
  },
  {
    Icon: Gauge,
    title: "Scalable architecture",
    body: "Clean code, sensible infrastructure and documentation that make the next feature easier, not harder.",
  },
  {
    Icon: MessagesSquare,
    title: "Clear project communication",
    body: "A written scope, a single point of contact and regular progress you can see on a staging link.",
  },
  {
    Icon: LifeBuoy,
    title: "Ongoing technical support options",
    body: "Maintenance, monitoring and improvement plans after launch, or a clean handover if you prefer.",
  },
];

/** Theme's grey "Why choose us" panel, with honest differentiators instead of stat counters. */
export function WhyChooseUs() {
  return (
    <section className="panel section-pad mt-2 bg-mist lg:mt-3" aria-labelledby="why-title">
      <div className="container-site">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:items-end">
          <div>
            <TagLabel>Why choose us</TagLabel>
            <h2 id="why-title" className="heading-lg mt-5 max-w-[20ch]">
              A technology partner that understands the whole picture
            </h2>
          </div>
          <p className="max-w-md text-muted lg:justify-self-end">
            {siteConfig.name} combines engineering, design, marketing and operations thinking. Here&rsquo;s what that means for you in
            practice.
          </p>
        </div>

        <ul className="mt-14 grid gap-3 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4" data-reveal-stagger>
          {differentiators.map(({ Icon, title, body }, i) => (
            <li
              key={title}
              className={
                i === 0
                  ? "on-dark relative isolate flex min-h-[340px] flex-col justify-between gap-10 overflow-hidden rounded-[var(--radius-card)] bg-ink p-6 text-white sm:col-span-2 lg:row-span-2 lg:col-span-1"
                  : "flex flex-col gap-8 rounded-[var(--radius-card)] bg-paper p-6"
              }
            >
              {i === 0 ? (
                <>
                  <Image
                    src={images.teamWorkspace.src}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 100vw, 100vw"
                    className="-z-10 object-cover grayscale"
                  />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/90 via-black/55 to-black/20" aria-hidden="true" />
                </>
              ) : null}
              <Icon className={i === 0 ? "size-9 text-signal" : "size-7 text-signal"} aria-hidden="true" strokeWidth={1.6} />
              <div>
                <h3 className={i === 0 ? "text-2xl font-medium tracking-[-0.04em]" : "text-lg font-medium tracking-[-0.03em]"}>{title}</h3>
                <p className={i === 0 ? "mt-3 text-white/70" : "mt-2 text-sm leading-relaxed text-muted"}>{body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
