const defaultTheme = require('tailwindcss/defaultTheme')

const colors = {
  blacktext: '#2a2a2a',

  // primary: '#40c9ff',
  // secondary: '#f334b0',

  // secondary: '#45d226',

  // primary: '#219ebc',
  // secondary: '#ffb703',

  // primary: '#ff930f',
  // secondary: '#ff1b6b',

  // primary: '#fe4909',
  // secondary: '#ffffff',

  // primary: '#6f3bcb',
  // secondary: '#d3169b',

  // primary: '#10abc7',
  // secondary: '#eaea0e',

  // primary: '#7a4cd2',
  // secondary: '#FA6101',

  primary: '#5E17EB',
  secondary: '#F80068',
  third: '#00F5FF',
  fourth: '#FA6101',
  fifth: '#22B9FF',
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors
      },
      fontFamily: {
        'sans': ['Raleway', ...defaultTheme.fontFamily.sans],
        'montserrat': ['Alata']
      },
      dropShadow: {
        'twoColors': [
          '-8px -8px 16px rgba(18, 143, 183, 0.20)',
          '8px 8px 16px rgba(151, 71, 255, 0.20)'
        ],
        'square-sm': '2px 2px 0px rgba(42, 42, 42, 0.20)',
        'square-md': '4px 4px 0px rgba(42, 42, 42, 0.20)',
      },
      backgroundImage: {
        'main-gradient': `linear-gradient(45deg, ${colors.primary} 0%, ${colors.primary} 50%, ${colors.secondary} 50%, ${colors.secondary} 100%)`,
        'noise-fractal': 'url("images/noises/noise-1.svg")',
        'noise-turbulence': 'url("images/noises/noise-2.svg")',
      },
      borderImage: {
        'fdfs':'dsfsdf',
      }
    },
  },
  plugins: [],
}

