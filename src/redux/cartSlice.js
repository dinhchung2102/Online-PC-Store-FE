import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCart } from '~/services/cartService'; // Đường dẫn đến cartService.js
import axios from 'axios';

const initialState = {
  cartItems: [],
};

export const fetchCart = createAsyncThunk(
  'cart/fetchCart',
  async (userId, thunkAPI) => {
    try {
      const response = await getCart(userId); // chỉnh URL theo API của bạn
      console.log('Response:', response.data); // Kiểm tra phản hồi từ server
      return response; // data là mảng cartItems
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(item => item.productId === newItem.productId);

      if (existingItem) {
        existingItem.amountProduct += newItem.amountProduct;
      } else {
        state.cartItems.push(newItem);
      }
    },

    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.cartItems = state.cartItems.filter(item => item.productId !== productId);
    },

    updateQuantity: (state, action) => {
      const { productId, amountProduct } = action.payload;
      const item = state.cartItems.find(item => item.productId === productId);

      if (item) {
        item.amountProduct = amountProduct;
      }
    },

    clearCart: (state) => {
      state.cartItems = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      state.cartItems = action.payload;
    });
  }
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
