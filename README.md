# Samava Tattoo Studio — Tattoo App Frontend

A premium, frontend-only tattoo marketplace built with React, TypeScript, Vite, Tailwind CSS v4, React Router, and Framer Motion. All content is driven by dummy data in `src/data/dummyData.ts` — no backend, APIs, or fetch calls.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Structure

- `src/data/dummyData.ts` — all artists, tattoos, categories, styles, studios, testimonials, and FAQs
- `src/types` — shared TypeScript interfaces
- `src/components/common` — Navbar, Footer, Button, Badge, SearchBar, SectionTitle, PageTransition
- `src/components/cards` — ArtistCard, TattooCard, CategoryCard
- `src/components/sections` — all homepage sections (Hero, Featured Artists, Trending, Categories, Styles, Gallery preview, Studios, Testimonials, FAQ, Newsletter)
- `src/pages` — Home, Artists, ArtistDetails, Gallery, Categories, About, Contact, NotFound
- `src/layouts/MainLayout.tsx` — shared Navbar/Footer shell
- `src/App.tsx` — all routes

## Notes

- Images are deterministic grayscale placeholders from picsum.photos (seeded, so they're stable across reloads) — swap the `img()` helper in `dummyData.ts` for real photography whenever you're ready.
- Design tokens (colors, type, radius, shadow) live in `src/index.css` under `@theme`, matching the palette in the original brief.
- The codebase is written so a backend/API layer can be dropped in later with minimal refactoring — data access is centralized in one file.
