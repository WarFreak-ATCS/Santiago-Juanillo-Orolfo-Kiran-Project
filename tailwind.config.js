/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        dosis: "Dosis",
        source: "Source",
      },
      colors: {
        dark: "#000000",
        light: "#ffffff",
        accent: "#123a54",
        bgcolor: "#f5f5f5",
      },
    },
  },
  plugins: [],
}

