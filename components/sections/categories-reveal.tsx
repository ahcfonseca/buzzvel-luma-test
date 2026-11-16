"use client";

import styles from "./categories.module.css";
import { useRef, type ReactNode } from "react";
import { useEntranceReveal } from "@/hooks/use-entrance-reveal";

export function CategoriesReveal({ children }: { children: ReactNode }) {
  const listRef = useRef<HTMLUListElement>(null);
  useEntranceReveal(listRef);
  return <ul ref={listRef} className={`${styles.categoriesReveal} mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-10 lg:auto-rows-fr lg:grid-cols-4 lg:gap-5`}>{children}</ul>;
}
