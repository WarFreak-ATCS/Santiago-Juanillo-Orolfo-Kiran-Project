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
        tertiary: "#23A884",
        lightgray: "#999999",
        bgcolor: "#f5f5f5",
        nav: "#263078",
      },
      backgroundImage: {
        church: " linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.6)),  url('../IMG/aboutbanner5.jpg')",
      },
    },
  },
  plugins: [],
}

