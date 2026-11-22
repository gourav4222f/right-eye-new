# Deployment guide

## Hostinger (Node.js hosting) or any Node server
1. Upload the project or connect the Git repository.
2. Set the Node version to 22.
3. Build command: `npm run build` (uses Webpack on purpose: Hostinger's Linux is too old for the Turbopack/native compiler, so Next.js falls back to its WebAssembly compiler, which only works with Webpack and a plain-JS `next.config.mjs`).
4. Set environment variables:
   - `NEXT_PUBLIC_SITE_URL=https://righteyetechnology.com` (optional: production builds default to this domain)
   - `NEXT_PUBLIC_GTM_ID` (optional: defaults to GTM-PG5RNS7X)
   - `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS` (contact form delivery)
   - Optional: `NEXT_PUBLIC_WHATSAPP_NUMBER`, `NEXT_PUBLIC_SOCIAL_*`
5. Build: `npm ci && npm run build`
6. Start: `npm start` (honours the `PORT` variable).
7. Point the domain at the app and enable HTTPS/SSL.

`NEXT_PUBLIC_*` values are baked in at build time, so **rebuild after changing them**.

## Email delivery (contact form)
- With domain email (info@righteyetechnology.com): use your mail host's SMTP settings (e.g. Hostinger: `SMTP_HOST=smtp.hostinger.com`, `SMTP_PORT=465`, `SMTP_SECURE=true`, `SMTP_USER=info@righteyetechnology.com`), and publish SPF, DKIM and DMARC records so mail is not marked as spam.
- With domain email (e.g. Hostinger mail), use its SMTP host and credentials, and publish SPF/DKIM/DMARC records.
- Without SMTP, the API returns 503 and the form tells visitors to email or call. It never shows a fake success.

## Notes
- The contact rate limiter is in-memory (single instance). Use a shared store such as Redis if you run several instances or serverless.
- Security headers are set in `next.config.ts`.

## Pre-launch checklist
- [ ] `NEXT_PUBLIC_SITE_URL` set, then rebuilt
- [ ] SMTP configured, and a real test enquiry received
- [ ] Theme licence purchased **and** confirmed to cover the demo photos in `public/images/theme/`, or the photos replaced
- [ ] Legal pages reviewed by a lawyer
- [ ] Founder bio and photo, social URLs and WhatsApp number confirmed
- [ ] Search Console verified, and sitemap submitted
