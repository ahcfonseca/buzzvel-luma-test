import Image from "next/image";

export type AvatarGroupProps = { sources: readonly string[]; label: string };

/** Decorative portraits accompany the group's accessible description. */
export function AvatarGroup({ sources, label }: AvatarGroupProps) {
  return <span role="img" aria-label={label} className="inline-flex shrink-0 -space-x-2">
    {sources.map(src => <Image key={src} src={src} alt="" width={32} height={32} sizes="32px" className="size-8 rounded-full border-2 border-background-light-yellow bg-primary-blue-light object-cover" />)}
  </span>;
}
