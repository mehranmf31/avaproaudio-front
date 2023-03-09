/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: { padding: { DEFAULT: '1.2rem', xl: '6rem' } },
    extend: {
      fontFamily: { vazir: ['var(--vazir-font)', ...fontFamily.sans] },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
        '6xl': '4.5rem',
      },
    },
  },
  plugins: [],
};
