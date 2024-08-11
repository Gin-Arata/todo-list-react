/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgscreen: "#e2dad6",
        fontcolorprimary: "#F5EDED",
        bgcolorcard: "#7FA1C3",
        bgcolorcardnavbar: "#6482AD"
      }
    },
  },
  plugins: [],
}

