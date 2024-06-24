/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customTeal: "#20C1AA",
        customGray: "#4A4A4A",
        heartRed: "#EA0B0B",
      },
      rotate: {
        360: "360deg",
      },
    },
  },
  plugins: [],
};
