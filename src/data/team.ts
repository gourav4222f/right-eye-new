/**
 * Team data.
 *
 * IMPORTANT: Apart from the founder, every person below is a PROPOSED
 * PLACEHOLDER for the organisational structure — not a verified employee.
 * They stay unpublished (`isVerified: false`, `isPublished: false`) and are
 * never rendered on the public site or in structured data.
 *
 * To publish someone: replace the placeholder with their real details,
 * add a real photo to /public/images/team/, write a biography they have
 * approved, and set BOTH `isVerified` and `isPublished` to true.
 */

export type Department =
  | "Leadership"
  | "Technology & Engineering"
  | "Design & Experience"
  | "Growth & Marketing"
  | "Operations & Client Success";

export interface TeamMember {
  id: string;
  name: string;
  designation: string;
  department: Department;
  /** `id` of the person this member reports to, or null for the founder. */
  reportsTo: string | null;
  /** Path under /public, e.g. "/images/team/shravan-thakur.webp". Empty until a real photo is supplied. */
  profileImage: string;
  /** Approved biography. Empty until provided by the person. */
  biography: string;
  /** Full https:// LinkedIn URL, or empty. */
  linkedin: string;
  isVerified: boolean;
  isPublished: boolean;
}

export const teamMembers: TeamMember[] = [
  {
    id: "shravan-thakur",
    name: "Shravan Thakur",
    designation: "Founder & CEO",
    department: "Leadership",
    reportsTo: null,
    profileImage: "",
    biography: "",
    linkedin: "",
    isVerified: true,
    isPublished: true,
  },
  // ---- Proposed placeholders below: NOT verified employees. ----
  { id: "aarav-sharma", name: "Aarav Sharma", designation: "Head of Technology & Engineering", department: "Technology & Engineering", reportsTo: "shravan-thakur", profileImage: "", biography: "", linkedin: "", isVerified: false, isPublished: false },
  { id: "rohan-mehta", name: "Rohan Mehta", designation: "Full-Stack Developer", department: "Technology & Engineering", reportsTo: "aarav-sharma", profileImage: "", biography: "", linkedin: "", isVerified: false, isPublished: false },
  { id: "ananya-singh", name: "Ananya Singh", designation: "Mobile App Developer", department: "Technology & Engineering", reportsTo: "aarav-sharma", profileImage: "", biography: "", linkedin: "", isVerified: false, isPublished: false },
  { id: "vikram-rao", name: "Vikram Rao", designation: "Cloud & DevOps Engineer", department: "Technology & Engineering", reportsTo: "aarav-sharma", profileImage: "", biography: "", linkedin: "", isVerified: false, isPublished: false },
  { id: "priya-verma", name: "Priya Verma", designation: "Head of Design & Experience", department: "Design & Experience", reportsTo: "shravan-thakur", profileImage: "", biography: "", linkedin: "", isVerified: false, isPublished: false },
  { id: "meera-joshi", name: "Meera Joshi", designation: "UI/UX Designer", department: "Design & Experience", reportsTo: "priya-verma", profileImage: "", biography: "", linkedin: "", isVerified: false, isPublished: false },
  { id: "ishita-kapoor", name: "Ishita Kapoor", designation: "Head of Growth & Marketing", department: "Growth & Marketing", reportsTo: "shravan-thakur", profileImage: "", biography: "", linkedin: "", isVerified: false, isPublished: false },
  { id: "arjun-patel", name: "Arjun Patel", designation: "SEO & Content Strategist", department: "Growth & Marketing", reportsTo: "ishita-kapoor", profileImage: "", biography: "", linkedin: "", isVerified: false, isPublished: false },
  { id: "neha-gupta", name: "Neha Gupta", designation: "Head of Operations & Client Success", department: "Operations & Client Success", reportsTo: "shravan-thakur", profileImage: "", biography: "", linkedin: "", isVerified: false, isPublished: false },
  { id: "kavya-nair", name: "Kavya Nair", designation: "Project Coordinator", department: "Operations & Client Success", reportsTo: "neha-gupta", profileImage: "", biography: "", linkedin: "", isVerified: false, isPublished: false },
];

/** The only gate for public display. Both flags must be true. */
export function isPublic(member: TeamMember): boolean {
  return member.isVerified && member.isPublished;
}

export const founder = teamMembers.find((m) => m.reportsTo === null)!;

/** Published team members, excluding the founder (who has a dedicated section). */
export const publishedTeam = teamMembers.filter((m) => isPublic(m) && m.reportsTo !== null);

/**
 * Practice areas describe how work is organised. They are capability
 * descriptions, not claims about headcount, and are safe to show publicly.
 */
export const practiceAreas: Array<{ department: Exclude<Department, "Leadership">; focus: string }> = [
  {
    department: "Technology & Engineering",
    focus: "Web and mobile development, custom software, APIs, cloud infrastructure and DevOps.",
  },
  {
    department: "Design & Experience",
    focus: "User research, interface design, prototyping and design systems for websites and apps.",
  },
  {
    department: "Growth & Marketing",
    focus: "SEO, content, paid media, social media, video and analytics.",
  },
  {
    department: "Operations & Client Success",
    focus: "Project planning, coordination, client communication and ongoing support.",
  },
];
