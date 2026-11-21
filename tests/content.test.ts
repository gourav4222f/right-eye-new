import { describe, expect, it } from "vitest";
import sitemap from "@/app/sitemap";
import { caseStudies, publishedCaseStudies } from "@/data/case-studies";
import { serviceDivisions } from "@/data/services";
import { industrySolutions } from "@/data/solutions";
import { isPublic, publishedTeam, teamMembers } from "@/data/team";

describe("team publication gate", () => {
  it("keeps every unverified placeholder unpublished", () => {
    const placeholders = teamMembers.filter((m) => m.reportsTo !== null);
    expect(placeholders).toHaveLength(10);
    expect(placeholders.every((m) => !isPublic(m))).toBe(true);
    expect(publishedTeam).toHaveLength(0);
  });

  it("models the reporting structure", () => {
    const heads = teamMembers.filter((m) => m.reportsTo === "shravan-thakur");
    expect(heads.map((h) => h.id).sort()).toEqual(["aarav-sharma", "ishita-kapoor", "neha-gupta", "priya-verma"]);
    expect(teamMembers.filter((m) => m.reportsTo === "aarav-sharma")).toHaveLength(3);
  });
});

describe("content integrity", () => {
  it("has six divisions and six industries with unique slugs", () => {
    expect(new Set(serviceDivisions.map((d) => d.slug)).size).toBe(6);
    expect(new Set(industrySolutions.map((s) => s.slug)).size).toBe(6);
  });

  it("has no invented case studies", () => {
    expect(caseStudies).toHaveLength(0);
    expect(publishedCaseStudies).toHaveLength(0);
  });

  it("sitemap lists every public page once and no API routes", () => {
    const urls = sitemap().map((e) => e.url);
    expect(new Set(urls).size).toBe(urls.length);
    expect(urls.some((u) => u.includes("/api/"))).toBe(false);
    expect(urls).toHaveLength(9 + 6 + 6 + 3);
  });
});
