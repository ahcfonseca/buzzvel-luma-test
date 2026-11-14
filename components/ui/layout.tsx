import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({ children, className, ...props }: ComponentPropsWithoutRef<"div">) {
  return <div className="container-layout"><div {...props} className={cn("container-content", className)}>{children}</div></div>;
}
type SectionProps = ComponentPropsWithoutRef<"section">;
export function Section({ children, className, ...props }: SectionProps) {
  return <section {...props} className={cn("section", className)}><Container>{children}</Container></section>;
}
export type SectionHeadingProps = { id: string; eyebrow?: string; title: string; description?: ReactNode; align?: "left" | "center"; className?: string };
export function SectionHeading({ id, eyebrow, title, description, align = "left", className }: SectionHeadingProps) {
  return <div className={cn("max-w-140", align === "center" && "mx-auto text-center", className)}>{eyebrow && <p className="type-overline mb-4 text-primary-blue">{eyebrow}</p>}<h2 id={id} className="type-h3">{title}</h2>{description && <p className="type-subtitle-1 mt-4 text-text-secondary">{description}</p>}</div>;
}
