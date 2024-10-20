/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Include paths to your HTML files
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JS and TS files in the src folder
    "./src/styles/**/*.{scss,css}", // Include SCSS and CSS files in the styles folder
  ],
  theme: {
    extend: {
      colors: {
        customOrange: "rgba(249, 105, 14, 0.8)",
      },
    },
  },
  plugins: [],
};
