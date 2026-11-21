"use client";

import { useEffect, useState } from "react";

/** Live India Standard Time, rendered only after mount to avoid hydration mismatch. */
export function LocalTime({ timeZone = "Asia/Kolkata", label = "India (IST)" }: { timeZone?: string; label?: string }) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-IN", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, [timeZone]);

  return (
    <span className="inline-flex items-center gap-2 tabular-nums">
      <span className="size-1.5 rounded-full bg-signal" aria-hidden="true" />
      {label}
      <span aria-hidden={time === null}>{time ?? "--:--"}</span>
    </span>
  );
}
