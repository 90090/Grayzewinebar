// tailwind.config.mjs
export default {
  content: [
    "./src/**/*.{astro,js,ts,jsx,tsx,html}"
  ],
  theme: {
    extend: {
      colors: {
        "wine-black": "#0a0a0a",
        "wine-gold": "#d4af37",
        "wine-light-gold": "#f2d785",
        "wine-green": "#1a3a2e",
        "wine-gray": "#333333",
      },
    },
  },
  plugins: [],
};
