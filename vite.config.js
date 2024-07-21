import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://beannorelle.github.io/e-plantShopping/",
  plugins: [react()],
})
