/** @type {import('tailwindcss').Config} */
const defaultColors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      ...defaultColors,
      primary: '#4f46e5',
      primaryDark: '#557A95',
      primaryLight: '#7395AE',
      primaryDark: '#146C94',
      primaryLight: '#7395AE',
    }
  },
  plugins: [],
};