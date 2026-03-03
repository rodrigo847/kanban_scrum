/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      screens: {
        mid: '600px',
      },
    },
  },
  plugins: [],
}
