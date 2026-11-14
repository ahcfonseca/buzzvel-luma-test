import { Hero } from "@/components/sections/hero";
import { SiteHeader } from "@/components/site-header";
import { Categories } from "@/components/sections/categories";
import { FeaturedCourse } from "@/components/sections/featured-course";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Testimonial } from "@/components/sections/testimonial";
import { People } from "@/components/sections/people";
import { Contact } from "@/components/sections/contact";

export default function HomePage() {
  return <>
    <SiteHeader />
    <main id="main-content">
      <Hero />
      <Categories />
      <FeaturedCourse />
      <HowItWorks />
      <Testimonial />
      <People />
      <Contact />
    </main>
  </>;
}
