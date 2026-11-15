"use client";

import { useRef, type ReactNode } from "react";
import { useEntranceReveal } from "@/hooks/use-entrance-reveal";

export function CategoriesReveal({ children }: { children: ReactNode }) {
  const listRef = useRef<HTMLUListElement>(null);
  useEntranceReveal(listRef);
  return <ul ref={listRef} className="categories-reveal mt-12 grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-2 lg:mt-10 lg:grid-cols-4 lg:gap-5">{children}</ul>;
}
