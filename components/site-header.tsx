"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/layout";
import { TextLink } from "@/components/ui/text-link";

export type NavigationItem = { label: string; href: string };
export type SiteHeaderProps = {
  items?: readonly NavigationItem[];
  loginHref?: string;
  startHref?: string;
};

const navigation: readonly NavigationItem[] = [
  { label: "Courses", href: "/#courses" },
  { label: "For Teams", href: "/#teams" },
  { label: "Community", href: "/#community" },
  { label: "About", href: "/#about" },
];

function Logo({ onClick }: { onClick?: () => void }) {
  return <a href="/" aria-label="Luma home" onClick={onClick} className="inline-flex shrink-0 items-center py-3">
    <Image src="/images/luma-logo.svg" alt="" width={54} height={17} priority className="header-logo" />
  </a>;
}

export function SiteHeader({ items = navigation, loginHref = "/login", startHref = "/#courses" }: SiteHeaderProps) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  function openMenu() {
    dialog.current?.showModal();
    setIsClosing(false);
    setIsOpen(true);
  }

  function closeMenu() {
    dialog.current?.close();
    setIsOpen(false);
    setIsClosing(false);
  }

  function requestClose() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) closeMenu();
    else setIsClosing(true);
  }

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const desktop = window.matchMedia("(min-width: 64rem)");
    const handleResize = () => {
      if (desktop.matches) {
        dialog.current?.close();
        setIsOpen(false);
        setIsClosing(false);
      }
    };
    desktop.addEventListener("change", handleResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      desktop.removeEventListener("change", handleResize);
    };
  }, [isOpen]);

  // A timeout also completes dismissal if a browser interrupts the CSS animation.
  useEffect(() => {
    if (!isClosing) return;
    const timeout = window.setTimeout(closeMenu, 350);
    return () => window.clearTimeout(timeout);
  }, [isClosing]);

  return <>
    <header className="site-header border-b border-line">
      <Container className="header-row">
        <Logo />
        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {items.map(item => <li key={item.href}><TextLink href={item.href} className="header-nav-link">{item.label}</TextLink></li>)}
          </ul>
        </nav>
        <div className="hidden items-center justify-end gap-2 lg:flex">
          <TextLink href={loginHref} className="header-nav-link px-4 py-2.5">Log in</TextLink>
          <ButtonLink href={startHref} size="compact">Start learning</ButtonLink>
        </div>
        <button type="button" className="header-menu-toggle lg:hidden" aria-label="Open navigation menu" aria-haspopup="dialog" aria-expanded={isOpen} aria-controls="mobile-navigation" onClick={openMenu}>
          <Image src="/images/menu.svg" alt="" width={24} height={24} />
        </button>
      </Container>
    </header>

    {/* Native modal provides focus containment, background inertness and focus restoration. */}
    <dialog ref={dialog} id="mobile-navigation" aria-label="Navigation menu" className="mobile-navigation" data-state={isClosing ? "closing" : "open"}
      onCancel={event => { event.preventDefault(); requestClose(); }}
      onClose={() => { setIsOpen(false); setIsClosing(false); }}
      onAnimationEnd={event => { if (event.target === event.currentTarget && isClosing) closeMenu(); }}>
      <div className="border-b border-line">
        <Container className="header-row">
          <Logo onClick={closeMenu} />
          <button type="button" className="header-menu-toggle" aria-label="Close navigation menu" onClick={requestClose} autoFocus>
            <span aria-hidden="true" className="header-close-icon" />
          </button>
        </Container>
      </div>
      <Container className="flex min-h-[calc(100dvh-69px)] flex-col pb-10 pt-10">
        <nav aria-label="Mobile navigation">
          <ul className="flex flex-col">
            {items.map((item, index) => (
              <li key={item.href} className="border-b border-line">
                <TextLink
                  href={item.href}
                  onClick={closeMenu}
                  className="mobile-navigation-link type-h4 block py-5 transition-colors hover:text-primary-blue"
                  style={{ "--menu-item-delay": `${180 + index * 80}ms` } as CSSProperties}
                >
                  {item.label}
                </TextLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-auto flex flex-col gap-3 pt-12">
          <ButtonLink href={startHref} fullWidth onClick={closeMenu}>Start learning</ButtonLink>
          <ButtonLink href={loginHref} variant="secondary" fullWidth onClick={closeMenu}>Log in</ButtonLink>
        </div>
      </Container>
    </dialog>
  </>;
}
