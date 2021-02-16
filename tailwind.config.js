module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        border: '-8px 8px black,-7px 7px black, -6px 6px black, -5px 5px black, -4px 4px black, -3px 3px black, -2px 2px black, -1px 1px black'
      },
      borderColor: theme => ({
        ...theme('colors'),
         DEFAULT: theme('colors.gray.300', 'currentColor'),
        'primary': theme('colors.gray.900'),
        'secondary': theme('colors.primary'),
        'accent': '#e3342f',
      }),
      backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#FEE400',
      'secondary': '#FFEF66',
      'accent': theme('colors.gray.900'),
      }),
      colors: {
        primary: '#FEE400',
        secondary: '#FFED4A',
        // ...
      },
      fontFamily: {
        'display': ['Rajdhani'],
        'body': ['Open Sans'],
        'accent': ['Fira Code']
      },
      animation: {
        bounceBoxShadow: 'bounceBoxShadow 1s ease-out'
      },
      keyframes: {
        bounceBoxShadow: {
          '0%, 100%': { boxShadow: { border: 0 } },
          '50%': { height: 50 }
        }
      },
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '1/3': 'calc(1/3)',
        '3/4': '75%',
        '45': '45%'
      },
    },
  },
  variants: {
    extend: {
      margin: ['last'],
      padding: ['last'],
      animation: ['hover', 'focus'],
      transitionTimingFunction: ['hover']
    },
  },
  plugins: [],
}
