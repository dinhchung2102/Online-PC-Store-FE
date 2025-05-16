import { extendTheme } from '@mui/material/styles';
import { cyan, orange } from '@mui/material/colors'

// Create a theme instance.
const theme = extendTheme({
  appPC: {
    HeaderHeight: '60px',
    boardBarHeight: '58px',
    screenWidth: '80vw',
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#d6011b',
        },
        secondary: {
          main: '#000',
        }
      }
    },
    dark: {
      palette: {
        primary: cyan,
        secondary: orange
      }
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar': {
            width: '6px',
            height: '6px'
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#dcdde1',
            borderRadius: '8px'
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#ccc'
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderWidth: '0.5px',
          '&:hover': {
            borderWidth: '0.5px'
          }
        }
      }
    },
  }
})

export default theme