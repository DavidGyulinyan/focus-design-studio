/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        "focus-raspberry":"#FF178F"
      },
      height: {
        "900":"900px"
      }
    },
  },
  plugins: [],
}
