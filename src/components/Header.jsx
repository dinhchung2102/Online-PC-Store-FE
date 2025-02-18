import { Box, Button, TextField, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

function Header() {
    return (
        <Box sx={{
            backgroundColor: 'primary.light',
            height: (theme) => theme.appPC.HomeBarHeight,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <Typography>PC online</Typography>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <Button variant="outlined">
                <SearchIcon/>
            </Button>
          </Box>
     );
}



export default Header;