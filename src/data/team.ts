/**
 * Team data.
 *
 * The founder plus the team. Only real people appear publicly: a named
 * profile card renders when BOTH `isVerified` and `isPublished` are true.
 * Verified members with a photo also appear (unnamed) in the team photo mosaic.
 *
 * To publish someone:
 *   1. Replace the "TBC" name with their real name.
 *   2. Add a real photo to /public/images/team/ (square, at least 800×800, .webp).
 *   3. Add a biography they have approved, their years of experience,
 *      expertise and their LinkedIn URL.
 *   4. Set `isVerified` and `isPublished` to true.
 */

export type Department = "Leadership" | "Technology & Engineering" | "Growth & Marketing" | "AI & Automation";

export interface TeamMember {
  id: string;
  name: string;
  designation: string;
  department: Department;
  /** `id` of the person this member reports to, or null for the founder. */
  reportsTo: string | null;
  /** Path under /public, e.g. "/images/team/rakesh.webp". Empty until a real photo is supplied. */
  profileImage: string;
  /** Approved biography, 2–3 sentences. Empty until provided by the person. */
  biography: string;
  /** Whole years of professional experience, e.g. 8. Shown as "8+ years". 0 hides it. */
  yearsExperience: number;
  /** 3–5 short skills or tools, e.g. ["Next.js", "Laravel", "WordPress"]. */
  expertise: string[];
  /** Full https:// LinkedIn URL, or empty. */
  linkedin: string;
  isVerified: boolean;
  isPublished: boolean;
}

export const teamMembers: TeamMember[] = [
  {
    id: "rakesh",
    name: "Rakesh",
    designation: "Founder & CEO",
    department: "Leadership",
    reportsTo: null,
    profileImage: "",
    biography: "",
    yearsExperience: 0,
    expertise: [],
    linkedin: "",
    isVerified: true,
    isPublished: true,
  },
  // ---- Team photos supplied 2026-11-22, in order (top-left to bottom-right). Add name + role, then publish. ----
  {
    id: "member-1",
    name: "TBC",
    designation: "TBC",
    department: "Growth & Marketing",
    reportsTo: "rakesh",
    profileImage: "/images/team/member-1.webp",
    biography: "",
    yearsExperience: 0,
    expertise: [],
    linkedin: "",
    // Real team member (confirmed by the company). Publish once name and role are added.
    isVerified: true,
    isPublished: false,
  },
  {
    id: "member-2",
    name: "TBC",
    designation: "TBC",
    department: "Growth & Marketing",
    reportsTo: "rakesh",
    profileImage: "/images/team/member-2.webp",
    biography: "",
    yearsExperience: 0,
    expertise: [],
    linkedin: "",
    // Real team member (confirmed by the company). Publish once name and role are added.
    isVerified: true,
    isPublished: false,
  },
  {
    id: "member-3",
    name: "TBC",
    designation: "TBC",
    department: "Growth & Marketing",
    reportsTo: "rakesh",
    profileImage: "/images/team/member-3.webp",
    biography: "",
    yearsExperience: 0,
    expertise: [],
    linkedin: "",
    // Real team member (confirmed by the company). Publish once name and role are added.
    isVerified: true,
    isPublished: false,
  },
  {
    id: "member-4",
    name: "TBC",
    designation: "TBC",
    department: "Growth & Marketing",
    reportsTo: "rakesh",
    profileImage: "/images/team/member-4.webp",
    biography: "",
    yearsExperience: 0,
    expertise: [],
    linkedin: "",
    // Real team member (confirmed by the company). Publish once name and role are added.
    isVerified: true,
    isPublished: false,
  },
  {
    id: "member-5",
    name: "TBC",
    designation: "TBC",
    department: "Growth & Marketing",
    reportsTo: "rakesh",
    profileImage: "/images/team/member-5.webp",
    biography: "",
    yearsExperience: 0,
    expertise: [],
    linkedin: "",
    // Real team member (confirmed by the company). Publish once name and role are added.
    isVerified: true,
    isPublished: false,
  },
  {
    id: "member-6",
    name: "TBC",
    designation: "TBC",
    department: "Growth & Marketing",
    reportsTo: "rakesh",
    profileImage: "/images/team/member-6.webp",
    biography: "",
    yearsExperience: 0,
    expertise: [],
    linkedin: "",
    // Real team member (confirmed by the company). Publish once name and role are added.
    isVerified: true,
    isPublished: false,
  },
  {
    id: "member-7",
    name: "TBC",
    designation: "TBC",
    department: "Growth & Marketing",
    reportsTo: "rakesh",
    profileImage: "/images/team/member-7.webp",
    biography: "",
    yearsExperience: 0,
    expertise: [],
    linkedin: "",
    // Real team member (confirmed by the company). Publish once name and role are added.
    isVerified: true,
    isPublished: false,
  },
  {
    id: "member-8",
    name: "TBC",
    designation: "TBC",
    department: "Growth & Marketing",
    reportsTo: "rakesh",
    profileImage: "/images/team/member-8.webp",
    biography: "",
    yearsExperience: 0,
    expertise: [],
    linkedin: "",
    // Real team member (confirmed by the company). Publish once name and role are added.
    isVerified: true,
    isPublished: false,
  },
];

/** The only gate for public display. Both flags must be true. */
export function isPublic(member: TeamMember): boolean {
  return member.isVerified && member.isPublished;
}

export const founder = teamMembers.find((m) => m.reportsTo === null)!;

/** Published team members, excluding the founder (who has a dedicated section). */
export const publishedTeam = teamMembers.filter((m) => isPublic(m) && m.reportsTo !== null);

/** Photos of verified (real) team members, for the team mosaic. */
export const teamPhotos = teamMembers.filter((m) => m.isVerified && m.profileImage).map((m) => ({
  src: m.profileImage,
  alt: isPublic(m) ? `${m.name}, ${m.designation} at RightEyeTechnology` : "RightEyeTechnology team member",
}));

/**
 * Practice areas describe how work is organised. They are capability
 * descriptions, not claims about headcount, and are safe to show publicly.
 */
export const practiceAreas: Array<{ department: string; focus: string }> = [
  {
    department: "Technology & Engineering",
    focus: "Websites, web and mobile apps, CMS and workflow tools, APIs, cloud infrastructure and DevOps.",
  },
  {
    department: "Design & Experience",
    focus: "Interface design, prototyping and design systems for websites and apps.",
  },
  {
    department: "Growth & Marketing",
    focus: "SEO, content, paid media, social media, video and analytics.",
  },
  {
    department: "AI & Automation",
    focus: "AI assistants, WhatsApp and enquiry automation, and workflow integrations.",
  },
];
