/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        antic: ['"Antic Didone"', 'serif'],
        cinzel: ['Cinzel', 'serif'],
        flamenco: ['Flamenco', 'cursive'],
        gscode: ['"Google Sans Code"', 'monospace'],
        ibm: ['"IBM Plex Mono"', 'monospace'],
        quicksand: ['Quicksand', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
