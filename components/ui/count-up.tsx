"use client";

import { useEffect, useRef, useState } from "react";

export type CountUpProps = { value: number; suffix?: string; duration?: number };

export function CountUp({ value, suffix = "", duration = 1400 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [current, setCurrent] = useState(value);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let observer: IntersectionObserver | undefined;
    let started = false;

    function finish() {
      started = true;
      observer?.disconnect();
      window.cancelAnimationFrame(frame);
      setCurrent(value);
    }

    function start() {
      if (started) return;
      started = true;
      observer?.disconnect();
      const startTime = performance.now();
      function tick(time: number) {
        const progress = Math.min(1, Math.max(0, (time - startTime) / duration));
        const eased = 1 - Math.pow(1 - progress, 3);
        setCurrent(Math.round(value * eased));
        if (progress < 1) frame = window.requestAnimationFrame(tick);
        else setCurrent(value);
      }
      frame = window.requestAnimationFrame(tick);
    }

    if (reducedMotion.matches || duration <= 0 || !("IntersectionObserver" in window)) finish();
    else {
      setCurrent(0);
      observer = new IntersectionObserver(entries => {
        if (entries.some(entry => entry.isIntersecting && entry.intersectionRatio >= 0.5)) start();
      }, { threshold: 0.5 });
      observer.observe(element);
    }

    function handleMotionPreference() {
      if (reducedMotion.matches) finish();
    }
    reducedMotion.addEventListener("change", handleMotionPreference);
    return () => {
      observer?.disconnect();
      window.cancelAnimationFrame(frame);
      reducedMotion.removeEventListener("change", handleMotionPreference);
    };
  }, [value, duration]);

  const digits = String(current).padStart(String(value).length, " ");
  return <span ref={ref} className="inline-flex whitespace-nowrap tracking-normal">
    <span className="sr-only">{value}{suffix}</span>
    <span aria-hidden="true" className="inline-flex tabular-nums">
      {Array.from(digits, (digit, index) => <span key={index} className="inline-block w-[1ch] text-center">{digit === " " ? "\u00a0" : digit}</span>)}
    </span>
    <span aria-hidden="true" className="shrink-0">{suffix}</span>
  </span>;
}
