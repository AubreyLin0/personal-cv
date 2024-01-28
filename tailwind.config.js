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
        "base-yellow": "#f6e05e",
        "dark-blue": "#041c32",
        "dark-yellow": "#F6D776",
        "error-red": "#D42E20",
      },
      backgroundImage: {
        wave: "url('./assets/wave-bg.svg')",
        introduce: "url('./assets/introduce-image.jpg')",
      },
    },
  },
  plugins: [],
};
