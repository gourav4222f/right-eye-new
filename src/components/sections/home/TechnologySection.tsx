import { TagLabel } from "@/components/ui/TagLabel";
import { technologyGroups } from "@/data/technologies";

/** Technologies and capabilities, as text — no decorative brand logos. */
export function TechnologySection() {
  return (
    <section className="section-pad" aria-labelledby="tech-title">
      <div className="container-site">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-end">
          <div>
            <TagLabel>Technology &amp; capabilities</TagLabel>
            <h2 id="tech-title" className="heading-lg mt-5 max-w-[18ch]">
              Proven tools, chosen for the job
            </h2>
          </div>
          <p className="max-w-md text-muted lg:justify-self-end">
            We choose technology for maintainability, performance and cost of ownership — not novelty. These are the platforms and
            tools we commonly work with.
          </p>
        </div>

        <div className="mt-14 grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-4" data-reveal-stagger>
          {technologyGroups.map((g) => (
            <div key={g.title} className="border-b border-r border-line p-6 lg:p-7">
              <h3 className="text-sm font-semibold text-ember">{g.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {g.items.map((item) => (
                  <li key={item} className="rounded-full bg-mist px-3 py-1.5 text-sm tracking-[-0.01em]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
