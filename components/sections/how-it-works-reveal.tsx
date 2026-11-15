"use client";

import { useRef, type ReactNode } from "react";
import { useEntranceReveal } from "@/hooks/use-entrance-reveal";

export function HowItWorksReveal({ children }: { children: ReactNode }) {
  const listRef = useRef<HTMLOListElement>(null);
  useEntranceReveal(listRef);
  return <ol ref={listRef} className="how-it-works-steps mt-10 lg:mt-20">{children}</ol>;
}
