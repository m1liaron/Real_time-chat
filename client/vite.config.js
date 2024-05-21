import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "https://server-n9cmlldp4-vlads-projects-d23fb6e2.vercel.app",
      },
    },
  },
})
