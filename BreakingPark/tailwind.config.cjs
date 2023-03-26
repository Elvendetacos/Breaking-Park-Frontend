/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'bolder': ['Bayon', 'sans-serif']
    },
    extend: {
      gridTemplateRows: {
        // Simple 8 row grid
        '8': 'repeat(8, minmax(0, 1fr))',
      },
      gridTemplateColumns: {
        '12r': 'repeat(12, minmax(0, 32px))',
      },
      keyframes:{
        wiggle : {
          '0%': { height: '10%'},
          '10%': {  height: '20%' },
          '20%': { height: '30%' },
        },
        text: {
          '0%': {'font-size': '10%'}, 
          '10%': {'font-size': '20%'},
          '20%': {'font-size': '30%'}
        },
        opac : {
          '0%' : {'opacity': '0.1'},
          '20%' : {'opacity': '0.5'},
          '30%' : {'opacity': '1'},
        }
      },
      animation: {
        wiggle: 'wiggle 0.3s ease-out',
        text: 'text 0.3s ease-out',
        opac: 'opac 0.3s ease-out'
      }
    }
  },
  plugins: [],
}