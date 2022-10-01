import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8000,
    host: '0.0.0.0',
    watch: {
      usePolling: true, // ADD THIS LINE TO MAKE VITE WORK WITH DOCKER
    }
  },
  plugins: [react()]
})
