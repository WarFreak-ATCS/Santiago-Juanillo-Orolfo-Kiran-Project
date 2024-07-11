const { lightgray } = require('color-name');

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
<<<<<<< HEAD
        tertiary: "#23A884",
        lightgray: "#F4F4F4"
=======
        bgcolor: "#f5f5f5",
>>>>>>> 7d541770182359acffcecad52c65c877392b64eb
      },
    },
  },
  plugins: [],
}

