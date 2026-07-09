/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "navy-deep": "oklch(0.18 0.06 265)",
        navy: "oklch(0.22 0.07 265)",
        "navy-soft": "oklch(0.28 0.06 265)",
        gold: "oklch(0.78 0.13 80)",
        "gold-soft": "oklch(0.86 0.09 85)",
        cream: "oklch(0.97 0.015 85)",
      },
      fontFamily: {
        display: "var(--font-display)",
        sans: "var(--font-sans)",
      },
    },
  },
  plugins: [],
};
