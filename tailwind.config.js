const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.js}", "./index.html"],
  theme: {
    extend: {
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
    },
  },
  plugins: [],
};
