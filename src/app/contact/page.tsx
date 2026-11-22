import type { Metadata } from "next";
import { Clock, Mail, MessageCircle, Phone, MapPin } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { PageHero } from "@/components/sections/PageHero";
import { CoverImage } from "@/components/ui/CoverImage";
import { LocalTime } from "@/components/ui/LocalTime";
import { images } from "@/config/assets";
import { siteConfig } from "@/config/site";
import { SocialIcons } from "@/components/ui/SocialIcons";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us — Start a Project",
  description: `Contact RightEyeTechnology in Rohini, Delhi (near Rithala Metro) about social media, ads, websites, video, PR, SEO or software. Email ${siteConfig.contact.email} or call ${siteConfig.contact.phoneDisplay}.`,
  path: "/contact",
});

const nextSteps = [
  { title: "We read your enquiry", body: "Someone who understands the technical side reviews what you've shared." },
  { title: "We get in touch", body: "We reply by email or phone to ask any questions and arrange a short call." },
  { title: "You receive a proposal", body: "After the call, we send a written scope, timeline and cost for you to review." },
];

export default function ContactPage() {
  const { contact, whatsapp } = siteConfig;
  return (
    <>
      <PageHero
        title="Tell us what you want to build, fix or grow"
        intro="Share a few details about your business and project. There's no obligation — the first conversation is about understanding your needs and whether we're the right fit."
        breadcrumbs={[{ name: "Contact", path: "/contact" }]}
      />

      <section className="section-pad" aria-labelledby="form-title">
        <div className="container-site grid gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.9fr)] lg:gap-16">
          <div>
            <h2 id="form-title" className="heading-md">
              Project enquiry
            </h2>
            <p className="mt-3 max-w-[56ch] text-muted">
              When you press send, WhatsApp opens with your enquiry filled in for our team — just tap Send. We use your
              details only to respond.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <aside className="flex flex-col gap-4" aria-label="Other ways to contact us">
            <div className="on-dark rounded-[var(--radius-card)] bg-ink p-6 text-white md:p-8">
              <h2 className="text-xl font-medium tracking-[-0.03em]">Prefer to talk directly?</h2>
              <ul className="mt-6 flex flex-col gap-4">
                <li>
                  <a href={contact.phoneHref} className="group flex min-h-11 items-center gap-4">
                    <span className="grid size-11 place-items-center rounded-full bg-signal">
                      <Phone className="size-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs text-white/60">Call</span>
                      <span className="link-underline font-medium">{contact.phoneDisplay}</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href={contact.emailHref} className="group flex min-h-11 items-center gap-4">
                    <span className="grid size-11 place-items-center rounded-full bg-white text-ink">
                      <Mail className="size-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs text-white/60">Email</span>
                      <span className="link-underline break-all font-medium">{contact.email}</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href={siteConfig.address.mapUrl} target="_blank" rel="noopener noreferrer" className="group flex min-h-11 items-center gap-4">
                    <span className="grid size-11 shrink-0 place-items-center rounded-full bg-white text-ink">
                      <MapPin className="size-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs text-white/60">Office</span>
                      <span className="link-underline font-medium">{siteConfig.address.display}</span>
                    </span>
                  </a>
                </li>
                <li className="flex min-h-11 items-center gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-white text-ink">
                    <Clock className="size-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs text-white/60">Office hours</span>
                    <span className="font-medium">{siteConfig.hours.label}</span>
                  </span>
                </li>
                {whatsapp.enabled ? (
                  <li>
                    <a href={whatsapp.url} target="_blank" rel="noopener noreferrer" className="group flex min-h-11 items-center gap-4">
                      <span className="grid size-11 place-items-center rounded-full bg-white text-ink">
                        <MessageCircle className="size-5" aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block text-xs text-white/60">WhatsApp</span>
                        <span className="link-underline font-medium">Message us</span>
                      </span>
                    </a>
                  </li>
                ) : null}
              </ul>
              <p className="mt-6 border-t border-white/10 pt-5 text-sm text-white/70">
                <LocalTime label="Our local time" />
              </p>
              <div className="mt-5 border-t border-white/10 pt-5">
                <p className="mb-3 text-xs text-white/60">Follow us</p>
                <SocialIcons tone="light" />
              </div>
            </div>

            <div className="rounded-[var(--radius-card)] bg-mist p-6 md:p-8">
              <h2 className="text-xl font-medium tracking-[-0.03em]">What happens next</h2>
              <ol className="mt-6 flex flex-col gap-5">
                {nextSteps.map((s, i) => (
                  <li key={s.title} className="flex gap-4">
                    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-ink text-sm font-semibold tabular-nums text-white">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-medium tracking-[-0.02em]">{s.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{s.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <CoverImage image={images.deskMug} decorative sizes="(min-width: 1024px) 30vw, 100vw" className="aspect-[4/3] rounded-[var(--radius-card)]" />
          </aside>
        </div>
      </section>
    </>
  );
}
