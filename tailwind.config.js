/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customRed : '#ff4747'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'), // Add this line
  ],
  variants: {
    scrollbar: ['rounded'], // To allow rounded scrollbars
  },
};