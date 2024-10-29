/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        28: "7.3rem", // Add bottom-28 for 7rem
      },
      colors: {
        primary: "#1D4ED8", // Example primary color
        secondary: "#3B82F6", // Example secondary color
      },
    },
  },
  plugins: [],
};
