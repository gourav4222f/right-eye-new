/**
 * Focus services — the services we lead with, each with its own landing
 * page at /services/[slug] (alongside the six broader divisions).
 *
 * Written for people in Delhi NCR searching for a specific service. Copy is
 * practical and locally specific on purpose (Google rewards pages that
 * answer the searcher's real questions). Rules:
 *  - No invented results, client numbers or guarantees of rankings/coverage.
 *  - No prices we have not agreed; quotes are given after a call.
 *  - Keep each page's content unique — never copy a section between pages.
 */

import type { SiteImage } from "@/config/assets";
import { images } from "@/config/assets";
import type { DivisionSlug, Faq, TitledText } from "./services";

export type FocusSlug =
  | "social-media-management"
  | "google-meta-ads"
  | "website-development"
  | "video-production-editing"
  | "public-relations"
  | "seo-services";

export interface FocusService {
  slug: FocusSlug;
  name: string;
  /** Short label for menus and cards. */
  shortName: string;
  summary: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroIntro: string;
  image: SiteImage;
  /** Second image used mid-page. */
  detailImage: SiteImage;
  /** Why this matters for a Delhi NCR business. 2–3 paragraphs. */
  overview: string[];
  /** What is included in the service. */
  included: TitledText[];
  /** Platforms, tools or formats covered. */
  coverage: { label: string; items: string[] };
  /** Practical, locally specific advice — the "informative" part of the page. */
  guide: { title: string; points: TitledText[] };
  process: TitledText[];
  /** Typical monthly or project scopes. No prices — those come in a written quote. */
  scopes: Array<{ name: string; forWho: string; includes: string[] }>;
  /** Portfolio slugs that demonstrate this service (src/data/portfolio.ts). */
  relatedWork: string[];
  relatedDivision: DivisionSlug;
  faqs: Faq[];
}

