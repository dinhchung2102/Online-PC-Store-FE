import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import { deepOrange, cyan, orange } from '@mui/material/colors'

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
        secondary: deepOrange
      }
    },
    dark: {
      palette: {
        primary: cyan,
        secondary: orange
      }
    }
  }
})

export default theme