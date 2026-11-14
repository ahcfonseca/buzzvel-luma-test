import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Appearance = { variant?: "primary" | "secondary" | "yellow" | "ghost"; size?: "default" | "compact"; fullWidth?: boolean; className?: string };
const variants = {
  primary: "bg-primary-blue text-background-white hover:brightness-90",
  secondary: "border border-line bg-background-white text-text-primary hover:bg-primary-blue-light",
  yellow: "bg-secondary-yellow text-text-primary hover:brightness-95",
  ghost: "bg-transparent text-text-white-secondary hover:bg-background-white/10",
};
function styles({ variant = "primary", size = "default", fullWidth, className }: Appearance) {
  return cn("inline-flex items-center justify-center gap-2 rounded-control text-center type-body font-bold transition-colors motion-reduce:transition-none", size === "compact" ? "min-h-11 px-5 py-2.5" : variant === "ghost" ? "min-h-13 px-4 py-3.5" : "min-h-13 px-7 py-3.5", variants[variant], fullWidth && "w-full", className);
}
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & Appearance;
export function Button({ variant, size, fullWidth, className, type = "button", ...props }: ButtonProps) {
  return <button type={type} className={cn(styles({ variant, size, fullWidth, className }), "disabled:cursor-not-allowed disabled:opacity-50")} {...props} />;
}
export type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & Appearance & { href: string };
export function ButtonLink({ variant, size, fullWidth, className, ...props }: ButtonLinkProps) {
  return <a className={styles({ variant, size, fullWidth, className })} {...props} />;
}
