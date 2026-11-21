"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItem {
  question: string;
  answer: string;
}

/**
 * Accessible FAQ accordion (WAI-ARIA disclosure pattern): real <button>s
 * with aria-expanded/aria-controls, keyboard operable, one panel open at a time.
 * Answers are always in the DOM (hidden attribute) so they stay crawlable.
 */
export function Accordion({ items, tone = "light", defaultOpen = 0 }: { items: AccordionItem[]; tone?: "light" | "dark"; defaultOpen?: number | null }) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const baseId = useId();

  return (
    <div className="flex flex-col gap-2.5">
      {items.map((item, i) => {
        const isOpen = open === i;
        const buttonId = `${baseId}-q-${i}`;
        const panelId = `${baseId}-a-${i}`;
        return (
          <div
            key={item.question}
            className={cn(
              "rounded-2xl transition-colors duration-300",
              tone === "dark" ? "bg-white/[0.06]" : "bg-mist",
              isOpen && (tone === "dark" ? "bg-white/[0.1]" : "bg-fog"),
            )}
          >
            <h3 className="text-base font-medium tracking-[-0.02em] md:text-lg">
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen((cur) => (cur === i ? null : i))}
                className="flex min-h-14 w-full cursor-pointer items-center gap-3 px-4 py-4 text-left md:px-5"
              >
                <span
                  className={cn(
                    "grid size-7 shrink-0 place-items-center rounded-full text-xs font-semibold tabular-nums",
                    tone === "dark" ? "bg-white text-ink" : "bg-ink text-white",
                    isOpen && "bg-signal text-white",
                  )}
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <span className="min-w-0 flex-1">{item.question}</span>
                <Plus
                  className={cn("size-5 shrink-0 transition-transform duration-300 ease-(--ease-basic)", isOpen && "rotate-45")}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!isOpen} className="px-4 pb-5 md:px-5 md:pl-[3.75rem]">
              <p className={cn("max-w-[68ch] text-[0.975rem] leading-relaxed", tone === "dark" ? "text-white/75" : "text-muted")}>
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
