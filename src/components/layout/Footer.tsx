import Link from "next/link";
import { cacheLife } from "next/cache";
import { LogoFull } from "@/components/art/Logo";
import { SocialIcons } from "@/components/ui/SocialIcons";
import { LocalTime } from "@/components/ui/LocalTime";
import { footerNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";

async function CopyrightYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}

export function Footer() {
  const { contact, address } = siteConfig;
  return (
    <footer data-footer-reveal className="panel on-dark mb-2 mt-2 bg-graphite pt-14 text-white lg:mb-3 lg:pt-16">
      <div className="container-site">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex max-w-md flex-col gap-6">
            <LogoFull tone="light" className="max-w-[360px]" />
            <p className="heading-md max-w-[14ch] text-white">Let&rsquo;s shape your next idea</p>
          </div>

          <div className="flex flex-col gap-3 lg:items-end lg:text-right">
            <a href={contact.phoneHref} className="link-underline text-lg font-medium tracking-[-0.02em]">
              {contact.phoneDisplay}
            </a>
            <a
              href={contact.emailHref}
              className="link-underline break-all text-2xl font-medium tracking-[-0.04em] md:text-4xl"
            >
              {contact.email}
            </a>
            <a href={address.mapUrl} target="_blank" rel="noopener noreferrer" className="link-underline text-sm text-white/75">
              Office: {address.streetAddress ? `${address.streetAddress}, ` : ""}
              {address.display}
            </a>
            <SocialIcons tone="light" className="mt-3 lg:justify-end" />
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:mt-20 lg:grid-cols-5">
          <FooterColumn title="Services" links={footerNavigation.services} />
          <FooterColumn title="Divisions" links={footerNavigation.divisions} />
          <FooterColumn title="Solutions" links={footerNavigation.solutions} />
          <FooterColumn title="Company" links={footerNavigation.company} />
          <div>
            <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-white/50">Start here</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Tell us what you&rsquo;re trying to achieve. We&rsquo;ll recommend a practical next step.
            </p>
            <Link href="/contact" className="btn btn-signal mt-5">
              Start a Project
            </Link>
          </div>
        </div>

        <p
          data-split="rise"
          className="pointer-events-none mt-14 select-none overflow-hidden whitespace-nowrap text-[clamp(3.25rem,13.5vw,13rem)] font-semibold leading-[0.8] tracking-[-0.065em] text-white/[0.92]"
          aria-hidden="true"
          translate="no"
        >
          RightEye<span className="text-signal">.</span>
        </p>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 py-8 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; <CopyrightYear /> {siteConfig.legalName}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {footerNavigation.legal.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="link-underline hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <LocalTime />
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: Array<{ label: string; href: string }> }) {
  return (
    <div>
      <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-white/50">{title}</h2>
      <ul className="mt-4 flex flex-col gap-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="link-underline text-[0.95rem] text-white/85 hover:text-white">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
