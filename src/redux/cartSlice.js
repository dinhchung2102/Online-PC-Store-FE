import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  cartItems: [],
};

export const fetchCart = createAsyncThunk(
  'cart/fetchCart',
  async (userId, thunkAPI) => {
    try {
      const response = await axios.get(`/api/cart/${userId}`); // chỉnh URL theo API của bạn
      return response.data; // data là mảng cartItems
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
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
