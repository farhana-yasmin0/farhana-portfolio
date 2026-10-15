# Farhana Yasmin Portfolio

A premium, responsive personal portfolio website for **Farhana Yasmin**, a Creative Developer exploring AI-assisted creativity, generative media, prompt engineering, and modern web development.

## Overview

This is a static single-page React + TypeScript portfolio built with Vite. It is designed for GitHub Pages and focuses on presenting Farhana Yasmin honestly: her skills, projects, learning journey, creative work, and contact information.

No employment history, certifications, testimonials, or projects have been invented. Sections that depend on verified information show clear placeholders until real data is provided.

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- Framer Motion
- Lucide React
- React Hook Form
- ESLint/Oxlint for linting

## Project Structure

```text
.
├── .github/workflows/          # GitHub Pages deployment workflow
├── public/                     # Static assets, favicon, avatar
├── src/
│   ├── assets/                # Source images and icons
│   ├── components/            # Reusable UI components
│   ├── context/               # React context providers
│   ├── data/                  # Editable content data files
│   ├── hooks/                 # Reusable React hooks
│   ├── sections/              # Page sections
│   ├── styles/                # Global styles and design tokens
│   ├── App.tsx
│   └── main.tsx
├── .env.example
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Prerequisites

- Node.js 22 or newer
- npm 10 or newer

Check versions in Windows PowerShell:

```powershell
node --version
npm --version
```

## Installation

From the project folder:

```powershell
npm install
```

## Run the Development Server

```powershell
npm run dev
```

Then open the local URL shown in the terminal, usually `http://localhost:5173`.

`localhost` is a local development preview only. It is not a public website.

## Available Scripts

```powershell
npm run dev          # Start development server
npm run build        # Type check and create production build
npm run preview      # Preview the production build locally
npm run lint         # Run lint checks
npm run typecheck    # Run TypeScript checks
npm run test         # Run typecheck and lint
```

## Editing Content

### Profile information

Edit `src/data/profile.ts` for:

- Name and title
- Email, GitHub, LinkedIn links
- Hero text and avatar path
- About paragraphs and highlights
- Footer tagline

### Skills

Edit `src/data/skills.ts`.

Skills use text labels such as `Basic Knowledge`, `Beginner Level`, and `Learning` instead of invented percentages. Add or remove skill objects inside the correct category.

### Projects

Edit `src/data/projects.ts`.

Each project includes:

- `title`
- `description`
- `tech`
- `status`
- optional `live`
- optional `github`

Do not add fake live demo or repository URLs. Leave them out until verified, and the card will show **Coming Soon**.

### Education and certifications

Edit `src/data/education.ts`.

Add only verified education and certificate entries. If the arrays remain empty, the section displays an honest placeholder.

### Contact form provider

1. Create a provider such as Formspree.
2. Add the endpoint to `.env` or your hosting environment:

```powershell
copy .env.example .env
```

Then edit `.env`:

```text
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/yourFormId
```

If no provider is configured, the form safely opens the visitor's email app as a fallback. The UI never falsely reports that a message was sent.

### Avatar replacement

Replace `public/avatar.svg` with your own image. If you use a photo, update `avatarSrc` in `src/data/profile.ts` and set honest alt text. Do not present an AI-generated illustration as a real photograph.

## Build and Preview

```powershell
npm run typecheck
npm run lint
npm run build
npm run preview
```

The production build is created in `dist/`.

## GitHub Pages Deployment

The Git remote is connected to https://github.com/farhana-yasmin0/farhana-portfolio.git and the site is live at https://farhana-yasmin0.github.io/farhana-portfolio/. To redeploy:

1. Create a new GitHub repository.
2. Connect it as the remote:

```powershell
git remote add origin https://github.com/your-username/your-repository.git
git push -u origin master
```

3. In GitHub, open the repository settings.
4. Go to **Pages**.
5. Under **Build and deployment**, choose **GitHub Actions**.
6. Push to `main` or `master` to trigger `.github/workflows/deploy.yml`.

The workflow installs dependencies, runs lint and type checks, builds the site, and deploys `dist/`.

The workflow uses the repository name automatically to set the correct GitHub Pages base path. Please verify the repository name and resulting Pages URL before claiming a live URL.

## Troubleshooting

### `npm install` fails

- Confirm Node.js and npm are installed.
- Delete `node_modules` and `package-lock.json`, then run `npm install` again.

### Theme or styling looks wrong

- Check that `src/styles/globals.css` is imported in `src/main.tsx`.
- Clear browser cache and hard refresh.

### Contact form does not send

- Confirm `VITE_FORMSPREE_ENDPOINT` is set.
- Without a configured provider, the form uses the email-app fallback by design.

### TypeScript errors

- Run `npm run typecheck` and fix reported file and line numbers.

### Build errors

- Run `npm run lint` and `npm run typecheck`.
- Confirm all imported files exist and TypeScript types are valid.

## Accessibility and SEO Notes

- Semantic HTML headings and landmarks
- Keyboard-accessible navigation and controls
- Visible focus indicators
- Reduced-motion support
- SEO metadata and Open Graph tags
- Responsive layouts for phones, tablets, laptops, and desktops

## Notes

- The backend files from the previous project are not used by this static portfolio.
- No private API keys or credentials are included.
- Update content only when information is verified.