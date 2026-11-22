import { siteConfig, type SocialKey } from "@/config/site";
import { cn } from "@/lib/utils";

/** Simple brand glyphs (24×24), drawn inline so no icon font or extra request is needed. */
function Glyph({ name }: { name: SocialKey | "whatsapp" }) {
  const common = { viewBox: "0 0 24 24", className: "size-[18px]", "aria-hidden": true as const };
  switch (name) {
    case "instagram":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "facebook":
      return (
        <svg {...common} fill="currentColor">
          <path d="M13.5 21v-7.5h2.6l.4-3.1h-3V8.5c0-.9.3-1.5 1.6-1.5h1.6V4.2c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.3H7.9v3.1h2.6V21h3z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...common} fill="currentColor">
          <path d="M4 9h3.6v11H4V9zm1.8-5.5a2.1 2.1 0 110 4.2 2.1 2.1 0 010-4.2zM9.8 9h3.4v1.5h.1c.5-.9 1.7-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.4V20h-3.6v-5.2c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V20H9.8V9z" />
        </svg>
      );
    case "youtube":
      return (
        <svg {...common} fill="currentColor">
          <path d="M21.6 7.2a2.5 2.5 0 00-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 002.4 7.2 26 26 0 002 12a26 26 0 00.4 4.8 2.5 2.5 0 001.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 001.8-1.8A26 26 0 0022 12a26 26 0 00-.4-4.8zM10 15V9l5.2 3L10 15z" />
        </svg>
      );
    case "x":
      return (
        <svg {...common} fill="currentColor">
          <path d="M17.8 3h3.1l-6.8 7.8L22 21h-6.2l-4.9-6.4L5.3 21H2.2l7.3-8.3L2 3h6.4l4.4 5.8L17.8 3zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5z" />
        </svg>
      );
    case "github":
      return (
        <svg {...common} fill="currentColor">
          <path d="M12 2a10 10 0 00-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5a3.9 3.9 0 011-2.7c-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.6 9.6 0 015 0c1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7a3.9 3.9 0 011 2.7c0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.8V21c0 .3.2.6.7.5A10 10 0 0012 2z" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg {...common} fill="currentColor">
          <path d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm0 18.2a8.2 8.2 0 01-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1112 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 01-3.3-2.9c-.3-.4.3-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 00-.7.3 3 3 0 00-.9 2.2 5.2 5.2 0 001.1 2.8 11.9 11.9 0 004.6 4c1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3z" />
        </svg>
      );
  }
}

/**
 * Social profile icons. Every platform in `siteConfig.socialProfiles` is
 * shown; an icon becomes a link as soon as its URL is filled in.
 */
export function SocialIcons({ tone = "dark", className }: { tone?: "dark" | "light"; className?: string }) {
  const base =
    tone === "light"
      ? "grid size-10 place-items-center rounded-full bg-white/10 text-white"
      : "grid size-10 place-items-center rounded-full bg-mist text-ink";
  const hover = tone === "light" ? "transition-colors hover:bg-signal-strong" : "transition-colors hover:bg-signal-strong hover:text-white";
  const items = [
    ...siteConfig.socialProfiles,
    ...(siteConfig.whatsapp.enabled ? [{ key: "whatsapp" as const, label: "WhatsApp", url: siteConfig.whatsapp.url }] : []),
  ];
  return (
    <ul className={cn("flex flex-wrap gap-2", className)} aria-label="RightEyeTechnology on social media">
      {items.map((s) =>
        s.url ? (
          <li key={s.key}>
            <a href={s.url} target="_blank" rel="noopener noreferrer me" aria-label={`${s.label} (opens in a new tab)`} title={s.label} className={cn(base, hover)}>
              <Glyph name={s.key} />
            </a>
          </li>
        ) : (
          <li key={s.key}>
            <span className={cn(base, "opacity-60")} title={`${s.label} — coming soon`}>
              <Glyph name={s.key} />
              <span className="sr-only">{s.label} (coming soon)</span>
            </span>
          </li>
        ),
      )}
    </ul>
  );
}
