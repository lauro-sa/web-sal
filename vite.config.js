import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/web-sal/', // Agrega esta línea con el nombre de tu repositorio
  plugins: [react()],
})
