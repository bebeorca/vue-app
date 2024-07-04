/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    "./node_modules/flowbite/**/*.{vue,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        Raleway: 'Raleway'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

