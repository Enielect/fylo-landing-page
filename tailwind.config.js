/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        testimonial: "hsl(219, 30%, 18%)",
        footer: "hsl(216, 53%, 9%)",
        main: "hsl(218, 28%, 13%)",
        signUp: "hsl(217, 28%, 15%)",
        button: "hsl(198, 60%, 50%)"
      },
      width: {
        100: "430px"
      },
      height: {
        100: '410px'
      },
      fontFamily: {
        raleway: ["Raleway"],
        openSans: ["Open Sans"],
      },
    },
  },
  plugins: [],
};
