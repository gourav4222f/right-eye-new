import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

/** Theme's small section label with an arrow glyph. Used sparingly, on major sections only. */
export function TagLabel({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("tag-label", className)}>
      <span>{children}</span>
      <ArrowUpRight className="size-3.5" aria-hidden="true" strokeWidth={2.25} />
    </p>
  );
}
