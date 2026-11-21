"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    __motionReady?: string;
  }
}

export const MOTION_READY_EVENT = "motion:ready";

/**
 * Rendered inside each page's hero. Its effect runs only after the page
 * segment has hydrated, so MotionProvider never mutates (splits) DOM that
 * React has not hydrated yet — which would cause a hydration mismatch.
 */
export function MotionBeacon() {
  const pathname = usePathname();
  useEffect(() => {
    window.__motionReady = pathname;
    window.dispatchEvent(new CustomEvent(MOTION_READY_EVENT, { detail: pathname }));
  }, [pathname]);
  return null;
}
