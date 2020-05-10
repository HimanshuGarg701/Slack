import { createMuiTheme } from '@material-ui/core/styles'

// A custom theme for this app
export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    //   common: {
    //     black: '#1c181d',
    //     white: '#FFFFFF',
    //     eggshell: '#f1f1e1'
    //   },
    //   primary: {
    //     main: '#27AAE1'
    //   },
    //   header: {
    //     background: '#696969',
    //     textColor: '#f5f5f5'
    //   },
    //   secondary: {
    //     main: '#f0544f',
    //   },
    //   tertiary: {
    //     main: '#ffd166'
    //   },
    //   error: {
    //     main: red.A400,
    //   },
    //   background: {
    //     default: '#696969',
    //   },
    //   card: {
    //     chipBackground: '#D3D3D3'
    //   }
    // },
    // overrides: {
    //   MuiPaper: {
    //     root: {
    //       backgroundColor: '#191b21'
    //     }
    //   },
    //   MuiCard: {
    //     root: {
    //       backgroundColor: '#696969'
    //     }
    //   }
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
