import { Bot, Clapperboard, Code2, Megaphone, Newspaper, SearchCheck, Share2, Workflow } from "lucide-react";
import { Marquee } from "@/components/ui/Marquee";

const capabilities = [
  { label: "Social Media Management", Icon: Share2 },
  { label: "Google & Meta Ads", Icon: Megaphone },
  { label: "Website Development", Icon: Code2 },
  { label: "Video Production", Icon: Clapperboard },
  { label: "PR & Reputation", Icon: Newspaper },
  { label: "SEO & Content", Icon: SearchCheck },
  { label: "CRM & Software", Icon: Workflow },
  { label: "AI Automation", Icon: Bot },
];

/** Theme's brand ticker, repurposed to introduce the six capability areas (no client logos). */
export function CapabilityStrip() {
  return (
    <div className="border-b border-line py-7 lg:py-9">
      <Marquee label="Our capability areas">
        {capabilities.map(({ label, Icon }) => (
          <li key={label} className="flex items-center gap-3 px-6 text-xl font-medium tracking-[-0.04em] text-ink md:px-10 md:text-2xl">
            <Icon className="size-6 text-signal" aria-hidden="true" strokeWidth={1.75} />
            <span className="whitespace-nowrap">{label}</span>
          </li>
        ))}
      </Marquee>
    </div>
  );
}
