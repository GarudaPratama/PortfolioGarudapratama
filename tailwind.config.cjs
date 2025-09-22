module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#06b6d4", // cyan
          500: "#06b6d4",
        },
      },
      boxShadow: {
        "soft-lg": "0 12px 30px rgba(2,6,23,0.4)",
      },
    },
  },
  plugins: [],
};
