// tailwind.config.js
module.exports = {
  darkMode: 'media', // Usar preferencias de medios para el tema oscuro
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        'violeta-marca': '#8964e8',
        'azul-custom': '#2e3c51',
        'texto-claro': 'rgba(191, 199, 210, 1)', 
        'acento-rosa': '#c42ed4',

      },
      backgroundColor: {
        'fondo-oscuro': '#10151d',
      }
    },
  },
  plugins: [],
}
