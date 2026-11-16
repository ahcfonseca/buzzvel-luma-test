import type { Metadata } from "next";
import { Button, ButtonLink } from "@/components/ui/button";
import { CategoryCard, CourseCard } from "@/components/ui/cards";
import { ContactCard } from "@/components/ui/contact-card";
import { InputField, TextareaField } from "@/components/ui/form-field";
import { Container, Section } from "@/components/ui/layout";
import { Pill } from "@/components/ui/pill";
import { RatingBadge } from "@/components/ui/rating-badge";
import { StatBadge } from "@/components/ui/stat-badge";
import { TextLink } from "@/components/ui/text-link";

export const metadata: Metadata = {
  title: "Design system",
  description: "Luma color tokens, responsive typography, and reusable interface components.",
};

const colorGroups = [
  {
    title: "Brand and accents",
    colors: [
      { token: "primary-blue", hex: "#3157F6" },
      { token: "primary-blue-light", hex: "#E2E8FF" },
      { token: "primary-orange", hex: "#FF704D" },
      { token: "secondary-yellow", hex: "#FFEE7E" },
      { token: "accent-yellow", hex: "#E9D659" },
    ],
  },
  {
    title: "Backgrounds",
    colors: [
      { token: "background-white", hex: "#FFFFFF" },
      { token: "background-light-yellow", hex: "#F9F8F3" },
      { token: "background-yellow", hex: "#FFF1C2" },
      { token: "background-orange", hex: "#FFCB9F" },
      { token: "background-darkblue", hex: "#171B2C" },
    ],
  },
  {
    title: "Text and borders",
    colors: [
      { token: "text-primary", hex: "#171B2C" },
      { token: "text-secondary", hex: "#656770" },
      { token: "text-tertiary", hex: "#6D7384" },
      { token: "text-white-primary", hex: "#FFFFFF" },
      { token: "text-white-secondary", hex: "#E7E7EC" },
      { token: "text-white-tertiary", hex: "#9E9FAA" },
      { token: "line", hex: "#DBDFEB" },
    ],
  },
];

const typeStyles = [
  { label: "Heading 1", className: "type-h1", family: "Plus Jakarta Sans", weight: 700, mobile: "40 / 44", desktop: "64 / 70" },
  { label: "Heading 2", className: "type-h2", family: "Plus Jakarta Sans", weight: 700, mobile: "36 / 40", desktop: "56 / 64" },
  { label: "Heading 3", className: "type-h3", family: "Plus Jakarta Sans", weight: 700, mobile: "32 / 36", desktop: "48 / 56" },
  { label: "Heading 4", className: "type-h4", family: "Plus Jakarta Sans", weight: 700, mobile: "28 / 32", desktop: "40 / 48" },
  { label: "Heading 5", className: "type-h5", family: "Plus Jakarta Sans", weight: 700, mobile: "20 / 28", desktop: "20 / 32" },
  { label: "Quote", className: "type-quote", family: "Plus Jakarta Sans", weight: 600, mobile: "20 / 32", desktop: "30 / 44" },
  { label: "Subtitle 1", className: "type-subtitle-1", family: "Inter", weight: 400, mobile: "16 / 26", desktop: "18 / 28" },
  { label: "Subtitle 2", className: "type-subtitle-2", family: "Inter", weight: 400, mobile: "14 / 24", desktop: "16 / 28" },
  { label: "Body", className: "type-body", family: "Inter", weight: 400, mobile: "14 / 24", desktop: "14 / 24" },
  { label: "Overline", className: "type-overline", family: "Inter", weight: 600, mobile: "12 / 16", desktop: "12 / 16" },
];

const navigation = [
  { id: "colors", label: "Colors" },
  { id: "typography", label: "Typography" },
  { id: "buttons", label: "Buttons" },
  { id: "inputs", label: "Inputs" },
  { id: "links", label: "Links" },
  { id: "badges", label: "Badges" },
  { id: "cards", label: "Cards" },
];

