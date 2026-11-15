# Luma design system

The landing page at `/` is being assembled section by section. The component showcase is available at `/design-system`.

## Tokens

Heading weights H1–H4 use 700 by request, overriding Figma's original 800. H5 remains 700; quote styles remain 600.

`app/globals.css` is the source of truth. Tailwind v4 exposes the color, font, spacing, radius, and shadow tokens as utilities. All 16 Figma colors are included, with `backgrounnd` normalized to `background`. Typography includes all 20 desktop/mobile styles through 10 responsive classes: `type-h1` through `type-h5`, `type-subtitle-1`, `type-subtitle-2`, `type-body`, `type-overline`, and `type-quote`.

Spacing uses Tailwind's 4px base: 1 = 4px, 2 = 8px, 3 = 12px, 4 = 16px, 5 = 20px, 6 = 24px, 7 = 28px, 8 = 32px, 10 = 40px, 12 = 48px, 15 = 60px, 16 = 64px, 20 = 80px, 25 = 100px. Use `gap-*`, `m*`, and `p*` utilities. These spacing values are implementation tokens; Figma has no numeric variables.

| Viewport | Section top/bottom | Side gutter | Content max width |
| --- | --- | --- | --- |
| Below 768px | 60px | 20px | 1120px |
| 768–1023px | 80px | 40px | 1120px |
| 1024px and above | 100px | 80px | 1120px |

The 1120px cap applies to content, excluding gutters. At 1280px the content is exactly 1120px wide. Larger screens center the content. Tablet interpolation is an implementation choice between the supplied frames. Sections can override vertical spacing for design-specific exceptions.

## Components

- `TextLink`: shared text-link component with a global left-to-right underline on hover and keyboard focus. Used by navigation, contact details, course titles and footer links; category-card Explore labels use the same treatment. Reduced motion shows the underline immediately. Image-only links and button-style links retain their existing appearance.
- `SiteFooter`: responsive footer with the original light logo, Explore/Company/Support navigation and copyright. Mobile places Explore and Company side by side and Support below; desktop uses four columns. Existing in-page destinations are connected; remaining company, support and legal routes are reserved for future pages.

- `Container`, `Section`, `SectionHeading`: responsive page structure. Give every section an accessible heading via `aria-labelledby`.
- `Button`: native action/submit button; defaults to `type="button"`. `ButtonLink`: navigation with the same primary, secondary, yellow, and ghost appearances. Ghost is designed for dark or saturated backgrounds.
- `InputField`, `TextareaField`: explicit labels, native HTML props, optional hint/error associations. Callers own validation and submission.
- `CategoryCard`, `CourseCard`: typed content, semantic structure, responsive imagery. Course images should use local paths in `public/`.
- `AvatarGroup`: overlapping decorative portraits with an accessible group label, 32px/40px sizes, and cream/yellow border tones.
- `RatingBadge`: content-sized five-star social proof with a typed average rating and label. The consuming section controls its position.
- `StatBadge`: content-sized statistic and supporting label, with typed value and label props. The consuming section controls its position.
- `Pill`: a transparent bordered metadata label with native span props. Inherits text color; it is not a button or filter.
- `ContactCard`: responsive icon-and-detail card with typed title, value, icon dimensions and optional value link.
- `Contact`: responsive contact details and form. Reuses shared fields and buttons, validates entries and prepares an email draft; no message is sent automatically and no delivery endpoint is configured. Form copy remains English across breakpoints for consistency with the site.
- `FinalCta`: centered closing call to action with four learner portraits and configurable navigation links. Original doodles and geometric decorations appear only at desktop widths; mobile uses full-width stacked buttons. The Join Luma destination is reserved for a future signup page.
- `ScrollParallax`: shared reversible scroll controller with a configurable pixel distance (36px default for People, 60px for CTA decorations). Desktop-only effects respond to breakpoint changes; reduced motion leaves the final layout static. CTA doodles alternate vertical direction and settle at 90% visible capacity while text and buttons stay still.
- `FeaturedCourse`: responsive featured-course section with local optimized imagery, metadata pills, and configurable course/catalogue destinations. Those destinations are reserved for future course pages.
- `HowItWorks`: centered eyebrow/title and a semantic three-step list with decorative geometric illustrations. Steps stack vertically on mobile and tablet and form a connected row on desktop. The illustrations use an additional design color, `accent-yellow` (`#e9d659`).
- `HowItWorksReveal`: desktop-only entrance sequence when 50% of the section is visible. Blocks fade/rise over 500ms with a 300ms stagger, while connector segments draw left to right. Runs once; mobile, reduced-motion and unsupported browsers show the static final layout.
- `CategoriesReveal`: uses the same shared `useEntranceReveal` trigger and 500ms fade/rise with 300ms staggering for category cards. Desktop only, once at 50% section visibility; keyboard focus immediately reveals the cards. Existing hover effects are preserved.
- `Testimonial`: semantic quote/author figure and community-statistics definition list. Metrics sit in a mobile row and a desktop column with a divider; the quote retains its 600 weight and metric values follow the 700 heading override.
- `CountUp`: integer metrics count from zero once 50% visible, over 1400ms with easing. Fixed 1ch digit slots and tabular numerals reserve the final number width, keeping suffixes stationary. Screen readers receive the final value; reduced motion and unsupported browsers show it immediately.
- `People`: community introduction and ten-photo collage. Container-relative sizing preserves the Figma mobile/desktop image proportions without horizontal overflow. Includes a configurable link to the future community page; the header's Community anchor targets this section.
- `PeopleCollageMotion`: columns enter with alternating 36px vertical offsets and ease toward their original positions. They stay settled while both the section and collage reach 90% of their visible capacity (each height capped at viewport height), then reverse as you scroll upward past that threshold. Animation frames stop at rest; passive scroll listeners remain available for reversal. Reduced motion skips the effect.
- `Hero`: responsive Figma hero with configurable course and how-it-works links. Their default section targets will become available as those sections are added.
- `Categories`: responsive category list using `CategoryCard` and `SectionHeading`, with one/two/four columns on mobile/tablet/desktop. Accepts typed category data; the course catalogue destinations are reserved for future pages.

Fonts are served through `next/font`; reduced-motion preferences disable transitions and animations. The preview form has no submission integration.

## Development

Run `npm install`, `npm run dev`, `npm run typecheck`, and `npm run build`. Google Fonts must be reachable during the initial production build.
