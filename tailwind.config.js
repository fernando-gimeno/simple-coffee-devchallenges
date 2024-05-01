/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dm-sans': ['DM Sans', 'sans-serif'],
      },
      colors: {
        "page-bg": "#111315",
        "card-bg": "#1B1D1F",
        "soft-gray": "#6F757C",
        "soft-green": "#BEE3CC",
        "soft-white": "#FEF7EE",
        "popular": "#F6C768",
        "sold-out": "#ED735D",
      },
      backgroundImage: {
        "hero-bg": "url('/src/assets/bg-cafe.jpg')",
      },
      fontSize: {
        "heading": "32px",
        "body": "16px",
        "label": "14px",
        "price": "12px",
        "small": "10px",
      }
    },
  },
  plugins: [],
}

