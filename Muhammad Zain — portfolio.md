# Muhammad Zain — portfolio

A responsive React/Vite static portfolio with eight project case studies. No paid hosting or server is required.

## Local setup

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Deploy

**Cloudflare Pages:** connect the Git repository, set build command `npm run build`, output directory `dist`, and production branch. Add a custom domain if available, then replace `YOUR-DOMAIN.example` in `index.html`, `public/robots.txt`, and `public/sitemap.xml`.

**Netlify:** connect repository; build command `npm run build`; publish directory `dist`. Vite fallback routing is configured by `public/_redirects`.

**GitHub Pages:** deploy `dist` with GitHub Actions or Pages. Set Vite `base` to `/<repository-name>/` if deploying to a project page rather than a user/org root domain. Case-study URLs use SPA fallback via `public/404.html`; confirm direct URLs after deployment. A custom domain makes canonical URLs and SEO easier.

## Privacy-friendly analytics (optional)

Use Umami Cloud's free plan or self-host Umami on infrastructure you control. Create a website in Umami, copy its script URL and website ID, then add this to `index.html` before `</head>`:

```html
<script defer src="https://YOUR-UMAMI-HOST/script.js" data-website-id="YOUR-WEBSITE-ID"></script>
```

For the hosted option, review its current free-plan and privacy terms before setup. Do not use advertising identifiers; publish any privacy disclosure required by your jurisdiction. Analytics is intentionally not enabled until you provide an account/website ID.

## Assets and TODOs

Add `public/Muhammad_Zain_CV.pdf`, `public/og-image.png`, `public/zain.jpeg` if desired, and individual project screenshots under `public/images/`. Add links to notebooks. Replace placeholder domain and case study TODO text only with evidence from the underlying projects. No performance outcome or dataset detail has been fabricated.
