/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    maxWidth: {
      '240': '240px',
    },
    container: {
      center: true,
      padding: '15px',
    },
    extend: {
      colors: {
        'josa-blue': {
          default: '#3897c0',
          'dark': '#1a485b',
          'veryDark': '#163e4e',
        },
        'josa-warm-grey': {
          'light': '#f7f6f5',
          default: '#efedec',
          'dark': '#aea79f',
        },
        'josa-black': '#2e3436',
        'grey90': '#e5e5e5'
      },
      fontFamily: {
        'aleoLight': 'aleo-light',
        'aleo': 'aleo',
        'lato': 'lato',
      },
      padding: {
        '15px': '15px',
      },
      opacity: {
        '90': '0.9'
      },
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%'
      }
    }
  },
  variants: {},
  plugins: []
}
