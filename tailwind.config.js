module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero_bg: "url('../public/assets/hero_BG.svg')",
      },
    },
  },
  plugins: [],
};
