import type { Article } from "./insights";

/**
 * Delhi-focused guides. Practical, original and written for business owners
 * searching these questions — not keyword filler. No invented statistics:
 * figures are described as ranges or "depends on" with the reasons.
 */
export const delhiArticles: Article[] = [
  {
    slug: "social-media-marketing-cost-delhi",
    title: "How much does social media marketing cost in Delhi? A 2026 guide for business owners",
    description:
      "What decides the price of social media management in Delhi NCR, what a fair monthly plan includes, the hidden costs to ask about and how to compare agency quotes.",
    category: "Marketing",
    publishedAt: "2026-11-22",
    author: "RightEyeTechnology Team",
    readingMinutes: 7,
    status: "published",
    body: [
      {
        type: "p",
        text: "If you've asked three agencies in Delhi for a social media quote, you've probably received three very different numbers. That isn't because someone is cheating you — it's because \"social media marketing\" can mean anything from a few designed posts a month to a full content team shooting Reels at your shop every week. This guide explains what drives the price, so you can compare quotes properly.",
      },
      { type: "h2", id: "what-decides-price", text: "What decides the price" },
      {
        type: "ul",
        items: [
          "Number of platforms. Managing Instagram and Facebook together is common; adding YouTube, LinkedIn or Google Business Profile posts adds work.",
          "Content volume. Twelve posts a month is very different from twenty-five, especially when many are Reels.",
          "Reels and video. Short video takes far more time than a static design: ideas, scripting, shooting, editing, subtitles and covers.",
          "Shoot days. If the agency visits your location to film and photograph, travel and crew time are part of the cost.",
          "Community management. Replying to comments and DMs every day is a real job, and is often excluded from cheaper plans.",
          "Ads. Running paid campaigns is usually a separate management fee — and the ad budget itself goes to Meta, not the agency.",
          "Strategy and reporting. A monthly plan, a review call and a clear report take senior time, and are worth asking for.",
        ],
      },
      { type: "h2", id: "typical-plans", text: "What typical plans look like" },
      {
        type: "p",
        text: "Most small and medium businesses in Delhi NCR fall into one of three levels. Prices vary between agencies, but the scope is what you should compare.",
      },
      {
        type: "ol",
        items: [
          "Starter: two platforms, around 10–15 posts a month with a few Reels, captions and hashtags, and a basic monthly report. Suits shops, clinics and local services getting consistent online.",
          "Growth: three platforms, 18–25 posts a month with more Reels, a monthly shoot, community management and a strategy call. Suits brands that want steady reach and enquiries.",
          "Brand / campaign: all key platforms, custom content volume, regular shoots, influencer collaborations and paid ads management. Suits businesses running launches or multiple locations.",
        ],
      },
      {
        type: "callout",
        text: "Ask every agency for the same thing: a written list of platforms, number of posts and Reels per month, whether shoots and community management are included, how many revisions you get, and who owns the accounts.",
      },
      { type: "h2", id: "hidden-costs", text: "Costs that are easy to miss" },
      {
        type: "ul",
        items: [
          "Ad spend, which is paid to Meta or Google on top of any management fee.",
          "Stock music, stock photos or premium design assets, if the agency doesn't create everything itself.",
          "Influencer or model fees for shoots.",
          "Extra revision rounds beyond what the plan includes.",
          "Set-up fees for brand kits, templates or profile clean-ups in the first month.",
        ],
      },
      { type: "h2", id: "red-flags", text: "Red flags when comparing quotes" },
      {
        type: "ul",
        items: [
          "Guaranteed follower numbers. Followers can be bought, and bought followers don't buy from you.",
          "The agency wants your pages created in its own name. Your business should always own its accounts.",
          "No mention of who your audience is or what an enquiry looks like.",
          "Reports that only show likes, with nothing about profile visits, messages or calls.",
        ],
      },
      { type: "h2", id: "get-more", text: "How to get more from any budget" },
      {
        type: "p",
        text: "Plan content around Delhi's calendar — Diwali, Navratri, Holi and the November-to-February wedding season — at least two weeks ahead. Show real people and your real workplace. Give every post one clear action, such as a WhatsApp button. And boost your two or three best organic posts each month with a small ad budget instead of spreading it thin.",
      },
      {
        type: "p",
        text: "If you'd like a written quote for your business, our social media management team in Rohini can send one after a short call.",
      },
    ],
  },
  {
    slug: "rank-on-google-maps-delhi",
    title: "How to rank on Google Maps in Delhi: a local SEO checklist",
    description:
      "A step-by-step local SEO checklist for Delhi businesses: Google Business Profile, categories, photos, reviews, NAP consistency, local pages and what to avoid.",
    category: "Marketing",
    publishedAt: "2026-11-22",
    author: "RightEyeTechnology Team",
    readingMinutes: 8,
    status: "published",
    body: [
      {
        type: "p",
        text: "When someone in Delhi searches \"dentist in Rohini\" or \"cake shop near me\", Google shows a map with three businesses before any website. Those three spots get a large share of the calls and direction requests. Google says local rankings depend mainly on three things: relevance (do you match the search?), distance (how close are you?) and prominence (how well known and well reviewed are you?). You can't move your shop, but you can improve the other two.",
      },
      { type: "h2", id: "profile", text: "1. Complete your Google Business Profile properly" },
      {
        type: "ul",
        items: [
          "Choose the most specific primary category that describes your business, then add relevant secondary categories.",
          "Use your real business name — adding keywords like \"Best Dentist Delhi\" to the name breaks Google's guidelines and can get the listing suspended.",
          "Add every service or product with a short description.",
          "Set accurate hours, including holiday hours for Diwali and other closures.",
          "Write a clear description of what you do and which areas you serve.",
        ],
      },
      { type: "h2", id: "photos", text: "2. Add real photos, regularly" },
      {
        type: "p",
        text: "Upload photos of your storefront (so people can find you from the road), your interior, your team and your work. New photos every few weeks signal an active business. Avoid stock images — customers and Google can tell.",
      },
      { type: "h2", id: "reviews", text: "3. Build a steady stream of genuine reviews" },
      {
        type: "p",
        text: "Ask every happy customer for a review, with a short link or a QR code at the counter. Reply to every review, positive or negative, politely and specifically. Never buy reviews or post them yourself: it violates Google's policies and Indian consumer protection rules on fake reviews, and listings caught doing it can be penalised.",
      },
      { type: "h2", id: "nap", text: "4. Keep your name, address and phone identical everywhere" },
      {
        type: "p",
        text: "Your business name, address and phone number (NAP) should match exactly on your website, Google, JustDial, IndiaMART, Facebook, Instagram and any directory. In Delhi, addresses are written many ways — \"Sector 11, Rohini\", \"Rohini Sec-11\", with or without a landmark. Pick one format and use it everywhere.",
      },
      { type: "h2", id: "website", text: "5. Make your website support your listing" },
      {
        type: "ul",
        items: [
          "Show your full address, phone and a map on your contact page.",
          "Create one detailed page per main service, mentioning the area you serve naturally.",
          "Add LocalBusiness structured data so Google can read your details reliably.",
          "Make sure the site loads fast on mobile and has a tap-to-call button.",
        ],
      },
      { type: "h2", id: "posts", text: "6. Use Google Business Profile posts and Q&A" },
      {
        type: "p",
        text: "Post offers, events and updates at least a few times a month. Add common questions and answers yourself — parking, payment options, home visits — so customers don't have to call to ask.",
      },
      { type: "h2", id: "avoid", text: "What to avoid" },
      {
        type: "ul",
        items: [
          "Creating listings at addresses where you don't operate. Virtual offices are against Google's guidelines for most categories.",
          "Making dozens of near-identical website pages for every Delhi locality. Google treats these as doorway pages.",
          "Changing your business name or category often, which can trigger re-verification.",
        ],
      },
      {
        type: "callout",
        text: "Local SEO is steady work rather than a one-time fix. Most businesses see Maps visibility improve within weeks of fixing their profile, and keep improving as reviews and content build up.",
      },
    ],
  },
  {
    slug: "google-ads-vs-meta-ads-local-business",
    title: "Google Ads vs Meta Ads: which is better for a local business in Delhi NCR?",
    description:
      "How Google Search ads and Instagram/Facebook ads differ, which businesses each suits best, how to start with a small budget and how to track WhatsApp enquiries.",
    category: "Marketing",
    publishedAt: "2026-11-22",
    author: "RightEyeTechnology Team",
    readingMinutes: 6,
    status: "published",
    body: [
      {
        type: "p",
        text: "Both platforms can bring customers to a Delhi business. The difference is intent. Google Ads show up when someone is already searching for what you offer. Meta Ads (Instagram and Facebook) show up while someone is scrolling, so they create interest in people who match your audience but weren't looking yet.",
      },
      { type: "h2", id: "google", text: "When Google Ads work best" },
      {
        type: "ul",
        items: [
          "Urgent or high-intent needs: ambulance, plumber, AC repair, cab booking, emergency dental care.",
          "Services people compare and research: coaching classes, clinics, lawyers, CA firms, interior designers.",
          "Businesses with a strong Google Business Profile, where ads and Maps visibility reinforce each other.",
        ],
      },
      { type: "h2", id: "meta", text: "When Meta Ads work best" },
      {
        type: "ul",
        items: [
          "Visual products: fashion, jewellery, food, home décor, real estate projects.",
          "Events, launches, offers and festive sales where you need to create demand quickly.",
          "Lead generation with instant forms or click-to-WhatsApp ads, which suit customers who prefer to chat.",
        ],
      },
      { type: "h2", id: "both", text: "Why many businesses use both" },
      {
        type: "p",
        text: "A common pattern: Meta Ads introduce your brand to people in your area, and Google Ads catch them later when they search for you or your service. Retargeting on either platform reminds people who visited your website but didn't enquire.",
      },
      { type: "h2", id: "start-small", text: "How to start with a small budget" },
      {
        type: "ol",
        items: [
          "Set up tracking first: calls, WhatsApp clicks and form submissions, connected to Google Analytics 4.",
          "Pick one or two services with good margins and a clear offer.",
          "Target a sensible radius around your location rather than all of Delhi NCR.",
          "Run a test for two to four weeks to find your real cost per enquiry.",
          "Move budget to what works and pause what doesn't.",
        ],
      },
      {
        type: "callout",
        text: "In Delhi, many customers would rather message than fill a form. If your tracking ignores WhatsApp clicks, you'll undercount what your ads are really doing.",
      },
      { type: "h2", id: "mistakes", text: "Common mistakes" },
      {
        type: "ul",
        items: [
          "Sending ad traffic to a slow homepage instead of a focused landing page.",
          "Not adding negative keywords, so ads show for searches like \"jobs\" or \"free\".",
          "Judging Meta Ads only on likes rather than enquiries.",
          "Calling leads back the next day instead of within minutes.",
        ],
      },
      {
        type: "p",
        text: "Not sure where to start? Our Google and Meta ads team can review your business and recommend a starting plan and budget for your area.",
      },
    ],
  },
];
