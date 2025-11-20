import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react() , tailwindcss()],
  build: {
    chunkSizeWarningLimit: 1000, // Adjust the limit in KiB as needed (e.g., 1000 for 1MB)
  },

})
