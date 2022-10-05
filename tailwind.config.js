/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'cabinet': [
          "Carbinet",
        ],
        'inter': [
          "Inter"
        ],
        'archivo':["Archivo"]
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
