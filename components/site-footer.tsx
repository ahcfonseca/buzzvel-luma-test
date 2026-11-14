import Image from "next/image";
import { Container } from "@/components/ui/layout";
import { TextLink } from "@/components/ui/text-link";

type FooterLink = { label: string; href: string };
type FooterGroup = { title: string; id: string; links: readonly FooterLink[] };

const groups: readonly FooterGroup[] = [
  { title: "Explore", id: "footer-explore", links: [
    { label: "Courses", href: "/#courses" }, { label: "Categories", href: "/#courses" },
    { label: "Instructors", href: "/#community" }, { label: "For Teams", href: "/teams" },
  ] },
  { title: "Company", id: "footer-company", links: [
    { label: "About", href: "/about" }, { label: "Careers", href: "/careers" }, { label: "Journal", href: "/journal" },
  ] },
  { title: "Support", id: "footer-support", links: [
    { label: "Help Center", href: "/help" }, { label: "Contact", href: "/#contact" },
    { label: "Terms", href: "/terms" }, { label: "Privacy", href: "/privacy" },
  ] },
];

function FooterColumn({ group }: { group: FooterGroup }) {
  return <nav aria-labelledby={group.id} className={group.id === "footer-support" ? "col-span-2 min-w-0 lg:col-span-1" : "min-w-0"}>
    <h2 id={group.id} className="type-overline text-text-white-secondary">{group.title}</h2>
    <ul className="mt-4 flex flex-col items-start gap-3">
      {group.links.map(link => <li key={link.label}><TextLink href={link.href} className="text-text-white-tertiary transition-colors hover:text-text-white-primary focus-visible:outline-text-white-primary">{link.label}</TextLink></li>)}
    </ul>
  </nav>;
}

export function SiteFooter() {
  return <footer className="bg-background-darkblue pb-5 pt-15 lg:pb-10 lg:pt-20">
    <Container>
      <div className="grid grid-cols-2 gap-10 lg:grid-cols-[2fr_repeat(3,minmax(0,1fr))] lg:gap-8">
        <div className="col-span-2 min-w-0 lg:col-span-1">
          <a href="/" aria-label="Luma home" className="flex w-fit focus-visible:outline-text-white-primary">
            <Image src="/images/luma-logo-light.svg" alt="" width={53.7379} height={16.918} />
          </a>
          <p className="mt-3 text-text-white-tertiary lg:max-w-60">Practical learning for curious people.</p>
        </div>
        {groups.map(group => <FooterColumn key={group.id} group={group} />)}
      </div>
      <div className="mt-12 border-t border-text-secondary pt-6 lg:mt-16">
        <p className="text-center text-[13px] leading-[19.5px] text-text-white-primary lg:text-left lg:text-text-white-secondary">© 2026 Luma Learning</p>
      </div>
    </Container>
  </footer>;
}
