import { Box, Button, Checkbox, TextField, Typography } from "@mui/material";
import FormControl from '@mui/material/FormControl';
//icon
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GoogleIcon from '@mui/icons-material/Google';
import { useState } from "react";
import { handleSignUp } from "~/services/authService";
import AlertDialog from "~/utils/AlertDialog";
import { useNavigate } from "react-router";
import PropTypes from "prop-types";


function SignUp({ handleCloseModal }) {

  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [errorUsername, setErrorUsername] = useState({ error: false, message: "" });
  const [errorPassword, setErrorPassword] = useState({ error: false, message: "" });
  const [errorConfirmPassword, setErrorConfirmPassword] = useState({ error: false, message: "" });

  //dialog susscess
  const [openDialog, setOpenDialog] = useState(false);
  const handleClickOpenDialog = () => setOpenDialog(true)
  const handleCloseDialog = () => setOpenDialog(false)


  const handleSubmit = async () => {

    if (!username.trim()) {
      setErrorUsername({ error: true, message: "Tên đăng nhập không được để trống!" });
      return
    }
    setErrorUsername({ error: false, message: "" });
    if (!password.trim()) {
      setErrorPassword({ error: true, message: "Mật khẩu không được để trống!" });
      return
    }
    setErrorPassword({ error: false, message: "" });
    if (!confirmPassword.trim()) {
      setErrorConfirmPassword({ error: true, message: "Vui lòng nhập lại mật khẩu!" });
      return
    }
    setErrorConfirmPassword({ error: false, message: "" });
    // xu li be dang ky
    const result = await handleSignUp(username, password, confirmPassword);
    if (result.status === "ERR_USER") {
      setErrorUsername({ error: true, message: "Tên đăng nhập đã tồn tại!" });
      return
    } else if (result.status === "ERR_CONFIRM_PASSWORD") {
      setErrorConfirmPassword({ error: true, message: "Mật khẩu không trùng khớp!" });
      return
    } else {
      handleClickOpenDialog()
      // handleCloseModal()
      setTimeout(() => { navigate(0) }, 1000)
    }
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
        error={errorUsername.error}
        helperText={errorUsername.error ? errorUsername.message : ""}
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
        error={errorPassword.error}
        helperText={errorPassword.error ? errorPassword.message : ""}
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
        error={errorConfirmPassword.error}
        helperText={errorConfirmPassword.error ? errorConfirmPassword.message : ""}
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
      <AlertDialog open={openDialog} handleClose={handleCloseDialog} state="success" message="Đăng kí thành công, vui lòng đăng nhập" />
    </FormControl>
  );
}

SignUp.propTypes = {
  handleCloseModal: PropTypes.func.isRequired,
};

export default SignUp;