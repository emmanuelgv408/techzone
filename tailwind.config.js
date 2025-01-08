/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: '#00b0b9',  // Example primary color (teal-like)
        secondary: '#f5f5f5', // Light gray background
        accent: '#ff6347',    // Example accent color (tomato red)
        dark: '#333333',      // Dark text
        light: '#ffffff',     // White background
        gray: '#f4f4f4',      // Light gray (for subtle elements)
      },
    },
  },
  plugins: [],
}
