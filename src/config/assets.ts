/**
 * Central image map.
 *
 * Images under /public/images/theme/ come from the supplied Orisa theme
 * package (see docs/THEME-ASSET-INVENTORY.md for the original filenames).
 * They are demo/stock imagery: confirm the theme licence covers them — or
 * replace them with your own photography — before production launch.
 * To replace an image, drop a new file in /public/images/ and update the
 * entry here; every component reads from this map.
 *
 * Alt text describes what is in the picture. None of these photos show
 * RightEyeTechnology staff, clients or projects, and the copy never implies so.
 */

import type { DivisionSlug } from "@/data/services";
import type { SolutionSlug } from "@/data/solutions";

export interface SiteImage {
  src: string;
  width: number;
  height: number;
  alt: string;
}

const t = (file: string, width: number, height: number, alt: string): SiteImage => ({
  src: `/images/theme/${file}`,
  width,
  height,
  alt,
});

export const images = {
  heroBackground: t("hero-bg-orange.webp", 1536, 1024, ""),
  heroFigure: t("hero-figure.webp", 1190, 1043, "Silhouetted figure lit in orange, repeated in profile"),
  collabSwatches: t("collab-swatches.webp", 490, 445, "Two people comparing paper swatches during a design review"),
  teamLaptop: t("team-laptop.webp", 770, 560, "A group gathered around a laptop, discussing a plan"),
  teamWorkspace: t("team-workspace.webp", 770, 560, "People working on laptops at a shared desk"),
  teamWide: t("team-wide.webp", 1716, 833, "Four colleagues smiling around a laptop in a studio"),
  officeWide: t("office-wide.webp", 1920, 570, "Black-and-white photo of a small team meeting at a round table"),
  deviceMarble: t("device-marble.webp", 537, 410, "Minimal device resting on a marble counter"),
  ctaParticles: t("cta-particles.webp", 1920, 697, ""),
  deskMug: t("desk-mug.webp", 822, 674, "Notebook and coffee mug on a sunlit desk"),
  notFound: t("not-found.webp", 738, 750, "Black-and-white portrait with hair caught in motion"),
  peopleStudying: t("people-studying.webp", 770, 560, "People studying together on laptops in a busy café"),
  articlePlanning: t("article-planning.webp", 408, 360, "Keyboard and open notebook with a pen on an orange desk"),
  badgeScallop: { src: "/images/theme/badge-scallop-dark.svg", width: 141, height: 141, alt: "" },
} satisfies Record<string, SiteImage>;

export const divisionImages: Record<DivisionSlug, SiteImage> = {
  "digital-product-development": t("service-product.webp", 426, 390, "Smartphone with a glowing display edge"),
  "business-software-crm": t("service-software.webp", 408, 360, "Person reviewing data on a monitor in a dark room"),
  "digital-growth-marketing": t("service-marketing.webp", 339, 210, "Workers installing a large advertising billboard"),
  "cloud-hosting": t("service-cloud.webp", 499, 310, "Rows of server cabinets in a bright data room"),
  "saas-development": t("service-saas.webp", 537, 410, "Phone and smart devices arranged on a desk"),
  "ai-automation": t("service-ai.webp", 537, 410, "Robotic hand typing on a laptop keyboard"),
};

export const industryImages: Record<SolutionSlug, SiteImage> = {
  "travel-tourism": t("industry-travel.webp", 553, 666, "Climber crossing a snowy mountain ridge"),
  restaurants: t("industry-restaurants.webp", 408, 445, "Café storefront with awnings and large windows"),
  "real-estate": t("industry-real-estate.webp", 770, 560, "Bright, open architectural interior with tall glass walls"),
  healthcare: t("industry-healthcare.webp", 845, 641, "Clean white device in a minimal, clinical setting"),
  "retail-ecommerce": t("industry-retail.webp", 770, 560, "Black leather tote bag against a printed backdrop"),
  education: t("people-studying.webp", 770, 560, "People studying together on laptops in a busy café"),
};

export const articleImages: Record<string, SiteImage> = {
  "how-to-plan-a-business-website": t("article-planning.webp", 408, 360, "Keyboard and open notebook with a pen on an orange desk"),
  "custom-crm-vs-off-the-shelf": t("article-crm.webp", 408, 360, "Shelf of books and coffee mugs"),
  "social-media-marketing-cost-delhi": t("team-laptop.webp", 770, 560, "A group gathered around a laptop, discussing a plan"),
  "rank-on-google-maps-delhi": t("people-studying.webp", 770, 560, "People studying together on laptops in a busy café"),
  "google-ads-vs-meta-ads-local-business": t("desk-mug.webp", 822, 674, "Notebook and coffee mug on a sunlit desk"),
  "website-hosting-checklist": t("service-cloud-datacenter.webp", 408, 360, "Corridor of server racks in a data centre"),
};
