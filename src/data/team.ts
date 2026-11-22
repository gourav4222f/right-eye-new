/**
 * Team data.
 *
 * The founder plus the team. Only real people appear publicly: a named
 * profile card renders when BOTH `isVerified` and `isPublished` are true.
 * Verified members with their own photo also appear in the team photo mosaic.
 * Photos must be of the actual person — never stock images or pictures found online.
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
    name: "Rakesh Mehta",
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
  // ---- Role slots. Fill in the REAL person (name + their own photo), then publish. ----
  // Never use stock photos or pictures of other people found online.
  {
    id: "cto",
    name: "TBC",
    designation: "Chief Technology Officer (CTO)",
    department: "Technology & Engineering",
    reportsTo: "rakesh",
    profileImage: "",
    // Role description — replace with the real person's approved bio.
    biography: "Oversees technology strategy, software architecture, web development and technical operations.",
    yearsExperience: 0,
    expertise: [],
    linkedin: "",
    isVerified: false,
    isPublished: false,
  },
  {
    id: "head-software",
    name: "TBC",
    designation: "Head of Software Development",
    department: "Technology & Engineering",
    reportsTo: "rakesh",
    profileImage: "",
    // Role description — replace with the real person's approved bio.
    biography: "Leads software projects and engineering workflows, and builds modern web applications.",
    yearsExperience: 0,
    expertise: [],
    linkedin: "",
    isVerified: false,
    isPublished: false,
  },
  {
    id: "digital-solutions",
    name: "TBC",
    designation: "Digital Solutions Manager",
    department: "Technology & Engineering",
    reportsTo: "rakesh",
    profileImage: "",
    // Role description — replace with the real person's approved bio.
    biography: "Coordinates website development, digital implementation and project delivery.",
    yearsExperience: 0,
    expertise: [],
    linkedin: "",
    isVerified: false,
    isPublished: false,
  },
  {
    id: "uiux-lead",
    name: "TBC",
    designation: "UI/UX Design Lead",
    department: "Technology & Engineering",
    reportsTo: "rakesh",
    profileImage: "",
    // Role description — replace with the real person's approved bio.
    biography: "Designs user-friendly website interfaces, responsive layouts and digital experiences.",
    yearsExperience: 0,
    expertise: [],
    linkedin: "",
    isVerified: false,
    isPublished: false,
  },
  {
    id: "hr-admin",
    name: "TBC",
    designation: "HR & Administration Manager",
    department: "Leadership",
    reportsTo: "rakesh",
    profileImage: "",
    // Role description — replace with the real person's approved bio.
    biography: "Manages recruitment, employee engagement, internal coordination and administration.",
    yearsExperience: 0,
    expertise: [],
    linkedin: "",
    isVerified: false,
    isPublished: false,
  },
  {
    id: "seo-marketing",
    name: "TBC",
    designation: "SEO & Digital Marketing Manager",
    department: "Growth & Marketing",
    reportsTo: "rakesh",
    profileImage: "",
    // Role description — replace with the real person's approved bio.
    biography: "Develops SEO strategy and digital campaigns focused on organic growth and lead generation.",
    yearsExperience: 0,
    expertise: [],
    linkedin: "",
    isVerified: false,
    isPublished: false,
  },
  {
    id: "client-relations",
    name: "TBC",
    designation: "Client Relations & Project Coordinator",
    department: "Growth & Marketing",
    reportsTo: "rakesh",
    profileImage: "",
    // Role description — replace with the real person's approved bio.
    biography: "Manages client communication, project coordination and delivery follow-ups.",
    yearsExperience: 0,
    expertise: [],
    linkedin: "",
    isVerified: false,
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
