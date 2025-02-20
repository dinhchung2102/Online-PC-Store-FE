import Container from '@mui/material/Container'

import Header from '../components/Header'
import Footer from '../components/Footer'

function Home() {

  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <Header />
      {/* <Box sx={{
        backgroundColor: 'primary.main',
        height: (theme) => `calc(100vh - ${theme.appPC.appBarHeight} - ${theme.appPC.boardBarHeight})`
      }}>
        content
      </Box> */}
      <Footer />
    </Container>
  )
}

export default Home
