/** @type {import('tailwindcss').Config} */
//eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        testimonial: "hsl(219, 30%, 18%)",
        footer: "#0c1524",
        main: "#181f2b",
        signUp: "#1b2330",
        button: "hsl(198, 60%, 50%)",
      },
      width: {
        100: "430px",
      },
      height: {
        100: "410px",
      },
      fontFamily: {
        raleway: ["Raleway"],
        openSans: ["Open Sans"],
      },
    },
    lg: "1200px",
  },
  plugins: [],
};
