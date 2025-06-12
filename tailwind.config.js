/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#121212',
        secondary: '#00000073',
        'text-white': '#FFFFFF',
        'brown-light': '#706458E5',
        'brown-dark': '#534B42',
        cream: '#F3EEE8',
        terracotta: '#A06056',
        'light-grey': '#F7F8F9',
      },
      fontFamily: {
        // Your custom fonts from Figma
        'merriweather': ['Merriweather', 'serif'],
        'varta': ['Varta', 'sans-serif'],
        'karla': ['Karla', 'sans-serif'],
      },
      spacing: {
        // Custom spacing if needed
        '18': '4.5rem',
        '88': '22rem',
      }
    },
  },
  plugins: [],
}
