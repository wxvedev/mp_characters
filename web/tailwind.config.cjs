/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Onest Variable"', "sans-serif"],
      },
      textColor: {
        mp: "#EEC789"
      },
      backgroundColor: {
        mp: "#EEC789"
      }
    },
  },
  plugins: [],
}
