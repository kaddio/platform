const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors')


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    // letterSpacing: {
    //   tight: defaultTheme.letterSpacing.wide
    // },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      fluffypink: '#EFEAF7',
      gray: colors.gray,
      green: {
        100: "hsl(137, 60%, 7%)",
        200: "hsl(137, 45%, 15%)",
        300: "hsl(137, 35%, 27%)",
        400: "hsl(137, 31%, 42%)",
        500: "hsl(137, 31%, 57%)",
        600: "hsl(137, 31%, 69%)",
        700: "hsl(137, 31%, 79%)",
        800: "hsl(137, 31%, 88%)",
        900: "hsl(137, 31%, 95%)",
      },
      // purple: colors.indigo
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
      },
      oldpink:  '#c38f9c',
      oldpinkdarker:  '#b16e7f',
    },
    extend: {
      fontFamily: {
        // sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
