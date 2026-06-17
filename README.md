# Systemic Pipeline — Landing Page

A single-page, fully interactive marketing site for **Systemic Pipeline**, built
with Next.js (App Router), React 18, Tailwind CSS, Framer Motion, and
lucide-react. 26 sections, 5 interactive engines, and a BANT pre-qualification
modal.

---

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
# open http://localhost:3000

# 3. Production build
npm run build
npm run start
```

Requires **Node.js 18.17+** (Next.js 14 minimum).

---

## Project structure

```
systemic-pipeline/
├── app/
│   ├── globals.css        # Tailwind directives + base background
│   ├── layout.jsx         # Root layout, SEO metadata, <html>/<body>
│   └── page.jsx           # Renders the landing component
├── components/
│   └── SystemicPipelineLanding.jsx   # The entire landing page (1 file)
├── public/
│   └── fonts/             # Drop self-hosted Reckless Neue .woff2 here
├── jsconfig.json          # "@/..." import alias
├── next.config.mjs
├── package.json
├── postcss.config.js
└── tailwind.config.js
```

All page logic, copy, styling tokens, animations, and the five interactive
engines live in **`components/SystemicPipelineLanding.jsx`**. It is a client
component (`"use client"`). Fonts, keyframes, and helper CSS classes are
injected at runtime by the `BrandStyles` component inside that file, so the
Tailwind config is optional polish rather than a hard dependency.

---

## Deploy to Vercel (recommended)

1. Push this folder to a GitHub/GitLab repository.
2. In Vercel, **New Project → Import** the repo.
3. Framework preset auto-detects **Next.js**. No env vars required.
4. Click **Deploy**.

Or from the CLI:

```bash
npm i -g vercel
vercel        # preview
vercel --prod # production
```

It deploys cleanly on any Node host that supports Next.js 14 (Netlify, Render,
a Node server via `npm run build && npm run start`, etc.).

---

## Before you go live — fill these placeholders

The build intentionally ships with a few placeholders. Search the component for
each bracketed token and replace it:

| Placeholder | Where | What to do |
|---|---|---|
| `[Founder Name]` | About + Footer sections | Real founder name |
| `[X] years` / `[City]` | About + Footer | Real bio details |
| Credential lines (`[reference firms]`, `[trade publications]`, `[industry conferences]`) | About section | Real credentials |
| Founder portrait | About + Footer | Swap the placeholder icon block for a real headshot (`<img>` or `next/image`) |
| VSL embed URL | Hero (`VSLFacade`) | Your YouTube / Wistia / Mux video ID |
| `href="#"` links | Nav, Footer, LinkedIn CTAs | Real destinations / booking URL |
| Case studies (Section 14) | `CASES` array | Replace placeholder wins with real, attributable results |

The BANT modal's "Initiate Technical Review" / calendar links point to `#` —
wire them to your scheduler (Calendly, SavvyCal, Cal.com, etc.).

### Self-hosted display font

Reckless Neue is commercial. Add the licensed `.woff2` files to
`public/fonts/` (see `public/fonts/README.txt` for exact filenames). Until
then the page falls back to a refined serif stack and still looks polished.

---

## Analytics / tracking

Interactive elements carry `data-testid`, `data-tracking-event`, and
`data-tracking-section` attributes. The CTA handlers already include a
commented `window.dataLayer?.push(...)` hook — uncomment and wire it to GTM,
PostHog, Segment, or your analytics tool of choice.

---

## Tech notes

- **Single-file component** by design — easy to drop into any Next.js project.
- **Framer Motion** drives all animation (spring physics, scroll reveals).
- **VSL facade pattern**: the video iframe loads only on click, protecting
  Largest Contentful Paint.
- **`prefers-reduced-motion`** is respected globally.
- **Mobile**: 3-card grids use horizontal scroll-snap instead of tall vertical
  stacks; the hero uses `100dvh`; the sticky bar respects the safe-area inset.
