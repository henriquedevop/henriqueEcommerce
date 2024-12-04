/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      backgroundImage: {
        'hero-bg-mobile': "url('/src/assets/bgmobile.png')",
        'hero-bg-desktop': "url('/src/assets/bgdesktop.png')",
      }
    },
  },
  plugins: [],
}