import type { CSSProperties } from "react";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/layout";
import { PeopleCollageMotion } from "@/components/sections/people-collage-motion";

export type PeopleProps = { communityHref?: string };
type CollagePhoto = { src: string; mobile: readonly [number, number]; desktop: readonly [number, number] };
type PhotoStyle = CSSProperties & { "--photo-mobile-width": number; "--photo-mobile-height": number; "--photo-desktop-width": number; "--photo-desktop-height": number };

const columns: readonly (readonly CollagePhoto[])[] = [
  [
    { src: "/images/people-01.png", mobile: [72, 96], desktop: [102.722, 154.083] },
    { src: "/images/people-02.png", mobile: [94, 129], desktop: [138.033, 207.049] },
  ],
  [
    { src: "/images/people-03.png", mobile: [72, 106], desktop: [102.722, 170.134] },
    { src: "/images/people-04.png", mobile: [72, 107.5], desktop: [102.722, 172.541] },
    { src: "/images/people-05.png", mobile: [72, 80], desktop: [102.722, 128.403] },
  ],
  [
    { src: "/images/people-06.png", mobile: [72, 85.5], desktop: [102.722, 137.23] },
    { src: "/images/people-07.png", mobile: [72, 86], desktop: [102.722, 138.033] },
    { src: "/images/people-08.png", mobile: [72, 96], desktop: [102.722, 154.083] },
  ],
  [
    { src: "/images/people-09.png", mobile: [88, 127.5], desktop: [128.403, 204.642] },
    { src: "/images/people-10.png", mobile: [72, 82.5], desktop: [102.722, 132.415] },
  ],
];

function PeopleCollage() {
  return <PeopleCollageMotion>
    <div className="people-collage-circle" aria-hidden="true" />
    <div className="people-collage-columns">
      {columns.map((photos, index) => <div key={index} className="people-collage-column">
        {photos.map(photo => {
          const style: PhotoStyle = {
            "--photo-mobile-width": photo.mobile[0], "--photo-mobile-height": photo.mobile[1],
            "--photo-desktop-width": photo.desktop[0], "--photo-desktop-height": photo.desktop[1],
          };
          return <div key={photo.src} className="people-collage-photo" style={style}>
            <Image src={photo.src} alt="" fill sizes="(min-width: 1024px) 140px, (min-width: 640px) 150px, 26vw" className="object-cover" />
          </div>;
        })}
      </div>)}
    </div>
  </PeopleCollageMotion>;
}

export function People({ communityHref = "/community" }: PeopleProps) {
  return <section id="community" aria-labelledby="people-title" className="section overflow-x-clip bg-background-light-yellow">
    <Container className="grid items-center gap-8 lg:grid-cols-2 lg:gap-15">
      <div className="flex min-w-0 flex-col items-start gap-6 lg:gap-8">
        <div>
          <p className="type-overline text-primary-blue">The people</p>
          <h2 id="people-title" className="type-h3 mt-2">Meet international students &amp; teachers</h2>
        </div>
        <p className="type-subtitle-1 text-text-primary lg:text-text-secondary">Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus aenean lorem faucibus integer.</p>
        <ButtonLink href={communityHref} variant="secondary">Explore teachers and students</ButtonLink>
      </div>
      <PeopleCollage />
    </Container>
  </section>;
}
