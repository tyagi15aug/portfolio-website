# anuj-portfolio

Personal portfolio site — Vite + React + TypeScript, no UI framework dependency.

## Structure

```
src/
  components/       One component per file, plus a co-located *.module.css
  data/             Content, separated from presentation
    links.ts        GitHub / LinkedIn / resume
    experience.ts   Work history
    projects.ts     Side projects (CloudLab, GlucoNimbus, ...)
    skills.ts       Grouped skill chips
  styles/
    tokens.css      Design tokens — colors, type, spacing (light + dark)
    global.css      Reset + base element styles
  types.ts          Shared TypeScript interfaces for the data layer
public/
  resume/           The resume PDF served as a static file
```

Editing content (a new role, a project link, a skill) never touches a component —
only the relevant file in `src/data/`.

## Design system

- **Palette**: Anthropic-style warm neutrals (oat/cream background, near-black ink)
  plus two accents — the signature clay/terracotta, and a deep olive-green added
  to complement it. All tokens live in `src/styles/tokens.css`, with a dark-mode
  variant driven by `prefers-color-scheme`.
- **Type**: Sora (display/headings, a geometric sans in the spirit of
  scribdinc.com's typography) + IBM Plex Sans (body) + IBM Plex Mono
  (labels, dates, tags).

## Adding project links

`src/data/projects.ts` has a `url?: string` field per project. Leave it
`undefined` and the card renders a disabled link icon instead of a dead link;
set it once a repo or live demo exists.

Live project cards launch the deployed application in an accessible modal so a
visitor stays in the portfolio. Every modal includes an open-in-new-tab
fallback for hosts that deny iframe embedding. GlucoNimbus also includes a
brief data-flow explanation and a link to its architecture view.

## Development

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Deploying

`npm run build` outputs a static `dist/` folder — deploy it anywhere that
serves static files (Cloudflare Pages, Netlify, Vercel, GitHub Pages). For
Cloudflare Pages: connect this repo (build command `npm run build`, output
directory `dist`) for push-to-deploy, or run the build locally and drag the
`dist/` folder into a Direct Upload project.
