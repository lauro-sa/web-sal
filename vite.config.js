import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/web-sal/",  // Asegúrate que esto coincide con el nombre del repositorio
})
