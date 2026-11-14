import { Section, SectionHeading } from "@/components/ui/layout";

type StepIllustration = "focus" | "experience" | "practice";
type LearningStep = { number: string; title: string; description: string; illustration: StepIllustration };

const steps: readonly LearningStep[] = [
  { number: "01", title: "Choose your focus", description: "Find courses based on the skill you want to build, not endless content categories.", illustration: "focus" },
  { number: "02", title: "Learn from experience", description: "Follow concise lessons created by professionals who actually use these skills.", illustration: "experience" },
  { number: "03", title: "Put it into practice", description: "Every course includes practical exercises designed to turn knowledge into action.", illustration: "practice" },
];

function StepIcon({ variant }: { variant: StepIllustration }) {
  if (variant === "focus") return <div aria-hidden="true" className="relative z-10 size-14 rounded-full bg-primary-blue-light"><span className="absolute left-2 top-2 size-6 rounded-badge bg-primary-blue" /></div>;
  if (variant === "experience") return <div aria-hidden="true" className="relative z-10 size-14"><span className="absolute inset-0 rotate-12 rounded-control bg-primary-orange/15 lg:bg-background-orange" /><span className="absolute left-6 top-6 size-7 rounded-full bg-primary-orange" /></div>;
  return <div aria-hidden="true" className="relative z-10 size-14 rounded-floating bg-background-yellow"><span className="absolute left-2 top-7 size-5 rounded-full bg-accent-yellow" /></div>;
}

export function HowItWorks() {
  return <Section id="how-it-works" aria-labelledby="how-it-works-title" className="bg-background-light-yellow">
    <SectionHeading id="how-it-works-title" eyebrow="How Luma works" title="Less browsing. More learning." align="center" className="max-w-none" />
    <ol className="how-it-works-steps mt-10 lg:mt-20">
      {steps.map(step => <li key={step.number} className="how-it-works-step">
        <StepIcon variant={step.illustration} />
        <p className="type-overline mt-6 text-text-tertiary">Step {step.number}</p>
        <h3 className="type-h5 mt-2">{step.title}</h3>
        <p className="type-subtitle-2 mt-3 text-text-secondary">{step.description}</p>
      </li>)}
    </ol>
  </Section>;
}
