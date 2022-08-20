/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.js.tx.jsx.tsx",
    "./src/components/**/*.{js,ts,jsx.tsx}",
  ],
  theme: {
    extend: {
      colors: {
        amazon_blue: "#131921",
        amazon_light: "#232F3E",
      },
      fontFamily: {
        titleFont: "Roboto",
        bodyFont: "Poppins",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
