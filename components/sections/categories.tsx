import { CategoryCard, type CategoryCardProps } from "@/components/ui/cards";
import { Section, SectionHeading } from "@/components/ui/layout";
import { CategoriesReveal } from "@/components/sections/categories-reveal";
import type { CSSProperties } from "react";

export type Category = Pick<CategoryCardProps, "number" | "title" | "description" | "href">;
export type CategoriesProps = { categories?: readonly Category[] };

// Course destinations can be replaced when the course catalogue is connected.
const defaultCategories: readonly Category[] = [
  { number: "01", title: "Product Design", description: "Turn complex problems into clear, useful experiences.", href: "/courses/product-design" },
  { number: "02", title: "Technology", description: "Build a stronger understanding of the tools shaping digital products.", href: "/courses/technology" },
  { number: "03", title: "Business", description: "Develop practical skills for better decisions and stronger teams.", href: "/courses/business" },
  { number: "04", title: "Creative", description: "Explore new ways to communicate, create and tell stories.", href: "/courses/creative" },
];

export function Categories({ categories = defaultCategories }: CategoriesProps) {
  return <Section id="courses" aria-labelledby="categories-title" className="bg-background-white">
    <SectionHeading id="categories-title" eyebrow="Find your next skill" title="Learn something worth knowing." description="Short, practical courses designed around skills you can put to work immediately." />
    <CategoriesReveal>
      {categories.map((category, index) => <li key={category.number} className="min-w-0" style={{ "--reveal-delay": `${index * 300}ms` } as CSSProperties}><CategoryCard {...category} /></li>)}
    </CategoriesReveal>
  </Section>;
}
