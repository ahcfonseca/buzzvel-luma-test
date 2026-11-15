import styles from "./final-cta.module.css";
import Image from "next/image";
import { AvatarGroup } from "@/components/ui/avatar-group";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/layout";
import { ScrollParallax } from "@/components/ui/scroll-parallax";

export type FinalCtaProps = { coursesHref?: string; joinHref?: string };
const learners = ["/images/learner-1.png", "/images/learner-2.png", "/images/learner-3.png", "/images/learner-4.png"] as const;

function CtaDecorations() {
  return <ScrollParallax decorative desktopOnly distance={60} className={`${styles.ctaDecorations} pointer-events-none absolute inset-y-0 left-1/2 hidden w-[1280px] -translate-x-1/2 select-none lg:block`}>
    <div className="absolute size-27 rounded-full border-2 border-background-orange" style={{ left: 22, top: 16.06 }} />
    <div className="absolute size-30 rounded-full bg-background-orange" style={{ left: 56, top: 373.06 }} />
    <div className="absolute size-10 rounded-full bg-background-orange" style={{ left: 1064, top: 468.37 }} />
    <div className="absolute flex size-[136.465px] items-center justify-center" style={{ left: 1144, top: -23.94 }}><div className="size-[115.057px] rotate-12 rounded-control bg-background-orange" /></div>
    <div className="absolute flex size-[66.419px] items-center justify-center" style={{ left: -33, top: 230.06 }}><div className="size-14 rotate-12 rounded-control bg-background-orange" /></div>
    <div className="absolute size-8 rounded-full border-2 border-background-orange" style={{ left: 1208, top: 429.09 }} />
    <div className="absolute size-8 rounded-full border-2 border-background-orange" style={{ left: 877, top: 43.06 }} />
    <div className="absolute flex size-[66.419px] items-center justify-center" style={{ left: 317, top: 42.37 }}><div className="size-14 rotate-12 rounded-control border border-background-orange" /></div>
    <div className="absolute flex size-[101.114px] items-center justify-center" style={{ left: 272, top: 360.06 }}><Image src="/images/cta-doodle-1.svg" alt="" width={82.56} height={82.56} className="rotate-15" /></div>
    <Image src="/images/cta-doodle-2.svg" alt="" width={160} height={160} className="absolute" style={{ left: 1080, top: 180.37 }} />
    <Image src="/images/cta-doodle-3.svg" alt="" width={32} height={32} className="absolute" style={{ left: 141, top: 214.06 }} />
    <Image src="/images/cta-doodle-4.svg" alt="" width={61.376} height={61.376} className="absolute" style={{ left: 1016, top: 82.06 }} />
    <Image src="/images/cta-doodle-5.svg" alt="" width={48} height={48} className="absolute" style={{ left: 963, top: 381.06 }} />
  </ScrollParallax>;
}

export function FinalCta({ coursesHref = "#courses", joinHref = "/signup" }: FinalCtaProps) {
  return <section aria-labelledby="final-cta-title" className="section relative isolate overflow-hidden bg-background-yellow">
    <CtaDecorations />
    <Container className="relative z-10">
      <div className="mx-auto max-w-180 text-center lg:px-8">
        <div className="flex justify-center"><AvatarGroup sources={learners} label="Members of the Luma learning community" size={40} borderTone="yellow" /></div>
        <h2 id="final-cta-title" className="type-h2 mt-8">What will you learn next?</h2>
        <p className="type-subtitle-1 mt-4 text-text-secondary">Start with one course. Build from there.</p>
        <div className="mt-10 flex flex-col justify-center gap-3 lg:flex-row">
          <ButtonLink href={coursesHref}>Explore all courses</ButtonLink>
          <ButtonLink href={joinHref} variant="secondary">Join Luma</ButtonLink>
        </div>
      </div>
    </Container>
  </section>;
}
