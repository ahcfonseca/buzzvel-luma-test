import type { ComponentPropsWithoutRef } from "react";

export type TextLinkProps = ComponentPropsWithoutRef<"a"> & { href: string };

/** Shared text-link treatment; the underline follows the label, including wrapped lines. */
export function TextLink({ children, ...props }: TextLinkProps) {
  return <a {...props}><span className="link-underline">{children}</span></a>;
}
