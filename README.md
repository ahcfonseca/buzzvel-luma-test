# Luma Learning

A responsive learning platform landing page built with Next.js App Router, TypeScript, and Tailwind CSS.

## Project scope

This project is a frontend test. It includes no backend, separate local backend server, or mock API. Page content is defined in the frontend, and the contact form opens a draft in the visitor's email app.

The local Next.js server runs the frontend for development and production previews. In a real application, I would connect the frontend to a backend service or API to handle data and contact form submissions.

## Requirements

- Node.js 20.9 or later
- npm, included with Node.js
- Git to clone the repository

## Install

Clone the repository and install the dependencies from the lockfile.

```bash
git clone https://github.com/ahcfonseca/buzzvel-luma-test.git
cd buzzvel-luma-test
npm ci
```

No environment variables are required to run the project.

On Windows PowerShell, use `npm.cmd` in place of `npm` if script execution is blocked.

## Run locally

Start the development server.

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page. Changes to the source files appear automatically during development.

The reusable component showcase is available at [http://localhost:3000/design-system](http://localhost:3000/design-system).

## Build and run for production

Create an optimized production build, then start the production server.

```bash
npm run build
npm run start
```

Open [http://localhost:3000](http://localhost:3000) to view the production build. Stop any development server using the same port first.

Use the production build when measuring performance with Lighthouse.

## Type checking

```bash
npm run typecheck
```

## Contact form

The contact form validates the fields and opens a prefilled draft addressed to `contact@luma.com` in the visitor's email app. The visitor reviews and sends the message from that app.

## Key Decisions

- **Heading weights** — H1 through H4 use a font weight of 700 instead of the 800 specified in Figma, based on a visual comparison of the rendered page. In a real project, this adjustment would be discussed with the designer.
- **Form language** — Form labels remain in English for consistency with the rest of the page.
- **Reusable design system** — Colors, typography, and spacing are centralized in design tokens. Shared buttons, form fields, cards, badges, and pills keep the sections consistent and make updates easier.
- **Responsive layout** — The page uses a mobile-first approach with a desktop container capped at 1120px. Desktop sections use 100px vertical spacing and 80px horizontal gutters, with smaller spacing on mobile and tablet.
- **Accessible interactions** — Controls support keyboard navigation, images include appropriate descriptions, and animations respect reduced-motion preferences.
- **Image optimization** — Next.js responsive images and sizes matched to the layout reduce unnecessary image downloads on mobile. The hero image is preloaded with high fetch priority to support LCP.
- **Contact form delivery** — Submission validates the fields and opens a prefilled email draft. The visitor reviews and sends the message through their email app.
- **Time Spent** — Around 4,5 hours, including the project/repository setup and Vercel configuration and deploy.
- **AI Tools** — I used GPT-6.1 Sol to assist with implementation after defining the project’s stack requirements, development guidelines, and design system. I worked section by section, reviewing and refining each implementation against the desktop and mobile designs.
