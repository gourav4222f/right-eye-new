"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { MOTION_READY_EVENT } from "./MotionBeacon";

/**
 * Site-wide motion, recreating the Orisa theme's GSAP effects with
 * attribute hooks so sections stay Server Components:
 *
 *  Smooth scroll ........ Lenis (theme: ScrollSmoother). Native scroll is kept,
 *                         so position: sticky sections keep working.
 *  data-split="rise" .... chars rise from below a line mask (theme: at-rise-animation)
 *  data-split="chars" ... chars slide in from the right (theme: at-char-animation)
 *  data-split="scrub" ... chars brighten as you scroll (theme: reveal-text)
 *  data-split="lines" ... lines rise from a mask (paragraph reveal)
 *  data-reveal .......... fade + rise (theme: at_fade_anim). data-reveal-from="left|right|top"
 *  data-reveal-stagger .. children fade + rise in sequence
 *  data-img-reveal ...... image wipe/zoom reveal (theme: anim-zoomin). value "zoom" or "clip" (default)
 *  data-parallax="80" ... element drifts on scroll by N px (theme: data-speed / scroll-parallax)
 *  data-parallax-img .... image moves inside its frame on scroll (theme: scale-up-img)
 *  data-mouse-parallax .. children with data-depth follow the pointer (theme: .scene parallax.js)
 *  data-footer-reveal ... footer scales up into place (theme: footer reveal)
 *
 * Optional: data-delay="0.2" on any reveal. Everything is skipped under
 * prefers-reduced-motion, and the pre-hydration script in the root layout
 * only hides split text when motion is allowed (with a CSS time-out fallback).
 */

type Gsap = typeof import("gsap").gsap;
type ScrollTriggerT = typeof import("gsap/ScrollTrigger").ScrollTrigger;
type SplitTextT = typeof import("gsap/SplitText").SplitText;

interface Engine {
  gsap: Gsap;
  ScrollTrigger: ScrollTriggerT;
  SplitText: SplitTextT;
}

let enginePromise: Promise<Engine> | null = null;
function loadEngine(): Promise<Engine> {
  enginePromise ??= Promise.all([import("gsap"), import("gsap/ScrollTrigger"), import("gsap/SplitText")]).then(
    ([g, st, sp]) => {
      g.gsap.registerPlugin(st.ScrollTrigger, sp.SplitText);
      return { gsap: g.gsap, ScrollTrigger: st.ScrollTrigger, SplitText: sp.SplitText };
    },
  );
  return enginePromise;
}

const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const DONE = "data-motion-done";
const num = (v: string | undefined, d: number) => {
  const n = Number(v);
  return Number.isFinite(n) ? n : d;
};

