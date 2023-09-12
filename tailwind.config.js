/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'primary': '#2586C8',
      },
      backgroundImage: {
        arrow: "url('/images/tr.png')",
      },
      content: {
        'arrow': "url('/images/tr.png')",
      }
    },
  },
  plugins: [],
}

