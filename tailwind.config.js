const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sky-blue': '#60E0EB',
        'indigo-rainbow': '#13326D',
        'yankees-blue': '#1F2937',
      },
      fontFamily: {
        'sans': ['Raleway', ...defaultTheme.fontFamily.sans],
        'montserrat': ['Montserrat']
      },
    },
  },
  plugins: [],
}

