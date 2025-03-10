import axios from "axios";

export const getUserId = () => {
  const userId = localStorage.getItem("userId");
  return userId;
};

export const getUserInfo = async () => {
  try {
    const response = await axios.get(
      `http://localhost:5555/api/user/get-detail/` + getUserId()
    );
    return response.data.data;
  } catch (err) {
    console.log(err.message);
  }
}