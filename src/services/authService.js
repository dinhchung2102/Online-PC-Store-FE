import axios from "axios";
import * as jwtDecode from "jwt-decode";

export const handleLogin = async (username, password) => {
  if (!username.trim() || !password.trim()) {
    return { success: false, message: "Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu!" };
  }

  try {
    const response = await axios.post("http://localhost:5555/api/user/sign-in", {
      name: username,
      password,
    });

    const data = response.data;
    console.log("Response:", data);

    if (data.status === "OK") {
      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("refresh_token", data.refresh_token);
      localStorage.setItem("userId", data.userId);

      return { success: true, message: "Đăng nhập thành công!" };
    } else {
      return { success: false, message: data.message || "Đăng nhập thất bại!" };
    }
  } catch (error) {
    console.error("Lỗi đăng nhập:", error);
    const errorMessage = error.response?.data?.message || "Có lỗi xảy ra khi đăng nhập!";
    return { success: false, message: errorMessage };
  }
};

export const handleSignUp = async (username, password, confirmPassword) => {
  if (!username.trim() || !password.trim() || !confirmPassword.trim()) {
    return { success: false, message: "Vui lòng nhập đầy đủ các trường!" };
  }

  try {
    const response = await axios.post("http://localhost:5555/api/user/sign-up", {
      name: username,
      password,
      confirmPassword
    });

    const data = response.data;
    console.log("Response:", data);

    // if (data.status === "OK") {
    //   localStorage.setItem("access_token", data.access_token);
    //   localStorage.setItem("refresh_token", data.refresh_token);
    //   localStorage.setItem("userId", data.userId);

    //   return { success: true, message: "Đăng nhập thành công!" };
    // } else {
    //   return { success: false, message: data.message || "Đăng nhập thất bại!" };
    // }
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
