import { Box, Button, Checkbox, Link, TextField, Typography } from "@mui/material";
import FormControl from '@mui/material/FormControl';
//icon
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GoogleIcon from '@mui/icons-material/Google';
import { handleLogin } from '~/services/authService';
import { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from "react-router";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  //
  const [errorUsername, setErrorUsername] = useState({ error: false, message: "" });
  const [errorPassword, setErrorPassword] = useState({ error: false, message: "" });

  const navigate = useNavigate();
  console.log(errorUsername.error)

  const handleSubmit = async () => {
    if (!username.trim()) {
      setErrorUsername({ error: true, message: "Vui lòng nhập tên đăng nhập!" });
      return
    }
    setErrorUsername({ error: false, message: "" });
    if (!password.trim()) {
      setErrorPassword({ error: true, message: "Vui lòng nhập mật khẩu!" });
      return
    }
    setErrorPassword({ error: false, message: "" });
    setLoading(true)
    const result = await handleLogin(username, password);
    if (result.field === "password") {
      setErrorPassword({ error: true, message: "Mật khẩu không đúng!" }); // Cập nhật lỗi nếu đăng nhập thất bại
      setLoading(false)
    } else if (result.field === "username") {
      setErrorUsername({ error: true, message: result.message });
      setLoading(false)
    } else {
      setLoading(false)
      navigate(0)
    }
  };

  return (
    <FormControl sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      gap: 2
    }}>
      <TextField fullWidth color="info"
        id="outlined-basic"
        label="Tên đăng nhập"
        variant="outlined"
        size="small"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        error={errorUsername.error}
        helperText={errorUsername.error ? errorUsername.message : ""}
      />
      <TextField type="password"
        fullWidth color="info"
        id="outlined-basic"
        label="Mật khẩu"
        variant="outlined"
        size="small"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={errorPassword.error}
        helperText={errorPassword.error ? "Mật khẩu không đúng!" : ""}
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
          {loading ? <CircularProgress sx={{ color: 'white' }} size={20} /> : "Đăng nhập"}
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
      <Box sx={{ display: 'flex' }} >
        <Typography>Bạn quên mật khẩu?</Typography>
        <Link href="#">Lấy lại mật khẩu</Link>
      </Box>
    </FormControl>
  );
}

export default Login;