/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{js,jsx}", "./app/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
