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
export const updateUserInfo = async (updatedData) => {
  try {
    const token = getToken().token;
    const userId = getUserId();

    const response = await axios.put(
      `http://localhost:5555/api/user/update-user/${userId}`,
      updatedData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.data;
  } catch (error) {
    console.error("Update user info failed:", error);
    throw error;
  }
};
