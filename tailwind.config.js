/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Dm sans", "sans-serif"],
      },
      colors: {
        primary: "#F62686",
      },
    },
  },
  plugins: [],
};
