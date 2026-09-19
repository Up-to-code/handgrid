# HandGrid — Handyman Service Website

A Framer-style handyman-services marketing site built with **TanStack Router**,
**React + TypeScript**, and **Motion** animations (`motion` package, no GSAP).
Branding and copy kept as-is; assets live in `public/`.

## Run it

```bash
npm install
npm run dev      # Vite dev server
npm run build    # tsc -b && vite build
npm run preview  # serve the production build
```

## Routes

| Route | Page |
|---|---|
| `/` | Home — hero, services, stats, about, review wall, blog teasers, CTA |
| `/service` | All services |
| `/service/$slug` | Service detail pages |
| `/blog` | Blog listing |
| `/blog/$slug` | Article pages |
| `/review` | Customer reviews |
| `/contact` | Contact page |

## Structure

| Area | Description |
|---|---|
| `src/routes-a.tsx` … `routes-e.tsx` | Router setup and route definitions |
| `src/chrome-a.tsx`, `chrome-b.tsx` | Header/nav and footer |
| `src/s-hero.tsx`, `s-services.tsx`, `s-about.tsx`, `s-blog.tsx`, `s-social.tsx` | Page sections |
| `src/walls.tsx`, `motion-shared.tsx` | Auto-scrolling walls and shared Motion presets |
| `src/data*.ts` | Site copy, services, reviews, stats |
| `src/styles*.css` | Component styles |

## Animations

Motion package only — scroll reveals (`whileInView`), hero entrance, hover
interactions, and auto-scrolling review/social walls with pause-on-hover and
drag support.