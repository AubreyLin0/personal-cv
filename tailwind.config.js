/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mercado: ["Supermercado One", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      colors: {
        "base-black": "#505050",
        "base-white": "#f4f6f8",
        "main-yellow": "#f6e05e",
        "dark-blue": "#041c32",
      },
      backgroundImage: {
        wave: "url('src/assets/wave-bg.svg')",
      },
    },
  },
  plugins: [],
};
