import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/web-sal/', // Asegúrate de que el nombre sea exactamente igual al del repositorio
  plugins: [react()],
})
