"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, Phone } from "lucide-react";
import { Logo } from "@/components/art/Logo";
import { MobileMenu } from "@/components/navigation/MobileMenu";
import { isGroup, mainNavigation, type NavGroup } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

/**
 * Site header. Transparent over each page's coloured hero, then a solid
 * bar once the page scrolls (theme behaviour). Dropdowns open on hover for
 * fine pointers and on click/Enter/Space for everyone; Escape closes them.
 */
export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const hoverTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on route change.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpenMenu(null);
    setMobileOpen(false);
  }

  useEffect(() => {
    if (!openMenu) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        const trigger = navRef.current?.querySelector<HTMLButtonElement>(`[data-menu-trigger="${openMenu}"]`);
        setOpenMenu(null);
        trigger?.focus();
      }
    };
    const onPointer = (e: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenMenu(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [openMenu]);

  const hoverOpen = useCallback((label: string | null) => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    window.clearTimeout(hoverTimer.current);
    hoverTimer.current = window.setTimeout(() => setOpenMenu(label), label ? 60 : 160);
  }, []);

  const solid = scrolled || openMenu !== null;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,color] duration-500 ease-(--ease-basic)",
        solid ? "bg-paper/95 text-ink shadow-[0_1px_0_rgb(0_0_0/0.06)] backdrop-blur-md" : "bg-transparent text-white",
      )}
    >
      <div className="container-site flex h-(--header-h) items-center justify-between gap-4">
        <Link
          href="/"
          className={cn(
            "-ml-2 shrink-0 rounded-2xl px-2.5 py-1.5 transition-colors duration-500 md:-ml-3 md:px-3",
            // Dark chip keeps the orange "EYE" legible over the orange hero.
            solid ? "bg-transparent" : "bg-graphite/85 backdrop-blur-sm",
          )}
          aria-label={`${siteConfig.name} — home`}
        >
          <Logo tone={solid ? "dark" : "light"} priority />
        </Link>

        <nav ref={navRef} aria-label="Main" className="hidden lg:block" onPointerLeave={() => hoverOpen(null)}>
          <ul
            className={cn(
              "flex items-center gap-1 rounded-full p-1 transition-colors duration-500",
              solid ? "bg-mist" : "bg-white/12 backdrop-blur-sm",
            )}
          >
            {mainNavigation.map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
              if (!isGroup(item)) {
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      aria-current={pathname === item.href ? "page" : undefined}
                      onPointerEnter={() => hoverOpen(null)}
                      className={cn(
                        "inline-flex h-10 items-center rounded-full px-4 text-[0.95rem] font-medium tracking-[-0.02em] transition-colors",
                        solid ? "hover:bg-white" : "hover:bg-white/15",
                        active && (solid ? "bg-white" : "bg-white/20"),
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }
              const isOpen = openMenu === item.label;
              return (
                <li key={item.label} className="relative" onPointerEnter={() => hoverOpen(item.label)}>
                  <button
                    type="button"
                    data-menu-trigger={item.label}
                    aria-expanded={isOpen}
                    aria-controls={`menu-${item.label}`}
                    onClick={() => setOpenMenu((cur) => (cur === item.label ? null : item.label))}
                    className={cn(
                      "inline-flex h-10 cursor-pointer items-center gap-1 rounded-full px-4 text-[0.95rem] font-medium tracking-[-0.02em] transition-colors",
                      solid ? "hover:bg-white" : "hover:bg-white/15",
                      (active || isOpen) && (solid ? "bg-white" : "bg-white/20"),
                    )}
                  >
                    {item.label}
                    <ChevronDown className={cn("size-4 transition-transform duration-300", isOpen && "rotate-180")} aria-hidden="true" />
                  </button>
                  <DropdownPanel group={item} open={isOpen} />
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={siteConfig.contact.phoneHref}
            className={cn(
              "hidden size-11 place-items-center rounded-full transition-colors md:grid",
              solid ? "bg-mist hover:bg-fog" : "bg-white/12 hover:bg-white/20",
            )}
            aria-label={`Call ${siteConfig.contact.phoneDisplay}`}
          >
            <Phone className="size-[18px]" aria-hidden="true" />
          </a>
          <Link
            href="/contact"
            className={cn("btn hidden sm:inline-flex", solid ? "btn-signal" : "btn-light")}
          >
            Start a Project
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-haspopup="dialog"
            aria-expanded={mobileOpen}
            className={cn(
              "inline-flex h-11 cursor-pointer items-center gap-2 rounded-full px-4 text-sm font-semibold lg:hidden",
              solid ? "bg-ink text-white" : "bg-white text-ink",
            )}
          >
            Menu
            <Menu className="size-[18px]" aria-hidden="true" />
          </button>
        </div>
      </div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}

function DropdownPanel({ group, open }: { group: NavGroup; open: boolean }) {
  if (group.variant === "mega") {
    return (
      <div
        id={`menu-${group.label}`}
        hidden={!open}
        className="fixed inset-x-0 top-(--header-h) px-3 pt-2"
      >
        <div className="mx-auto grid max-w-[1180px] grid-cols-[1fr_300px] gap-3 rounded-[1.5rem] bg-paper p-3 text-ink shadow-[0_30px_60px_-20px_rgb(0_0_0/0.25)] ring-1 ring-black/5">
          <ul className="grid grid-cols-2 gap-1">
            {group.links.map((link, i) => (
              <li key={link.href}>
                <Link href={link.href} className="group/item flex gap-4 rounded-2xl p-4 transition-colors hover:bg-mist">
                  <span className="pt-0.5 text-sm font-semibold tabular-nums text-ember">{String(i + 1).padStart(2, "0")}</span>
                  <span className="min-w-0">
                    <span className="flex items-center gap-1 font-medium tracking-[-0.02em]">
                      {link.label}
                      <ArrowUpRight className="size-4 opacity-0 transition-opacity group-hover/item:opacity-100" aria-hidden="true" />
                    </span>
                    <span className="mt-1 block text-sm leading-snug text-muted">{link.description}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="on-dark flex flex-col justify-between rounded-2xl bg-ink p-6 text-white">
            <div>
              <p className="text-xl font-medium leading-tight tracking-[-0.03em]">Not sure which service you need?</p>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                Describe the problem and we&rsquo;ll recommend the right mix of technology, marketing and support.
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-2">
              <Link href="/services" className="btn btn-light w-full">
                View all services
              </Link>
              <Link href="/contact" className="btn btn-signal w-full">
                Talk to us
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id={`menu-${group.label}`} hidden={!open} className="absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3">
      <ul className="rounded-[1.25rem] bg-paper p-2 text-ink shadow-[0_30px_60px_-20px_rgb(0_0_0/0.25)] ring-1 ring-black/5">
        {group.links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="flex items-center justify-between rounded-xl px-4 py-3 text-[0.95rem] font-medium tracking-[-0.02em] transition-colors hover:bg-mist">
              {link.label}
              <ArrowUpRight className="size-4 text-muted" aria-hidden="true" />
            </Link>
          </li>
        ))}
        <li className="mt-1 border-t border-line pt-1">
          <Link href={group.href} className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-ember transition-colors hover:bg-mist">
            {group.label === "Solutions" ? "All industry solutions" : "Company overview"}
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
