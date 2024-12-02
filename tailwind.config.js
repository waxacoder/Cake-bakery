/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: "#704A24",
        orange: "#FBA651",
        orange2: "#FDCB9A",
        grey: "#ADAAA8",
        grey2: "#E1E0DF",
        white2: "#FFF6EE",
        black: "#1C140C",
      },
    },
    fontFamily: {
      manrope: ["Manrope", "sans-serif"],
    },
    backgroundImage: {
      "custom-bg": "url('./src/assets/images/backgroundimage.jpeg')",
    },
  },
  plugins: [],
};
