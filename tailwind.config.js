const textShadow = require('tailwindcss-textshadow');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '1128': '1128px',
        '216': '216px',
      },
      height: {
        '481': '481px',
        '187': '187px',
      },
      colors: {
        'blue': {
          '400': '#B3CBCB',
          '500': '#007BFF',
        },
        'yellow': {
          '500': '#FFC600',
        },
      },
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.35rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
        '8xl': '6rem',
        '9xl': '8rem',
      },
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      fontWeight: {
        hairline: 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
      textShadow: {
        default: '0 2px 4px rgba(0, 0, 0, 0.10)',
        md: '0 4px 6px rgba(0, 0, 0, 0.10)',
        lg: '0 10px 15px rgba(0, 0, 0, 0.10)',
        xl: '0 20px 25px rgba(0, 0, 0, 0.10)',
        '2xl': '0 25px 50px rgba(0, 0, 0, 0.25)',
        none: 'none',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [textShadow],
};
