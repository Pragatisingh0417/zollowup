/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
       sans: ['Inter', 'sans-serif'],
      heading: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#111111',
        accent: '#FBBF24',
        light: '#FAFAFA',
      }
    },
  },
  plugins: [],
};
