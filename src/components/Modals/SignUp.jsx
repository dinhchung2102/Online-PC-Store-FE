import { Box, Button, Checkbox, TextField, Typography } from "@mui/material";
import FormControl from '@mui/material/FormControl';
//icon
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GoogleIcon from '@mui/icons-material/Google';
import { useState } from "react";
import { handleSignUp } from "~/services/authService";


function SignUp() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async () => {
    console.log("Đăng ký");
    await handleSignUp(username, password, confirmPassword);

    // if (!result.success) {
    //   console.error(result.message);
    // } else {
    //   console.log("Đăng ký thành công!");
    // }
  }

  return (
    <FormControl sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      gap: 2
    }}>
      <TextField
        fullWidth
        color="info"
        id="outlined-basic"
        label="Tên đăng nhập"
        variant="outlined"
        size="small"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        type="password"
        fullWidth
        color="info"
        id="outlined-basic"
        label="Mật khẩu"
        variant="outlined"
        size="small"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextField
        type="password"
        fullWidth
        color="info"
        id="outlined-basic"
        label="Nhập lại mật khẩu"
        variant="outlined"
        size="small"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <Box sx={{
        width: '100%',
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Checkbox sx={{ p: 0 }} />
          <Typography variant="subtitle1" gutterBottom sx={{ m: 0 }} >
            Lưu mật khẩu
          </Typography>
        </Box>
        <Button
          variant="contained"
          fullWidth
          onClick={handleSubmit}
        >
          Đăng ký
        </Button>
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
    </FormControl>
  );
}

export default SignUp;