# Alex Morgan — Portfolio Website

A premium, responsive portfolio website built with React, TypeScript and Node.js.

## Tech Stack

- **Frontend:** React 19, TypeScript, Vite, Tailwind CSS v4, Framer Motion, Swiper
- **Backend:** Node.js, Express, Nodemailer
- **Serverless:** Vercel function (`/api/contact`)
- **Animations:** Framer Motion, react-type-animation, scroll reveals

## Features

- Hero section with name, avatar and professional bio
- About Me with highlights
- Skills with animated progress bars
- Projects with live demo & GitHub links
- Education & certifications
- Contact form (connected to email/backend)
- Dark/light mode, responsive navbar + footer, social links
- SEO meta tags, smooth scrolling, premium animations

## Run Locally

### Frontend
```bash
npm install
npm run dev
```

### Backend (optional, for real email)
```bash
cd server
npm install
cp ../.env.example .env  # fill SMTP
npm run dev
```

Frontend proxies `/api` to `http://localhost:5000` in dev.

## Build
```bash
npm run build
```

## Deploy

- **Vercel / Netlify:** push to GitHub and import. Add env vars from `.env.example`.
- **GitHub Pages:** build then serve `dist/`.

## Folder Structure

```
.
├── api/              # Vercel serverless function
├── public/           # Static assets
├── server/           # Express backend
├── src/
│   ├── components/
│   ├── context/
│   ├── data/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── vite.config.ts
└── README.md
```
