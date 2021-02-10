const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    screens: {
      tn: '414px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1444px'
    },
    extend: {
      borderWidth: {
        16: '16px'
      },
      colors: {
        gray: colors.gray
      },
      height: {
        130: '520px',
        sm: '640px'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif']
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['focus']
    }
  },
  plugins: []
};
