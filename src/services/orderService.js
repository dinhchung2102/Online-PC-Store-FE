import axios from "axios";
import { getToken } from "./userService";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5555/api";

const transformCartItemsToOrder = (
  userId,
  cartItems,
  shippingPrice,
  paymentMethod
) => {
  return {
    userId: userId,
    products: cartItems.map((item) => ({
      productId: item.productId,
      quantity: item.amountProduct,
      discount: item.discount || 0, // Giả sử bạn có thuộc tính discount trong cartItems
    })),
    shippingPrice: shippingPrice, // Giá vận chuyển
    totalPrice: cartItems.reduce(
      (total, item) => (total += item.totalPrice),
      0
    ), // Tổng giá trị đơn hàng
    statusOrder: "pending", // Trạng thái đơn hàng
    paymentMethod: paymentMethod, // Phương thức thanh toán
    isDelivered: true, // Trạng thái giao hàng
  };
};

// export const createOrder = async (
//   userId,
//   cartItems,
//   shippingPrice,
//   paymentMethod
// ) => {
//   try {
//     const token = getToken().token;
//     console.log("Token:", token); // Kiểm tra token
//     const order = transformCartItemsToOrder(
//       userId,
//       cartItems,
//       shippingPrice,
//       paymentMethod
//     );
//     console.log("order", order);
//     if (!token) {
//       console.error("Token không tồn tại");
//       return null;
//     }
//     const response = await axios.post(
//       `${API_URL}/order/create-order`,
//       order,
//       // {
//       //   userId: "",
//       //   products: [
//       //     {
//       //       "productId": "67d84c92ac50855604c1379c",
//       //       "quantity": 1,
//       //       "discount": 10
//       //     }
//       //   ],
//       //   shippingPrice: 30000,
//       //   totalPrice: 23000000,
//       //   statusOrder: "pending",
//       //   paymentMethod: "CASH",
//       //   isDelivered: true
//       // },
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//     console.log("Response order:", JSON.stringify(response.data, null, 2));
//     return response.data;
//   } catch (error) {
//     console.error("Error creating order:", error);
//     throw error;
//   }
// };

export const createOrder = async (
  userId,
  cartItems,
  shippingPrice,
  paymentMethod
) => {
  try {
    const token = getToken().token;
    console.log("Token:", token); // Kiểm tra token
    const order = transformCartItemsToOrder(
      userId,
      cartItems,
      shippingPrice,
      paymentMethod
    );
    console.log("Order payload:", JSON.stringify(order, null, 2));
    if (!token) {
      console.error("Token không tồn tại");
      return null;
    }
    console.log("Before axios call");
    const response = await axios.post(`${API_URL}/order/create-order`, order, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("Response status:", response?.data);
    console.log("After axios call");
    return response.data;
  } catch (error) {
    console.error(
      "Error creating order:",
      error.response?.data,
      error.response?.status
    );
    throw error;
  }
};

export const getOrderByUserId = async (userId) => {
  let finalOrders = [];

  try {
    console.log("userId:", userId); // Kiểm tra userId
    const token = getToken().token;
    console.log("Token:", token); // Kiểm tra token
    if (!token) {
      console.error("Token không tồn tại");
      return null;
    }

    const response = await axios.get(
      `${API_URL}/order/get-all-order-user/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const _orders = response.data.data.orders; // Kiểm tra phản hồi từ server

    console.log("_orders:", _orders); // Kiểm tra danh sách đơn hàng

    if (response.statusText === "OK") {
      finalOrders = await Promise.all(
        _orders.map(async (order) => {
          let _orderDetails = await getOrderDetailsByOrderId(order._id);
          return {
            _id: order._id,
            statusOrder: order.statusOrder,
            quantity: order.orderDetailIds.length,
            paymentMethod: order.paymentMethod,
            totalPrice: order.totalPrice,
            orderDetails: [..._orderDetails],
          };
        })
      );
    }

    return finalOrders;
  } catch (error) {
    console.error("Error fetching order:", error);
    throw error;
  }
};

export const getOrderDetailsByOrderId = async (orderId) => {
  try {
    const token = getToken().token;
    if (!token) {
      console.error("Token không tồn tại");
      return null;
    }
    const response = await axios.get(
      `${API_URL}/order/get-detail-order/${orderId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data.data.orderDetailIds.map((orderDetail) => {
      return {
        productId: orderDetail.productId,
        amount: orderDetail.amount,
        totalPrice: orderDetail.totalPrice,
        image: orderDetail.image,
        name: orderDetail.name,
      };
    });
  } catch (error) {
    console.error("Error fetching order details:", error);
    throw error;
  }
};
