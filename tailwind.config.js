const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.js}", "./index.html"],
  theme: {
    extend: {
      screens: {
        lg: "1262px",
      },
      maxWidth: {
        footer: "1064px",
        lg: "1262px",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        headings: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        grey: "rgb(var(--grey))",
        black: "rgb(var(--black))",
        green: "rgb(var(--green))",
        beige: "rgb(var(--beige))",
      },
      spacing: {
        15: "60px",
        15.5: "62px",
        27.5: "110px",
        30: "120px",
      },
      letterSpacing: {
        percent: "1%",
        "2percent": "2%",
        "5percent": "5%",
      },
      fontSize: {
        banner: "40px",
        7: "28px",
      },
      borderRadius: {
        7: "28px",
      },
    },
  },
  plugins: [],
};
