// tailwind.config.js
export const darkMode = 'media';
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    colors: {
      'violeta-marca': '#8964e8',
      'azul-custom': '#2e3c51',
      'texto-claro': 'rgba(191, 199, 210, 1)',
      'acento-rosa': '#c42ed4',
    },
    backgroundColor: {
      'fondo-oscuro': '#10151d',
    },
    transitionProperty: {
      'all': 'all'
    },
    transitionDuration: {
      '300': '300ms'
    }
  },
};
export const plugins = [];
