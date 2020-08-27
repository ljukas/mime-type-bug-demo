/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

// Dont move this file.

module.exports = {
  theme: {
    fontSize: {
      xs: ['0.75rem', '1rem'],
      sm: ['0.875rem', '1.125rem'],
      base: ['1rem', '1.25rem'],
      lg: ['1.125rem', '1.5rem'],
      xl: ['1.25rem', '1.75rem'],
      '2xl': ['1.5rem', '2rem'],
      '3xl': ['1.875rem', '2.25rem'],
      '4xl': ['2.25rem', '2.75rem'],
      '5xl': ['3rem', '3.5rem'],
      '6xl': ['4rem', '4.5rem'],
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {
      maxHeight: {
        '0': '0',
      },
      transitionProperty: {
        height: 'height',
        ['max-height']: 'max-height',
      },
      boxShadow: {
        outline: '0 0 0 3px rgba(0, 129, 132, 0.5)',
      },
      colors: {
        teal: {
          100: '#E6F2F1',
          200: '#BFDEDD',
          300: '#99C9C9',
          400: '#4DA1A0',
          500: '#007977',
          600: '#006D6B',
          700: '#004947',
          800: '#003636',
          900: '#002424',
        },
        error: {
          100: '#FDF0EF',
          200: '#FBD9D6',
          300: '#F8C2BD',
          400: '#F2948C',
          500: '#ED665B',
          600: '#D55C52',
          700: '#8E3D37',
          800: '#6B2E29',
          900: '#471F1B',
        },
        warning: {
          100: '#FAFAEC',
          200: '#F2F2CE',
          300: '#EAEBB1',
          400: '#DBDB77',
          500: '#CBCC3C',
          600: '#B7B836',
          700: '#7A7A24',
          800: '#5B5C1B',
          900: '#3D3D12',
        },
        'dark-teal': {
          100: '#E6EDEE',
          200: '#BFD3D4',
          300: '#99B8B9',
          400: '#4D8385',
          500: '#004E51',
          600: '#004649',
          700: '#002F31',
          800: '#002324',
          900: '#001718',
        },
        'dark-pink': '#ad5a72',
      },
      inset: {
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        10: '2.5rem',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        18: '4.5rem',
        20: '5rem',
      },
      spacing: {
        '7': '1.75rem',
        '9': '2.25rem',
        '11': '2.75rem',
        '28': '7rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      lineHeight: {
        '11': '2.75rem',
        '12': '3rem',
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    textColor: ['responsive', 'hover', 'focus', 'active'],
    borderWidth: ['responsive', 'first', 'last', 'hover', 'focus'],
  },
  plugins: [require('@tailwindcss/custom-forms')],
};