export const focusServices: FocusService[] = [
  {
    slug: "social-media-management",
    name: "Social Media Management",
    shortName: "Social Media",
    summary: "Monthly content calendars, design, Reels, posting and community management for Instagram, Facebook, YouTube and LinkedIn.",
    metaTitle: "Social Media Management Agency in Delhi — Instagram, Facebook & YouTube",
    metaDescription:
      "Social media management in Delhi NCR from our Rohini office: content calendars, post and Reel design, posting, community management and monthly reports for Instagram, Facebook, YouTube and LinkedIn.",
    heroTitle: "Social media management for Delhi businesses",
    heroIntro:
      "We plan, design, shoot, post and reply — every month — so your Instagram, Facebook, YouTube and LinkedIn pages stay active, on-brand and bring in enquiries, not just likes.",
    image: images.teamLaptop,
    detailImage: images.collabSwatches,
    overview: [
      "For most Delhi businesses, the Instagram page is the second thing a customer checks after Google. A coaching institute in Rohini, a boutique in Kamla Nagar or a clinic in Pitampura is judged on whether its page looks active, professional and trustworthy. A page last updated four months ago quietly loses enquiries to a competitor down the road.",
      "Our social media management covers the whole job: a monthly plan built around your offers and Delhi's calendar, designed posts and Reels, captions in English, Hindi or Hinglish, scheduled publishing, replies to comments and DMs, and a plain-language report of what worked. Your team approves the calendar once a month, and we handle the rest.",
      "Because the same team also runs ads, shoots video and builds websites, your social content connects to everything else: a Reel can be boosted as an ad, link to a landing page that loads fast, and the enquiry lands on WhatsApp or in your CRM.",
    ],
    included: [
      { title: "Monthly content calendar", body: "Post and Reel ideas mapped to your offers, launches, festivals and seasons, sent for approval before the month starts." },
      { title: "Design and copywriting", body: "Branded post designs, carousels and story templates, with captions and hashtags written for each platform." },
      { title: "Reels and short video", body: "Concepts, scripts, shoot direction and edited Reels and Shorts with subtitles, music and cover frames." },
      { title: "Publishing and scheduling", body: "Posts published at the times your audience is active, with consistent frequency across platforms." },
      { title: "Community management", body: "Replies to comments and messages within agreed hours, and enquiries passed to your team on WhatsApp." },
      { title: "Profile optimisation", body: "Bio, highlights, links, contact buttons and Google Business Profile posts kept up to date." },
      { title: "Monthly reporting", body: "Reach, engagement, follower growth, profile visits and enquiries, with what we will change next month." },
    ],
    coverage: {
      label: "Platforms we manage",
      items: ["Instagram", "Facebook", "YouTube & Shorts", "LinkedIn", "Google Business Profile posts", "WhatsApp Business catalogue & status"],
    },
    guide: {
      title: "What works on social media in Delhi",
      points: [
        { title: "Plan around Delhi's calendar", body: "Diwali, Dhanteras, Karva Chauth, Navratri, Holi, Raksha Bandhan and the November–February wedding season drive buying in Delhi. Content and offers planned two to three weeks ahead of these dates perform far better than last-minute posts." },
        { title: "Speak the way your customers do", body: "Hinglish captions and Hindi voice-overs often outperform formal English for local retail, food and services audiences, while B2B and premium brands usually do better in clear English. We test both and keep what your audience responds to." },
        { title: "Reels for reach, carousels for trust", body: "Short video brings new people to your page; carousels, testimonials and behind-the-scenes posts convince them you are real. A healthy mix is roughly three to four Reels to every two static or carousel posts." },
        { title: "Show your location", body: "Tagging your area (Rohini, Pitampura, Netaji Subhash Place), showing your shop or office and featuring your team makes a local business feel trustworthy — and helps people nearby discover you." },
        { title: "Make enquiring effortless", body: "Every post should give one clear next step: a WhatsApp button, a call link or a short form. Social media that does not lead to a conversation rarely pays for itself." },
      ],
    },
    process: [
      { title: "Audit and brief", body: "We review your current pages and competitors, and agree goals, tone, platforms and what an enquiry looks like." },
      { title: "Brand kit and calendar", body: "Templates, colours and fonts, plus the first monthly calendar for your approval." },
      { title: "Create, shoot and publish", body: "Designs and Reels are produced, shoots scheduled where needed, and content published on time." },
      { title: "Engage and report", body: "We manage comments and messages, then report monthly and adjust the next calendar based on results." },
    ],
    scopes: [
      { name: "Starter", forWho: "Shops, clinics and local services getting consistent online", includes: ["2 platforms", "12 posts a month incl. 4 Reels", "Captions and hashtags", "Monthly report"] },
      { name: "Growth", forWho: "Brands that want steady reach and enquiries", includes: ["3 platforms", "20 posts a month incl. 8 Reels", "One shoot day a month", "Community management", "Monthly strategy call"] },
      { name: "Brand", forWho: "Businesses running launches, campaigns and ads together", includes: ["All key platforms", "Custom content volume", "Shoots, influencer and ad creatives", "Paid ads management", "Fortnightly reporting"] },
    ],
    relatedWork: [],
    relatedDivision: "digital-growth-marketing",
    faqs: [
      { question: "How much does social media management cost in Delhi?", answer: "It depends on the number of platforms, how many posts and Reels you need each month, and whether shoots are included. Small local businesses usually start with a two-platform plan; brands running shoots and ads need more. We send a written monthly quote after a short call, with exactly what is included." },
      { question: "Do you shoot content at our location?", answer: "Yes. For businesses in Delhi NCR we can schedule shoot days at your shop, clinic, office or event. Our team is based in Rohini, which makes North and North-West Delhi especially convenient." },
      { question: "Will you reply to comments and messages?", answer: "On plans that include community management, we reply to comments and DMs during agreed hours and pass genuine enquiries to your team on WhatsApp or phone." },
      { question: "Who owns the social media accounts?", answer: "You do. Pages and accounts stay in your business's name; we are added as managers. If you stop working with us, you keep everything." },
      { question: "How soon will we see results?", answer: "A consistent, professional page usually shows higher engagement within the first one to two months. Follower growth and enquiries build over time, and grow faster when organic content is combined with a modest ad budget." },
    ],
  },
  {
    slug: "google-meta-ads",
    name: "Google Ads & Meta Ads Management",
    shortName: "Google & Meta Ads",
    summary: "Search, Maps, YouTube, Instagram and Facebook ad campaigns set up with proper tracking, local targeting and monthly optimisation.",
    metaTitle: "Google Ads & Meta Ads Agency in Delhi — PPC and Lead Generation",
    metaDescription:
      "Google Ads, Facebook and Instagram ads management in Delhi NCR: campaign setup, local targeting, landing pages, conversion tracking and monthly optimisation, with accounts in your name.",
    heroTitle: "Google and Meta ads that bring enquiries, not just clicks",
    heroIntro:
      "We set up and manage Google Search, Maps and YouTube ads, and Instagram and Facebook campaigns, with tracking in place from day one, so you can see what each rupee of ad spend brings back.",
    image: images.deskMug,
    detailImage: images.peopleStudying,
    overview: [
      "Ads are the fastest way for a Delhi business to appear in front of people who are ready to buy, whether that's someone searching \"dentist near Rohini\" or a family planning a wedding scrolling Instagram in Gurugram. But without careful targeting and tracking, the budget disappears into clicks that never call.",
      "We start with measurement: conversion tracking for calls, WhatsApp clicks and form submissions, connected to Google Analytics 4. Then we build tightly targeted campaigns by area, audience and intent, write and design the ads, and send traffic to pages built to convert. Every month we cut what doesn't work and move budget to what does.",
      "Ad spend is paid directly to Google and Meta from your own account. Our fee covers strategy, setup, creative and management, so the two are always transparent.",
    ],
    included: [
      { title: "Account and tracking setup", body: "Google Ads, Meta Business Manager, GA4 and conversion tracking for calls, WhatsApp clicks and forms, all owned by you." },
      { title: "Campaign strategy", body: "Which campaigns to run, in which areas, for which services, with a starting budget split." },
      { title: "Keyword and audience research", body: "Search terms with buying intent, negative keywords to block wasted clicks, and Meta audiences built from interests, lookalikes and retargeting." },
      { title: "Ad copy and creative", body: "Search ads, image and video creatives, carousels and lead forms in English and Hindi." },
      { title: "Landing pages", body: "Fast, focused pages for each campaign, with WhatsApp and call buttons, when your website is not built for it." },
      { title: "Optimisation and reporting", body: "Weekly bid and budget checks, monthly A/B tests, and a report showing cost per lead and lead quality." },
    ],
    coverage: {
      label: "Campaign types",
      items: ["Google Search ads", "Google Maps / local ads", "Performance Max", "YouTube ads", "Instagram & Facebook ads", "Meta lead forms", "WhatsApp click-to-chat ads", "Retargeting"],
    },
    guide: {
      title: "Getting ads right in Delhi NCR",
      points: [
        { title: "Target by radius, not just \"Delhi\"", body: "Delhi NCR is huge. A clinic in Rohini rarely wins patients from Faridabad. Radius targeting of 5–15 km around your location, or by specific areas, keeps the budget on people who can actually visit you." },
        { title: "Track WhatsApp, not just forms", body: "Most Delhi customers prefer to message or call. If your tracking only counts form submissions, you'll underestimate what works. We track call clicks, WhatsApp clicks and forms separately." },
        { title: "Start small, then scale", body: "A short test with a modest daily budget, one or two clear offers and proper tracking tells you your real cost per lead. Scaling after that is a data-backed decision, not a gamble." },
        { title: "Block wasted searches", body: "In Delhi searches, words like \"job\", \"free\", \"course\" or competitors' names often bring the wrong clicks. Negative keyword lists are reviewed weekly." },
        { title: "Follow up fast", body: "A lead contacted within minutes is far more likely to convert than one called the next day. We set up instant WhatsApp or email alerts, and automated replies where useful." },
      ],
    },
    process: [
      { title: "Audit and goals", body: "We review any existing accounts and agree target cost per lead, areas and services." },
      { title: "Tracking first", body: "Conversion tracking is installed and tested before any money is spent." },
      { title: "Launch and learn", body: "Campaigns go live with a test budget; the first two to four weeks show what converts." },
      { title: "Optimise and scale", body: "Budget moves to the best campaigns, creative is refreshed, and results are reported monthly." },
    ],
    scopes: [
      { name: "Single platform", forWho: "Local businesses starting with Google or Meta", includes: ["One platform", "Up to 3 campaigns", "Conversion tracking", "Monthly report"] },
      { name: "Google + Meta", forWho: "Businesses generating leads across search and social", includes: ["Both platforms", "Landing page", "Creative refresh monthly", "Weekly optimisation", "Monthly call"] },
      { name: "Performance", forWho: "Higher budgets, multiple services or locations", includes: ["Full-funnel campaigns", "Multiple landing pages", "Retargeting and lookalikes", "CRM / WhatsApp integration", "Fortnightly reporting"] },
    ],
    relatedWork: [],
    relatedDivision: "digital-growth-marketing",
    faqs: [
      { question: "What budget do I need for Google Ads in Delhi?", answer: "It depends on your industry and how competitive the searches are. Many local businesses start with a modest daily budget to measure cost per lead, then increase it once they know the numbers. We recommend a starting budget in your proposal, based on keyword research for your area." },
      { question: "Is the ad spend included in your fee?", answer: "No. Ad spend is paid directly to Google and Meta from your own account. Our fee is for strategy, setup, creative and management, so you always see exactly what was spent on ads." },
      { question: "Google Ads or Meta Ads — which is better?", answer: "Google captures people already searching for what you offer, which suits services and urgent needs. Meta (Instagram and Facebook) creates demand among people who match your audience, which suits products, food, fashion, events and real estate. Many businesses use both." },
      { question: "Can you run ads only for certain areas of Delhi?", answer: "Yes. We can target by radius around your location, by PIN code or specific areas such as Rohini, Pitampura, Dwarka or Gurugram, and exclude places you don't serve." },
      { question: "How quickly do ads start working?", answer: "Ads can bring enquiries within days of launch. The first two to four weeks are a learning period in which we find the best keywords, audiences and creatives; results usually improve after that." },
    ],
  },
  {
    slug: "website-development",
    name: "Website Design & Development",
    shortName: "Website Development",
    summary: "Fast, mobile-first business websites, booking sites, listing portals and e-commerce stores, built for SEO and enquiries.",
    metaTitle: "Website Design & Development Company in Delhi — Rohini",
    metaDescription:
      "Website design and development in Delhi NCR: business websites, booking and listing sites, e-commerce and CMS, built mobile-first and SEO-ready, with WhatsApp, Google Maps and analytics set up.",
    heroTitle: "Websites that load fast, rank well and bring enquiries",
    heroIntro:
      "From a five-page business site to booking portals and online stores, we design and build websites that work on every phone, are ready for Google from day one and turn visitors into calls and WhatsApp messages.",
    image: images.deviceMarble,
    detailImage: images.teamWorkspace,
    overview: [
      "Our team has designed and built 200+ websites, including booking sites for travel and cab operators, property listing portals, healthcare service sites, CMS platforms and workflow tools. You can visit several of them live on our work page.",
      "Every site we build is mobile-first, because most of your visitors arrive on a phone, often on a patchy connection. Pages are kept light and fast, with clear calls to action: tap to call, WhatsApp chat, enquiry forms and Google Maps directions.",
      "Websites are built SEO-ready: clean page structure, proper titles and descriptions, schema markup, a sitemap and Search Console set up, so your site can start earning traffic from Google, not just from links you share.",
    ],
    included: [
      { title: "Planning and structure", body: "Pages, content and calls to action planned around what your customers search for and need to know." },
      { title: "Custom design", body: "A design that fits your brand, reviewed on desktop and mobile before development." },
      { title: "Development", body: "Built with modern, fast technology (Next.js, WordPress or a CMS where you need to edit content yourself)." },
      { title: "Enquiry features", body: "WhatsApp, click-to-call, forms with email alerts, booking and quote forms, Google Maps and reviews." },
      { title: "SEO and analytics", body: "On-page SEO, schema, sitemap, Google Search Console, GA4 and conversion tracking." },
      { title: "Launch and care", body: "Domain, hosting, SSL, business email and backups set up, plus optional monthly maintenance." },
    ],
    coverage: {
      label: "What we build",
      items: ["Business websites", "Booking & enquiry websites", "Property listing portals", "E-commerce stores", "Landing pages", "CMS & admin panels", "Workflow tools", "Website redesigns"],
    },
    guide: {
      title: "What a good business website needs in 2026",
      points: [
        { title: "Speed on mobile data", body: "A page that takes more than a few seconds to load on 4G loses visitors. Compressed images, minimal plugins and good hosting matter more than fancy effects." },
        { title: "One clear action per page", body: "Decide what you want visitors to do — call, WhatsApp, book or buy — and make that button impossible to miss on every screen." },
        { title: "Proof you are real", body: "Your address, team photos, real project photos, reviews and registration details build trust far more than stock images and slogans." },
        { title: "Pages for each service and area", body: "A separate, genuinely useful page for each main service helps you rank for those searches. Thin copies of the same page for every area do the opposite." },
        { title: "Accounts in your name", body: "Domain, hosting, analytics and admin access should all be registered to your business, so you are never locked in to a developer." },
      ],
    },
    process: [
      { title: "Discovery", body: "We learn about your business, customers and competitors, and agree pages and features in writing." },
      { title: "Design", body: "Homepage and key page designs for review; changes are made before development starts." },
      { title: "Build and review", body: "The site is built on a staging link you can check on your phone, with content added and tested." },
      { title: "Launch and grow", body: "Go live, submit to Google, set up tracking, then maintain and improve it over time." },
    ],
    scopes: [
      { name: "Business website", forWho: "Shops, clinics, consultants and local services", includes: ["5–8 pages", "Mobile-first design", "WhatsApp, call and enquiry forms", "Basic SEO and GA4"] },
      { name: "Booking / listing site", forWho: "Travel, cab, real estate and service operators", includes: ["Service, route or property pages", "Booking or quote forms", "Admin to manage listings", "Local SEO setup"] },
      { name: "E-commerce & custom", forWho: "Online stores and businesses with custom workflows", includes: ["Product catalogue and payments", "Order and customer management", "Integrations (CRM, WhatsApp, shipping)", "Ongoing support"] },
    ],
    relatedWork: ["pp-the-traveller", "elite-properties", "rana-ambulance-service", "jamnagar-cab-line"],
    relatedDivision: "digital-product-development",
    faqs: [
      { question: "How much does a website cost in Delhi?", answer: "A simple business website costs far less than a booking portal or online store. The price depends on the number of pages, custom features, content writing and integrations. We give a fixed written quote after understanding what you need." },
      { question: "How long does it take to build a website?", answer: "A standard business website usually takes two to four weeks once content is ready. Booking sites, portals and e-commerce stores take longer, depending on features. We share a timeline in the proposal." },
      { question: "Will my website be SEO-friendly?", answer: "Yes. Every site includes proper page titles and descriptions, heading structure, schema markup, a sitemap, fast loading and Google Search Console setup. Ongoing SEO is available as a separate service." },
      { question: "Can I update the website myself?", answer: "Yes. Where you need to edit content regularly, we build with a CMS and show your team how to update text, images, listings or blog posts." },
      { question: "Do you provide hosting and maintenance?", answer: "Yes. We can set up hosting, SSL, business email and backups in your name, and offer monthly maintenance for updates, security and small changes." },
    ],
  },
  {
    slug: "video-production-editing",
    name: "Video Production & Editing",
    shortName: "Video Production",
    summary: "Reels, Shorts, brand films, product and testimonial videos — scripted, shot in Delhi NCR and edited for every platform.",
    metaTitle: "Video Production & Editing Agency in Delhi — Reels, Ads & Brand Films",
    metaDescription:
      "Video production and editing in Delhi NCR: Instagram Reels, YouTube Shorts, ad videos, brand films, product shoots, testimonials and podcasts — scripted, shot and edited with subtitles.",
    heroTitle: "Video that stops the scroll and explains your business",
    heroIntro:
      "We script, shoot and edit Reels, Shorts, ad creatives, brand films and testimonial videos for Delhi NCR businesses, then cut each one for Instagram, YouTube, ads and your website.",
    image: images.heroFigure,
    detailImage: images.notFound,
    overview: [
      "Video is now the main way people discover businesses on Instagram and YouTube. A 30-second Reel showing your kitchen, your clinic or your finished project often does more for trust than any amount of text.",
      "We handle the full process: ideas and scripts, shoot planning, filming at your location in Delhi NCR, editing with subtitles, music, graphics and colour correction, and versions sized for every platform. You can also send us your own raw footage for editing only.",
      "Because our team also manages social media and ads, the videos are made with a purpose: hooks in the first two seconds for Reels, clear offers for ads, and longer explainers for your website and YouTube.",
    ],
    included: [
      { title: "Concepts and scripts", body: "Hooks, storyboards and scripts in English, Hindi or Hinglish, written for each platform." },
      { title: "Shoot planning", body: "Shot lists, location checks, talent and props coordination, scheduled around your business hours." },
      { title: "On-location shoots", body: "Filming at your shop, office, site or event across Delhi NCR, with lighting and audio." },
      { title: "Editing and motion graphics", body: "Cuts, transitions, subtitles, music, logo animation, text overlays and colour grading." },
      { title: "Platform versions", body: "9:16 for Reels and Shorts, 1:1 and 4:5 for feeds, 16:9 for YouTube and websites." },
      { title: "Editing-only service", body: "Send your raw footage or phone videos; we turn them into polished Reels and ads." },
    ],
    coverage: {
      label: "Video types",
      items: ["Instagram Reels", "YouTube Shorts & videos", "Ad creatives", "Brand films", "Product videos", "Client testimonials", "Event coverage", "Podcasts & interviews", "Explainer animations"],
    },
    guide: {
      title: "Making video work for your business",
      points: [
        { title: "Hook in the first two seconds", body: "On Reels and Shorts, viewers decide almost instantly whether to keep watching. Open with the result, the problem or a surprising moment, not your logo." },
        { title: "Always add subtitles", body: "Many people watch with the sound off, in metros, offices and at home. Burned-in subtitles in the language your customers use keep them watching." },
        { title: "Batch your shoots", body: "One well-planned shoot day can produce a month of Reels. Planning eight to twelve short ideas before the camera rolls saves time and money." },
        { title: "Real people build trust", body: "Your team, your customers and your workplace on camera are more convincing than stock footage. Customer testimonial videos are among the most persuasive content a local business can post." },
        { title: "One video, many uses", body: "A brand film can be cut into Reels, ad creatives, website headers and WhatsApp status clips. We plan the edits from the start." },
      ],
    },
    process: [
      { title: "Brief", body: "Goals, audience, platforms and the message, agreed with references you like." },
      { title: "Script and plan", body: "Scripts, shot list and schedule for your approval." },
      { title: "Shoot", body: "Filming at your location in Delhi NCR, typically completed in a half or full day." },
      { title: "Edit and deliver", body: "First cut for feedback, revisions, then final files for every platform." },
    ],
    scopes: [
      { name: "Editing only", forWho: "You shoot, we edit", includes: ["Reels and Shorts from your footage", "Subtitles and music", "Platform sizes", "Agreed revision rounds"] },
      { name: "Monthly Reels", forWho: "Brands posting video every week", includes: ["Monthly shoot day", "8–12 edited Reels", "Scripts and hooks", "Thumbnails and covers"] },
      { name: "Brand & ad films", forWho: "Launches, campaigns and websites", includes: ["Concept and script", "Full production", "Main film plus cut-downs", "Ad-ready versions"] },
    ],
    relatedWork: [],
    relatedDivision: "digital-growth-marketing",
    faqs: [
      { question: "Do you shoot videos at our location in Delhi?", answer: "Yes. We shoot at shops, offices, clinics, construction sites, restaurants and events across Delhi NCR. Our base in Rohini makes North and West Delhi particularly quick to reach." },
      { question: "Can you edit videos we shot on our phone?", answer: "Yes. Modern phones shoot good footage. Send us your clips and we will edit them into Reels, Shorts or ads with subtitles, music and branding." },
      { question: "How long does a video take to deliver?", answer: "Edited Reels from existing footage usually take a few working days. Shoot-based projects depend on planning and the number of videos; we confirm timelines in the proposal." },
      { question: "Do we get the raw footage?", answer: "Final edited files are always yours to use. Raw footage handover can be included in the scope; tell us at the start if you need it." },
    ],
  },
  {
    slug: "public-relations",
    name: "PR & Online Reputation",
    shortName: "PR & Reputation",
    summary: "Press releases, media outreach, founder profiles, review management and online reputation for Delhi NCR brands.",
    metaTitle: "PR Agency in Delhi — Press Releases, Media Coverage & Online Reputation",
    metaDescription:
      "PR and online reputation management in Delhi NCR: press releases, media outreach, founder and brand stories, launch PR, Google review management and reputation monitoring.",
    heroTitle: "PR and reputation that make people trust you before they call",
    heroIntro:
      "We help Delhi NCR businesses and founders get their story in front of the right media and audiences, and manage the reviews and search results customers see when they look you up.",
    image: images.teamWide,
    detailImage: images.officeWide,
    overview: [
      "Before choosing a business, people search for it. What they find — news mentions, a founder's profile, Google reviews, social pages — decides whether they call. PR and reputation management shape that first impression.",
      "We write and distribute press releases for launches, milestones and events, pitch stories to relevant journalists and publications, build founder profiles and thought-leadership articles, and manage your Google reviews and online mentions.",
      "We never promise guaranteed coverage in specific publications — no honest PR team can. What we do promise is a clear story, well-written material, targeted outreach and a transparent report of who we contacted and what was published.",
    ],
    included: [
      { title: "PR strategy and story", body: "What makes your business newsworthy, the angles to pitch and the audiences to reach." },
      { title: "Press releases", body: "Professionally written releases for launches, openings, funding, awards, partnerships and events." },
      { title: "Media outreach", body: "Targeted pitching to journalists, local Delhi publications, trade media and digital news platforms." },
      { title: "Founder and brand profiles", body: "Interviews, bylined articles, LinkedIn thought leadership and award submissions." },
      { title: "Review management", body: "A process to request genuine Google reviews from happy customers and respond professionally to every review." },
      { title: "Reputation monitoring", body: "Tracking mentions of your brand and handling negative content and crisis responses calmly and quickly." },
    ],
    coverage: {
      label: "PR and reputation services",
      items: ["Press releases", "Media outreach", "Launch & event PR", "Founder branding", "LinkedIn thought leadership", "Award entries", "Google review management", "Crisis communication"],
    },
    guide: {
      title: "Building a reputation that wins customers",
      points: [
        { title: "Reviews are your most visible PR", body: "For local searches in Delhi, your Google rating and recent reviews appear before your website does. Asking every happy customer for a review, and replying to every review, is the cheapest reputation work you can do." },
        { title: "Have a real story", body: "Journalists cover news, not adverts: a new branch, a community initiative, a unique service, a milestone or a founder with an interesting journey. We help you find and frame it." },
        { title: "Local media matters", body: "Neighbourhood news portals, Delhi city sections and industry publications reach exactly the people who can become customers, and are often more achievable than national headlines." },
        { title: "Respond, don't argue", body: "A calm, helpful public reply to a negative review often builds more trust than a page of five-star ratings. We draft responses and help resolve the issue offline." },
        { title: "Never buy fake reviews", body: "Fake reviews break Google's policies and Indian consumer protection rules, and can get your listing penalised. Genuine reviews, steadily collected, always win." },
      ],
    },
    process: [
      { title: "Discovery", body: "We learn your story, goals, audiences and any reputation concerns." },
      { title: "Material", body: "Press kit, releases, founder bio and key messages prepared for approval." },
      { title: "Outreach", body: "Targeted pitching to media and platforms, and review requests to customers." },
      { title: "Report", body: "A list of outlets contacted, coverage achieved, review growth and next steps." },
    ],
    scopes: [
      { name: "Launch PR", forWho: "Openings, launches and events", includes: ["Press release writing", "Distribution and outreach", "Social amplification", "Coverage report"] },
      { name: "Reputation care", forWho: "Local businesses growing their reviews", includes: ["Review request system", "Responses to all reviews", "Monthly monitoring", "Google Business Profile updates"] },
      { name: "Founder & brand PR", forWho: "Founders and growing brands", includes: ["Monthly outreach", "Bylined articles", "LinkedIn thought leadership", "Award submissions"] },
    ],
    relatedWork: [],
    relatedDivision: "digital-growth-marketing",
    faqs: [
      { question: "Can you guarantee coverage in newspapers?", answer: "No honest PR agency can guarantee editorial coverage — journalists decide what they publish. We maximise your chances with a strong story and targeted outreach, and report exactly who we contacted and what was published. Paid or sponsored placements, where you choose them, are always labelled as such." },
      { question: "How do you get more Google reviews?", answer: "We set up a simple review request process — a short link or QR code sent after each sale or service — so happy customers can leave a review in seconds. We never post fake reviews, which breaks Google's rules and Indian consumer law." },
      { question: "Can you remove negative reviews?", answer: "Genuine negative reviews can't be removed just because they're negative, but reviews that break Google's policies (spam, fake, offensive) can be flagged for removal. For genuine complaints, a professional response and resolution often turns the situation around." },
      { question: "Do you work with founders on personal branding?", answer: "Yes. We help founders build a credible profile through LinkedIn content, interviews, articles and speaking or award opportunities." },
    ],
  },
  {
    slug: "seo-services",
    name: "SEO & Content",
    shortName: "SEO & Content",
    summary: "Local SEO, Google Business Profile, technical SEO and helpful content that brings steady traffic and enquiries from Google.",
    metaTitle: "SEO Company in Delhi — Local SEO, Google Business Profile & Content",
    metaDescription:
      "SEO services in Delhi NCR: local SEO and Google Business Profile optimisation, technical SEO, keyword research, content writing and monthly reporting, from our Rohini team.",
    heroTitle: "SEO that gets your business found in Delhi",
    heroIntro:
      "Local SEO, Google Business Profile, technical fixes and genuinely helpful content, so customers in your area find you on Google Search and Maps when they need what you sell.",
    image: images.articlePlanning,
    detailImage: images.peopleStudying,
    overview: [
      "When someone in Delhi searches \"physiotherapist in Rohini\", \"website designer near me\" or \"best coaching in Pitampura\", Google shows a map with three businesses, then a list of websites. Appearing in those places brings enquiries every day without paying per click.",
      "Our SEO starts with the basics that most local businesses miss: a complete, active Google Business Profile, consistent name, address and phone details across directories, a fast website with a page for each service, and genuine reviews.",
      "Then we build steadily: technical fixes, keyword-focused service pages, helpful articles that answer real customer questions, and links from relevant local and industry websites. We follow Google's guidelines for helpful, people-first content, which protects your rankings from algorithm updates.",
    ],
    included: [
      { title: "SEO audit", body: "Technical health, speed, indexing, content gaps and how you compare with competitors in your area." },
      { title: "Keyword research", body: "The searches your customers actually use, including local and Hindi/Hinglish variations." },
      { title: "Google Business Profile", body: "Categories, services, photos, posts, Q&A and review responses kept complete and active." },
      { title: "On-page and technical SEO", body: "Titles, headings, internal links, schema markup, speed and mobile fixes." },
      { title: "Content writing", body: "Service pages and helpful articles written by people who understand your industry." },
      { title: "Local citations and links", body: "Consistent listings on trusted directories and links from relevant websites." },
      { title: "Monthly reporting", body: "Rankings, Search Console traffic, Maps views, calls and enquiries in plain language." },
    ],
    coverage: {
      label: "SEO services",
      items: ["Local SEO", "Google Business Profile optimisation", "Technical SEO", "Keyword research", "Content writing", "E-commerce SEO", "Link building", "SEO audits"],
    },
    guide: {
      title: "Local SEO essentials for Delhi businesses",
      points: [
        { title: "Your Google Business Profile comes first", body: "For \"near me\" searches, the map results appear above websites. Choose the right primary category, add every service, upload real photos regularly and post updates — an active profile ranks better." },
        { title: "Keep your details identical everywhere", body: "Your business name, address and phone number should match exactly on your website, Google, JustDial, IndiaMART, Facebook and other listings. Inconsistencies confuse Google." },
        { title: "One strong page per service", body: "A detailed page for each service you offer — with real information, photos and FAQs — ranks better than a single page listing everything." },
        { title: "Write for customers, not keywords", body: "Google rewards content that genuinely answers questions. Pages stuffed with \"best agency in Delhi\" repeated twenty times do the opposite." },
        { title: "Be patient, and avoid shortcuts", body: "SEO builds over months. Agencies promising first-page rankings in a week often use tactics that get sites penalised. Steady, honest work lasts." },
      ],
    },
    process: [
      { title: "Audit", body: "Technical, content and local review, with a prioritised action list." },
      { title: "Foundations", body: "Google Business Profile, tracking, technical fixes and core service pages." },
      { title: "Content and authority", body: "Monthly content, citations and link building based on keyword priorities." },
      { title: "Measure and refine", body: "Monthly reports and a plan for the next month based on what is moving." },
    ],
    scopes: [
      { name: "Local SEO", forWho: "Single-location shops, clinics and services", includes: ["Google Business Profile", "Citations", "On-page fixes", "Review strategy", "Monthly report"] },
      { name: "SEO Growth", forWho: "Businesses targeting several services or areas", includes: ["Technical SEO", "4 content pieces a month", "Link building", "Rank and traffic tracking"] },
      { name: "E-commerce SEO", forWho: "Online stores", includes: ["Category and product optimisation", "Schema and feeds", "Content and links", "Search Console monitoring"] },
    ],
    relatedWork: ["jamnagar-cab-line", "mathura-cab-hub", "rana-ambulance-service"],
    relatedDivision: "digital-growth-marketing",
    faqs: [
      { question: "How long does SEO take to show results in Delhi?", answer: "Google Business Profile improvements can increase Maps visibility within weeks. Ranking for competitive Delhi keywords on Google Search usually takes three to six months or more, depending on competition and your site's history. We don't promise specific rankings — anyone who does is guessing." },
      { question: "What is local SEO?", answer: "Local SEO helps your business appear when people nearby search for your services, especially in Google Maps and \"near me\" results. It focuses on your Google Business Profile, reviews, local listings and location-relevant website content." },
      { question: "Do you write the content?", answer: "Yes. Our writers create service pages, blog articles and FAQs based on keyword research and your input, so the content is accurate and genuinely useful." },
      { question: "Will you show me what you've done each month?", answer: "Yes. Every month you get a report of the work completed, rankings, Search Console clicks, Google Business Profile views, calls and enquiries, with next month's priorities." },
    ],
  },
];

export const focusBySlug = new Map(focusServices.map((s) => [s.slug, s]));

export function getFocusService(slug: string): FocusService | undefined {
  return focusBySlug.get(slug as FocusSlug);
}
