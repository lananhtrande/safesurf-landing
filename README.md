# SafeSurf Landing Page

A modern landing page built with React, TypeScript, Vite, and Tailwind CSS v4.

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js) or yarn

## Getting Started

Clone the repository and install dependencies:

```bash
git clone <your-repo-url>
cd safesurf-landing
npm install
```

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173` by default.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the Vite dev server with hot reload |
| `npm run build` | Type-check with TypeScript and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

## Project Structure

```
├── public/                  # Static assets
├── src/
│   ├── components/
│   │   └── landing/         # Landing page sections
│   │       ├── Navigation.tsx
│   │       ├── Hero.tsx
│   │       ├── Features.tsx
│   │       ├── LiveMapSection.tsx
│   │       ├── LivePerformance.tsx
│   │       ├── Partners.tsx
│   │       └── Footer.tsx
│   ├── App.tsx              # Root component
│   ├── App.css
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles / Tailwind imports
├── index.html               # HTML template
├── components.json           # shadcn/ui config
├── vite.config.ts            # Vite configuration
├── tsconfig.json             # TypeScript config (root)
├── tsconfig.app.json         # TypeScript config (app)
├── tsconfig.node.json        # TypeScript config (Node/tooling)
├── eslint.config.js          # ESLint flat config
└── package.json
```

## Tech Stack

- **React 19** — UI framework
- **TypeScript 5.9** — Type safety
- **Vite 7** — Build tool and dev server
- **Tailwind CSS 4** — Utility-first styling (via `@tailwindcss/vite` plugin)
- **MapLibre GL** — Interactive map rendering
- **Lucide React** — Icon set
- **Radix UI** — Accessible primitives
- **shadcn/ui** — Component library (CVA + Tailwind Merge)

## Building for Production

```bash
npm run build
```

Output is written to `dist/`. You can serve it with any static hosting provider (Vercel, Netlify, Cloudflare Pages, etc.) or preview it locally:

```bash
npm run preview
```

## License

All rights reserved.
