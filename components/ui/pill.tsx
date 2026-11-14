import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export type PillProps = ComponentPropsWithoutRef<"span">;

/** A non-interactive metadata label that inherits its surrounding text color. */
export function Pill({ className, ...props }: PillProps) {
  return <span {...props} className={cn("type-body inline-flex max-w-full items-center rounded-control border border-line bg-transparent px-3.5 py-1.5", className)} />;
}
