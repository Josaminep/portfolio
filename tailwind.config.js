/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // <-- add this line
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e40af", // deep blue
        accent: "#facc15", // yellow
      },
    },
  },
  plugins: [],
};
