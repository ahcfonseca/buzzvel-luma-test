import Image from "next/image";
import { cn } from "@/lib/utils";

export type CategoryCardProps = { number: string; title: string; description: string; href: string; className?: string };
export function CategoryCard({ number, title, description, href, className }: CategoryCardProps) {
  return <a href={href} className={cn("group flex h-full min-h-50 min-w-0 flex-col rounded-card border border-line bg-background-white p-6 transition-colors hover:border-primary-blue lg:min-h-65 lg:p-7", className)}>
    <div className="h-[46.5px] shrink-0 pt-0.5">
      <span className="type-overline inline-block rounded-badge bg-primary-blue-light px-2 py-1 text-primary-blue">{number}</span>
    </div>
    <h3 className="type-h5">{title}</h3>
    <p className="mt-3 text-text-tertiary">{description}</p>
    <span className="mt-auto flex items-center gap-2 pt-6 font-bold">Explore <Image src="/images/arrow-right.svg" alt="" width={20} height={20} className="shrink-0 transition-transform duration-200 ease-out motion-safe:group-hover:translate-x-1 motion-safe:group-focus-visible:translate-x-1 motion-reduce:transition-none" /><span className="sr-only"> {title}</span></span>
  </a>;
}

export type CourseCardProps = { href: string; title: string; description: string; image: { src: string; alt: string }; category: string; duration: string; className?: string };
export function CourseCard({ href, title, description, image, category, duration, className }: CourseCardProps) {
  return <article className={cn("overflow-hidden rounded-card border border-line bg-background-white", className)}><div className="relative aspect-[16/10]"><Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 350px, (min-width: 768px) 45vw, 100vw" className="object-cover" /></div><div className="p-6"><p className="type-overline text-primary-blue">{category}</p><h3 className="type-h5 mt-4"><a href={href} className="underline-offset-4 hover:underline">{title}</a></h3><p className="mt-2 text-text-secondary">{description}</p><p className="mt-6 text-text-secondary">{duration}</p></div></article>;
}
