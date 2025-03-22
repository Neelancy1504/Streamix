/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
        primary: '#030014',
        accent: "AB8BFF",
        secondary :"#151312",
        light: {
          100: '#D6C6FF',
          200: '#ABB5DB',
          300: '39CA4AB',
        },
        dark: {
          100: '#221F3E',
          200: '#0F0D23',
        }
      }
    },
  },
  plugins: [],
}