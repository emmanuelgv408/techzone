module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "Arial", "sans-serif"],
        heading: ["Montserrat", "Arial", "sans-serif"],
      },
      colors: {
        cyan: "#00bcd4",
        charcoal: "#212121",
        "light-gray": "#f5f5f5",
        navy: "#1d2d44",
        "lime-green": "#76d62b",
        white: "#ffffff",
        slate: "#90a4ae",
      },
    },
  },
  plugins: [],
};
