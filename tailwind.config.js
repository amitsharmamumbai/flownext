/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6366f1", // Indigo-500
          dark: "#4f46e5",
          light: "#a5b4fc",
        },
        accent: "#10b981", // Emerald
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
