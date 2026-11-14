import { Hero } from "@/components/sections/hero";
import { SiteHeader } from "@/components/site-header";
import { Categories } from "@/components/sections/categories";

export default function HomePage() {
  return <>
    <SiteHeader />
    <main id="main-content">
      <Hero />
      <Categories />
    </main>
  </>;
}
