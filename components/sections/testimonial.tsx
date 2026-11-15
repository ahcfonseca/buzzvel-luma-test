import Image from "next/image";
import { Container } from "@/components/ui/layout";
import { CountUp } from "@/components/ui/count-up";

type LearningMetric = { value: number; suffix: string; label: string };
const metrics: readonly LearningMetric[] = [
  { value: 24, suffix: "K+", label: "active learners" },
  { value: 120, suffix: "+", label: "expert-led courses" },
  { value: 92, suffix: "%", label: "complete their first course" },
];

export function Testimonial() {
  return <section aria-labelledby="testimonial-title" className="section bg-background-white">
    <Container className="flex flex-col gap-15 lg:flex-row lg:items-center lg:justify-between">
      <h2 id="testimonial-title" className="sr-only">What our learners say</h2>
      <figure className="min-w-0 max-w-150 lg:flex-1">
        <Image src="/images/quote-mark.svg" alt="" width={23.711} height={21.953} />
        <blockquote className="type-quote mt-4">
          <p>The lessons are short enough to fit into my week, but detailed enough that I actually leave with something I can use.</p>
        </blockquote>
        <figcaption className="mt-8 flex items-center gap-4">
          <Image src="/images/alex-morgan.png" alt="Alex Morgan" width={48} height={48} sizes="48px" className="size-12 shrink-0 rounded-full bg-primary-blue-light object-cover" />
          <div>
            <p className="text-base font-bold leading-[26px] lg:leading-7">Alex Morgan</p>
            <p className="type-body text-text-secondary">Product Manager</p>
          </div>
        </figcaption>
      </figure>
      <dl aria-label="Luma learning community statistics" className="grid w-full min-w-0 grid-cols-3 gap-4 lg:w-[35.8%] lg:shrink-0 lg:grid-cols-1 lg:gap-5 lg:border-l lg:border-line lg:pl-12">
        {metrics.map(metric => <div key={metric.label} className="flex min-w-0 flex-col">
          <dt className="type-body order-2 mt-1 text-text-tertiary">{metric.label}</dt>
          <dd className="type-h1 order-1 text-[clamp(1.875rem,10vw,2.5rem)] text-primary-blue lg:text-[4rem]"><CountUp value={metric.value} suffix={metric.suffix} /></dd>
        </div>)}
      </dl>
    </Container>
  </section>;
}
