/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        lightBlue: "#EBF9FC",
        darkOrange: "#FE5634",
        lightGreen: "#41C485",
        lightOrange: "#FF762A",
        lighterOrange:"#f7935c",
        gray:"rgb(176, 176, 176)",
        darkGray:"#6e6a6a"
      },
    },
  },
  plugins: [],
};

