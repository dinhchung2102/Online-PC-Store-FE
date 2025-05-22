import axios from "axios";
import { transformTimeToISO } from "../utils/utils";

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5555/api';

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
      `${API_URL}/user/get-detail/` + getUserId(),
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    console.log("User info response:", response.data.data);
    return response.data.data;
  } catch (err) {
    console.log(err.message);
  }

};
export const updateUserInfo = async (user) => {
  try {
    const token = getToken().token;
    const userId = getUserId();

    const response = await axios.put(
      `${API_URL}/user/update-user/${userId}`,
      {
        fullname: user.fullname,
        phone: user.phone,
        address: user.address,
        dateOfBirth: transformTimeToISO(user.dateOfBirth),
        avatar: user.avatar,
        gender: user.gender,
        email: user.email,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Update user info response:", response.data);
    return response.data.data;
  } catch (error) {
    console.error("Update user info failed:", error);
    throw error;
  }
};
