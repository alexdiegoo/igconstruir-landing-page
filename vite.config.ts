import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
   base: '/igconstruir-landing-page/',
  plugins: [react()],
})
