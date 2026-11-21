# RightEyeTechnology website

Corporate website for RightEyeTechnology, built with **Next.js 16 (App Router)**, React 19, TypeScript and Tailwind CSS 4. The design follows the Orisa theme's design language (DM Sans, #F0460E signal orange, rounded inset panels, GSAP scroll reveals).

## Requirements
- Node.js 22+ and npm

## Install and run
```bash
npm install
cp .env.example .env.local   # then fill in values
npm run dev                  # http://localhost:3000
```

## Scripts
| Command | Purpose |
|---|---|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript check |
| `npm test` | Vitest suite (validation, contact API security, team gate, sitemap) |

## Environment variables
See [.env.example](.env.example). `NEXT_PUBLIC_SITE_URL` is required in production. The contact form only reports success once SMTP is configured (`SMTP_HOST`, `SMTP_USER`, `SMTP_PASS`). Until then it shows an honest "email us directly" message.

## Where things live
- `src/config/site.ts`: company name, contact details, social links, SEO defaults
- `src/config/assets.ts`: every image (swap theme photos here)
- `src/config/navigation.ts`: header and footer menus
- `src/data/`: services, solutions, team, FAQs, process, insights, case studies
- `src/app/api/contact/route.ts`: contact Route Handler; `src/lib/email.ts` is the server-only mailer

## Team profiles
Placeholder employees in `src/data/team.ts` stay hidden until **both** `isVerified` and `isPublished` are `true`.

## Deployment
See [docs/DEPLOYMENT-GUIDE.md](docs/DEPLOYMENT-GUIDE.md).
