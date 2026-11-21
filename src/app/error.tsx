"use client";

import { useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="panel on-dark mt-2 bg-ink text-white lg:mt-3">
      <div className="container-site flex min-h-[70svh] flex-col justify-center pb-16 pt-[calc(var(--header-h)+48px)]">
        <h1 className="heading-lg max-w-[18ch] text-white">Something went wrong on this page</h1>
        <p className="mt-4 max-w-[52ch] text-white/75">
          Try again in a moment. If the problem continues, email{" "}
          <a href={siteConfig.contact.emailHref} className="font-semibold text-white underline underline-offset-4">
            {siteConfig.contact.email}
          </a>
          .
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <button type="button" onClick={reset} className="btn btn-signal">
            Try again
          </button>
          <Link href="/" className="btn btn-light">
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