function PreviewHeading({ id, title, description }: { id: string; title: string; description: string }) {
  return <div className="mb-10 max-w-180">
    <h2 id={id} className="type-h4">{title}</h2>
    <p className="mt-3 text-text-secondary">{description}</p>
  </div>;
}

export default function DesignSystemPreview() {
  return <>
    <header className="border-b border-line bg-background-white py-6">
      <Container className="flex flex-wrap items-center justify-between gap-4">
        <p className="font-bold">Luma / Design system</p>
        <TextLink href="/" className="font-bold text-primary-blue">Back to the page</TextLink>
      </Container>
    </header>
    <main id="main-content">
      <Section aria-labelledby="design-system-title">
        <h1 id="design-system-title" className="type-h2">Design system</h1>
        <p className="type-subtitle-1 mt-5 max-w-180 text-text-secondary">Color tokens, responsive typography, and the reusable components used across Luma.</p>
        <nav aria-label="Design system sections" className="mt-8">
          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {navigation.map(item => <li key={item.id}><TextLink href={`#${item.id}`} className="font-bold text-primary-blue">{item.label}</TextLink></li>)}
          </ul>
        </nav>
      </Section>

      <Section id="colors" aria-labelledby="colors-title" className="bg-background-white">
        <PreviewHeading id="colors-title" title="Color palette" description="Swatches use the shared CSS variables. Token names work with Tailwind color utilities such as bg-primary-blue and text-text-secondary." />
        <div className="flex flex-col gap-10">
          {colorGroups.map(group => <div key={group.title}>
            <h3 className="type-h5 mb-5">{group.title}</h3>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {group.colors.map(color => <li key={color.token} className="overflow-hidden rounded-card border border-line">
                <div aria-hidden="true" className="h-24 border-b border-line" style={{ backgroundColor: `var(--color-${color.token})` }} />
                <div className="p-4">
                  <p className="break-words font-semibold">{color.token}</p>
                  <p className="mt-1 font-mono text-xs text-text-secondary">{color.hex}</p>
                  <code className="mt-2 block break-all text-xs text-text-secondary">--color-{color.token}</code>
                </div>
              </li>)}
            </ul>
          </div>)}
        </div>
      </Section>

      <Section id="typography" aria-labelledby="typography-title">
        <PreviewHeading id="typography-title" title="Typography" description="Plus Jakarta Sans for headings and quotes. Inter for supporting text. Sizes below show font size / line height in pixels, with desktop styles starting at 1024px." />
        <div className="divide-y divide-line">
          {typeStyles.map(style => <div key={style.className} className="grid min-w-0 gap-5 py-8 first:pt-0 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
            <div className="text-text-secondary">
              <code className="font-semibold text-primary-blue">{style.className}</code>
              <p className="mt-2">{style.family} · {style.weight}</p>
              <p>Mobile {style.mobile} · Desktop {style.desktop}</p>
            </div>
            <p className={`${style.className} min-w-0 break-words`}>{style.label === "Quote" ? "One focused lesson at a time." : style.label}</p>
          </div>)}
        </div>
      </Section>

      <Section id="buttons" aria-labelledby="buttons-title" className="bg-background-white">
        <PreviewHeading id="buttons-title" title="Buttons" description="Primary, secondary, yellow, and ghost variants with default, compact, full-width, and disabled examples." />
        <div className="flex flex-col gap-8">
          <div className="flex flex-wrap items-center gap-4">
            <Button>Primary</Button><Button variant="secondary">Secondary</Button><Button variant="yellow">Yellow</Button>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="compact">Compact</Button><Button disabled>Disabled</Button><Button variant="secondary" disabled>Disabled secondary</Button>
          </div>
          <div className="max-w-96"><Button fullWidth>Full width</Button></div>
          <div className="rounded-card bg-primary-blue p-6"><Button variant="ghost">Ghost on blue</Button></div>
          <div>
            <h3 className="mb-4 font-bold">Navigation button</h3>
            <ButtonLink href="#cards">Explore cards</ButtonLink>
          </div>
        </div>
      </Section>

      <Section id="inputs" aria-labelledby="inputs-title">
        <PreviewHeading id="inputs-title" title="Inputs" description="Shared labels, hints, validation messages, and disabled controls. Each label and message is associated with its field." />
        <div className="grid items-start gap-6 md:grid-cols-2">
          <InputField id="preview-name" label="Full name" placeholder="Your name" autoComplete="name" />
          <InputField id="preview-email" label="Email" type="email" placeholder="you@example.com" autoComplete="email" hint="Use the email associated with your account." />
          <InputField id="preview-invalid-email" label="Email with error" type="email" defaultValue="invalid-email" error="Please enter a valid email address." />
          <InputField id="preview-disabled" label="Disabled input" defaultValue="Unavailable" disabled />
          <TextareaField id="preview-message" label="Your question" placeholder="Tell us how we can help..." />
          <TextareaField id="preview-message-error" label="Question with error" defaultValue="Hi" error="Please include at least 10 characters in your question." />
        </div>
      </Section>

      <Section id="links" aria-labelledby="links-title" className="bg-background-white">
        <PreviewHeading id="links-title" title="Links" description="Text links use the shared underline animation on hover and keyboard focus. Tab through the examples to inspect focus styles." />
        <div className="flex flex-wrap items-center gap-6">
          <TextLink href="/" className="font-bold text-primary-blue">Back to Luma</TextLink>
          <TextLink href="#typography" className="text-text-secondary">View typography</TextLink>
        </div>
        <div className="mt-6 rounded-card bg-background-darkblue p-6">
          <TextLink href="#colors" className="text-text-white-secondary focus-visible:outline-text-white-primary">Link on a dark background</TextLink>
        </div>
      </Section>

      <Section id="badges" aria-labelledby="badges-title">
        <PreviewHeading id="badges-title" title="Badges and pills" description="Reusable statistics, ratings, and non-interactive metadata labels." />
        <div className="flex flex-wrap items-center gap-6">
          <StatBadge value="120+" label="expert-led courses" />
          <RatingBadge rating={4.9} />
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Pill>8 lessons</Pill><Pill>2h 40min</Pill><Pill>Intermediate</Pill>
        </div>
        <div className="mt-6 flex flex-wrap gap-3 rounded-card bg-primary-blue p-6 text-text-white-primary">
          <Pill>Product design</Pill><Pill>Self-paced</Pill>
        </div>
      </Section>

      <Section id="cards" aria-labelledby="cards-title" className="bg-background-white">
        <PreviewHeading id="cards-title" title="Cards" description="Category, course, and contact components with the same props and styling used by the page." />
        <div className="grid items-start gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="mb-4 font-bold">Category card</h3>
            <CategoryCard number="01" title="Product design" description="Turn big ideas into thoughtful digital experiences." href="/#courses" />
          </div>
          <div>
            <h3 className="mb-4 font-bold">Course card</h3>
            <CourseCard href="/#featured-course" title="Designing products people understand." description="Research, structure, and thoughtful interaction design." image={{ src: "/images/featured-course.png", alt: "A designer working with sketches and product prototypes." }} category="Product design" duration="8 lessons · 2h 40min" />
          </div>
          <div>
            <h3 className="mb-4 font-bold">Contact cards</h3>
            <div className="flex flex-col gap-4">
              <ContactCard title="Email" value="contact@luma.com" href="mailto:contact@luma.com" icon={{ src: "/images/contact-email.svg", width: 24, height: 24 }} />
              <ContactCard title="Response time" value="Up to 24 hours on business days" icon={{ src: "/images/contact-clock.svg", width: 20, height: 20 }} />
            </div>
          </div>
        </div>
      </Section>
    </main>
  </>;
}
