import { Hero } from "@/components/sections/hero";
import { SiteHeader } from "@/components/site-header";
import { Categories } from "@/components/sections/categories";
import { FeaturedCourse } from "@/components/sections/featured-course";
import { HowItWorks } from "@/components/sections/how-it-works";

export default function HomePage() {
  return <>
    <SiteHeader />
    <main id="main-content">
      <Hero />
      <Categories />
      <FeaturedCourse />
      <HowItWorks />
    </main>
  </>;
}
