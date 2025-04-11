import axios from 'axios';
import { getToken } from './userService';



export const getCart = async (userId) => {
  try {
    const token = getToken().token;

    console.log('Token:', token); // Kiểm tra token
    console.log('User ID:', userId); // Kiểm tra userId
    const response = await axios.get(
      `http://localhost:5555/api/cart/get-cart/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data[0].cartItems; // Giỏ hàng từ server
  } catch (err) {
    console.error('Lỗi lấy giỏ hàng:', err.message);
    return null;
  }
};
