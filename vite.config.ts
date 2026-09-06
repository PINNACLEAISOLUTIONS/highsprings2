import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  plugins: [tailwindcss(), react()],
  build: {
    // GitHub Pages for this repo is configured as "Deploy from branch: main /docs",
    // so build straight into docs/ and commit it. (deploy.yml's Actions path has
    // never been the active Pages source.)
    outDir: 'docs',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
})
