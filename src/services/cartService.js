import axios from 'axios';
import { getToken } from './userService';



export const getCart = async (userId) => {
  try {
    const token = getToken();

    const response = await axios.get(
      `http://localhost:5555/api/cart/get-cart/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data.data; // Giỏ hàng từ server
  } catch (err) {
    console.error('Lỗi lấy giỏ hàng:', err.message);
    return null;
  }
};
