import { PageHero } from "@/components/sections/PageHero";
import { formatDate } from "@/lib/utils";

/** Shared layout for policy pages. */
export function LegalPage({
  title,
  intro,
  path,
  updated,
  children,
}: {
  title: string;
  intro: string;
  path: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHero title={title} intro={intro} breadcrumbs={[{ name: title, path }]} />
      <section className="section-pad">
        <div className="container-site">
          <div className="legal-prose mx-auto max-w-[72ch]">
            <p className="text-sm text-muted">
              Last updated: <time dateTime={updated}>{formatDate(updated)}</time>
            </p>
            {children}
          </div>
        </div>
      </section>
    </>
  );
}
