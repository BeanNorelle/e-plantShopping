import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/e-plantShopping/', // Base path for GitHub Pages
  build: {
    outDir: 'dist', // Output directory
  },
  plugins: [react()],
})
