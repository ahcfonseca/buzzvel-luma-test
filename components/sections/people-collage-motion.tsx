import type { ReactNode } from "react";
import { ScrollParallax } from "@/components/ui/scroll-parallax";

export function PeopleCollageMotion({ children }: { children: ReactNode }) {
  return <ScrollParallax className="people-collage" label="A collage celebrating the international community of students and teachers.">{children}</ScrollParallax>;
}
