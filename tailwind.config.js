/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        textColor:'#5E5E5E'
      },
      fontFamily:{
        'inter':['Inter','sans-serif']
      }
    },
  },
  plugins: [],
}

