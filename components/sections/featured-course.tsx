import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/layout";
import { Pill } from "@/components/ui/pill";
import courseImage from "@/public/images/featured-course.png";

export type FeaturedCourseProps = {
  courseHref?: string;
  catalogueHref?: string;
};

const courseDetails = ["8 lessons", "2h 40min", "Intermediate"] as const;

export function FeaturedCourse({ courseHref = "/courses/product-design", catalogueHref = "/courses" }: FeaturedCourseProps) {
  return <section id="featured-course" aria-labelledby="featured-course-title" className="section bg-primary-blue text-text-white-primary">
    <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-15">
      <div className="relative min-w-0">
        <div className="relative h-70 overflow-hidden rounded-card bg-primary-blue-light lg:h-102">
          <Image src={courseImage} alt="A designer sketching at a workbench with product prototypes and material samples." fill sizes="(min-width: 1280px) 530px, (min-width: 1024px) calc((100vw - 220px) / 2), (min-width: 768px) calc(100vw - 80px), calc(100vw - 40px)" placeholder="blur" className="object-cover" />
        </div>
        <p className="type-overline absolute -left-3 -top-3 rounded-badge bg-secondary-yellow px-3 py-1.5 text-text-primary">Featured Course</p>
      </div>
      <div className="min-w-0">
        <p className="type-overline">Most popular this month</p>
        <h2 id="featured-course-title" className="type-h3 mt-4">Designing products people understand.</h2>
        <p className="type-subtitle-2 mt-5">Learn how to turn complex workflows into simple, intentional product experiences through research, structure and thoughtful interaction design.</p>
        <p className="type-subtitle-2 mt-6">with Maya Chen · Senior Product Designer</p>
        <ul aria-label="Course details" className="mt-6 flex flex-wrap gap-3 text-text-white-secondary lg:text-text-white-primary">
          {courseDetails.map(detail => <li key={detail}><Pill>{detail}</Pill></li>)}
        </ul>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <ButtonLink href={courseHref} variant="yellow" className="focus-visible:outline-secondary-yellow">View course</ButtonLink>
          <ButtonLink href={catalogueHref} variant="ghost" className="group focus-visible:outline-secondary-yellow">Browse all courses <Image src="/images/arrow-right-light.svg" alt="" width={20} height={20} className="shrink-0 transition-transform duration-200 ease-out motion-safe:group-hover:translate-x-1 motion-safe:group-focus-visible:translate-x-1 motion-reduce:transition-none" /></ButtonLink>
        </div>
      </div>
    </Container>
  </section>;
}
