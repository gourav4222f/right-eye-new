"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronDown, Mail, Phone, X } from "lucide-react";
import { Logo } from "@/components/art/Logo";
import { isGroup, mainNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

/**
 * Full-screen mobile navigation built on the native <dialog> element, which
 * provides focus containment, Escape-to-close and top-layer stacking.
 */
export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  const [expanded, setExpanded] = useState<string | null>("Services");

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
      document.documentElement.style.overflow = "hidden";
    } else if (!open && dialog.open) {
      dialog.close();
    }
    if (!open) document.documentElement.style.overflow = "";
  }, [open]);

  return (
    <dialog
      data-lenis-prevent
      ref={ref}
      aria-label="Site menu"
      onClose={() => {
        document.documentElement.style.overflow = "";
        onClose();
      }}
      className="on-dark m-0 h-dvh max-h-none w-full max-w-none overscroll-contain bg-graphite p-0 text-white backdrop:bg-black/60 open:flex open:flex-col"
    >
      <div className="container-site flex h-(--header-h) shrink-0 items-center justify-between">
        <Link href="/" onClick={onClose} aria-label={`${siteConfig.name} — home`}>
          <Logo tone="light" />
        </Link>
        <button
          type="button"
          onClick={onClose}
          className="grid size-11 cursor-pointer place-items-center rounded-full bg-white text-ink"
          aria-label="Close menu"
        >
          <X className="size-5" aria-hidden="true" />
        </button>
      </div>

      <nav aria-label="Mobile" className="container-site flex-1 overflow-y-auto pb-8 pt-4">
        <ul className="flex flex-col">
          {mainNavigation.map((item) => {
            if (!isGroup(item)) {
              return (
                <li key={item.label} className="border-b border-white/10">
                  <Link href={item.href} onClick={onClose} className="flex min-h-16 items-center justify-between text-2xl font-medium tracking-[-0.04em]">
                    {item.label}
                    <ArrowUpRight className="size-5 text-white/60" aria-hidden="true" />
                  </Link>
                </li>
              );
            }
            const isOpen = expanded === item.label;
            const panelId = `m-${item.label}`;
            return (
              <li key={item.label} className="border-b border-white/10">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setExpanded((cur) => (cur === item.label ? null : item.label))}
                  className="flex min-h-16 w-full cursor-pointer items-center justify-between text-left text-2xl font-medium tracking-[-0.04em]"
                >
                  {item.label}
                  <ChevronDown className={cn("size-5 text-white/60 transition-transform", isOpen && "rotate-180")} aria-hidden="true" />
                </button>
                <ul id={panelId} hidden={!isOpen} className="pb-4">
                  {item.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} onClick={onClose} className="flex min-h-11 items-center py-1.5 text-base text-white/75 hover:text-white">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link href={item.href} onClick={onClose} className="mt-1 inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-glow">
                      {item.label === "Services" ? "All services" : item.label === "Solutions" ? "All solutions" : "Company overview"}
                      <ArrowUpRight className="size-4" aria-hidden="true" />
                    </Link>
                  </li>
                </ul>
              </li>
            );
          })}
        </ul>

        <div className="mt-8 flex flex-col gap-3">
          <Link href="/contact" onClick={onClose} className="btn btn-signal w-full">
            Start a Project
          </Link>
          <a href={siteConfig.contact.phoneHref} className="flex min-h-11 items-center gap-3 text-white/80">
            <Phone className="size-4" aria-hidden="true" /> {siteConfig.contact.phoneDisplay}
          </a>
          <a href={siteConfig.contact.emailHref} className="flex min-h-11 items-center gap-3 text-white/80">
            <Mail className="size-4" aria-hidden="true" /> {siteConfig.contact.email}
          </a>
        </div>
      </nav>
    </dialog>
  );
}
