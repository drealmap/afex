/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        switzer: ["Switzer-Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
}