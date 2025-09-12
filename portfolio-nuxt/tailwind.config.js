/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      colors: {
        'imperialRed': '#E63946',
        'apricot': '#FFD6BA',
        'cultured': '#FAF9F9',
        'azure': '#eef9fa',
        'powderBlue': '#A8DADC',
        'celadonBlue': '#457B9D',
        'prussianBlue': '#1D3557',
      },
      spacing: {
        '20rem': '20rem',
      }
    }
  },
  plugins: [],
}
