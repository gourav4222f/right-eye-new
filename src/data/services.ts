/**
 * Service divisions. Each division has a dedicated landing page at
 * /services/[slug]. Copy here is original and editable; nothing in it
 * describes an existing proprietary product or a past client result.
 */

import type { SolutionSlug } from "./solutions";

export type DivisionSlug =
  | "digital-product-development"
  | "business-software-crm"
  | "digital-growth-marketing"
  | "cloud-hosting"
  | "saas-development"
  | "ai-automation";

export interface CapabilityGroup {
  title: string;
  body: string;
  items: string[];
}

export interface TitledText {
  title: string;
  body: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface ServiceDivision {
  slug: DivisionSlug;
  number: string;
  name: string;
  shortName: string;
  /** One-line summary for cards and menus. */
  summary: string;
  /** Page H1. */
  heroTitle: string;
  heroIntro: string;
  metaTitle: string;
  metaDescription: string;
  overview: string[];
  problems: TitledText[];
  groups: CapabilityGroup[];
  deliverables: string[];
  approach: TitledText[];
  relatedIndustries: SolutionSlug[];
  relatedDivisions: DivisionSlug[];
  faqs: Faq[];
}

export const serviceDivisions: ServiceDivision[] = [
  {
    slug: "digital-product-development",
    number: "01",
    name: "Digital Product Development",
    shortName: "Product Development",
    summary:
      "Websites, web apps, mobile apps and custom software designed around how your business actually works.",
    heroTitle: "Websites, apps and software built for the way your business runs",
    heroIntro:
      "From a five-page business website to a multi-role web application, we plan, design and engineer digital products that are fast, maintainable and ready to grow with you.",
    metaTitle: "Website, Web App & Mobile App Development",
    metaDescription:
      "Business and corporate websites, e-commerce, web applications, Android and iOS apps, APIs and custom software — designed and developed by RightEyeTechnology.",
    overview: [
      "Most businesses don't need \"a website\" or \"an app\" in the abstract. They need customers to find them, understand the offer and take a next step — or they need staff to stop copying data between spreadsheets. We start from that job and choose the right product for it.",
      "Our development work covers the full stack: interface design, front-end engineering, back-end services, databases, APIs and deployment. Because the same team also handles hosting, marketing and automation, what we build is planned to connect with the rest of your operations rather than sit on its own.",
    ],
    problems: [
      {
        title: "An outdated or slow website",
        body: "Pages that load slowly, break on phones or are hard to update cost you enquiries. We rebuild on a modern stack with performance and editing in mind.",
      },
      {
        title: "Processes stuck in spreadsheets",
        body: "When orders, bookings or approvals live in sheets and chat threads, mistakes multiply. A focused web application gives every role one reliable place to work.",
      },
      {
        title: "An app idea without a technical team",
        body: "Founders often have a clear problem to solve but no one to translate it into screens, data models and a release plan. We help scope a realistic first version.",
      },
      {
        title: "Systems that don't talk to each other",
        body: "Payment gateways, CRMs, accounting tools and logistics partners each hold part of the picture. APIs and integrations remove the manual re-entry in between.",
      },
    ],
    groups: [
      {
        title: "Websites",
        body: "Business and corporate websites that explain what you do clearly, load quickly and give visitors an obvious next step.",
        items: [
          "Business Website Development",
          "Corporate Website Development",
          "Website Design",
          "Landing Page Development",
          "Website Redesign",
          "Website Maintenance",
        ],
      },
      {
        title: "E-commerce",
        body: "Online stores with catalogue management, payments, shipping rules and GST-ready order records, on a platform that suits your scale.",
        items: ["E-commerce Development"],
      },
      {
        title: "Web & mobile applications",
        body: "Role-based applications for the browser, Android and iOS — from internal tools to customer-facing products.",
        items: [
          "Web Application Development",
          "Mobile Application Development",
          "Android Application Development",
          "iOS Application Development",
          "Custom Software Development",
        ],
      },
      {
        title: "Design & integration",
        body: "Interface design grounded in user research, and APIs that let your product exchange data with the services you already use.",
        items: ["UI/UX Design", "API Development", "API Integration"],
      },
    ],
    deliverables: [
      "A written scope with features, user roles and release phases",
      "Wireframes and visual designs for key screens before development",
      "Source code in a repository you own, with setup documentation",
      "Responsive, accessible front end tested on common devices and browsers",
      "Deployment to your hosting or app store accounts",
      "Handover session and an optional maintenance plan",
    ],
    approach: [
      {
        title: "Scope the first version",
        body: "We map users, tasks and must-have features, then agree what belongs in version one and what can wait.",
      },
      {
        title: "Design before code",
        body: "Wireframes and clickable prototypes let you react to the product early, when changes are cheap.",
      },
      {
        title: "Build in reviewable stages",
        body: "Work is delivered in milestones you can see and test on a staging link, not revealed all at once at the end.",
      },
      {
        title: "Launch and look after it",
        body: "We deploy, monitor the first weeks closely and offer maintenance so the product stays secure and current.",
      },
    ],
    relatedIndustries: ["retail-ecommerce", "real-estate", "education"],
    relatedDivisions: ["business-software-crm", "cloud-hosting", "digital-growth-marketing"],
    faqs: [
      {
        question: "How long does a business website take?",
        answer:
          "A focused business website with five to ten pages typically takes three to six weeks once content is available. Larger corporate sites, e-commerce stores and custom features take longer; we give a timeline after scoping rather than a generic promise.",
      },
      {
        question: "Should I build a mobile app or a web application first?",
        answer:
          "If your users mostly work at a desk, or you need to validate the idea quickly, a responsive web application is usually faster and cheaper to start. A native or cross-platform mobile app makes sense when you rely on phone features such as notifications, the camera or offline use. We'll recommend one based on your users, not our preference.",
      },
      {
        question: "Will I own the code and design files?",
        answer:
          "Yes. Once the project is paid for, the source code, design files and accounts we create for the project are yours. We document the setup so another team could continue the work if needed.",
      },
      {
        question: "Can you redesign my existing site without losing search traffic?",
        answer:
          "We plan redesigns with URL mapping, redirects and metadata carried over, and we check Search Console after launch. No one can promise rankings, but a careful migration avoids the most common causes of lost traffic.",
      },
    ],
  },
  {
    slug: "business-software-crm",
    number: "02",
    name: "Business Software & CRM Solutions",
    shortName: "Business Software & CRM",
    summary:
      "Custom CRMs, ERPs, booking systems and dashboards that replace spreadsheets with one dependable system.",
    heroTitle: "Business software and CRMs shaped around your workflow",
    heroIntro:
      "Off-the-shelf tools force you to work their way. We build CRMs, ERPs and operational systems that follow your sales stages, approval rules and reporting needs.",
    metaTitle: "Custom CRM, ERP & Business Software Development",
    metaDescription:
      "Custom CRM development, sales and lead management, ERP, booking, inventory, order and employee management systems, dashboards and customer portals for Indian businesses.",
    overview: [
      "Every growing business reaches a point where WhatsApp groups and spreadsheets stop keeping up. Leads go unanswered, stock counts drift and nobody is sure which version of a report is correct. Business software fixes that by giving each team a single, structured place to work.",
      "We build custom systems when your process is specific enough that generic tools get in the way — and we'll tell you when an existing product would serve you better. Where it helps, we integrate rather than rebuild: connecting your new system to accounting, payment, messaging and calendar tools you already rely on.",
    ],
    problems: [
      {
        title: "Leads slipping through the cracks",
        body: "Enquiries arrive by phone, website, WhatsApp and ads, and no one sees them all. A lead management system captures every source and assigns follow-ups.",
      },
      {
        title: "No single view of a customer",
        body: "Purchase history, conversations and open issues sit with different people. A customer management system brings them together.",
      },
      {
        title: "Manual stock and order tracking",
        body: "Counting inventory by hand and reconciling orders at month-end is slow and error-prone. Real-time records reduce surprises.",
      },
      {
        title: "Reports that take days to assemble",
        body: "Owners need numbers to make decisions. Dashboards built on live data replace the weekly spreadsheet scramble.",
      },
    ],
    groups: [
      {
        title: "CRM & sales",
        body: "Pipelines that mirror your actual sales stages, with lead capture, assignment, reminders and conversion reporting.",
        items: ["Custom CRM Development", "Sales CRM", "Lead Management Systems", "Customer Management Systems"],
      },
      {
        title: "Operations & ERP",
        body: "Connected modules for purchasing, stock, orders and staff so every department works from the same records.",
        items: [
          "ERP Solutions",
          "Inventory Management",
          "Order Management",
          "Employee Management Systems",
        ],
      },
      {
        title: "Industry systems",
        body: "Purpose-built software for businesses with specialised workflows, such as bookings, itineraries and table service.",
        items: ["Booking and Reservation Systems", "Travel Business CRM", "Restaurant Management Systems"],
      },
      {
        title: "Visibility & self-service",
        body: "Dashboards for decision-makers and secure portals where customers can check orders, invoices and requests themselves.",
        items: ["Business Dashboards", "Customer Portals", "Custom Business Software"],
      },
    ],
    deliverables: [
      "Process mapping workshop and a documented workflow",
      "Role and permission design for every user type",
      "Data migration plan from spreadsheets or existing tools",
      "Web-based system with responsive screens for field and office staff",
      "Integrations with payments, messaging, email or accounting where needed",
      "Staff training material and an administrator guide",
    ],
    approach: [
      {
        title: "Map the real process",
        body: "We sit with the people who do the work and document each step, hand-off and exception — not just the ideal flow.",
      },
      {
        title: "Model the data",
        body: "Customers, orders, items and stages are defined clearly so reports are reliable from day one.",
      },
      {
        title: "Release module by module",
        body: "We launch the most painful area first, gather feedback and expand, so the team adopts the system gradually.",
      },
      {
        title: "Support adoption",
        body: "Training, quick fixes after go-live and periodic reviews help the software become part of daily work.",
      },
    ],
    relatedIndustries: ["travel-tourism", "restaurants", "healthcare"],
    relatedDivisions: ["ai-automation", "saas-development", "digital-product-development"],
    faqs: [
      {
        question: "Is a custom CRM better than an off-the-shelf one?",
        answer:
          "Not always. If a standard CRM fits your process with light configuration, it's usually the quicker choice. Custom software pays off when you have specific stages, pricing logic, approvals or integrations that standard tools handle poorly, or when per-user subscription costs grow large. We'll help you compare honestly.",
      },
      {
        question: "Can you move our existing data from Excel or another tool?",
        answer:
          "Yes. We review your current data, clean up duplicates and inconsistent formats with you, and import it into the new system. We test the migration on a copy before switching over.",
      },
      {
        question: "Will the software work on phones for field staff?",
        answer:
          "We design business software to be responsive, so it works in a mobile browser. If your team needs offline access or device features, we can scope a companion mobile app.",
      },
      {
        question: "Who hosts the system and keeps it secure?",
        answer:
          "We can host and maintain it for you on managed cloud infrastructure, or deploy it to your own servers. Either way we set up backups, access controls and updates as part of the plan.",
      },
    ],
  },
  {
    slug: "digital-growth-marketing",
    number: "03",
    name: "Digital Growth & Marketing",
    shortName: "Growth & Marketing",
    summary:
      "SEO, paid ads, social media, content and video that bring the right people to your business — measured properly.",
    heroTitle: "Marketing that connects to the technology behind it",
    heroIntro:
      "Search, ads, social, email, WhatsApp and video — planned together, tracked accurately and tied back to the enquiries and sales your business actually receives.",
    metaTitle: "SEO, Digital Marketing, Ads & Social Media Services",
    metaDescription:
      "SEO, technical and local SEO, Google Ads, Meta Ads, social media management, content, email and WhatsApp marketing, video production and conversion optimisation.",
    overview: [
      "Marketing works best when it isn't separated from the website, the CRM and the follow-up process. A campaign can generate clicks, but if the landing page is slow or leads aren't followed up, the spend is wasted. Because we build and run those systems too, we can fix the whole path from first click to closed sale.",
      "We begin with measurement — analytics, conversion tracking and a clear definition of a good lead — so decisions are based on data rather than impressions. Then we choose the channels that fit your audience and budget, and report on outcomes in plain language.",
    ],
    problems: [
      {
        title: "Invisible in search",
        body: "If customers can't find you on Google or Maps when they search for what you sell, competitors win the enquiry. SEO and local listings change that over time.",
      },
      {
        title: "Ad spend without clear returns",
        body: "Campaigns running without conversion tracking make it impossible to tell what works. We set up measurement before scaling budgets.",
      },
      {
        title: "Inconsistent social presence",
        body: "Posting sporadically rarely builds an audience. A content calendar with formats suited to each platform keeps you visible and recognisable.",
      },
      {
        title: "Visitors who don't convert",
        body: "Traffic matters only if people take action. Conversion rate optimisation improves forms, pages and offers using evidence from real behaviour.",
      },
    ],
    groups: [
      {
        title: "Search",
        body: "Technical fixes, content and local signals that help search engines understand and surface your business.",
        items: ["SEO Services", "Technical SEO", "Local SEO", "E-commerce SEO"],
      },
      {
        title: "Strategy & content",
        body: "A marketing plan grounded in your audience and offer, supported by useful, original content.",
        items: ["Digital Marketing Strategy", "Content Strategy", "Content Writing"],
      },
      {
        title: "Paid media",
        body: "Search and social campaigns with structured targeting, tested creative and tracked conversions.",
        items: ["Google Ads", "Meta Ads", "Lead Generation"],
      },
      {
        title: "Social media",
        body: "Platform-specific planning, publishing and community management across the channels your customers use.",
        items: [
          "Social Media Marketing",
          "Social Media Management",
          "Instagram Marketing",
          "Facebook Marketing",
          "YouTube Marketing",
        ],
      },
      {
        title: "Video",
        body: "Scripted, shot and edited video — from brand films to short-form Reels and Shorts built for mobile viewing.",
        items: ["Video Marketing", "Video Production", "Video Editing", "Reels and Shorts"],
      },
      {
        title: "Retention & measurement",
        body: "Owned channels that keep customers engaged, and analytics that show which efforts move the numbers.",
        items: ["Email Marketing", "WhatsApp Marketing", "Conversion Rate Optimization", "Marketing Analytics"],
      },
    ],
    deliverables: [
      "Marketing audit covering website, search presence, ads and social",
      "Analytics and conversion tracking set up and verified",
      "Channel plan with budget split and monthly priorities",
      "Content calendar, ad creative and video assets",
      "Monthly report written in plain language with next actions",
      "Access to every ad, analytics and social account in your name",
    ],
    approach: [
      {
        title: "Audit and baseline",
        body: "We review where enquiries come from today and fix tracking so we can measure improvement honestly.",
      },
      {
        title: "Choose the channels",
        body: "Based on audience, margin and budget, we focus on the few channels most likely to work, rather than spreading thin.",
      },
      {
        title: "Run, test and learn",
        body: "Campaigns, content and pages are tested in cycles. What works gets more budget; what doesn't is changed or stopped.",
      },
      {
        title: "Report and refine",
        body: "Monthly reviews connect marketing activity to leads and revenue, and set priorities for the next cycle.",
      },
    ],
    relatedIndustries: ["real-estate", "education", "restaurants"],
    relatedDivisions: ["digital-product-development", "ai-automation", "business-software-crm"],
    faqs: [
      {
        question: "How long does SEO take to show results?",
        answer:
          "SEO is gradual. Technical fixes can help within weeks, but meaningful growth in rankings and organic enquiries usually takes several months and depends on competition, your site's history and content. We don't promise specific rankings — anyone who does is guessing.",
      },
      {
        question: "Do I need to spend a lot on ads to start?",
        answer:
          "No. We recommend starting with a modest test budget, proper tracking and a clear offer. Once we see which campaigns produce quality leads at an acceptable cost, scaling becomes a data-backed decision.",
      },
      {
        question: "Will the ad and social accounts be in my name?",
        answer:
          "Yes. Ad accounts, analytics properties and social pages are created under your business, with us added as managers. You keep full access if we stop working together.",
      },
      {
        question: "Can you produce video in-house?",
        answer:
          "We plan, script and edit video, including short-form Reels and Shorts. For on-location shoots we scope the crew and equipment needed per project.",
      },
    ],
  },
  {
    slug: "cloud-hosting",
    number: "04",
    name: "Cloud, Hosting & Managed Technology",
    shortName: "Cloud & Hosting",
    summary:
      "Hosting, domains, email, security, backups and monitoring — the technical foundation, managed for you.",
    heroTitle: "Hosting and managed technology you don't have to think about",
    heroIntro:
      "We set up, secure and look after the infrastructure behind your website and applications — domains, servers, email, SSL, backups and monitoring — so problems are caught before customers notice.",
    metaTitle: "Web Hosting, Cloud Hosting & Website Maintenance",
    metaDescription:
      "Web and cloud hosting, domain management, deployment and migration, server configuration, business email, SSL, security, backups, monitoring and technical support.",
    overview: [
      "A website or application is only as reliable as the infrastructure under it. Expired domains, missing backups, unpatched plugins and misconfigured email are some of the most common — and most avoidable — reasons businesses go offline or lose data.",
      "Our managed technology service takes care of that foundation. We choose hosting that suits your traffic and budget, configure it properly, keep it updated and watch it. When something does go wrong, you have a team that already knows your setup.",
    ],
    problems: [
      {
        title: "Downtime discovered by customers",
        body: "Without monitoring, outages are often reported by the people trying to buy from you. Uptime checks and alerts let us respond first.",
      },
      {
        title: "No reliable backups",
        body: "Many sites have never had a restore tested. We schedule off-site backups and periodically check they actually work.",
      },
      {
        title: "Business email landing in spam",
        body: "Missing SPF, DKIM and DMARC records hurt deliverability. Correct DNS setup makes your email look trustworthy to inboxes.",
      },
      {
        title: "Risky migrations",
        body: "Moving hosts or platforms can break links, email and forms. A planned migration with testing keeps the move uneventful.",
      },
    ],
    groups: [
      {
        title: "Hosting & domains",
        body: "Shared, VPS or cloud hosting matched to your needs, with domains and DNS managed in one place.",
        items: ["Web Hosting", "Cloud Hosting", "Domain Management", "Server Configuration"],
      },
      {
        title: "Deployment & migration",
        body: "Repeatable deployments and carefully planned moves between hosts, platforms or servers.",
        items: ["Website Deployment", "Website Migration", "Business Email Setup"],
      },
      {
        title: "Security & resilience",
        body: "Encryption, hardening, updates and backups that reduce risk and make recovery possible.",
        items: ["SSL Configuration", "Website Security", "Backups"],
      },
      {
        title: "Ongoing care",
        body: "Monitoring, performance tuning, maintenance and a responsive support channel for issues and changes.",
        items: ["Website Monitoring", "Website Maintenance", "Performance Optimization", "Technical Support"],
      },
    ],
    deliverables: [
      "Infrastructure recommendation sized to your traffic and budget",
      "Domain, DNS and SSL configured and documented",
      "Business email with SPF, DKIM and DMARC records",
      "Automated off-site backups with a tested restore",
      "Uptime and performance monitoring with alerts",
      "A credentials and access register handed over to you",
    ],
    approach: [
      {
        title: "Review what you have",
        body: "We audit current hosting, domains, email and security settings and list the risks in order of priority.",
      },
      {
        title: "Plan the setup or move",
        body: "Whether it's a fresh setup or a migration, we agree a plan, a timing window and a rollback option.",
      },
      {
        title: "Configure and verify",
        body: "Servers, DNS, email and SSL are set up and tested, and backups are confirmed before anything goes live.",
      },
      {
        title: "Monitor and maintain",
        body: "Ongoing updates, monitoring and support keep things stable, with a monthly summary of what was done.",
      },
    ],
    relatedIndustries: ["healthcare", "retail-ecommerce", "education"],
    relatedDivisions: ["digital-product-development", "saas-development", "business-software-crm"],
    faqs: [
      {
        question: "Which hosting do you recommend?",
        answer:
          "It depends on the application. A brochure website can run well on quality shared or managed hosting; a busy store or a custom application usually needs a VPS or cloud platform. We recommend based on traffic, technology and budget, and explain the trade-offs.",
      },
      {
        question: "Can you take over hosting for a site another agency built?",
        answer:
          "Yes. We start with an audit to understand how the site is built and hosted, secure access to the accounts, take a full backup and then migrate or manage it in place.",
      },
      {
        question: "Will my domain and accounts be registered in my name?",
        answer:
          "They should be, and we recommend it strongly. Where we register domains or hosting on your behalf, we do so in your business's name and hand over the access details.",
      },
      {
        question: "What does website maintenance include?",
        answer:
          "Typically software and plugin updates, security checks, backups, uptime monitoring, small content changes and a set amount of support time each month. We tailor the plan to how often your site changes.",
      },
    ],
  },
  {
    slug: "saas-development",
    number: "05",
    name: "SaaS & Digital Product Engineering",
    shortName: "SaaS Development",
    summary:
      "Subscription products, multi-tenant platforms and MVPs engineered to launch quickly and scale cleanly.",
    heroTitle: "SaaS products engineered from MVP to scale",
    heroIntro:
      "We help founders and businesses turn a repeatable solution into a subscription product — with accounts, billing, multi-tenant data and the admin tools needed to run it.",
    metaTitle: "SaaS Product & MVP Development",
    metaDescription:
      "SaaS product and MVP development, subscription billing, multi-tenant architecture, user management, dashboards, payment and third-party integrations, maintenance and scaling.",
    overview: [
      "Building software for one company is different from building a product many companies will subscribe to. SaaS needs tenant isolation, plan-based permissions, recurring billing, onboarding flows and operational dashboards — on top of the core feature that solves the customer's problem.",
      "We work with founders to define a minimum viable product that proves demand without cutting corners on the foundations that are expensive to change later, such as data architecture and authentication. Then we iterate based on what real users do.",
    ],
    problems: [
      {
        title: "An idea that needs proof",
        body: "Investors and early customers want to see something working. A tightly scoped MVP tests the core value without months of build.",
      },
      {
        title: "Internal software others want to buy",
        body: "Some businesses build a tool for themselves and realise others have the same problem. We help productise it for multiple customers.",
      },
      {
        title: "Billing and plans handled manually",
        body: "Invoicing subscribers by hand doesn't scale. Automated subscriptions, trials, upgrades and dunning keep revenue predictable.",
      },
      {
        title: "A product struggling to grow",
        body: "Slow pages, tangled code and missing monitoring make every new feature harder. Refactoring and scaling work restores momentum.",
      },
    ],
    groups: [
      {
        title: "Product foundations",
        body: "Scoping, architecture and a first release designed to validate demand quickly and safely.",
        items: ["SaaS Product Development", "SaaS MVP Development", "Custom Web-Based Products", "Business Management Platforms"],
      },
      {
        title: "Platform architecture",
        body: "Tenant-aware data, roles and permissions, and admin tooling that let one codebase serve many customers.",
        items: ["Multi-Tenant Applications", "User Management Systems", "SaaS Dashboards"],
      },
      {
        title: "Revenue & integrations",
        body: "Recurring billing through Indian and international gateways, plus the integrations customers expect.",
        items: ["Subscription Systems", "Payment Integrations", "Third-Party Integrations"],
      },
      {
        title: "Run & grow",
        body: "Monitoring, maintenance and performance work that keep the product dependable as usage increases.",
        items: ["Product Maintenance", "Software Scaling"],
      },
    ],
    deliverables: [
      "Product scope, user journeys and a release roadmap",
      "Technical architecture document covering tenancy, auth and data",
      "Working MVP deployed to production infrastructure",
      "Subscription billing with plans, trials and invoices",
      "Admin dashboard for managing tenants, users and plans",
      "Monitoring, error tracking and a maintenance plan",
    ],
    approach: [
      {
        title: "Define the core value",
        body: "We identify the one problem the product must solve brilliantly and the smallest feature set that proves it.",
      },
      {
        title: "Lay durable foundations",
        body: "Authentication, tenancy and billing are designed carefully up front because they are costly to retrofit.",
      },
      {
        title: "Ship and observe",
        body: "We launch to early users, instrument usage and use evidence to decide what to build next.",
      },
      {
        title: "Scale deliberately",
        body: "As customers grow, we optimise performance, harden infrastructure and add capacity where data shows the need.",
      },
    ],
    relatedIndustries: ["education", "healthcare", "travel-tourism"],
    relatedDivisions: ["cloud-hosting", "ai-automation", "digital-product-development"],
    faqs: [
      {
        question: "What is an MVP, and how small should it be?",
        answer:
          "A minimum viable product is the smallest version that lets real users get value and gives you evidence about demand. It should solve the core problem well, even if many secondary features are missing. We help you decide what to leave out.",
      },
      {
        question: "Which payment gateways can you integrate for subscriptions?",
        answer:
          "We integrate gateways that support recurring payments for Indian and international customers, such as Razorpay and Stripe, chosen based on your markets, pricing model and compliance needs.",
      },
      {
        question: "How do you keep each customer's data separate?",
        answer:
          "Multi-tenant products need isolation designed into the data layer and every query. We choose an approach — shared schema with strict tenant scoping, or separate databases — based on your security needs and scale.",
      },
      {
        question: "Can you take over an existing SaaS codebase?",
        answer:
          "Yes. We begin with a code and infrastructure review, document risks and quick wins, and then agree a plan for stabilising and extending the product.",
      },
    ],
  },
  {
    slug: "ai-automation",
    number: "06",
    name: "AI, Automation & Integrations",
    shortName: "AI & Automation",
    summary:
      "Chatbots, AI assistants and workflow automation that take repetitive work off your team's plate.",
    heroTitle: "Practical AI and automation for everyday business work",
    heroIntro:
      "We apply AI and automation where they genuinely save time — answering routine questions, qualifying leads, moving data between systems and producing reports — with people kept in control.",
    metaTitle: "AI Chatbots, AI Agents & Business Process Automation",
    metaDescription:
      "AI chatbot and assistant development, AI agents, AI integrations, business process and workflow automation, lead qualification, automated reporting and API integrations.",
    overview: [
      "AI is useful when it's pointed at a specific, repetitive task with clear success criteria — and much less useful as a vague ambition. We start by finding the work your team does over and over: answering the same questions, copying data, chasing approvals, compiling reports.",
      "Then we choose the simplest tool that solves it. Sometimes that's a large language model grounded in your own documents; often it's a straightforward automation between two systems. We design with review steps, logging and fallbacks so you can trust the output and see what happened.",
    ],
    problems: [
      {
        title: "The same questions, all day",
        body: "Pricing, availability, order status and policies are asked repeatedly. An assistant grounded in your information can answer instantly and hand over to staff when needed.",
      },
      {
        title: "Slow lead response",
        body: "Leads cool quickly. Automated qualification and routing can reply in minutes and send promising enquiries straight to the right person.",
      },
      {
        title: "Copy-paste between tools",
        body: "Re-entering the same details into a CRM, sheet and invoice wastes hours. Integrations move the data once, accurately.",
      },
      {
        title: "Reports nobody has time to build",
        body: "Scheduled reports compiled automatically from your systems give owners a regular view without manual effort.",
      },
    ],
    groups: [
      {
        title: "Conversational AI",
        body: "Chatbots and assistants for websites and messaging channels, grounded in your content and connected to your systems.",
        items: ["AI Chatbot Development", "AI Assistants", "Intelligent Customer Support"],
      },
      {
        title: "AI in your tools",
        body: "AI features added to existing software and agents that complete multi-step tasks under defined rules.",
        items: ["AI Integrations", "AI-Powered Business Tools", "AI Agent Development"],
      },
      {
        title: "Automation",
        body: "Rule-based workflows that remove manual steps from sales, operations and finance processes.",
        items: [
          "Business Process Automation",
          "Workflow Automation",
          "Lead Qualification Automation",
          "Automated Reporting",
        ],
      },
      {
        title: "Integration",
        body: "Reliable connections between the applications you use, with error handling and logs.",
        items: ["API Integrations", "Custom Automation Solutions"],
      },
    ],
    deliverables: [
      "An automation opportunity review with estimated time saved",
      "Process diagrams showing what is automated and where people review",
      "Configured assistants, agents or workflows in your accounts",
      "Guardrails: escalation rules, logging and usage limits",
      "Testing against real examples before go-live",
      "Monitoring and a plan for improving accuracy over time",
    ],
    approach: [
      {
        title: "Find the repetitive work",
        body: "We interview your team, measure where time goes and shortlist tasks that are frequent, rule-based or text-heavy.",
      },
      {
        title: "Prototype on real examples",
        body: "A small proof of concept is tested with your actual questions, documents or data to check it performs well enough.",
      },
      {
        title: "Integrate with oversight",
        body: "The solution is connected to your systems with review points, fallbacks to staff and clear logs.",
      },
      {
        title: "Measure and improve",
        body: "We track accuracy, time saved and edge cases, then refine prompts, rules and data sources.",
      },
    ],
    relatedIndustries: ["travel-tourism", "real-estate", "healthcare"],
    relatedDivisions: ["business-software-crm", "saas-development", "digital-growth-marketing"],
    faqs: [
      {
        question: "Will an AI chatbot give wrong answers to customers?",
        answer:
          "Any AI system can make mistakes, so we design for that. Assistants are grounded in your approved information, limited to relevant topics, and set to hand over to a person when unsure. We test with real questions before launch and review conversations afterwards.",
      },
      {
        question: "Is our business data safe when using AI services?",
        answer:
          "We choose providers and settings that don't use your data for model training where that option exists, limit what data is sent, and avoid sending sensitive personal information unless it's necessary and permitted. We document data flows so you can review them.",
      },
      {
        question: "Do we need AI, or just automation?",
        answer:
          "Often plain automation is the better answer — it's cheaper, faster and fully predictable. We use AI where language understanding or judgement is genuinely needed, such as reading free-text enquiries or summarising documents.",
      },
      {
        question: "Can automation connect to WhatsApp, Google Sheets or our CRM?",
        answer:
          "Yes, as long as the tools offer an API or supported integration. WhatsApp Business messaging, spreadsheets, CRMs, email and payment tools are common connection points.",
      },
    ],
  },
];

export const divisionBySlug = new Map(serviceDivisions.map((d) => [d.slug, d]));

export function getDivision(slug: string): ServiceDivision | undefined {
  return divisionBySlug.get(slug as DivisionSlug);
}

/** Total number of individual capabilities listed across all divisions. */
export const capabilityCount = serviceDivisions.reduce(
  (sum, d) => sum + d.groups.reduce((n, g) => n + g.items.length, 0),
  0,
);
