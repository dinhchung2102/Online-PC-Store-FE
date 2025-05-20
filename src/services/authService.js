import axios from "axios";
import * as jwtDecode from "jwt-decode";

export const handleLogin = async (username, password) => {


  try {
    const response = await axios.post("http://localhost:5555/api/user/sign-in", {
      username,
      password
    });
    console.log(response);
    const data = response.data;
    console.log("Response:", data);
    if (data.status === "ERR USER NOT IN THE DATABASE") {
      return { field: "username", message: "Tên đăng nhập không tồn tại!" };
    }

    if (data.status === "OK") {
      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("refresh_token", data.refresh_token);
      localStorage.setItem("userId", data.userId);

      return { field: "", message: "Đăng nhập thành công!" };
    } else {
      return { field: "password", message: data.message || "Mật khẩu không chính xác!" };
    }
  } catch (error) {
    console.error("Lỗi đăng nhập:", error);
    const errorMessage = error.response?.data?.message || "Có lỗi xảy ra khi đăng nhập!";
    return { field: "username", message: errorMessage };
  }
};

export const handleSignUp = async (username, password, confirmPassword) => {
  if (!username.trim() || !password.trim() || !confirmPassword.trim()) {
    return { success: false, message: "Vui lòng nhập đầy đủ các trường!" };
  }

  try {
    const response = await axios.post("http://localhost:5555/api/user/sign-up", {
      username,
      password,
      confirmPassword
    });

    const data = response.data;
    console.log("Response:", data);
    if (data.status === "ERR_CONFIRM_PASSWORD") {
      return { success: false, message: "Mật khẩu không trùng khớp!", status: data.status };
    } else if (data.status === "ERR_USER") {
      return { success: false, message: "Tên đăng nhập đã tồn tại!", status: data.status };
    } else {
      return { success: true, message: "Đăng ký thành công!", status: data.status };
    }
  } catch (error) {
    console.error("Lỗi đăng nhập:", error);
    const errorMessage = error.response?.data?.message || "Có lỗi xảy ra khi đăng nhập!";
    return { success: false, message: errorMessage };
  }
};

export const isLoggedIn = () => {
  const token = localStorage.getItem("access_token");

  if (!token) return false;

  try {
    const decoded = jwtDecode.jwtDecode(token);
    return decoded.exp * 1000 > Date.now(); // Kiểm tra xem token còn hiệu lực không
  } catch (error) {
    console.error("Lỗi khi giải mã token:", error);
    return false; // Token không hợp lệ
  }
};

export const checkAdmin = () => {
  const token = localStorage.getItem("access_token");

  if (!token) return false;

  try {
    const decoded = jwtDecode.jwtDecode(token);
    return decoded.roles[0] === "ADMIN"; // Kiểm tra xem token còn hiệu lực không
  } catch (error) {
    console.error("Lỗi khi giải mã token:", error);
    return false; // Token không hợp lệ
  }
}
