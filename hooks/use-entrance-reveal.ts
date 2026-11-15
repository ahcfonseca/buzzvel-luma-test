"use client";

import { useEffect, type RefObject } from "react";

export function useEntranceReveal<T extends HTMLElement>(ref: RefObject<T | null>) {
  useEffect(() => {
    const list = ref.current;
    if (!list) return;
    const section = list.closest("section") ?? list;
    const desktop = window.matchMedia("(min-width: 64rem)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let observer: IntersectionObserver | undefined;
    let started = false;

    function configure() {
      observer?.disconnect();
      if (started) {
        list!.dataset.reveal = "done";
        return;
      }
      if (!desktop.matches || reducedMotion.matches || !("IntersectionObserver" in window)) {
        list!.dataset.reveal = "static";
        return;
      }
      list!.dataset.reveal = "pending";
      observer = new IntersectionObserver(entries => {
        if (entries.some(entry => entry.isIntersecting && entry.intersectionRatio >= 0.5)) {
          started = true;
          list!.dataset.reveal = "revealing";
          observer?.disconnect();
        }
      }, { threshold: 0.5 });
      observer.observe(section);
    }

    function finish(event: AnimationEvent) {
      if (event.animationName === "staggered-item-in" && event.target === list!.lastElementChild?.firstElementChild) {
        list!.dataset.reveal = "done";
      }
    }

    function revealOnFocus() {
      started = true;
      observer?.disconnect();
      list!.dataset.reveal = "done";
    }

    configure();
    desktop.addEventListener("change", configure);
    reducedMotion.addEventListener("change", configure);
    list.addEventListener("animationend", finish);
    list.addEventListener("focusin", revealOnFocus);
    return () => {
      observer?.disconnect();
      desktop.removeEventListener("change", configure);
      reducedMotion.removeEventListener("change", configure);
      list.removeEventListener("animationend", finish);
      list.removeEventListener("focusin", revealOnFocus);
      delete list.dataset.reveal;
    };
  }, [ref]);
}
