import { createMuiTheme } from '@material-ui/core/styles'

// A custom theme for this app
export const darkTheme = createMuiTheme({
  overrides: {
    // needed for chrome yellow autofill
    MuiInputBase: {
      input: {
        '&:-webkit-autofill': {
          transitionDelay: '9999s',
          transitionProperty: 'background-color, color',
        },
      },
    },
  },
  palette: {
    common: {
      black: '#1c181d',
      eggshell: '#f1f1e1',
      white: '#FFFFFF',
      background: '#a682a6'
    },
    header: {
      background: '#f5f5f5',
      textColor: '#696969',
    },
    primary: {
      main: '#fba23c',
    },
    secondary: {
      main: '#00B1A5',
    },
    tertiary: {
      main: '#A168FF',
    },
    type: 'dark',
    // error: {
    //   main: red.A400,
    // },
    // background: {
    //   default: '#f5f5f5',
    // },
    // card: {
    //   chipBackground: '#D3D3D3',
    // },
  },
})


export const lightTheme = createMuiTheme({
  overrides: {
    // needed for chrome yellow autofill
    MuiInputBase: {
      input: {
        '&:-webkit-autofill': {
          transitionDelay: '9999s',
          transitionProperty: 'background-color, color',
        },
      },
    },
  },
  palette: {
    common: {
      black: '#1c181d',
      eggshell: '#f1f1e1',
      white: '#FFFFFF',
      background: '#fde4fd'
    },
    header: {
      background: '#f5f5f5',
      textColor: '#696969',
    },
    primary: {
      main: '#fba23c',
    },
    secondary: {
      main: '#00B1A5',
    },
    tertiary: {
      main: '#A168FF',
    },
    type: 'light',
    // error: {
    //   main: red.A400,
    // },
    // background: {
    //   default: '#f5f5f5',
    // },
    // card: {
    //   chipBackground: '#D3D3D3',
    // },
  },
})
