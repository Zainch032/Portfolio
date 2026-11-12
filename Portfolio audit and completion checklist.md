# Portfolio audit and completion checklist

## Audit of supplied `App.jsx`

**Structure and content.** The original was a single large React component combining content, data, navigation, and view logic. It had no project-specific case-study routes, no reusable detailed project template, and only three featured projects received full cards; five others were secondary listings. The original also used a polished visual theme, scroll state, IntersectionObserver animation, icon dependencies and many factual project descriptions. This replacement keeps the original factual content, presents all eight projects, separates project data from reusable views, and links to a case study for each.

**Content quality.** The source contains strong examples of model development, benchmarking, APIs, agentic tooling, and internships. It lacks dataset provenance/size for most projects, full model comparison tables, validation protocols, several metrics, notebook URLs, screenshots, and detailed challenges/lessons. The replacement labels each gap `[TODO]`. Existing metrics (e.g. churn F1/AUC, SmartPricer R²) remain described as source-reported and need their evaluation split/context documented. Check internship dates and current role availability for accuracy before publishing.

**Performance.** The original uses a large icon package and scroll/IntersectionObserver state, plus a profile image. The replacement removes icon and animation dependencies, uses CSS layouts, and has no large image requests until screenshot assets are added. Screenshots are explicit placeholders and will not earn meaningful image-content/accessibility value until replaced. Google Fonts is loaded by CSS; for stricter performance/self-hosting, remove the import and use the system font stack. This project has not received a Lighthouse run, so a 90+ score is a target, not a guaranteed result. Measure on the deployed site.

**Accessibility.** The source had an accessible menu toggle label but no `aria-expanded`, uses icon-only links, and relies on animated elements. The replacement uses semantic headings/sections, descriptive link text, visible focus styles, responsive layout, and reduced-motion support. Verify keyboard navigation, contrast, screen-reader reading order, and add real screenshot alt text with project-specific images. Mobile navigation uses visible inline links rather than a menu toggle.

**SEO and sharing.** The source did not expose meta description, canonical, Open Graph, Twitter card, sitemap, or robots metadata. These have been added as templates. Replace the placeholder domain and add a real share image. Current metadata in `index.html` is site-wide; improve per-route metadata/prerendering if search indexing of individual case studies matters. A static SPA may be less discoverable than prerendered HTML.

**Mobile.** The source had a responsive interface, but its CSS was not included in the attachment, so its mobile behavior could not be audited directly. Replacement CSS includes narrow-screen layouts and table overflow handling; test on actual devices or browser emulation.

**Deployment.** Only `App.jsx` was attached; no CSS, package manifest, image files, PDF, or build configuration were supplied. This is a clean Vite project keeping React and static-hosting compatibility. Direct nested route support should be checked on the selected host, especially GitHub Pages.

## Before publishing: TODO checklist

- [ ] Replace `YOUR-DOMAIN.example` in `index.html`, `public/robots.txt`, and `public/sitemap.xml`; verify canonical and share URLs.
- [ ] Add and verify the CV at `public/Muhammad_Zain_CV.pdf`.
- [ ] Add `public/og-image.png` (1200×630 recommended) and an accurate alternative text if shown in-page.
- [ ] Add actual project screenshots under `public/images/`, then wire them to cards with descriptive `alt` text and lazy loading. Current placeholders are not image assets.
- [ ] Add a notebook URL or mark unavailable for each of eight projects.
- [ ] For each case study, add dataset source, exact size, split, preprocessing/features, alternatives, model comparison, rationale, evaluation metrics, and reproducible evidence where available.
- [ ] Confirm or correct reported results: churn F1 0.50→0.70 / ROC-AUC 0.87 / product-count churn values; job-posting count and 93 features; SmartPricer R² 0.903; NewsClassify 90%+ accuracy; CarPredict R² ~0.91; NLP internship ~90% accuracy. Include metric context/splits.
- [ ] Add genuine project-specific architecture components, implementation challenges, lessons, and next steps; current diagram is intentionally generic.
- [ ] Confirm if the listed GitHub/Kaggle/social links are current. Kaggle currently links only to the Kaggle homepage because no profile URL was supplied.
- [ ] Verify all live demo URLs, support/status, and whether the described deployment matches current behavior.
- [ ] Add an Umami script only after creating a site/account and choosing a host; analytics is not active by default.
- [ ] Verify internship dates/status, CV, location/contact details, and availability before publishing publicly.
- [ ] Run Lighthouse on the deployed site; target 90+ performance/accessibility/SEO rather than claim a result in advance.
