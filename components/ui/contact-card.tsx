import Image from "next/image";
import { cn } from "@/lib/utils";
import { TextLink } from "@/components/ui/text-link";

export type ContactCardProps = {
  title: string;
  value: string;
  icon: { src: string; width: number; height: number };
  href?: string;
  className?: string;
};

export function ContactCard({ title, value, icon, href, className }: ContactCardProps) {
  return <div className={cn("flex items-center gap-4 rounded-floating bg-background-light-yellow p-4 lg:p-5", className)}>
    <span className="flex size-10 shrink-0 items-center justify-center rounded-control bg-primary-blue-light">
      <Image src={icon.src} alt="" width={icon.width} height={icon.height} />
    </span>
    <div className="type-body flex min-w-0 flex-col gap-0.5 lg:gap-1">
      <p>{title}</p>
      {href ? <TextLink href={href} className="break-words text-primary-blue">{value}</TextLink> : <p className="break-words text-text-tertiary">{value}</p>}
    </div>
  </div>;
}
