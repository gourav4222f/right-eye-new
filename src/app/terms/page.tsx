import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/sections/LegalPage";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms & Conditions",
  description: "Terms governing use of the RightEyeTechnology website.",
  path: "/terms",
});

export default function TermsPage() {
  const { name, contact } = siteConfig;
  return (
    <LegalPage
      title="Terms & Conditions"
      intro={`These terms govern your use of the ${name} website. Please read them before using the site.`}
      path="/terms"
      updated="2026-11-21"
    >
      <h2>Using this website</h2>
      <p>
        By accessing this website you agree to these terms. If you do not agree, please do not use the site. You agree not to misuse
        the website, attempt to gain unauthorised access to it, or interfere with its operation.
      </p>

      <h2>Information on this website</h2>
      <p>
        Content on this website is provided for general information about {name} and our services. We try to keep it accurate and
        current, but it does not constitute professional advice and may change without notice. Descriptions of services explain
        what we offer and how we typically work; they are not guarantees of specific results.
      </p>

      <h2>Our services</h2>
      <p>
        Any project or ongoing service is governed by a separate written proposal or agreement setting out scope, timelines, fees,
        payment terms, ownership and responsibilities. If there is a conflict between these terms and a signed agreement, the
        agreement applies.
      </p>

      <h2>Enquiries</h2>
      <p>
        Submitting an enquiry does not create a contract or obligation for either party. We use the information you provide as
        described in our <Link href="/privacy-policy">privacy policy</Link>.
      </p>

      <h2>Intellectual property</h2>
      <p>
        The text, design and code of this website are owned by {name} or used under licence. Some images are licensed from third
        parties. You may not copy, reproduce or republish content from this website for commercial purposes without permission.
      </p>

      <h2>Third-party links</h2>
      <p>We are not responsible for the content or practices of external websites linked from this site.</p>

      <h2>Limitation of liability</h2>
      <p>
        To the extent permitted by law, {name} is not liable for any indirect or consequential loss arising from use of this website
        or reliance on its content. Nothing in these terms limits liability that cannot be limited under applicable law.
      </p>

      <h2>Governing law</h2>
      <p>These terms are governed by the laws of India.</p>

      <h2>Contact</h2>
      <p>
        Questions about these terms can be sent to <a href={contact.emailHref}>{contact.email}</a>.
      </p>
    </LegalPage>
  );
}
