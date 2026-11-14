"use client";

import { useEffect, useRef, type ReactNode } from "react";

export type ScrollParallaxProps = { children: ReactNode; className: string; label?: string; decorative?: boolean; desktopOnly?: boolean; distance?: number };

export function ScrollParallax({ children, className, label, decorative = false, desktopOnly = false, distance = 36 }: ScrollParallaxProps) {
  const collageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const collage = collageRef.current;
    const section = collage?.closest("section");
    if (!collage || !section) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const enabled = window.matchMedia(desktopOnly ? "(min-width: 64rem)" : "all");
    let frame = 0;
    let offset = distance;
    let previousTime = 0;

    function detachScrollListeners() {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.cancelAnimationFrame(frame);
    }

    function finish() {
      offset = 0;
      collage!.style.setProperty("--parallax-offset", "0px");
      collage!.dataset.parallax = "locked";
    }

    function update(time = performance.now()) {
      frame = 0;
      if (reducedMotion.matches || !enabled.matches) {
        finish();
        return;
      }

      const bounds = section!.getBoundingClientRect();
      const collageBounds = collage!.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      // A tall mobile section cannot be 90% visible at once; use its visible capacity.
      const targetVisibleHeight = Math.min(bounds.height, viewportHeight) * 0.9;
      const sectionProgress = (viewportHeight - bounds.top) / Math.max(1, targetVisibleHeight);
      const collageTargetHeight = Math.min(collageBounds.height, viewportHeight) * 0.9;
      const collageProgress = (viewportHeight - collageBounds.top) / Math.max(1, collageTargetHeight);
      // Do not finish above the photos on a tall, text-first mobile section.
      const progress = Math.max(0, Math.min(1, sectionProgress, collageProgress));
      const targetOffset = distance * (1 - progress);
      const elapsed = previousTime ? Math.min(time - previousTime, 64) : 16;
      previousTime = time;
      offset += (targetOffset - offset) * (1 - Math.exp(-elapsed / 90));
      if (progress >= 1 && offset < 0.1) {
        finish();
        return;
      }

      collage!.style.setProperty("--parallax-offset", `${offset}px`);
      collage!.dataset.parallax = "active";
      if (Math.abs(targetOffset - offset) > 0.05) scheduleUpdate();
    }

    function scheduleUpdate() {
      if (!reducedMotion.matches && enabled.matches && !frame) frame = window.requestAnimationFrame(update);
    }

    function handleMotionPreference() {
      if (reducedMotion.matches || !enabled.matches) {
        window.cancelAnimationFrame(frame);
        frame = 0;
        finish();
      } else scheduleUpdate();
    }

    update();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    reducedMotion.addEventListener("change", handleMotionPreference);
    enabled.addEventListener("change", handleMotionPreference);

    return () => {
      detachScrollListeners();
      reducedMotion.removeEventListener("change", handleMotionPreference);
      enabled.removeEventListener("change", handleMotionPreference);
      collage.style.removeProperty("--parallax-offset");
      delete collage.dataset.parallax;
    };
  }, [desktopOnly, distance]);

  return <div ref={collageRef} className={className} role={label ? "img" : undefined} aria-label={label} aria-hidden={decorative || undefined}>{children}</div>;
}
