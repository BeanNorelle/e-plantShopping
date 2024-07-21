import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/e-plantShopping/', // Ensure this matches your GitHub Pages path
  build: {
    outDir: 'dist', // Output directory
  },
  plugins: [react()],
})
