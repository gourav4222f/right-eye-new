import { describe, expect, it } from "vitest";
import sitemap from "@/app/sitemap";
import { caseStudies, publishedCaseStudies } from "@/data/case-studies";
import { portfolioProjects, publishedProjects } from "@/data/portfolio";
import { serviceDivisions } from "@/data/services";
import { industrySolutions } from "@/data/solutions";
import { isPublic, publishedTeam, teamMembers } from "@/data/team";

describe("team publication gate", () => {
  it("never publishes an unnamed role slot", () => {
    const slots = teamMembers.filter((m) => m.name === "TBC");
    expect(slots.every((m) => !isPublic(m))).toBe(true);
    expect(publishedTeam.every((m) => m.name !== "TBC")).toBe(true);
  });

  it("keeps the team to 4-6 profiles reporting to the founder", () => {
    expect(teamMembers.length).toBeGreaterThanOrEqual(4);
    expect(teamMembers.length).toBeLessThanOrEqual(6);
    expect(teamMembers.filter((m) => m.reportsTo !== null).every((m) => m.reportsTo === "shravan-thakur")).toBe(true);
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

  it("only publishes complete portfolio entries with live https URLs", () => {
    expect(new Set(portfolioProjects.map((p) => p.slug)).size).toBe(portfolioProjects.length);
    for (const p of publishedProjects) {
      expect(p.url.startsWith("https://")).toBe(true);
      expect(p.summary).not.toContain("TODO");
      expect(p.built.length).toBeGreaterThan(0);
    }
  });

  it("sitemap lists every public page once and no API routes", () => {
    const urls = sitemap().map((e) => e.url);
    expect(new Set(urls).size).toBe(urls.length);
    expect(urls.some((u) => u.includes("/api/"))).toBe(false);
    expect(urls).toHaveLength(10 + 6 + 6 + 3);
  });
});