function initWithin(root: ParentNode, { gsap, ScrollTrigger, SplitText }: Engine) {
  const pick = <T extends Element = HTMLElement>(sel: string) =>
    Array.from(root.querySelectorAll<T & HTMLElement>(`${sel}:not([${DONE}])`));
  const isMobile = window.innerWidth < 768;
  const inView = (el: Element) => el.getBoundingClientRect().top < window.innerHeight * 0.92;

  /* ---------- Auto text reveal for large headings (theme style on every section title) ---------- */
  pick(".heading-lg:not([data-split]), .heading-xl:not([data-split])").forEach((el) => {
    if (el.closest("[data-reveal], [data-reveal-stagger], dialog, [data-no-split]")) return;
    // Headings already on screen at load stay put (no flash); the rest rise in on scroll.
    if (inView(el)) {
      el.setAttribute(DONE, "");
      return;
    }
    el.dataset.split = "rise";
  });

  /* ---------- Split text ---------- */
  pick("[data-split]").forEach((el) => {
    el.setAttribute(DONE, "");
    const mode = el.dataset.split;
    const delay = num(el.dataset.delay, 0);
    const trigger = { trigger: el, start: "top 88%", once: true } as const;

    if (mode === "rise") {
      const split = SplitText.create(el, { type: "lines,words,chars", mask: "lines", linesClass: "split-line" });
      gsap.set(el, { visibility: "visible" });
      gsap.from(split.chars, {
        yPercent: 115,
        duration: 1.1,
        ease: "power4.out",
        stagger: { amount: Math.min(0.6, split.chars.length * 0.02) },
        delay: inView(el) ? delay + 0.1 : delay,
        scrollTrigger: inView(el) ? undefined : trigger,
      });
    } else if (mode === "chars") {
      const split = SplitText.create(el, { type: "words,chars" });
      gsap.set(el, { visibility: "visible", perspective: 300 });
      gsap.from(split.chars, {
        x: 100,
        autoAlpha: 0,
        duration: 1,
        ease: "power3.out",
        stagger: { amount: Math.min(0.9, split.chars.length * 0.04) },
        delay: delay + 0.15,
        scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none none" },
      });
    } else if (mode === "scrub") {
      const split = SplitText.create(el, { type: "words,chars" });
      gsap.set(el, { visibility: "visible" });
      gsap.fromTo(
        split.chars,
        { opacity: 0.18, x: -7 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.2,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top 82%", end: "bottom 45%", scrub: 1 },
        },
      );
    } else if (mode === "lines") {
      const split = SplitText.create(el, { type: "lines", mask: "lines", linesClass: "split-line" });
      gsap.set(el, { visibility: "visible" });
      gsap.from(split.lines, {
        yPercent: 105,
        duration: 1,
        ease: "power3.out",
        stagger: 0.09,
        delay: inView(el) ? delay + 0.25 : delay,
        scrollTrigger: inView(el) ? undefined : trigger,
      });
    } else {
      gsap.set(el, { visibility: "visible" });
    }
  });

  /* ---------- Fade reveals ---------- */
  pick("[data-reveal]").forEach((el) => {
    el.setAttribute(DONE, "");
    if (inView(el) && !el.dataset.delay) return;
    const from = el.dataset.revealFrom ?? "bottom";
    const offset = 40;
    gsap.from(el, {
      autoAlpha: 0,
      x: from === "left" ? -offset : from === "right" ? offset : 0,
      y: from === "bottom" ? offset : from === "top" ? -offset : 0,
      duration: 1,
      ease: "power3.out",
      delay: num(el.dataset.delay, 0.1),
      scrollTrigger: inView(el) ? undefined : { trigger: el, start: "top 88%", once: true },
    });
  });

  pick("[data-reveal-stagger]").forEach((group) => {
    group.setAttribute(DONE, "");
    if (inView(group)) return;
    const children = Array.from(group.children) as HTMLElement[];
    if (!children.length) return;
    gsap.from(children, {
      autoAlpha: 0,
      y: 36,
      duration: 0.9,
      ease: "power3.out",
      stagger: 0.1,
      scrollTrigger: { trigger: group, start: "top 86%", once: true },
    });
  });

  /* ---------- Image reveals ---------- */
  pick("[data-img-reveal]").forEach((frame) => {
    frame.setAttribute(DONE, "");
    const img = frame.querySelector<HTMLElement>("img");
    const mode = frame.dataset.imgReveal || "clip";
    const delay = num(frame.dataset.delay, 0);
    const st = inView(frame) ? undefined : { trigger: frame, start: "top 90%", once: true };
    const tl = gsap.timeline({ delay, scrollTrigger: st });
    if (mode === "zoom") {
      tl.from(frame, { autoAlpha: 0, scale: 1.12, duration: 1.8, ease: "power2.out", clearProps: "transform,opacity,visibility" });
    } else {
      tl.fromTo(
        frame,
        { clipPath: "inset(100% 0% 0% 0% round 1.25rem)" },
        { clipPath: "inset(0% 0% 0% 0% round 1.25rem)", duration: 1.4, ease: "power4.inOut", clearProps: "clipPath" },
      );
      if (img) tl.from(img, { scale: 1.35, duration: 1.8, ease: "power3.out" }, 0);
    }
  });

  /* ---------- Scroll parallax ---------- */
  pick("[data-parallax]").forEach((el, i) => {
    el.setAttribute(DONE, "");
    let range = num(el.dataset.parallax, 80);
    if (isMobile) range *= 0.55;
    const dir = el.dataset.parallaxDir === "down" ? -1 : 1;
    const root = el.closest("[data-parallax-root]") ?? el.closest("section") ?? el;
    gsap.fromTo(
      el,
      { y: (range / 2) * dir },
      {
        y: (-range / 2) * dir,
        ease: i % 2 ? "sine.inOut" : "none",
        scrollTrigger: { trigger: root, start: "top bottom", end: "bottom top", scrub: 0.85, invalidateOnRefresh: true },
      },
    );
  });

  pick("[data-parallax-img]").forEach((frame) => {
    frame.setAttribute(DONE, "");
    const img = frame.querySelector<HTMLElement>("img");
    if (!img) return;
    const amount = num(frame.dataset.parallaxImg, 12);
    gsap.set(img, { scale: 1 + amount / 50 });
    gsap.fromTo(
      img,
      { yPercent: -amount / 2 },
      {
        yPercent: amount / 2,
        ease: "none",
        scrollTrigger: { trigger: frame, start: "top bottom", end: "bottom top", scrub: true, invalidateOnRefresh: true },
      },
    );
  });

  /* ---------- Footer reveal ---------- */
  pick("[data-footer-reveal]").forEach((footer) => {
    footer.setAttribute(DONE, "");
    gsap.fromTo(
      footer,
      { scale: 0.94, transformOrigin: "50% 100%" },
      {
        scale: 1,
        ease: "none",
        scrollTrigger: { trigger: footer, start: "top bottom", end: "top 55%", scrub: 1 },
      },
    );
  });

  ScrollTrigger.refresh();
}

