/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');
const rotateY = plugin(function({addUtilities}){
  addUtilities({
    '.rotate-y-360' :{
      transform: 'rotateY(360deg)'
    },
    '.w-120': {
      width: '30rem'
    }
  })
})

module.exports = {
  content: ["./index.html","./src/**/*.{html,vue,js}"],
  theme: {
    extend: {},
  },
  plugins: [rotateY], // 위에 만든거 여기다가 추가
}

