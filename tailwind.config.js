/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      fonts: {
        "main": ["Poppins", "sans-serif"]
      },

      colors: {
        "mwhite": "#f1f1f1",
        "mdark": "#000",
        "mviolet": "#9006c6"
      } 
    },
  },
  plugins: [],
}

