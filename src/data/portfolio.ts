/**
 * Portfolio — live websites and systems our team has delivered.
 *
 * Lighter than a case study (src/data/case-studies.ts): a portfolio entry
 * only states what was built, for whom and where, and links to the live
 * site. Add only real projects the team worked on, and only where the
 * client is happy to be listed. Never add results or numbers here —
 * measured outcomes belong in a client-approved case study.
 *
 * Built for growth: add entries to the array and the /work page, filters
 * and homepage strip update automatically. Set `featured: true` on the
 * strongest 3–6 to show them on the homepage.
 */

import type { SolutionSlug } from "./solutions";

export type ProjectType =
  | "Booking website"
  | "Listing website"
  | "Business website"
  | "Web application"
  | "CMS"
  | "Workflow tool"
  | "E-commerce";

export interface PortfolioProject {
  slug: string;
  name: string;
  /** Live https:// URL. */
  url: string;
  /** Short sector label shown on the card, e.g. "Taxi & cab service". */
  sector: string;
  /** Links the project to an industry solution page, when one fits. */
  industry?: SolutionSlug;
  location: string;
  type: ProjectType;
  /** One-sentence description of the business and what the site does. */
  summary: string;
  /** What the team built — features a visitor can see on the live site. */
  built: string[];
  /** Optional screenshot under /public/images/work/ (1600×1000 recommended). */
  image?: string;
  featured: boolean;
  isPublished: boolean;
}

/** Headline figure. Only change it when the team can back the number up with a project list. */
export const projectsDelivered = "200+";

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "pp-the-traveller",
    name: "PP The Traveller",
    url: "https://ppthetraveller.com/",
    sector: "Tours & travel agency",
    industry: "travel-tourism",
    location: "Shillong, Meghalaya",
    type: "Booking website",
    summary:
      "A tour and travel agency selling Northeast India and international packages, with destination pages and vehicle rental.",
    built: ["Tour package catalogue with starting prices", "Destination pages", "Vehicle rental page", "WhatsApp trip planning", "Enquiry form and FAQ"],
    featured: true,
    isPublished: true,
  },
  {
    slug: "elite-properties",
    name: "Elite Properties",
    url: "https://www.eliteproperties4u.co.in/",
    sector: "Real estate",
    industry: "real-estate",
    location: "Vrindavan & Mathura, Uttar Pradesh",
    type: "Listing website",
    summary: "A property consultancy listing residential, commercial, plot and rental properties around Vrindavan and Mathura.",
    built: ["Property listings by category", "Buy/rent search with budget filter", "Services overview (finance, documentation, management)", "Site-visit enquiry form"],
    featured: true,
    isPublished: true,
  },
  {
    slug: "rana-ambulance-service",
    name: "Rana Ambulance Service",
    url: "https://ranaambulanceservice.in.net/",
    sector: "Emergency medical transport",
    industry: "healthcare",
    location: "Chandigarh, Mohali & Panchkula",
    type: "Business website",
    summary: "A 24×7 ambulance service offering ICU, ventilator, cardiac and oxygen ambulances across the Chandigarh tricity and outstation.",
    built: ["Service pages per ambulance type", "Click-to-call and WhatsApp", "Online booking form", "Service-area and route pages", "Map and FAQ"],
    featured: true,
    isPublished: true,
  },
  {
    slug: "jamnagar-cab-line",
    name: "Jamnagar Cab Line",
    url: "https://jamnagarcabline.net/",
    sector: "Taxi & cab service",
    industry: "travel-tourism",
    location: "Jamnagar, Gujarat",
    type: "Booking website",
    summary: "A local, airport and outstation cab service with published route fares and a travel blog.",
    built: ["Ride booking form", "Fleet and route fare pages", "Destination pages", "Travel blog", "Call and WhatsApp buttons"],
    featured: true,
    isPublished: true,
  },
  {
    slug: "mathura-cab-hub",
    name: "Mathura Cab Hub",
    url: "https://mathuracabhub.com/",
    sector: "Taxi & tour operator",
    industry: "travel-tourism",
    location: "Mathura, Uttar Pradesh",
    type: "Booking website",
    summary: "A taxi and tour operator offering local, outstation and one-way cabs, tempo travellers and Braj tour packages.",
    built: ["Hourly rental fare table", "Vehicle list with per-car WhatsApp enquiry", "Route and tour package pages", "Enquiry form and FAQ"],
    featured: false,
    isPublished: true,
  },
  {
    slug: "taxi-hire-gujarat",
    name: "Taxi Hire Gujarat",
    url: "https://taxihiregujarat.com/",
    sector: "Taxi & cab service",
    industry: "travel-tourism",
    location: "Ahmedabad, Gujarat",
    type: "Booking website",
    summary: "An Ahmedabad taxi service for airport, one-way, round-trip and outstation journeys across Gujarat and to Mumbai.",
    built: ["Three-step fare quote that opens WhatsApp", "Fleet pages", "Route pages and travel guides", "FAQ"],
    featured: false,
    // The live site's reviews section still shows placeholder text — fix it before listing.
    isPublished: false,
  },
  {
    slug: "my-ticket-creator",
    name: "My Ticket Creator",
    url: "https://www.myticketcreator.com/",
    sector: "Travel",
    industry: "travel-tourism",
    location: "India",
    type: "Web application",
    summary: "TODO: describe what the product does before publishing.",
    built: [],
    featured: false,
    // Purpose could not be confirmed from the live site — add a summary and features, then publish.
    isPublished: false,
  },
  {
    slug: "sarifa-massage-center",
    name: "Sarifa Massage Center",
    url: "https://sarifamassagecenter.com/",
    sector: "Wellness & spa",
    location: "Saudi Arabia",
    type: "Business website",
    summary: "A massage and spa centre with WhatsApp booking.",
    built: ["Service list", "WhatsApp booking buttons"],
    featured: false,
    // The live site still carries template placeholder text and a template vendor's email — not a good showcase yet.
    isPublished: false,
  },
];

export const publishedProjects = portfolioProjects.filter((p) => p.isPublished);
export const featuredProjects = publishedProjects.filter((p) => p.featured);

/** Hostname without "www.", for display. */
export function displayHost(url: string): string {
  return new URL(url).hostname.replace(/^www\./, "");
}
