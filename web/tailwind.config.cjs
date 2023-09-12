const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors')


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  safelist: [
    'bg-white',
    {
      pattern: /bg-(gray|purple|green|red|teal|yellow|primary)-(300|400|500|600|700|800)/,
      variants:['hover']
    },
  ],
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
      yellow: {
        100:"hsl(38, 84%, 8%)",
        200:"hsl(38, 84%, 15%)",
        300:"hsl(38, 78%, 33%)",
        400:"hsl(41, 65%, 52%)",
        500:"hsl(41, 85%, 62%)",
        600:"hsl(41, 85%, 72%)",
        700:"hsl(41, 85%, 80%)",
        800:"hsl(43, 85%, 87%)",
        900:"hsl(41, 100%, 94%)"
      },
      red: {
        100: "hsl(0, 60%, 7%)",
        200: "hsl(0, 45%, 15%)",
        300: "hsl(0, 35%, 30%)",
        400: "hsl(0, 31%, 45%)",
        500: "hsl(0, 31%, 57%)",
        600: "hsl(0, 31%, 67%)",
        700: "hsl(0, 35%, 82%)",
        800: "hsl(0, 38%, 90%)",
        900: "hsl(0, 35%, 96%)",
      },
      teal: {
        100:"hsl(196, 90%, 6%)",
        200:"hsl(196, 45%, 14%)",
        300:"hsl(194, 25%, 28%)",
        400:"hsl(196, 22%, 42%)",
        500:"hsl(196, 18%, 54%)",
        600:"hsl(196, 16%, 70%)",
        700:"hsl(196, 15%, 82%)",
        800:"hsl(196, 15%, 90%)",
        900:"hsl(196, 20%, 96%)"
      },
      primary: {
        100:"var(--primary-100, hsl(306, 60%, 5%))",
        200:"var(--primary-200, hsl(306, 25%, 12%))",
        300:"var(--primary-300, hsl(306, 15%, 20%))",
        400:"var(--primary-400, hsl(306, 12%, 33%))",
        500:"var(--primary-500, hsl(306, 10%, 49%))",
        600:"var(--primary-600, hsl(306, 7%, 65%))",
        700:"var(--primary-700, hsl(306, 8%, 79%))",
        800:"var(--primary-800, hsl(306, 10%, 91%))",
        900:"var(--primary-900, hsl(306, 12%, 96%))"
      },
      oldpink:  '#c38f9c',
      oldpinkdarker:  '#b16e7f',
    },
    
    fontFamily: {
      // sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
