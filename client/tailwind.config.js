/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brandBlue: "#193495",
        brandNavy: "#0c1950",
        brandSoft: "#dee4f4",
      },
    },
  },
  plugins: [],
};
