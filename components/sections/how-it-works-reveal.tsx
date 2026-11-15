"use client";

import styles from "./how-it-works.module.css";
import { useRef, type ReactNode } from "react";
import { useEntranceReveal } from "@/hooks/use-entrance-reveal";

export function HowItWorksReveal({ children }: { children: ReactNode }) {
  const listRef = useRef<HTMLOListElement>(null);
  useEntranceReveal(listRef);
  return <ol ref={listRef} className={`${styles.howItWorksSteps} mt-10 lg:mt-20`}>{children}</ol>;
}
