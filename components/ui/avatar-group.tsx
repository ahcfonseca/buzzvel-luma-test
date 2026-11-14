import Image from "next/image";
import { cn } from "@/lib/utils";

export type AvatarGroupProps = { sources: readonly string[]; label: string; size?: 32 | 40; borderTone?: "cream" | "yellow" };

/** Decorative portraits accompany the group's accessible description. */
export function AvatarGroup({ sources, label, size = 32, borderTone = "cream" }: AvatarGroupProps) {
  return <span role="img" aria-label={label} className="inline-flex shrink-0 -space-x-2">
    {sources.map(src => <Image key={src} src={src} alt="" width={size} height={size} sizes={`${size}px`} className={cn("rounded-full border-2 bg-primary-blue-light object-cover", size === 40 ? "size-10" : "size-8", borderTone === "yellow" ? "border-secondary-yellow" : "border-background-light-yellow")} />)}
  </span>;
}
