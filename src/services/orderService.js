import axios from "axios";
import { getToken } from './userService';

const apiUrl = "http://localhost:5555/api/order";

const transformCartItemsToOrder = (userId, cartItems, shippingPrice, paymentMethod) => {

  return {
    userId: userId,
    products: cartItems.map(item => ({
      productId: item.productId,
      quantity: item.amountProduct,
      discount: item.discount || 0, // Giả sử bạn có thuộc tính discount trong cartItems
    })),
    shippingPrice: shippingPrice, // Giá vận chuyển
    totalPrice: cartItems.reduce((total, item) => total += item.totalPrice, 0), // Tổng giá trị đơn hàng
    statusOrder: "pending", // Trạng thái đơn hàng
    paymentMethod: paymentMethod, // Phương thức thanh toán
    isDelivered: true, // Trạng thái giao hàng
  }
}

export const createOrder = async (userId, cartItems, shippingPrice, paymentMethod) => {
  try {
    const token = getToken().token;
    console.log('Token:', token); // Kiểm tra token
    const order = transformCartItemsToOrder(userId, cartItems, shippingPrice, paymentMethod)
    console.log('order', order)
    if (!token) {
      console.error('Token không tồn tại');
      return null;
    }
    const response = await axios.post(`${apiUrl}/create-order`,
      order,
      // {
      //   userId: "",
      //   products: [
      //     {
      //       "productId": "67d84c92ac50855604c1379c",
      //       "quantity": 1,
      //       "discount": 10
      //     }
      //   ],
      //   shippingPrice: 30000,
      //   totalPrice: 23000000,
      //   statusOrder: "pending",
      //   paymentMethod: "CASH",
      //   isDelivered: true
      // },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log('Response:', response); // Kiểm tra phản hồi từ server
    return response.data;
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
}