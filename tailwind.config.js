/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    fontFamily: {
      sans: ["Gloria Hallelujah", "sans-serif"],
      serif: ["Caveat", "serif"],
    },
    extend: {
      colors: {
        primary: {
          50: "#f9f8f7",
          100: "#efedec",
          200: "#e6e3e2",
          300: "#d4cfcd",
          400: "#bbb2ae",
          500: "#a19792",
          600: "#897e79",
          700: "#726863",
          800: "#605854",
          900: "#524d4a",
          950: "#2a2725",
        },
      },
    },
  },
  plugins: [],
};
