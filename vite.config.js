import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // base: '/web-sal/', // Solo si se despliega en GitHub Pages quitar las 2 barras de delante.
  assetsInclude: ['**/*.pdf'],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3002',  // La URL del servidor backend
        changeOrigin: true,
        secure: false,
      }
    }
  }
});
