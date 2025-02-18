import {
  useColorScheme
} from '@mui/material/styles'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

import LightModeIcon from '@mui/icons-material/LightMode'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Header from '../components/Header'



function Home() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <Header />
      <Box sx={{
        backgroundColor: 'primary.dark',
        width: '100%',
        height: (theme) => theme.appPC.boardBarHeight,
        display: 'flex',
        alignItems: 'center'

      }}>
        board bar
      </Box>
      <Box sx={{
        backgroundColor: 'primary.main',
        height: (theme) => `calc(100vh - ${theme.appPC.appBarHeight} - ${theme.appPC.boardBarHeight})`
      }}>
        content
      </Box>
    </Container>
  )
}

export default Home
