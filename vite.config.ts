import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  // GitHub Pages project sites are served from /<repo-name>/.
  // Override with VITE_BASE_PATH at build time, or '/' for local development.
  base: process.env.VITE_BASE_PATH || './',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': resolve(import.meta.dirname, './src'),
    },
  },
})