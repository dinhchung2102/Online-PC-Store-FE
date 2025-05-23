import axios from 'axios';
import { getToken } from './userService';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5555/api';


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
      `${API_URL}/cart/get-cart/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log('Response:', response.data.data.cartItems); // Kiểm tra phản hồi từ server
    return response.data.data.cartItems; // Giỏ hàng từ server
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
      `${API_URL}/cart/update-cart/${userId}/${productId}`,
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

export const addProductToCart = async (userId, product) => {
  try {
    const token = getToken().token;
    console.log('Token:', token); // Kiểm tra token
    if (!token) {
      console.error('Token không tồn tại');
      return null;
    }
    console.log('User ID:', userId); // Kiểm tra userId
    console.log('Product ID:', product._id); // Kiểm tra productId
    console.log('Product Name:', product.name); // Kiểm tra productName
    console.log('Product Image:', product.image); // Kiểm tra productImage
    console.log('Product Price:', product.price); // Kiểm tra productPrice
    console.log('Product Amount:', 1); // Kiểm tra productAmount
    console.log('Product Total Price:', product.price); // Kiểm tra productTotalPrice

    const response = await axios.post(API_URL + '/cart/create-cart',
      {
        userId,
        productId: product._id,
        nameProduct: product.name,
        imageProduct: product.image,
        priceProduct: product.price,
        amountProduct: 1,
        colorProduct: "",
        discount: 0,
        type: "",
        totalPrice: product.price,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    console.log(response)
  } catch (err) {
    console.error('Lỗi thêm sản phẩm vào giỏ hàng:', err.message);
    return null;
  }
}

export const removeProductFromCart = async (cartId) => {
  try {
    const token = getToken().token;
    console.log('Token:', token); // Kiểm tra token
    if (!token) {
      console.error('Token không tồn tại');
      return null;
    }

    const response = await axios.delete(
      `${API_URL}/cart/delete-cart/${cartId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log('Response:', response.data); // Kiểm tra phản hồi từ server
    return response.data;
  } catch (err) {
    console.error('Lỗi xóa sản phẩm khỏi giỏ hàng:', err.message);
    return null;
  }
};

export const deleteAllCartItems = async (cart) => {
  try {
    if (!cart) {
      console.error('User ID không tồn tại');
      return null;
    }
    const cartIds = cart.map((item) => { return { cartId: item._id } });
    console.log('cartIds:', cartIds); // Kiểm tra cart
    const token = getToken().token;
    console.log('Token:', token); // Kiểm tra token
    if (!token) {
      console.error('Token không tồn tại');
      return null;
    }
    const response = await axios.post(
      `${API_URL}/cart/delete-many-cart`, cartIds,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log('Response delete all cart:', response.data); // Kiểm tra phản hồi từ server
    return response.data;
  } catch (err) {
    console.error('Lỗi xóa tất cả sản phẩm khỏi giỏ hàng:', err.message);
    return null;
  }
}