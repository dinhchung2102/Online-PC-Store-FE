import { Box, Button, Checkbox, Link, TextField, Typography } from "@mui/material";
import FormControl from '@mui/material/FormControl';
//icon
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GoogleIcon from '@mui/icons-material/Google';

function Login() {
  return (
    <FormControl sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      gap: 2
    }}>
      <TextField fullWidth color="info" id="outlined-basic" label="Tên đăng nhập" variant="outlined" size="small" />
      <TextField type="password" fullWidth color="info" id="outlined-basic" label="Mật khẩu" variant="outlined" size="small" />
      <Box sx={{
        width: '100%',
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Checkbox sx={{ p: 0 }} />
          <Typography variant="subtitle1" gutterBottom sx={{ m: 0 }} >
            Lưu mật khẩu
          </Typography>
        </Box>
        <Button variant="contained" fullWidth >Đăng nhập</Button>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', gap: 2 }}>
        <Box style={{ height: 1, width: '100%', backgroundColor: '#000' }} />
        <Typography>Or</Typography>
        <Box style={{ height: 1, width: '100%', backgroundColor: '#000' }} />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', gap: 2, justifyContent: 'center' }} >
        <Button fullWidth startIcon={<GoogleIcon />} variant="outlined">Google</Button>
        <Button fullWidth startIcon={<FacebookRoundedIcon />} variant="outlined">Facebook</Button>
      </Box>
      <Box sx={{ display: 'flex' }} >
        <Typography>Bạn quên mật khẩu?</Typography>
        <Link href="#">Lấy lại mật khẩu</Link>
      </Box>
    </FormControl>
  );
}

export default Login;