import Image from "next/image";
import { AvatarGroup } from "@/components/ui/avatar-group";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/layout";
import { RatingBadge } from "@/components/ui/rating-badge";
import { StatBadge } from "@/components/ui/stat-badge";
import heroImage from "@/public/images/hero-learner.png";

export type HeroProps = { coursesHref?: string; howItWorksHref?: string };
const learners = ["/images/learner-1.png", "/images/learner-2.png", "/images/learner-3.png"] as const;

function HeroVisual() {
  return <div className="hero-visual">
    <div aria-hidden="true" className="hero-orange-panel" />
    <div aria-hidden="true" className="hero-circle" />
    <div className="hero-photo">
      <Image
        src={heroImage}
        alt="A learner focused on a lesson at their laptop."
        fill
        preload
        fetchPriority="high"
        sizes="(min-width: 1280px) 500px, (min-width: 1024px) calc((100vw - 220px) / 2.12), (min-width: 540px) 484px, calc(100vw - 56px)"
        placeholder="blur"
        className="object-cover"
      />
    </div>
    <StatBadge value="120+" label="expert-led courses" className="hero-course-badge" />
    <RatingBadge rating={4.9} className="hero-rating-badge" />
  </div>;
}

export function Hero({ coursesHref = "#courses", howItWorksHref = "#how-it-works" }: HeroProps) {
  return <section aria-labelledby="hero-title" className="section overflow-x-clip bg-background-light-yellow">
    <Container className="hero-layout">
      <div className="hero-copy min-w-0">
        <p className="type-overline text-primary-blue">Learn at your own pace</p>
        <h1 id="hero-title" className="type-h1 mt-4">Build skills that actually move you forward.</h1>
        <p className="type-subtitle-1 mt-6 max-w-120 text-text-secondary">Practical courses taught by people who do the work every day. Learn design, technology, business and more — one focused lesson at a time.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={coursesHref}>Explore courses</ButtonLink>
          <ButtonLink href={howItWorksHref} variant="secondary">See how it works</ButtonLink>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
          <AvatarGroup sources={learners} label="Members of the Luma learner community" />
          <p><strong className="font-bold">Trusted by 24,000+</strong><span className="text-text-secondary"> learners</span></p>
        </div>
      </div>
      <HeroVisual />
    </Container>
  </section>;
}
