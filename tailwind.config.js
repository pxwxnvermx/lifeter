/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./dist/*.html"],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    {
      pattern: /form-*/,
    },
  ],
};
