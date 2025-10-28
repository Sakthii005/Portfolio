/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: {
          300: '#B8A9E1',
          600: '#9D8EC7',
          700: '#8674B8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'sans-serif', 'Dancing Script', 'cursive'],
      },
    },
  },
  plugins: [],
};