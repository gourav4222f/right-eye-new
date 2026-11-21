/**
 * Portfolio / case studies.
 *
 * Intentionally EMPTY. Do not add invented projects. Add a case study only
 * for real work, with the client's permission, and set `isPublished: true`.
 * The homepage "Selected work" block and any future /work route render
 * nothing while this list has no published entries.
 */

import type { DivisionSlug } from "./services";
import type { SolutionSlug } from "./solutions";

export interface CaseStudy {
  slug: string;
  client: string;
  title: string;
  summary: string;
  division: DivisionSlug;
  industry?: SolutionSlug;
  services: string[];
  /** Image under /public/images/work/. */
  coverImage: string;
  coverAlt: string;
  challenge: string;
  approach: string;
  /** Only verifiable outcomes the client has approved. */
  outcomes: string[];
  year: number;
  clientApproved: boolean;
  isPublished: boolean;
}

export const caseStudies: CaseStudy[] = [];

export const publishedCaseStudies = caseStudies.filter((c) => c.isPublished && c.clientApproved);
