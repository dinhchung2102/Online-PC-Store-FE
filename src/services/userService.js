import axios from "axios";

export const getUserId = () => {
  const userId = localStorage.getItem("userId");
  return userId;
};

export const getToken = () => {
  const token = localStorage.getItem("access_token");
  const refreshToken = localStorage.getItem("refresh_token");
  return {
    token,
    refreshToken
  };
}

export const getUserInfo = async () => {
  try {
    const token = getToken().token;

    const response = await axios.get(
      `http://localhost:5555/api/user/get-detail/` + getUserId(),
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    return response.data.data;
  } catch (err) {
    console.log(err.message);
  }
};