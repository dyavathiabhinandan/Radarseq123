# RadarSeq website

The site uses Next.js 14 App Router, TypeScript, Tailwind CSS, Framer Motion and React Three Fiber. The public content is maintained in `lib/data.ts`; research metrics are presented as reported study results, and interactive visualisations use labelled synthetic data.

## Design system

Inter is loaded with `next/font` for headings, body copy, navigation and buttons; IBM Plex Mono is used for section indices and technical labels. The measured type scale is defined with CSS custom properties in `app/globals.css` and exposed as Tailwind tokens in `tailwind.config.ts`: fluid 60–84px page titles, 36px mobile / 48px tablet-and-up section titles, 24px subheadings, 16px body text, and 14px navigation and buttons.

The light palette is tokenized in `app/globals.css` and mirrored in `lib/theme.ts` for 3D assets. The reusable RadarSeq mark is an inline SVG in `components/layout/Logo.tsx`; `app/icon.svg` and `public/opengraph-image.png` provide the site icon and social preview.

## Local development

```bash
npm ci
npm run dev
```

## Static GitHub Pages deployment

The project is configured for the custom domain `radarseq.ai`:

```bash
npm run build
```

Next.js exports the static site to `out/`. The GitHub Actions workflow in `.github/workflows/deploy.yml` builds and deploys `out/` when changes reach `main` or when manually dispatched. Enable GitHub Pages for the repository and set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**. The custom domain is recorded in `public/CNAME`; configure the repository's Pages custom domain as `radarseq.ai` and point the domain's DNS records to GitHub Pages. The published URL is `https://radarseq.ai/`.

No Next.js server or API route is required. The contact form prepares a `mailto:` draft for `info@radarseq.ai`; no form data is submitted automatically.

## Content and research notes

- RadarSeq v1 uses CNN image processing of radar-chart sequences followed by BiLSTM temporal modelling.
- RadarSeq++ processes feature sequences directly using a state-space and attention architecture.
- The reported research studies use different evaluation setups; results are not service guarantees or a controlled like-for-like comparison.
- Demonstration charts are synthetic examples and do not call a live model or backend.
- Research papers and supplied team details should be updated in `lib/data.ts` when verified source material is available.
