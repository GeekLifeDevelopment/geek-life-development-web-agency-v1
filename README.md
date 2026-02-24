# Geek Life Development

Production-ready Astro + React + Tailwind marketing site scaffold for a small web agency.

## Tech Stack

- Astro 5 (TypeScript strict)
- React integration enabled
- Tailwind CSS configured with project tokens
- ESLint + Prettier
- Sitemap generation + robots.txt + JSON-LD baseline

## Run the Project

Install dependencies:

```bash
npm install
```

Start dev server:

```bash
npm run dev
```

Build production:

```bash
npm run build
```

Optional quality commands:

```bash
npm run lint
npm run format:check
```

## Where to Customize

- Branding and business info:
	- `src/data/site.ts`
- Navigation links:
	- `src/data/site.ts` (`navLinks`)
- Colors, fonts, container sizing tokens:
	- `tailwind.config.mjs`
- Global typography and base spacing:
	- `src/styles/global.css`
- Core reusable layout and metadata defaults:
	- `src/components/Layout.astro`
	- `src/components/SEO.astro`
- Homepage and page copy:
	- `src/pages/*.astro`
- Case studies and dynamic work pages:
	- `src/data/caseStudies.ts`
	- `src/pages/work/[slug].astro`

## Contact Form Note

The contact form UI is available at `/contact` and currently posts to a placeholder action (`/api/contact`).
Wire this to your backend endpoint or form provider when ready.
