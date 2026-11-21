/**
 * Insights (blog) articles rendered by the reusable ArticleLayout.
 * Add a new object here to publish a post; set `status: "draft"` to keep
 * it out of listings, the sitemap and static generation.
 */

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string; id: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; text: string };

export interface Article {
  slug: string;
  title: string;
  description: string;
  category: "Websites" | "Business Software" | "Marketing" | "Cloud" | "AI & Automation" | "SaaS";
  /** ISO date (YYYY-MM-DD). */
  publishedAt: string;
  updatedAt?: string;
  author: string;
  readingMinutes: number;
  status: "published" | "draft";
  body: ArticleBlock[];
}

export const articles: Article[] = [
  {
    slug: "how-to-plan-a-business-website",
    title: "How to plan a business website before you speak to a developer",
    description:
      "A practical checklist for owners: define the website's job, map pages to customer questions, gather content early and agree what happens after launch.",
    category: "Websites",
    publishedAt: "2026-11-21",
    author: "RightEyeTechnology",
    readingMinutes: 6,
    status: "published",
    body: [
      {
        type: "p",
        text: "Most website projects that run late or over budget have the same root cause: the business and the developer started building before agreeing what the website was for. A few hours of planning on your side makes quotes more accurate, timelines more realistic and the final site far more useful.",
      },
      { type: "h2", id: "define-the-job", text: "1. Define the website's main job" },
      {
        type: "p",
        text: "Write one sentence describing what a successful visit looks like. For a clinic it might be \"a patient books an appointment\"; for a manufacturer, \"a procurement manager requests a quote\"; for a restaurant, \"a diner orders directly or reserves a table\". Every page and feature should support that action.",
      },
      {
        type: "p",
        text: "If you have more than one audience — customers and job seekers, for example — list them in order of importance. It helps the designer decide what appears first.",
      },
      { type: "h2", id: "map-questions", text: "2. Map pages to the questions customers ask" },
      {
        type: "p",
        text: "Instead of starting with a generic list like Home, About, Services and Contact, write down the questions customers ask before buying from you. Then group them. Each group usually becomes a page or section.",
      },
      {
        type: "ul",
        items: [
          "What exactly do you offer, and who is it for?",
          "How does the process work, and how long does it take?",
          "What does it cost, or how is pricing decided?",
          "Why should I trust you?",
          "How do I get started?",
        ],
      },
      {
        type: "p",
        text: "This approach also gives you a head start on search engine optimisation, because people type these same questions into Google.",
      },
      { type: "h2", id: "content-first", text: "3. Gather content early" },
      {
        type: "p",
        text: "Content is the most common cause of delay. Text, photographs, team details, certifications and service descriptions often take longer to collect than the design and development. Start gathering them as soon as you decide to build.",
      },
      {
        type: "callout",
        text: "Use real photographs of your team, premises and work wherever possible. Stock images are fine for backgrounds, but genuine photos build far more trust.",
      },
      { type: "h2", id: "features", text: "4. List the features you actually need" },
      {
        type: "p",
        text: "Separate must-haves from nice-to-haves. Typical features include enquiry forms, WhatsApp chat, appointment booking, online payments, a blog, multiple languages or a customer login. Each one affects cost and timeline, so being clear early prevents surprises.",
      },
      { type: "h2", id: "ownership", text: "5. Agree on ownership and access" },
      {
        type: "p",
        text: "Make sure your domain, hosting, analytics and the website's code or admin access are registered in your business's name. If you ever change providers, you'll be able to move without starting over.",
      },
      { type: "h2", id: "after-launch", text: "6. Plan what happens after launch" },
      {
        type: "p",
        text: "A website needs updates, backups and security patches, and someone needs to add new content. Decide whether your team will handle this or whether you'll use a maintenance plan, and include it in your budget from the start.",
      },
      { type: "h2", id: "brief", text: "A simple brief template" },
      {
        type: "ol",
        items: [
          "About the business: what you sell, to whom and where",
          "The website's main job and secondary goals",
          "Customer questions grouped into page ideas",
          "Must-have and nice-to-have features",
          "Content you already have, and what's missing",
          "Websites you like, and why",
          "Timeline, budget range and decision-makers",
        ],
      },
      {
        type: "p",
        text: "Share a brief like this with any developer and you'll get proposals that are easier to compare — and a project that's far more likely to go smoothly.",
      },
    ],
  },
  {
    slug: "custom-crm-vs-off-the-shelf",
    title: "Custom CRM or off-the-shelf? How to decide for a growing business",
    description:
      "When a standard CRM is the right choice, when custom software makes sense, and the questions to ask before committing to either.",
    category: "Business Software",
    publishedAt: "2026-11-21",
    author: "RightEyeTechnology",
    readingMinutes: 7,
    status: "published",
    body: [
      {
        type: "p",
        text: "Businesses usually start looking for a CRM when leads begin slipping through the cracks — an enquiry that was never called back, a quote that went to the wrong price, a salesperson who left with their contacts. The next question is whether to subscribe to an existing CRM or build one around your process.",
      },
      {
        type: "p",
        text: "There's no universal answer. Here's how to think it through.",
      },
      { type: "h2", id: "when-standard", text: "When an off-the-shelf CRM is the better choice" },
      {
        type: "ul",
        items: [
          "Your sales process is fairly standard: lead, contact, proposal, won or lost.",
          "You need something working within days, not months.",
          "The team is small and per-user subscription costs are manageable.",
          "The integrations you need are already offered by the CRM's marketplace.",
        ],
      },
      {
        type: "p",
        text: "In these situations, a well-configured standard CRM is usually faster and cheaper. The work is in setting up pipelines, fields and automations properly — and in training the team to use it consistently.",
      },
      { type: "h2", id: "when-custom", text: "When custom CRM development makes sense" },
      {
        type: "ul",
        items: [
          "Your process has steps a standard CRM handles awkwardly, such as itinerary building, site-visit tracking or multi-stage approvals.",
          "Pricing or quotation logic is specific to your business.",
          "You need the CRM to connect tightly with your own systems, such as inventory, booking or accounting.",
          "Your team is large enough that per-user subscriptions become a major ongoing cost.",
          "You want full control over your data and where it is stored.",
        ],
      },
      { type: "h2", id: "hidden-costs", text: "Count the full cost on both sides" },
      {
        type: "p",
        text: "Subscription CRMs look inexpensive per user, but costs grow with your team and with premium features. Custom software has a larger upfront cost plus hosting and maintenance. Compare both over three years, including the time your team spends working around limitations.",
      },
      {
        type: "callout",
        text: "A middle path is common: use a standard CRM for core sales, and build a small custom tool or integration for the part of your process it can't handle.",
      },
      { type: "h2", id: "questions", text: "Questions to answer before deciding" },
      {
        type: "ol",
        items: [
          "Can we describe our sales process step by step, including exceptions?",
          "Which steps cause the most delays or mistakes today?",
          "What data do we need in reports, and who reads them?",
          "Which other systems must the CRM exchange data with?",
          "How many people will use it now, and in two years?",
          "Who will own and maintain the system internally?",
        ],
      },
      { type: "h2", id: "adoption", text: "Adoption matters more than features" },
      {
        type: "p",
        text: "Whichever route you choose, a CRM only works if people use it. Keep the first version simple, migrate existing data carefully, train every role and review usage after a few weeks. A modest system that everyone uses beats a feature-rich one that's ignored.",
      },
    ],
  },
  {
    slug: "website-hosting-checklist",
    title: "A hosting and security checklist for small business websites",
    description:
      "Domains, SSL, email authentication, backups, updates and monitoring — the basics that prevent most website outages and data loss.",
    category: "Cloud",
    publishedAt: "2026-11-21",
    author: "RightEyeTechnology",
    readingMinutes: 5,
    status: "published",
    body: [
      {
        type: "p",
        text: "Many website problems that feel sudden — a site that goes offline, email that lands in spam, a hacked plugin — come from a short list of basics that were never set up or have quietly lapsed. Use this checklist to review your own setup or to brief your provider.",
      },
      { type: "h2", id: "domain", text: "Domain and DNS" },
      {
        type: "ul",
        items: [
          "The domain is registered in your business's name, with an email address you control.",
          "Auto-renewal is on, and the payment method on file is current.",
          "You know who has access to the domain registrar and DNS settings.",
        ],
      },
      { type: "h2", id: "ssl", text: "SSL and HTTPS" },
      {
        type: "ul",
        items: [
          "Every page loads over HTTPS, and HTTP requests redirect to HTTPS.",
          "Certificates renew automatically, and you're alerted if renewal fails.",
        ],
      },
      { type: "h2", id: "email", text: "Business email" },
      {
        type: "ul",
        items: [
          "SPF, DKIM and DMARC records are published for your domain.",
          "Website forms send through an authenticated mail service, not an unauthenticated server function.",
          "Shared mailboxes have more than one person with access.",
        ],
      },
      { type: "h2", id: "backups", text: "Backups" },
      {
        type: "ul",
        items: [
          "Files and databases are backed up automatically on a schedule that matches how often content changes.",
          "At least one copy is stored off the hosting server.",
          "A restore has been tested — a backup that has never been restored is an assumption, not a plan.",
        ],
      },
      {
        type: "callout",
        text: "Ask your provider when they last restored your site from backup, and how long it took. The answer tells you a lot.",
      },
      { type: "h2", id: "updates", text: "Updates and access" },
      {
        type: "ul",
        items: [
          "The CMS, themes, plugins and server software are updated regularly.",
          "Unused plugins, themes and admin accounts are removed.",
          "Admin accounts use strong, unique passwords and two-factor authentication where available.",
        ],
      },
      { type: "h2", id: "monitoring", text: "Monitoring and performance" },
      {
        type: "ul",
        items: [
          "Uptime monitoring alerts someone when the site goes down.",
          "Core pages are checked for speed on mobile connections.",
          "Search Console is set up so crawl and security issues are reported.",
        ],
      },
      { type: "h2", id: "next", text: "If you can't tick every box" },
      {
        type: "p",
        text: "That's common, and most items are quick to fix. Prioritise domain ownership, backups and updates first, because they protect against the most serious problems. Then work through email authentication and monitoring.",
      },
    ],
  },
];

export const publishedArticles = articles
  .filter((a) => a.status === "published")
  .toSorted((a, b) => b.publishedAt.localeCompare(a.publishedAt));

export function getArticle(slug: string): Article | undefined {
  return publishedArticles.find((a) => a.slug === slug);
}
