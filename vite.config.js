import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/web-sal/', // Reemplaza 'web-sal' con el nombre de tu repositorio
  plugins: [react()],
})
