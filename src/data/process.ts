export interface ProcessStep {
  number: string;
  title: string;
  summary: string;
  details: string[];
  outcome: string;
}

/** Six-stage engagement process used on the homepage and /how-we-work. */
export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    summary: "We learn how your business works, who your customers are and what success looks like.",
    details: [
      "Discovery call and, where useful, a workshop with your team",
      "Review of existing websites, systems, data and marketing",
      "Clarifying goals, constraints, budget and timeline",
    ],
    outcome: "A shared understanding of the problem and priorities.",
  },
  {
    number: "02",
    title: "Strategize",
    summary: "We recommend the right mix of technology and marketing, and define a realistic scope.",
    details: [
      "Solution options with trade-offs explained in plain language",
      "Scope, phases, milestones and responsibilities",
      "Written proposal with timeline and cost",
    ],
    outcome: "An agreed plan you can hold us to.",
  },
  {
    number: "03",
    title: "Design",
    summary: "We shape the experience before building it, so feedback happens early.",
    details: [
      "User flows, information architecture and wireframes",
      "Visual design aligned to your brand",
      "Clickable prototypes for key journeys",
    ],
    outcome: "Approved designs and a clear build specification.",
  },
  {
    number: "04",
    title: "Develop",
    summary: "We build in milestones you can review on a staging link.",
    details: [
      "Front-end, back-end, integrations and content setup",
      "Regular progress updates and demos",
      "Code in a repository you own",
    ],
    outcome: "A working product, built in visible stages.",
  },
  {
    number: "05",
    title: "Test & Launch",
    summary: "We check quality across devices and launch with a rollback plan.",
    details: [
      "Functional, responsive, accessibility and performance testing",
      "Analytics, tracking and SEO checks",
      "Deployment, DNS and post-launch monitoring",
    ],
    outcome: "A stable launch with tracking in place.",
  },
  {
    number: "06",
    title: "Support & Improve",
    summary: "We look after what we've built and help it improve with real-world data.",
    details: [
      "Maintenance, updates, backups and monitoring",
      "Performance and conversion reviews",
      "Roadmap for next features or campaigns",
    ],
    outcome: "A product and growth plan that keep moving forward.",
  },
];

export const engagementPrinciples = [
  {
    title: "One point of contact",
    body: "A named coordinator manages your project and keeps communication in one place.",
  },
  {
    title: "Written scope, no surprises",
    body: "What's included, what isn't and how changes are handled is agreed in writing before work begins.",
  },
  {
    title: "Visible progress",
    body: "You see work on staging links and in regular updates, not just at the end.",
  },
  {
    title: "You own your assets",
    body: "Code, designs, domains and marketing accounts are set up in your name or transferred to you.",
  },
];
