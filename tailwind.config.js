/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        "slide-up": "animation: slide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"
      }
    },
  },
  plugins: [
    function ({addUtilities}) {
      const newUtilities = {
        '.no-scrollbar::-webkit-scrollbar':{
          display:'none',
        },
        '.no-scrollbar':{
          'ms-overflow-style':'none',
          'scrollbar-width':'none',
        }
      }
      addUtilities(newUtilities)
    }
  ],
}
