/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          400: "#888B97",
          500: "#68799F",
          600: "#626687",
          700: "#3C4563",
          800: "#1B1C57",
          900: "#0E1735",
        },
        green: {
          1000: "#D1FAE5",
          1100: "#82FFE8",
          1200: "#10B981",
          1300: "#047857",
        },
        orange: {
          1000: "#F59E0B",
        },
      },
    },
  },
  plugins: [],
};
