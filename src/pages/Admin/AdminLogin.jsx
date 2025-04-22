import { Box, Button, Checkbox, TextField, Typography, CircularProgress } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setUserInfo } from "~/redux/userSlice";
import { handleLogin } from "~/services/authService"; // Giả sử bạn có hàm này để gọi API đăng nhập

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorUsername, setErrorUsername] = useState({ error: false, message: "" });
  const [errorPassword, setErrorPassword] = useState({ error: false, message: "" });
    
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!username.trim()) {
      setErrorUsername({ error: true, message: "Vui lòng nhập tên đăng nhập!" });
      return;
    }
    setErrorUsername({ error: false, message: "" });

    if (!password.trim()) {
      setErrorPassword({ error: true, message: "Vui lòng nhập mật khẩu!" });
      return;
    }
    setErrorPassword({ error: false, message: "" });

    setLoading(true);

    const result = await handleLogin(username, password, "admin"); // Thêm tham số "admin" để nhận diện là admin
    if (!result.success) {
      setErrorPassword({ error: true, message: "Mật khẩu không đúng!" });
      setLoading(false);
    } else {
      dispatch(setUserInfo({
        id: result.data.user.id,
        name: result.data.user.name,
        address: result.data.user.address || [],
        phone: result.data.user.phone || '',
        email: result.data.user.email || '',
        token: result.data.token || '',
        refresh_token: result.data.refresh_token || '',
        avatar: result.data.user.avatar || '',
      }));

      setLoading(false);
      navigate("/admin/dashboard"); // Sau khi đăng nhập, chuyển hướng đến trang quản lý của admin
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: 2 }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Admin Login
      </Typography>

      <TextField
        fullWidth
        color="info"
        label="Tên đăng nhập"
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
        label="Mật khẩu"
        variant="outlined"
        size="small"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={errorPassword.error}
        helperText={errorPassword.error ? errorPassword.message : ""}
      />

      <Box sx={{ width: "100%" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Checkbox sx={{ p: 0 }} />
          <Typography variant="subtitle1" gutterBottom sx={{ m: 0 }}>
            Lưu mật khẩu
          </Typography>
        </Box>

        <Button variant="contained" fullWidth onClick={handleSubmit}>
          {loading ? <CircularProgress sx={{ color: "white" }} size={20} /> : "Đăng nhập"}
        </Button>
      </Box>
    </Box>
  );
}

export default AdminLogin;
