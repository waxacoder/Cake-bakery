/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: "#704A24",
        brown2: "#B07439",
        orange: "#FBA651",
        orange2: "#FDCB9A",
        orange3: "#FBA65140",
        grey: "#ADAAA8",
        grey2: "#E1E0DF",
        grey3: "#EDECEC",
        white2: "#FFF6EE",
        white3: "#FAFAFA",
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
