import styles from "./people.module.css";
import type { ReactNode } from "react";
import { ScrollParallax } from "@/components/ui/scroll-parallax";

export function PeopleCollageMotion({ children }: { children: ReactNode }) {
  return <ScrollParallax className={styles.peopleCollage} label="A collage celebrating the international community of students and teachers.">{children}</ScrollParallax>;
}
