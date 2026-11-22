import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How RightEyeTechnology collects, uses and protects personal information submitted through this website.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  const { name, contact } = siteConfig;
  return (
    <LegalPage
      title="Privacy Policy"
      intro={`This policy explains what personal information ${name} collects through this website, why, and the choices you have.`}
      path="/privacy-policy"
      updated="2026-11-22"
    >
      <h2>Who we are</h2>
      <p>
        {name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) is a technology services company based in India. For any privacy question or
        request, contact us at <a href={contact.emailHref}>{contact.email}</a> or {contact.phoneDisplay}.
      </p>

      <h2>Information we collect</h2>
      <p>We collect only the information you choose to give us when you submit the enquiry form or contact us directly:</p>
      <ul>
        <li>Your name, email address and phone number</li>
        <li>The service you&rsquo;re interested in, your project details and, if you choose, a budget range</li>
        <li>Your confirmation that we may contact you about the enquiry</li>
      </ul>
      <p>
        When you submit the form, our server also records basic technical information — your IP address, browser type and the time
        of submission — to protect the form against spam and abuse.
      </p>

      <h2>How we use your information</h2>
      <ul>
        <li>To respond to your enquiry and discuss your project</li>
        <li>To prepare proposals and, if you become a client, to deliver our services</li>
        <li>To prevent spam, fraud and misuse of this website</li>
      </ul>
      <p>We do not sell your personal information, and we do not use enquiry details for unrelated marketing without your consent.</p>

      <h2>Legal basis and consent</h2>
      <p>
        We process enquiry information on the basis of the consent you give when submitting the form, consistent with India&rsquo;s
        Digital Personal Data Protection Act, 2023. You can withdraw consent at any time by contacting us; this does not affect
        processing that took place before withdrawal.
      </p>

      <h2>Sharing your information</h2>
      <p>
        Enquiries are delivered to our business email inbox through an email service provider. We may also use hosting and
        infrastructure providers to run this website. These providers process data on our behalf and only as needed to provide
        their services. We may disclose information where required by law.
      </p>

      <h2>WhatsApp enquiries</h2>
      <p>
        When you submit the enquiry form, your browser opens WhatsApp with your details pre-filled as a message to our business
        number. Nothing is sent until you press Send in WhatsApp. Messages sent through WhatsApp are handled by WhatsApp (Meta)
        under its own terms and privacy policy. A copy of the form may also be emailed to our team.
      </p>

      <h2>Cookies and analytics</h2>
      <p>
        We use Google Tag Manager and Google Analytics 4 to understand how visitors use this website — for example which pages
        are viewed, how visitors arrive and whether the contact form is used. These tools set cookies and collect information
        such as your approximate location (derived from your IP address), device and browser type, and the pages you visit. We use
        this information only in aggregate, to improve the website. We do not use it to identify you and we do not sell it.
      </p>
      <p>
        Google processes this data on our behalf. You can learn more in{" "}
        <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">
          how Google uses information from sites that use its services
        </a>
        , and you can opt out of Google Analytics with the{" "}
        <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
          Google Analytics opt-out browser add-on
        </a>
        . You can also block or delete cookies in your browser settings. This website does not use advertising cookies.
      </p>

      <h2>How long we keep information</h2>
      <p>
        We keep enquiry details for as long as needed to respond and to manage any resulting business relationship, and then delete
        or anonymise them unless we are required to keep them for legal, tax or accounting reasons.
      </p>

      <h2>Security</h2>
      <p>
        We use reasonable technical and organisational measures to protect personal information, including encrypted connections
        (HTTPS) and restricted access to our inbox and systems. No method of transmission or storage is completely secure.
      </p>

      <h2>Your rights</h2>
      <p>Subject to applicable law, you may ask us to:</p>
      <ul>
        <li>Confirm what personal information we hold about you and how it is used</li>
        <li>Correct, complete or update your information</li>
        <li>Erase your information when it is no longer needed</li>
        <li>Withdraw consent you have given</li>
      </ul>
      <p>
        To make a request or raise a grievance, email <a href={contact.emailHref}>{contact.email}</a>. We will respond within a
        reasonable time.
      </p>

      <h2>Third-party links</h2>
      <p>
        This website may link to other sites, such as social media profiles. Their privacy practices are their own; please review
        their policies.
      </p>

      <h2>Changes to this policy</h2>
      <p>We may update this policy from time to time. The &ldquo;last updated&rdquo; date above shows when it was last revised.</p>
    </LegalPage>
  );
}
