/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      backgroundImage:{
        'hero-img' : "url('dist/assets/hero-image.jpg') ",
      }
    },
  },
  plugins: [],
}

