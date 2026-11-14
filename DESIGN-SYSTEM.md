# Luma design system

The landing page at `/` is being assembled section by section. The component showcase is available at `/design-system`.

## Tokens

`app/globals.css` is the source of truth. Tailwind v4 exposes the color, font, spacing, radius, and shadow tokens as utilities. All 16 Figma colors are included, with `backgrounnd` normalized to `background`. Typography includes all 20 desktop/mobile styles through 10 responsive classes: `type-h1` through `type-h5`, `type-subtitle-1`, `type-subtitle-2`, `type-body`, `type-overline`, and `type-quote`.

Spacing uses Tailwind's 4px base: 1 = 4px, 2 = 8px, 3 = 12px, 4 = 16px, 5 = 20px, 6 = 24px, 7 = 28px, 8 = 32px, 10 = 40px, 12 = 48px, 15 = 60px, 16 = 64px, 20 = 80px, 25 = 100px. Use `gap-*`, `m*`, and `p*` utilities. These spacing values are implementation tokens; Figma has no numeric variables.

| Viewport | Section top/bottom | Side gutter | Content max width |
| --- | --- | --- | --- |
| Below 768px | 60px | 20px | 1120px |
| 768–1023px | 80px | 40px | 1120px |
| 1024px and above | 100px | 80px | 1120px |

The 1120px cap applies to content, excluding gutters. At 1280px the content is exactly 1120px wide. Larger screens center the content. Tablet interpolation is an implementation choice between the supplied frames. Sections can override vertical spacing for design-specific exceptions.

## Components

- `Container`, `Section`, `SectionHeading`: responsive page structure. Give every section an accessible heading via `aria-labelledby`.
- `Button`: native action/submit button; defaults to `type="button"`. `ButtonLink`: navigation with the same primary, secondary, and yellow appearances.
- `InputField`, `TextareaField`: explicit labels, native HTML props, optional hint/error associations. Callers own validation and submission.
- `CategoryCard`, `CourseCard`: typed content, semantic structure, responsive imagery. Course images should use local paths in `public/`.
- `AvatarGroup`: overlapping decorative portraits with an accessible group label.
- `RatingBadge`: content-sized five-star social proof with a typed average rating and label. The consuming section controls its position.
- `StatBadge`: content-sized statistic and supporting label, with typed value and label props. The consuming section controls its position.
- `Hero`: responsive Figma hero with configurable course and how-it-works links. Their default section targets will become available as those sections are added.

Fonts are served through `next/font`; reduced-motion preferences disable transitions and animations. The preview form has no submission integration.

## Development

Run `npm install`, `npm run dev`, `npm run typecheck`, and `npm run build`. Google Fonts must be reachable during the initial production build.
