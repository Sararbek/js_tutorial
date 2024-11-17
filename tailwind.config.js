/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        "Inter": ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
};
