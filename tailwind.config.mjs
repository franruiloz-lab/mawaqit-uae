/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,svelte}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#097233',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        gold: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
      },
      fontFamily: {
        arabic: ['Noto Naskh Arabic', 'Noto Sans Arabic', 'Tahoma', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
