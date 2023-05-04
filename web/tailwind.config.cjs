const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors')


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      gray: colors.gray,
      'purple': {
        100: 'hsl(306, 60%, 5%)',
        200: 'hsl(306, 25%, 12%)',
        300: 'hsl(306, 15%, 20%)',
        400: 'hsl(306, 12%, 33%)',
        500: 'hsl(306, 10%, 49%)',
        600: 'hsl(306, 7%, 65%)',
        700: 'hsl(306, 8%, 79%)',
        800: 'hsl(306, 10%, 91%)',
        900: 'hsl(306, 12%, 96%)'
      }
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        // sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
