/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{html,js}',
  ],
  theme: {
    screens: {
      lg: '1440px',
      xl: '1440px',
      '2xl': '1440px',
    },
    fontFamily: {
      'Outfit': ['Outfit, sans-serif'],
    },
    extend: {
      colors: {
        SoftBlue: 'hsl(215, 51%, 70%)',
        Cyan: 'hsl(178, 100%, 50%)',
        VeryDarkBlue: 'hsl(217, 54%, 11%)',
        DarkBlue: 'hsl(216, 50%, 16%)',
        VeryBlue: 'hsl(215, 32%, 27%)',
        White: 'hsl(0, 0%, 100%)',


      },
    },
  },
  plugins: [],
}

