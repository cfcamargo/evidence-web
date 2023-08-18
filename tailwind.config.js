/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '360px',
      },
      colors: {
        "gray-primary" : "#F5F5F5",
        "red-primary" : "#4A0000"
      }
    },
  },
  plugins: [],
}

