/**
 * Industry solutions. Each industry has its own page at /solutions/[slug]
 * with content written for that sector's real problems. Benefits describe
 * what a solution is designed to do — never guaranteed results.
 */

import type { DivisionSlug, Faq, TitledText } from "./services";

export type SolutionSlug =
  | "travel-tourism"
  | "restaurants"
  | "real-estate"
  | "healthcare"
  | "retail-ecommerce"
  | "education";

export interface IndustrySolution {
  slug: SolutionSlug;
  name: string;
  /** Card line. */
  summary: string;
  tags: string[];
  heroTitle: string;
  heroIntro: string;
  metaTitle: string;
  metaDescription: string;
  introduction: string[];
  challenges: TitledText[];
  solutions: TitledText[];
  relevantDivisions: Array<{ slug: DivisionSlug; reason: string }>;
  automation: string[];
  growth: string[];
  /** How the pieces connect, written as an ordered customer/operations journey. */
  connected: TitledText[];
  benefits: string[];
  faqs: Faq[];
}

export const industrySolutions: IndustrySolution[] = [
  {
    slug: "travel-tourism",
    name: "Travel & Tourism",
    summary: "Enquiry-to-itinerary systems, booking engines and marketing for tour operators and travel agencies.",
    tags: ["Travel CRM", "Booking engine", "WhatsApp follow-up", "Itinerary builder"],
    heroTitle: "Technology for travel businesses that sell experiences, not just tickets",
    heroIntro:
      "Tour operators, travel agencies and destination businesses juggle enquiries, custom quotes, supplier rates and seasonal demand. We build the systems and marketing that keep all of it organised.",
    metaTitle: "Travel Agency Software, Travel CRM & Tourism Websites",
    metaDescription:
      "Travel CRM, itinerary and quotation tools, booking and payment systems, tourism websites, SEO and WhatsApp automation for tour operators and travel agencies in India.",
    introduction: [
      "Travel is sold through conversation. A family planning a Himachal trip or a company booking an offsite will ask questions, compare quotes and change dates several times before paying. Most agencies manage this through phone calls, WhatsApp threads and spreadsheets — which works until enquiry volumes rise in peak season.",
      "The technology that helps most is the kind that keeps every enquiry, quote version and payment in one place, and makes it quick to send a polished itinerary. Around that sits a website that ranks for the destinations you sell and marketing timed to how people plan holidays.",
    ],
    challenges: [
      {
        title: "Enquiries scattered across channels",
        body: "Leads come from the website, Instagram, WhatsApp, calls and travel portals. Without one inbox, follow-ups are missed during the busiest weeks.",
      },
      {
        title: "Slow, manual quotations",
        body: "Building a custom itinerary with hotel, transport and activity costs in a spreadsheet takes time, and every revision means starting again.",
      },
      {
        title: "Supplier rates that keep changing",
        body: "Seasonal pricing, blackout dates and allotments from hotels and transporters are hard to keep current across the team.",
      },
      {
        title: "Strong seasonality",
        body: "Demand spikes around holidays and school breaks. Marketing has to start well before travellers book, and the team needs capacity when it peaks.",
      },
      {
        title: "Payment tracking and reminders",
        body: "Advance, part and final payments for each booking need tracking and polite reminders — usually done by memory today.",
      },
    ],
    solutions: [
      {
        title: "Travel CRM with a unified enquiry inbox",
        body: "Every lead from every source lands in one pipeline with stages such as New, Quoted, Negotiating, Confirmed and Travelled, assigned to the right executive.",
      },
      {
        title: "Itinerary and quotation builder",
        body: "Day-by-day itineraries assembled from a library of hotels, transfers and activities, with costs and margins calculated automatically and a branded PDF or link sent to the client.",
      },
      {
        title: "Package website with online booking",
        body: "Destination and package pages built for search, with enquiry forms, availability and secure online payments for fixed-departure tours.",
      },
      {
        title: "Supplier and rate management",
        body: "A central record of supplier contracts and seasonal rates so quotes always use current prices.",
      },
      {
        title: "Payment schedules and reminders",
        body: "Payment milestones for each booking with automatic reminders by email or WhatsApp, and a clear view of outstanding balances.",
      },
    ],
    relevantDivisions: [
      { slug: "business-software-crm", reason: "Travel CRM, booking and reservation systems, supplier records." },
      { slug: "digital-product-development", reason: "Package websites, booking engines and customer-facing apps." },
      { slug: "digital-growth-marketing", reason: "Destination SEO, seasonal campaigns, Reels and travel content." },
      { slug: "ai-automation", reason: "Enquiry qualification, WhatsApp replies and itinerary drafting." },
    ],
    automation: [
      "Auto-acknowledge new enquiries on WhatsApp or email within minutes",
      "Assign leads by destination, budget or language to the right executive",
      "Draft a first itinerary from a structured enquiry for staff to refine",
      "Send pre-trip documents and checklists a set number of days before travel",
      "Request reviews and referrals automatically after the trip ends",
    ],
    growth: [
      "Destination guides and package pages that answer what travellers search for",
      "Seasonal Google and Meta campaigns planned ahead of booking windows",
      "Short-form video from trips (with consent) for Instagram Reels and YouTube Shorts",
      "Email and WhatsApp lists for past travellers with early-bird offers",
    ],
    connected: [
      { title: "Discover", body: "A traveller finds your destination guide through search or a Reel and opens a package page." },
      { title: "Enquire", body: "Their enquiry enters the CRM, is acknowledged instantly and assigned to an executive." },
      { title: "Quote", body: "The executive builds an itinerary from current supplier rates and sends a branded quote." },
      { title: "Book", body: "The client pays an advance online; the payment schedule and reminders start automatically." },
      { title: "Travel & return", body: "Pre-trip documents go out on time, and after the trip a review request and future offers follow." },
    ],
    benefits: [
      "Fewer missed enquiries in peak season",
      "Faster, consistent quotations across the team",
      "Clear visibility of bookings and outstanding payments",
      "Marketing that builds year-round demand, not just seasonal spikes",
    ],
    faqs: [
      {
        question: "Can the CRM handle custom itineraries as well as fixed packages?",
        answer:
          "Yes. Fixed packages can be booked directly, while custom trips are built in the itinerary tool from your library of hotels, transfers and activities, with each revision saved.",
      },
      {
        question: "Can we connect leads from travel portals and Instagram?",
        answer:
          "Where a portal or platform offers lead export, email notifications or an API, we can route those enquiries into the CRM. We'll check each source during scoping.",
      },
      {
        question: "Do you support multi-currency quotes for international travellers?",
        answer:
          "We can design quotation and payment flows that show prices in other currencies and accept international payments through a suitable gateway.",
      },
    ],
  },
  {
    slug: "restaurants",
    name: "Restaurants & Food",
    summary: "Online ordering, table reservations, kitchen workflows and local marketing for restaurants and cloud kitchens.",
    tags: ["Online ordering", "Reservations", "Restaurant management", "Local SEO"],
    heroTitle: "Restaurant technology that keeps tables full and the kitchen in sync",
    heroIntro:
      "Restaurants, cafés and cloud kitchens work on thin margins and fast service. We help you take direct orders, manage reservations, control stock and stay visible to diners nearby.",
    metaTitle: "Restaurant Management Software, Online Ordering & Marketing",
    metaDescription:
      "Restaurant websites with direct online ordering, table reservation systems, restaurant management and inventory software, local SEO and social media for food businesses.",
    introduction: [
      "Food businesses depend on aggregator apps for reach, but commissions and limited access to customer data make it hard to build a loyal base. At the same time, front-of-house, kitchen and stock management often run on paper tickets and memory.",
      "The right technology mix gives you a direct ordering channel you control, a simple way to manage reservations and orders together, and stock tracking that shows what's actually being used. Local search and social content then bring nearby diners back again.",
    ],
    challenges: [
      {
        title: "Dependence on aggregator platforms",
        body: "Delivery apps bring orders but take significant commissions and own the customer relationship.",
      },
      {
        title: "Missed or double-booked tables",
        body: "Reservations taken by phone and noted on paper lead to no-shows, overbooking and frustrated guests on busy evenings.",
      },
      {
        title: "Kitchen and floor out of sync",
        body: "Orders from dine-in, takeaway and delivery arrive separately, and handwritten tickets get lost during rushes.",
      },
      {
        title: "Food cost and wastage",
        body: "Without recipe-level stock tracking, it's difficult to see where ingredients go and which dishes are profitable.",
      },
      {
        title: "Low visibility in local search",
        body: "Diners search \"near me\" on Google Maps. Incomplete listings, few photos and unanswered reviews mean lost footfall.",
      },
    ],
    solutions: [
      {
        title: "Restaurant website with direct ordering",
        body: "A fast, mobile-first menu with online ordering and payments, so regulars can order directly without aggregator commissions.",
      },
      {
        title: "Table reservation system",
        body: "Online booking with table and time-slot management, confirmations and reminders to reduce no-shows.",
      },
      {
        title: "Restaurant management system",
        body: "Orders from every channel in one queue for the kitchen, with status updates for the floor and a daily sales summary.",
      },
      {
        title: "Inventory and recipe costing",
        body: "Ingredient stock linked to recipes, low-stock alerts and reports that show dish-level food cost.",
      },
      {
        title: "Customer list and loyalty",
        body: "Opt-in contact details from direct orders and reservations, used for offers, birthday messages and repeat-visit campaigns.",
      },
    ],
    relevantDivisions: [
      { slug: "business-software-crm", reason: "Restaurant management, reservations, inventory and order systems." },
      { slug: "digital-product-development", reason: "Ordering websites and apps with payment integration." },
      { slug: "digital-growth-marketing", reason: "Local SEO, Google Business Profile, Instagram and food video." },
      { slug: "ai-automation", reason: "Reservation confirmations, review requests and WhatsApp ordering flows." },
    ],
    automation: [
      "Send booking confirmations and same-day reminders automatically",
      "Alert the manager when key ingredients fall below set levels",
      "Email a daily sales and order-mix summary at closing time",
      "Request a review after a delivered order or completed visit",
      "Answer common questions — timings, location, menu — on WhatsApp",
    ],
    growth: [
      "A complete, regularly updated Google Business Profile with photos and menu",
      "Local SEO for cuisine and neighbourhood searches",
      "Instagram Reels showing dishes, kitchen and team",
      "Offers to opted-in customers on slow weekdays",
    ],
    connected: [
      { title: "Find", body: "A diner nearby searches on Google Maps and sees an up-to-date profile with photos and reviews." },
      { title: "Book or order", body: "They reserve a table or order directly on your website and pay online." },
      { title: "Prepare", body: "The order appears in the kitchen queue alongside dine-in and aggregator orders." },
      { title: "Serve & track", body: "Stock levels update from recipes, and the manager sees the day's sales at close." },
      { title: "Return", body: "A thank-you message and an occasional offer bring the guest back." },
    ],
    benefits: [
      "A direct ordering channel that reduces reliance on commissions",
      "Fewer reservation mix-ups and no-shows",
      "Clearer view of food cost and best-selling dishes",
      "Steady visibility with diners in your area",
    ],
    faqs: [
      {
        question: "Can direct ordering work alongside Zomato and Swiggy?",
        answer:
          "Yes. Most restaurants keep aggregators for reach and add direct ordering for regulars. We can design your management system so all order sources appear in one kitchen queue, subject to what each platform allows.",
      },
      {
        question: "Do we need special hardware?",
        answer:
          "Usually not. Most systems run on tablets, phones or existing computers. If you need receipt or kitchen printers, we check compatibility during scoping.",
      },
      {
        question: "Can the menu be updated by our staff?",
        answer:
          "Yes. We include an admin panel for prices, availability, photos and daily specials, so changes don't need a developer.",
      },
    ],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    summary: "Property listing websites, lead management and site-visit tracking for developers, brokers and agents.",
    tags: ["Property listings", "Lead CRM", "Site visits", "Performance ads"],
    heroTitle: "Real estate technology that turns property enquiries into site visits",
    heroIntro:
      "Developers, brokers and channel partners generate large lead volumes from portals and ads. We help you capture, qualify and follow up every enquiry, and present projects in a way buyers trust.",
    metaTitle: "Real Estate CRM, Property Websites & Lead Generation",
    metaDescription:
      "Real estate websites and property listing platforms, lead management CRM, site-visit scheduling, broker portals, performance marketing and automation for developers and brokers.",
    introduction: [
      "In property, the gap between an enquiry and a site visit is where most deals are lost. Leads arrive from portals, Meta and Google campaigns and walk-ins, often in bursts after a launch. If the first call is late or the details are lost, the buyer moves on.",
      "Technology for real estate focuses on speed and memory: answering quickly, recording every conversation, scheduling visits and reminding sales teams to follow up. A well-structured project website and honest, detailed listings support that process by building trust before the first call.",
    ],
    challenges: [
      {
        title: "High lead volume, uneven quality",
        body: "Campaigns can produce many enquiries, but sorting serious buyers from casual browsers takes time the sales team doesn't have.",
      },
      {
        title: "Slow first response",
        body: "Buyers often enquire with several projects at once. The developer or broker who responds first and clearly has an advantage.",
      },
      {
        title: "Follow-ups that depend on memory",
        body: "Property decisions take weeks or months. Without reminders and history, promising leads go cold.",
      },
      {
        title: "Inventory that changes daily",
        body: "Unit availability, floor plans and pricing must be accurate across the website, sales team and channel partners.",
      },
      {
        title: "Attributing sales to sources",
        body: "Knowing which portal or campaign produced actual bookings — not just leads — is essential for budget decisions.",
      },
    ],
    solutions: [
      {
        title: "Real estate lead management CRM",
        body: "All portal, ad, website and walk-in leads in one pipeline with automatic assignment, call logging, notes and follow-up reminders.",
      },
      {
        title: "Project and listing website",
        body: "Fast project pages with floor plans, amenities, location details, RERA information where applicable and clear enquiry options.",
      },
      {
        title: "Site-visit scheduling",
        body: "Buyers or executives book visit slots, with confirmations, reminders and feedback recorded after each visit.",
      },
      {
        title: "Inventory and pricing management",
        body: "A live view of units, status and price lists shared with sales and channel partners from one source.",
      },
      {
        title: "Broker and channel partner portal",
        body: "Partners register leads, check availability and track their referrals and commissions.",
      },
    ],
    relevantDivisions: [
      { slug: "business-software-crm", reason: "Lead CRM, inventory, site-visit and partner management." },
      { slug: "digital-growth-marketing", reason: "Google and Meta lead campaigns, landing pages and project SEO." },
      { slug: "digital-product-development", reason: "Project websites, listing platforms and partner portals." },
      { slug: "ai-automation", reason: "Instant lead replies, qualification questions and visit reminders." },
    ],
    automation: [
      "Reply to new portal and ad leads within minutes with project details",
      "Ask a few qualifying questions — budget, configuration, timeline — before assignment",
      "Remind buyers and executives about scheduled site visits",
      "Re-engage dormant leads when new inventory or offers are released",
      "Report bookings by lead source each week",
    ],
    growth: [
      "Dedicated landing pages for each project and campaign",
      "Location and project SEO for buyers researching an area",
      "Walkthrough videos and Reels of sample flats and amenities",
      "Lead-quality feedback loops that refine ad targeting",
    ],
    connected: [
      { title: "Attract", body: "A buyer sees a project campaign or finds the project page while researching the locality." },
      { title: "Respond", body: "Their enquiry gets an instant reply with details and is qualified before assignment." },
      { title: "Visit", body: "The executive schedules a site visit; reminders reduce no-shows." },
      { title: "Follow up", body: "Notes and reminders keep the conversation going through negotiation." },
      { title: "Attribute", body: "When the unit is booked, the sale is linked back to its source to guide future spend." },
    ],
    benefits: [
      "Faster first response to every enquiry",
      "Consistent follow-up across long decision cycles",
      "Accurate inventory shared with sales and partners",
      "Marketing budgets guided by bookings rather than lead counts",
    ],
    faqs: [
      {
        question: "Can leads from property portals go straight into the CRM?",
        answer:
          "Many portals provide lead notifications by email, export files or integrations. We connect whichever method each portal supports so leads appear in the CRM automatically.",
      },
      {
        question: "Can you include RERA details on project pages?",
        answer:
          "Yes. We provide fields for registration numbers and disclosures. The information itself must come from you, and we recommend your legal team reviews it.",
      },
      {
        question: "Does the CRM work for brokers as well as developers?",
        answer:
          "Yes. Brokers usually need multi-project listings and owner records, while developers focus on project inventory and channel partners. We configure the system for your model.",
      },
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare & Clinics",
    summary: "Appointment booking, patient communication and clinic management for clinics, diagnostics and practitioners.",
    tags: ["Appointments", "Clinic management", "Patient reminders", "Local SEO"],
    heroTitle: "Technology that makes clinics easier to reach and simpler to run",
    heroIntro:
      "Clinics, diagnostic centres and independent practitioners need patients to find them, book easily and arrive prepared — while the front desk manages calls, schedules and records. We build for both sides.",
    metaTitle: "Clinic Management Software & Healthcare Websites",
    metaDescription:
      "Healthcare and clinic websites, online appointment booking, clinic management systems, patient reminders, secure hosting and responsible local marketing for clinics in India.",
    introduction: [
      "A busy clinic's front desk answers the phone, books appointments, manages walk-ins, handles reports and fields the same questions about timings and fees all day. Patients, meanwhile, want to know which doctor to see, when they're available and how to prepare.",
      "Healthcare technology has to be careful as well as convenient. Patient information is sensitive, so systems must limit who sees what, keep records secure and follow applicable data-protection rules. Marketing must be accurate and responsible. We design with those constraints from the start.",
    ],
    challenges: [
      {
        title: "Phone-only appointment booking",
        body: "Patients often can't get through during peak hours, and staff spend much of the day managing the schedule by phone.",
      },
      {
        title: "No-shows and late cancellations",
        body: "Empty slots that could have gone to other patients reduce capacity and revenue.",
      },
      {
        title: "Repetitive patient questions",
        body: "Timings, fees, preparation instructions and report status are asked repeatedly by phone and WhatsApp.",
      },
      {
        title: "Records spread across paper and tools",
        body: "Visit notes, prescriptions and reports in different places make continuity of care harder and slow down the front desk.",
      },
      {
        title: "Data protection responsibilities",
        body: "Clinics handle sensitive personal data and need sensible access controls, consent and secure storage.",
      },
    ],
    solutions: [
      {
        title: "Clinic website with doctor profiles",
        body: "Clear pages for departments, doctors, timings, fees and preparation guidance, written accurately and reviewed by your medical team.",
      },
      {
        title: "Online appointment booking",
        body: "Patients choose a doctor and slot online, receive confirmation and reminders, and can reschedule without calling.",
      },
      {
        title: "Clinic management system",
        body: "Scheduling, patient records, visit history and billing in one secure system with role-based access for doctors and staff.",
      },
      {
        title: "Patient communication",
        body: "Automated reminders, preparation instructions and follow-up messages by SMS, email or WhatsApp, sent only with consent.",
      },
      {
        title: "Secure hosting and backups",
        body: "Encrypted connections, restricted access, regular backups and monitoring for patient-facing systems.",
      },
    ],
    relevantDivisions: [
      { slug: "business-software-crm", reason: "Appointment, patient record and clinic management systems." },
      { slug: "cloud-hosting", reason: "Secure hosting, access controls, backups and monitoring." },
      { slug: "digital-product-development", reason: "Clinic websites, booking flows and patient portals." },
      { slug: "ai-automation", reason: "FAQ assistants and reminder workflows with staff hand-over." },
    ],
    automation: [
      "Send appointment confirmations and reminders the day before",
      "Share preparation instructions automatically for specific tests or procedures",
      "Notify patients when reports are ready to collect or view",
      "Answer timing, location and fee questions, handing clinical questions to staff",
      "Prompt follow-up bookings for treatment plans",
    ],
    growth: [
      "Local SEO for specialities and neighbourhood searches",
      "Accurate Google Business Profiles for each location and doctor",
      "Educational content reviewed by your clinicians",
      "Responsible, compliant advertising that avoids misleading claims",
    ],
    connected: [
      { title: "Search", body: "A patient searches for a specialist nearby and finds an accurate clinic profile and doctor page." },
      { title: "Book", body: "They pick a slot online and receive confirmation and preparation guidance." },
      { title: "Visit", body: "The front desk sees the appointment in the clinic system; the doctor sees visit history." },
      { title: "Follow up", body: "Report notifications and follow-up reminders are sent with the patient's consent." },
      { title: "Return", body: "Patients on treatment plans are reminded about their next visit." },
    ],
    benefits: [
      "Less time spent managing bookings by phone",
      "Fewer missed appointments through timely reminders",
      "Patient information organised securely with controlled access",
      "Accurate, helpful information for patients before they visit",
    ],
    faqs: [
      {
        question: "How do you handle patient data privacy?",
        answer:
          "We design systems with role-based access, encrypted connections, audit-friendly logging and backups, and collect only the data needed. Your clinic remains responsible for its data practices, and we recommend legal review against applicable rules such as India's Digital Personal Data Protection Act.",
      },
      {
        question: "Can patients book with a specific doctor?",
        answer:
          "Yes. Each doctor can have their own schedule, slot length and availability, and patients can choose a doctor or the earliest available slot.",
      },
      {
        question: "Will you write medical content for our website?",
        answer:
          "We can draft structure and general content, but medical information should be written or reviewed by your clinicians. We don't publish health claims that haven't been approved by your team.",
      },
    ],
  },
  {
    slug: "retail-ecommerce",
    name: "Retail & E-commerce",
    summary: "Online stores, inventory and order systems, and performance marketing for retailers selling online and offline.",
    tags: ["E-commerce store", "Inventory sync", "Order management", "E-commerce SEO"],
    heroTitle: "Retail and e-commerce technology that connects your store, stock and customers",
    heroIntro:
      "Whether you run a shop, a D2C brand or both, we build online stores and back-office systems that keep products, stock and orders accurate across every channel — and marketing that brings buyers back.",
    metaTitle: "E-commerce Website Development & Retail Management Software",
    metaDescription:
      "E-commerce website development, inventory and order management, payment and shipping integrations, e-commerce SEO, Google Shopping and Meta Ads for retailers and D2C brands.",
    introduction: [
      "Selling online looks simple until orders start arriving from your website, marketplaces and a physical counter at the same time. Stock gets oversold, returns are tracked in a notebook and nobody is sure which products actually make money after shipping and discounts.",
      "Good retail technology keeps one accurate record of products, stock and orders, and connects it to payments, shipping partners and accounting. On top of that, e-commerce SEO, product feeds and retention campaigns help you grow sales without relying only on paid ads.",
    ],
    challenges: [
      {
        title: "Stock that doesn't match reality",
        body: "Selling across a website, marketplaces and a store without synchronised inventory leads to overselling and cancelled orders.",
      },
      {
        title: "Slow or confusing checkout",
        body: "Long forms, limited payment options and unclear delivery costs cause abandoned carts, especially on mobile.",
      },
      {
        title: "Manual order processing",
        body: "Copying orders into shipping portals and invoices by hand is slow and creates errors as volume grows.",
      },
      {
        title: "Rising acquisition costs",
        body: "Relying only on paid ads gets expensive. Repeat purchases and organic search are needed for healthy margins.",
      },
      {
        title: "Returns and customer service",
        body: "Tracking returns, exchanges and refunds without a system frustrates customers and staff.",
      },
    ],
    solutions: [
      {
        title: "Online store built for conversion",
        body: "Fast product and category pages, clear pricing, UPI, card and cash-on-delivery options, and a short, mobile-friendly checkout.",
      },
      {
        title: "Inventory and order management",
        body: "One record of stock across channels, order status from payment to delivery, and GST-ready invoices.",
      },
      {
        title: "Shipping and payment integrations",
        body: "Connections to payment gateways and courier aggregators for automatic labels, tracking and payment reconciliation.",
      },
      {
        title: "Returns and support workflow",
        body: "Customers raise return or exchange requests online; staff process them with clear status and refund tracking.",
      },
      {
        title: "Customer accounts and retention",
        body: "Order history, saved addresses and opt-in marketing that support repeat purchases.",
      },
    ],
    relevantDivisions: [
      { slug: "digital-product-development", reason: "E-commerce development, checkout and customer accounts." },
      { slug: "business-software-crm", reason: "Inventory, order and customer management systems." },
      { slug: "digital-growth-marketing", reason: "E-commerce SEO, Google Shopping, Meta Ads, email and WhatsApp." },
      { slug: "cloud-hosting", reason: "Hosting that stays fast during sales, plus security and backups." },
    ],
    automation: [
      "Sync stock levels across your website and other channels",
      "Create shipping labels and send tracking updates automatically",
      "Recover abandoned carts with timed email or WhatsApp reminders",
      "Alert staff when best-sellers run low",
      "Send post-purchase care tips and review requests",
    ],
    growth: [
      "Category and product page SEO with structured data",
      "Product feeds for Google Shopping and Meta catalogue ads",
      "Email and WhatsApp campaigns for repeat customers",
      "Conversion testing on product pages and checkout",
    ],
    connected: [
      { title: "Discover", body: "A shopper finds a product through search, a Shopping ad or an Instagram post." },
      { title: "Buy", body: "They check out quickly on mobile with their preferred payment method." },
      { title: "Fulfil", body: "Stock updates everywhere, a shipping label is generated and tracking is sent." },
      { title: "Support", body: "Any return or exchange is handled through a clear online request." },
      { title: "Repeat", body: "Timely, relevant messages bring the customer back for their next purchase." },
    ],
    benefits: [
      "Fewer oversold orders and cancellations",
      "Less manual work per order",
      "A smoother checkout designed for mobile buyers",
      "Growth from repeat customers and organic search, not only ads",
    ],
    faqs: [
      {
        question: "Should we use Shopify, WooCommerce or a custom store?",
        answer:
          "Hosted platforms like Shopify are quick to launch and easy to manage; WooCommerce offers flexibility on your own hosting; a custom build suits unusual catalogues, pricing or integrations. We recommend based on your catalogue size, budget and growth plans.",
      },
      {
        question: "Can you integrate courier and shipping partners?",
        answer:
          "Yes. We integrate with courier companies or shipping aggregators that provide APIs, for rate calculation, label generation and tracking.",
      },
      {
        question: "Can our physical store stock sync with the website?",
        answer:
          "If your billing or POS software has an API or export, we can connect it. Otherwise we can build a simple stock system that both the store and the website use.",
      },
    ],
  },
  {
    slug: "education",
    name: "Education & Coaching",
    summary: "Admissions CRMs, learning platforms and enrolment marketing for schools, institutes and coaching centres.",
    tags: ["Admissions CRM", "Learning platform", "Fee management", "Enrolment campaigns"],
    heroTitle: "Education technology that supports admissions, learning and parents",
    heroIntro:
      "Schools, colleges, coaching institutes and online educators manage enquiries, admissions, batches, fees and communication with students and parents. We build connected systems for each stage.",
    metaTitle: "Education CRM, Coaching Institute Software & LMS Development",
    metaDescription:
      "Admissions and enquiry CRM, learning management systems, online course platforms, fee and batch management, parent communication and enrolment marketing for education businesses.",
    introduction: [
      "Education businesses have a clear yearly rhythm: enquiries build before the admission season, counselling and conversions peak, and then attention shifts to delivering classes, collecting fees and keeping parents informed. Each stage usually runs on a different tool — or none at all.",
      "Connecting those stages helps institutes respond to enquiries promptly, run batches smoothly and communicate consistently. For coaching centres and online educators, a learning platform adds a way to deliver content, tests and recordings beyond the classroom.",
    ],
    challenges: [
      {
        title: "Admission enquiries handled ad hoc",
        body: "Enquiries from ads, walk-ins and phone calls are tracked in registers or sheets, making counselling follow-ups inconsistent.",
      },
      {
        title: "Fee collection and reminders",
        body: "Instalments, discounts and late fees are tedious to track manually, and reminders are awkward to send one by one.",
      },
      {
        title: "Batch and timetable management",
        body: "Allocating students to batches, managing teacher schedules and handling changes takes significant admin time.",
      },
      {
        title: "Parent communication",
        body: "Parents expect regular updates on attendance, tests and fees; ad hoc WhatsApp messages are hard to manage at scale.",
      },
      {
        title: "Delivering learning online",
        body: "Recorded lectures, notes and tests shared through generic tools are difficult to organise and protect.",
      },
    ],
    solutions: [
      {
        title: "Admissions and enquiry CRM",
        body: "Every enquiry captured with source, course interest and counsellor notes, with follow-up reminders and conversion reporting.",
      },
      {
        title: "Student and fee management",
        body: "Student records, batch allocation, fee plans with instalments, online payments and automated reminders.",
      },
      {
        title: "Learning management system",
        body: "Courses, recorded lectures, notes, quizzes and progress tracking in a branded platform accessible on web and mobile.",
      },
      {
        title: "Parent and student communication",
        body: "Scheduled updates on attendance, results and announcements through app notifications, SMS, email or WhatsApp.",
      },
      {
        title: "Institute website",
        body: "Course pages, faculty information, results you're permitted to publish and clear admission enquiry options.",
      },
    ],
    relevantDivisions: [
      { slug: "business-software-crm", reason: "Admissions CRM, student, batch and fee management." },
      { slug: "saas-development", reason: "Learning platforms and multi-branch education products." },
      { slug: "digital-growth-marketing", reason: "Enrolment campaigns, course SEO and educational video." },
      { slug: "ai-automation", reason: "Enquiry replies, fee reminders and automated reports." },
    ],
    automation: [
      "Acknowledge admission enquiries and share course brochures instantly",
      "Remind counsellors about scheduled follow-ups",
      "Send fee reminders before due dates and receipts after payment",
      "Share attendance and test summaries with parents on a schedule",
      "Generate branch-wise enrolment reports for management",
    ],
    growth: [
      "Course and location pages for students researching options",
      "Enrolment campaigns timed to admission cycles",
      "Short educational videos and topper interviews (with consent)",
      "Referral programmes for current students and parents",
    ],
    connected: [
      { title: "Enquire", body: "A student or parent finds a course page and submits an enquiry." },
      { title: "Counsel", body: "The enquiry is assigned to a counsellor, with follow-ups scheduled in the CRM." },
      { title: "Enrol", body: "On admission, the student record, batch and fee plan are created and the first payment is taken online." },
      { title: "Learn", body: "Classes, recordings and tests are delivered through the learning platform." },
      { title: "Inform", body: "Parents receive regular updates, and fee reminders go out automatically." },
    ],
    benefits: [
      "More consistent counselling follow-up during admission season",
      "Less admin time on fees, batches and reminders",
      "Regular, organised communication with parents",
      "A reliable way to deliver and protect online learning content",
    ],
    faqs: [
      {
        question: "Can one system handle multiple branches?",
        answer:
          "Yes. We can design the system with branch-level data, staff permissions and reports, plus a consolidated view for management.",
      },
      {
        question: "Can recorded lectures be protected from sharing?",
        answer:
          "We can restrict access to enrolled students, limit simultaneous logins and use secure video hosting. No method fully prevents screen recording, but these measures reduce casual sharing.",
      },
      {
        question: "Do you build mobile apps for students?",
        answer:
          "Yes, if your students need offline access or notifications. Many institutes start with a mobile-friendly web platform and add an app later.",
      },
    ],
  },
];

export const solutionBySlug = new Map(industrySolutions.map((s) => [s.slug, s]));

export function getSolution(slug: string): IndustrySolution | undefined {
  return solutionBySlug.get(slug as SolutionSlug);
}
