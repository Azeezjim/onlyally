module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'playRed' : '#BA253D',
        'lightPlayRed' : '#FF1636'
      }
    },
  },
  plugins: [
    require('tailwind-scroll-behavior')(),
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/forms'),
  ],
}