import { Hero } from "@/components/sections/hero";
import { SiteHeader } from "@/components/site-header";

export default function HomePage() {
  return <>
    <SiteHeader />
    <main id="main-content">
      <Hero />
    </main>
  </>;
}
