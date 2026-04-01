# AgentQA — Marketing Website

A static single-page marketing website for **AgentQA**, an AI behavioral QA and deployment governance platform for agentic AI systems.

## Project Structure

```
index.html          — Single landing page (HTML)
styles.css          — Plain CSS styles (no preprocessor or framework)
script.js           — Vanilla JS IIFE fallback (nomodule browsers)
js/
  main.js           — ES-module entry point; imports and initialises modules
  modules/
    nav.js          — Mobile navigation toggle module
README.md           — This file
```

## Pages

| Page | File | Description |
|---|---|---|
| Home / Landing | `index.html` | Hero, value proposition, capabilities, audience, CTA, footer |

## Sections

- **Navigation** — Sticky header with logo and anchor links; hamburger menu on mobile
- **Hero** — Product name, primary value proposition headline, and CTA buttons
- **Value Proposition Band** — Single concise statement on structured/repeatable/auditable risk management
- **Capabilities** — Six capability cards: Behavioral QA, Deployment Governance, Audit Trails, Runtime Monitoring, Risk Management, Team Collaboration
- **Who It's For** — Four audience cards: AI/ML Engineers, Platform & DevOps Teams, Product & Engineering Leaders, Compliance & Risk Officers
- **CTA Section** — Demo request call-to-action
- **Footer** — Logo, tagline, copyright

## Tech Stack

- **HTML5** — Semantic markup, no build step
- **Plain CSS** — Single `styles.css`, no preprocessor, no utility library
- **Vanilla JS** — Single `script.js`, no external dependencies, mobile nav only

## Running Locally

Open `index.html` directly in any browser. No server, build step, or installation required.

```bash
open index.html          # macOS
start index.html         # Windows
xdg-open index.html      # Linux
```

## Design Principles

- Zero external dependencies — no CDN, no fonts, no analytics
- Fast initial page load — no render-blocking resources beyond `styles.css`
- Fully static — no backend, no API, no database
- Responsive — mobile-first grid layout with a hamburger nav at narrow viewports
- Accessible — semantic HTML landmarks, `aria-label` on interactive controls

## Deployment

Drop the three files (`index.html`, `styles.css`, `script.js`) onto any static host:

- GitHub Pages
- Netlify (drag-and-drop)
- Vercel
- AWS S3 + CloudFront
- Any web server capable of serving static files

No build pipeline or server-side runtime is needed.
