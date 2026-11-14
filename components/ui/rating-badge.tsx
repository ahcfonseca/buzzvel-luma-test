import Image from "next/image";
import { cn } from "@/lib/utils";

export type RatingBadgeProps = {
  rating: number;
  label?: string;
  className?: string;
};

/** Five-star social proof, with an average score supplied separately. */
export function RatingBadge({ rating, label = "avg rating", className }: RatingBadgeProps) {
  return <div className={cn("rating-badge", className)}>
    <span aria-hidden="true" className="flex shrink-0 gap-0.5">
      {Array.from({ length: 5 }, (_, index) => <Image key={index} src="/images/rating-star.svg" alt="" width={14} height={14} />)}
    </span>
    <span className="whitespace-nowrap"><span className="sr-only">Rated </span>{rating}<span className="sr-only"> out of 5</span> {label}</span>
  </div>;
}
