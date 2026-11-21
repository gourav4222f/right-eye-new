# Deployment guide

## Hostinger (Node.js hosting) or any Node server
1. Upload the project or connect the Git repository.
2. Set the Node version to 22.
3. Set environment variables (see `.env.example`):
   - `NEXT_PUBLIC_SITE_URL=https://your-domain` (**required**: canonicals, sitemap and OG URLs fall back to localhost without it)
   - `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS` (contact form delivery)
   - Optional: `NEXT_PUBLIC_WHATSAPP_NUMBER`, `NEXT_PUBLIC_SOCIAL_*`
4. Build: `npm ci && npm run build`
5. Start: `npm start` (honours the `PORT` variable).
6. Point the domain at the app and enable HTTPS/SSL.

`NEXT_PUBLIC_*` values are baked in at build time, so **rebuild after changing them**.

## Email delivery (contact form)
- With Gmail (righteyetech@gmail.com): turn on 2-step verification, create an **App Password**, then use `SMTP_HOST=smtp.gmail.com`, `SMTP_PORT=465`, `SMTP_SECURE=true`, `SMTP_USER=righteyetech@gmail.com`, `SMTP_PASS=<app password>`.
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