/** Pointer parallax for hero layers (fine pointers only). Returns a cleanup. */
function initMouseParallax(gsap: Gsap): () => void {
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return () => {};
  const scenes = Array.from(document.querySelectorAll<HTMLElement>("[data-mouse-parallax]"));
  const cleanups = scenes.map((scene) => {
    const layers = Array.from(scene.querySelectorAll<HTMLElement>("[data-depth]")).map((el) => ({
      depth: num(el.dataset.depth, 0.2),
      x: gsap.quickTo(el, "x", { duration: 1.2, ease: "power3.out" }),
      y: gsap.quickTo(el, "y", { duration: 1.2, ease: "power3.out" }),
    }));
    const onMove = (e: PointerEvent) => {
      const r = scene.getBoundingClientRect();
      const mx = (e.clientX - r.left) / r.width - 0.5;
      const my = (e.clientY - r.top) / r.height - 0.5;
      layers.forEach((l) => {
        l.x(mx * l.depth * 60);
        l.y(my * l.depth * 40);
      });
    };
    const onLeave = () => layers.forEach((l) => (l.x(0), l.y(0)));
    scene.addEventListener("pointermove", onMove, { passive: true });
    scene.addEventListener("pointerleave", onLeave);
    return () => {
      scene.removeEventListener("pointermove", onMove);
      scene.removeEventListener("pointerleave", onLeave);
    };
  });
  return () => cleanups.forEach((c) => c());
}

export function MotionProvider() {
  const pathname = usePathname();

  // Smooth scrolling (once per session).
  useEffect(() => {
    if (reducedMotion()) return;
    let destroyed = false;
    let cleanup: (() => void) | undefined;
    (async () => {
      const [{ default: Lenis }, engine] = await Promise.all([import("lenis"), loadEngine()]);
      if (destroyed) return;
      const lenis = new Lenis({ lerp: 0.1, smoothWheel: true, anchors: { offset: -96 }, autoRaf: false });
      lenis.on("scroll", engine.ScrollTrigger.update);
      const tick = (time: number) => lenis.raf(time * 1000);
      engine.gsap.ticker.add(tick);
      engine.gsap.ticker.lagSmoothing(0);
      // Pause smooth scroll while a modal (mobile menu) is open.
      const onToggle = () => (document.querySelector("dialog[open]") ? lenis.stop() : lenis.start());
      const mo = new MutationObserver(onToggle);
      mo.observe(document.body, { subtree: true, attributes: true, attributeFilter: ["open"] });
      cleanup = () => {
        mo.disconnect();
        engine.gsap.ticker.remove(tick);
        lenis.destroy();
      };
    })();
    return () => {
      destroyed = true;
      cleanup?.();
    };
  }, []);

  // Per-page effects; re-run on navigation and when streamed content arrives.
  useEffect(() => {
    if (reducedMotion()) return;
    let cancelled = false;
    let revert: (() => void) | undefined;

    (async () => {
      const engine = await loadEngine();
      if (cancelled) return;
      await document.fonts?.ready;
      if (cancelled) return;
      // Wait until the page segment has hydrated (MotionBeacon), with a safety time-out.
      if (window.__motionReady !== pathname) {
        await new Promise<void>((resolve) => {
          const done = () => {
            window.removeEventListener(MOTION_READY_EVENT, onReady);
            window.clearTimeout(timer);
            resolve();
          };
          const onReady = (e: Event) => {
            if ((e as CustomEvent<string>).detail === pathname) done();
          };
          const timer = window.setTimeout(done, 4000);
          window.addEventListener(MOTION_READY_EVENT, onReady);
        });
      }
      if (cancelled) return;

      const ctx = engine.gsap.context(() => {});
      const main = document.body;
      ctx.add(() => initWithin(main, engine));
      const stopMouse = initMouseParallax(engine.gsap);

      // Late-arriving content (streamed pages, loading boundaries).
      let raf = 0;
      const mo = new MutationObserver(() => {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => ctx.add(() => initWithin(main, engine)));
      });
      mo.observe(main, { childList: true, subtree: true });

      const onLoad = () => engine.ScrollTrigger.refresh();
      window.addEventListener("load", onLoad);

      revert = () => {
        mo.disconnect();
        cancelAnimationFrame(raf);
        window.removeEventListener("load", onLoad);
        stopMouse();
        ctx.revert();
        // Elements that persist across pages (footer) must be re-initialised next time.
        document.querySelectorAll(`[${DONE}]`).forEach((el) => el.removeAttribute(DONE));
      };
    })();

    return () => {
      cancelled = true;
      revert?.();
    };
  }, [pathname]);

  return null;
}
