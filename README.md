# AgentQA — Marketing Website

A single-page marketing website for **AgentQA**, an AI behavioral QA and deployment governance platform for agentic AI systems. Built with Next.js 14 (App Router), React 18, TypeScript, and Tailwind CSS.

## Project Structure

```
app/
  layout.tsx        — Root layout with metadata
  page.tsx          — Home page (assembles all sections)
  globals.css       — Tailwind base imports
components/
  Nav.tsx           — Sticky header with desktop + mobile navigation
  Hero.tsx          — Hero section with headline and CTA buttons
  ValueProp.tsx     — Value proposition band
  Capabilities.tsx  — Six platform capability cards
  WhoItsFor.tsx     — Four audience cards
  CtaSection.tsx    — Demo request call-to-action
  Footer.tsx        — Site footer
next.config.mjs     — Next.js config
tailwind.config.ts  — Tailwind config
tsconfig.json       — TypeScript config
postcss.config.mjs  — PostCSS config
.eslintrc.json      — ESLint (next/core-web-vitals)
.prettierrc         — Prettier config
```

## Tech Stack

- **Next.js 14** — App Router, SSG, fast initial load, SEO-friendly
- **React 18** — Component-based UI
- **TypeScript** — Type safety
- **Tailwind CSS v3** — Utility-first styling
- **ESLint + Prettier** — Code quality and formatting

## Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

```bash
npm run build
npm start
```

## Linting

```bash
npm run lint
```

## Deployment

Deploy to any platform that supports Next.js:

- **Vercel** — `vercel deploy` (recommended, zero config)
- **Netlify** — connect repo, set build command to `npm run build`
- **AWS Amplify** — connect repo and deploy
