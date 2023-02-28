/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: { padding: { DEFAULT: '1.5rem', xl: '6rem' } },
    extend: { fontFamily: { vazir: ['var(--vazir-font)', ...fontFamily.sans] } },
  },
  plugins: [],
};
