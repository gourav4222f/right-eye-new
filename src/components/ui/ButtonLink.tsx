import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "dark" | "signal" | "light" | "outline";

const orbStyles: Record<Variant, string> = {
  dark: "bg-ink text-paper",
  signal: "bg-signal text-white",
  light: "bg-white text-ink",
  outline: "border border-current",
};

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  /** Theme style: pill + separate circular arrow. */
  withOrb?: boolean;
  className?: string;
  external?: boolean;
  ariaLabel?: string;
}

export function ButtonLink({ href, children, variant = "dark", withOrb = true, className, external, ariaLabel }: ButtonLinkProps) {
  const isExternal = external ?? /^(https?:|mailto:|tel:)/.test(href);
  const content = (
    <>
      <span className={cn("btn", `btn-${variant}`)}>{children}</span>
      {withOrb ? (
        <span className={cn("btn-orb", orbStyles[variant])} aria-hidden="true">
          <ArrowUpRight className="size-5" strokeWidth={2} />
        </span>
      ) : null}
    </>
  );
  const classes = cn("btn-pair group", className);

  if (isExternal) {
    const newTab = /^https?:/.test(href);
    return (
      <a href={href} className={classes} aria-label={ariaLabel} {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {content}
    </Link>
  );
}
