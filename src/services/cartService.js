import axios from 'axios';
import { getToken } from './userService';



export const getCart = async (userId) => {
  try {
    const token = getToken().token;
    console.log('Token:', token); // Kiểm tra token
    console.log('User ID:', userId); // Kiểm tra userId
    if (!token) {
      console.error('Token không tồn tại');
      return null;
    }
    if (!userId) {
      console.error('User ID không tồn tại');
      return null;
    }
    const response = await axios.get(
      `http://localhost:5555/api/cart/get-cart/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log('Response:', response.data.data[0].cartItems); // Kiểm tra phản hồi từ server
    return response.data.data[0].cartItems; // Giỏ hàng từ server
  } catch (err) {
    console.error('Lỗi lấy giỏ hàng:', err.message);
    return null;
  }
};

export const updateCart = async (userId, productId, amountProduct, totalPrice) => {
  try {
    const token = getToken().token;
    console.log('Token:', token); // Kiểm tra token
    if (!token) {
      console.error('Token không tồn tại');
      return null;
    }
    console.log('User ID:', userId); // Kiểm tra userId
    console.log('Product ID:', productId); // Kiểm tra productId
    console.log('Amount Product:', amountProduct); // Kiểm tra amountProduct
    console.log('Total Price:', totalPrice); // Kiểm tra totalPrice
    const response = await axios.put(
      `http://localhost:5555/api/cart/update-cart/${userId}/${productId}`,
      {
        amountProduct,
        totalPrice,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log('Response:', response.data); // Kiểm tra phản hồi từ server
    return response.data; 
  } catch (err) {
    console.error('Lỗi cập nhật giỏ hàng:', err.message);
    return null;
  }
}
