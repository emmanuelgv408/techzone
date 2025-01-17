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
        primary: '#00b0b9',  
        secondary: '#f5f5f5', 
        accent: '#ff6347',    
        dark: '#333333',     
        light: '#ffffff',    
        gray: '#f4f4f4',
        tan: '#c9af67'     
      },
    },
  },
  plugins: [],
}
