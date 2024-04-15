/**@type {import('tailwindcss').Config} */  
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
           "deep-blue":"#0B3954",
           "bit-blue": "#087E8B",
           "deep-nude": "#FF5A5F"
      },
    },
  },
  plugins: [],
}

