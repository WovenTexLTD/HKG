# HKG Steel Mills Ltd — Corporate Website

Professional corporate presence website for HKG Steel Mills Ltd, Sonargaon, Bangladesh.

## Tech Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS**
- **Lucide React** (icons)
- **Inter** (Google Fonts)

## Pages

| Route | Page |
|---|---|
| `/` | Home — Hero, stats, products overview, projects, CTA |
| `/about` | About Us — Company overview, timeline, MD quote, mission/vision |
| `/products` | Products — Steel billets, deformed bar, grade table, weight table |
| `/process` | Production Process — 8-step process from scrap to dispatch |
| `/certifications` | Certifications — ISO 9001, BSTI, PWD, BUET details |
| `/contact` | Contact — Form, office locations, embedded maps |

## Getting Started

```bash
npm install
npm run dev       # Development server → http://localhost:3000
npm run build     # Production build
npm start         # Production server
```

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project at vercel.com
3. Deploy — Vercel auto-detects Next.js, no config needed

### Netlify / Static Host
Uncomment `output: "export"` in `next.config.ts`, then:
```bash
npm run build
# Upload the `out/` directory to your host
```
Note: Static export disables the dynamic contact form. Use Netlify Forms or Formspree instead.

## Before Going Live — Checklist

- [ ] Replace `public/og-image.jpg` with a real 1200×630px OG image
- [ ] Replace all `[PLACEHOLDER: ...]` image sections with actual HKG factory photos
- [ ] Connect the contact form to a backend:
  - **Formspree** (easiest): sign up at formspree.io, get a form ID, update the form action in `app/contact/page.tsx`
  - **Vercel + Resend**: add a serverless API route for email delivery
- [ ] Update `metadataBase` in `app/layout.tsx` once domain is confirmed
- [ ] Submit sitemap to Google Search Console: `https://www.hkgsteel.com/sitemap.xml`

## SEO Included

- Full meta tags (title, description, keywords) on every page
- Open Graph + Twitter Card tags
- `/sitemap.xml` auto-generated
- `/robots.txt` served
- Canonical URL tags on each page
- Semantic HTML with correct heading hierarchy
