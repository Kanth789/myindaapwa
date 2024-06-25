/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        customYellow: '#dda15e',
        lightCream:'#fefae0',
        brown:'#bc6c25'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
