/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // fontSize: {
      //   // "1xl": "2.25rem",
      //   // "2xl": "1.875rem",
      //   // "3xl": "1.5rem",
      //   // "4xl": "1.25rem",
      //   // "5xl": "1.125rem",
      //   // "6xl": "1rem",
      // },
      // colors: {
      //   foreground: "rgb(var(--foreground-rgb))",
      //   "background-start": "rgb(var(--background-start-rgb))",
      //   "background-end": "rgb(var(--background-end-rgb))",
      //   callout: "rgb(var(--callout-rgb))",
      //   "callout-border": "rgb(var(--callout-border-rgb))",
      //   card: "rgb(var(--card-rgb))",
      //   "card-border": "rgb(var(--card-border-rgb))",
      // },
      // borderRadius: {
      //   DEFAULT: "var(--border-radius)",
      // },
      // fontFamily: {
      //   mono: "var(--font-mono)",
      // },
      // maxWidth: {
      //   custom: "var(--max-width)",
      // },
    },
  },
  plugins: [],
};
