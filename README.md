# BuildMetric — UK Construction Calculators

Next.js 16 App Router, React 19, TypeScript, Tailwind 4, Lucide. Built on the supplied project structure.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before deployment (important)

1. Choose the final brand and domain. Set `NEXT_PUBLIC_SITE_URL=https://your-domain.co.uk` in Vercel project environment variables (and `.env.local` for local testing). This is used for canonical URLs and sitemap.
2. Replace the placeholder **Privacy** and **Terms** pages with real policies and required business identity/address disclosures. These pages are deliberately marked noindex until complete.
3. Update `rynovadev@gmail.com` if a different contact inbox is preferred.
4. Test material assumptions with suppliers and construction professionals; default densities and prices are illustrative only.
6. Add actual favicon/brand assets and test on mobile. Do not claim measured traffic or advertiser results until you have evidence.

## Calculations

`lib/calculations.ts` contains pure calculation functions. All dimensions are converted to metres and millimetres. The depth entered is the finished compacted depth; the result is an estimated mass using a user-adjustable bulk density and wastage factor. Bag counts are rounded up. For screed, bag yields can differ significantly by manufacturer; check product coverage.

## SEO

Three distinct indexable calculator pages, static metadata, sitemap, robots, internal links and helpful descriptions. Check real UK SERPs before finalising keyword targeting. Related keyword volumes must not simply be added because intent may overlap.
