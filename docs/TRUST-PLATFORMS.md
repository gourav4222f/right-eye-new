# Trusted-platform listing kit

Use **exactly the same** name, phone, email, website and address everywhere. Google cross-checks these
details ("NAP consistency"), and it is how Google learns that RightEyeTechnology is a different company
from the US firm "RightEye" (eye-tracking).

## Core details (copy exactly)

| Field | Value |
|---|---|
| Business name | RightEyeTechnology |
| Website | https://righteyetechnology.com |
| Email | info@righteyetechnology.com |
| Phone | +91 87448 67110 |
| Address | **TODO: registered office address** (needed for Google Business Profile, JustDial) |
| Founder | Shravan Thakur, Founder & CEO |
| Founded | **TODO: year** |
| Category | Website designer / Software company / Internet marketing service |
| Hours | **TODO** (e.g. Mon–Sat, 10:00–19:00 IST) |
| Logo | `public/brand/logo-square.png` |
| Cover image | `public/brand/logo-og-light.png` (replace with a real team photo when available) |

### Short description (≈150 characters)
> RightEyeTechnology builds websites, web & mobile apps, CRMs and runs SEO, digital marketing, cloud hosting and AI automation for growing Indian businesses.

### Long description (≈750 characters)
> RightEyeTechnology is a full-service technology company in India. Our team has delivered 200+ websites and business systems — booking websites for travel and cab operators, property listing sites, healthcare service sites, CMS platforms and workflow tools. We cover the whole journey with one accountable team: website and app development, custom software and CRM, SEO and digital marketing, cloud hosting and AI automation. Every domain, hosting, analytics and ad account is set up in the client's name, so there is no lock-in. We work with startups, small and medium businesses and growing companies across India. Tell us what you want to achieve and we will recommend a practical next step.

### Services list
Website development · E-commerce development · Web application development · Mobile app development ·
Custom CRM & business software · CMS & workflow tools · SEO · Google Ads & Meta Ads · Social media marketing ·
Cloud hosting & maintenance · SaaS development · AI chatbots & WhatsApp automation

## Platforms, in priority order

| # | Platform | Why | Notes |
|---|---|---|---|
| 1 | **Google Business Profile** (business.google.com) | Biggest local trust and ranking signal; reviews show in Search and Maps | Needs a real address (can be a service-area business with the address hidden). Verification by video or postcard. |
| 2 | **Google Search Console** (search.google.com/search-console) | Indexing, sitemap, search queries | Add a *Domain* property for righteyetechnology.com (DNS TXT record in Hostinger), then submit `https://righteyetechnology.com/sitemap.xml`. |
| 3 | **LinkedIn company page** | B2B trust; staff profiles link back to the company | Every team member should list "RightEyeTechnology" as their current employer. |
| 4 | **Clutch** (clutch.co) | Where Indian agencies are compared; verified reviews | Ask 3–5 past clients for a Clutch review (Clutch phones or emails them). |
| 5 | **GoodFirms** (goodfirms.co) | Similar to Clutch, popular for Indian firms | Add portfolio items from `src/data/portfolio.ts`. |
| 6 | **JustDial** + **IndiaMART** | Indian local search; many SMB buyers start here | Same NAP details. |
| 7 | **Facebook page** + **Instagram business** | Social proof, and needed for Meta Ads | Post project launches. |
| 8 | **Crunchbase** (optional) | Strong signal for the company "entity" in Google's Knowledge Graph | Free organisation profile. |
| 9 | **Udyam registration** (udyamregistration.gov.in) | Government MSME certificate; show the number on the site | Free. |

## After each profile is live
1. Add its URL to the hosting environment variables (`NEXT_PUBLIC_SOCIAL_LINKEDIN`, `NEXT_PUBLIC_SOCIAL_FACEBOOK`,
   `NEXT_PUBLIC_SOCIAL_INSTAGRAM`, …) and redeploy. The site then shows the links in the footer and adds them to the
   Organization schema (`sameAs`), which tells Google these profiles belong to us.
2. Ask happy clients from the portfolio for a **Google review** first, then Clutch/GoodFirms. Never buy or write reviews.
3. Ask portfolio clients to add a small footer credit, "Website by RightEyeTechnology", linking to
   https://righteyetechnology.com. This is a real backlink and independent proof of the work.

## Reviews: how to ask
> Hi {name}, it was great working on {project}. If you are happy with the result, a short Google review would help us a lot: {GBP review link}. Thank you! — Team RightEyeTechnology
