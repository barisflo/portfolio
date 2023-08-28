/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    'node_modules/preline/docs/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'imperialRed': '#E63946',
        'apricot' : '#FFD6BA',
        'cultured': '#FAF9F9',
        'azure': '#eef9fa',
        'powderBlue': '#A8DADC',
        'celadonBlue': '#457B9D',
        'prussianBlue': '#1D3557',
      }
    }
  },
  plugins: [
    require('preline/plugin'),
  ],
}

