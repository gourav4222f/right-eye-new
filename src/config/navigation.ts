import { serviceDivisions } from "@/data/services";
import { industrySolutions } from "@/data/solutions";

export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export interface NavGroup {
  label: string;
  href: string;
  /** "mega" renders a wide two-column panel; "list" a compact dropdown. */
  variant: "mega" | "list";
  links: NavLink[];
}

export type NavItem = NavGroup | NavLink;

export function isGroup(item: NavItem): item is NavGroup {
  return "links" in item;
}

export const mainNavigation: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    variant: "mega",
    links: serviceDivisions.map((d) => ({
      label: d.name,
      href: `/services/${d.slug}`,
      description: d.summary,
    })),
  },
  {
    label: "Solutions",
    href: "/solutions",
    variant: "list",
    links: industrySolutions.map((s) => ({ label: s.name, href: `/solutions/${s.slug}` })),
  },
  {
    label: "Company",
    href: "/about",
    variant: "list",
    links: [
      { label: "About us", href: "/about" },
      { label: "How we work", href: "/how-we-work" },
    ],
  },
  { label: "Work", href: "/work" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export const footerNavigation = {
  services: serviceDivisions.map((d) => ({ label: d.shortName, href: `/services/${d.slug}` })),
  solutions: industrySolutions.map((s) => ({ label: s.name, href: `/solutions/${s.slug}` })),
  company: [
    { label: "About", href: "/about" },
    { label: "How we work", href: "/how-we-work" },
    { label: "Our work", href: "/work" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy policy", href: "/privacy-policy" },
    { label: "Terms & conditions", href: "/terms" },
  ],
} satisfies Record<string, NavLink[]>;
