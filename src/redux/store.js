import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import cartReducer from './cartSlice';
import orderReducer from './orderSlice';
import notificationReducer from './notificationSlice';
import FilterProductSlide from './filterProductSlide';
import chatReducer from './chatSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    order: orderReducer,
    notification: notificationReducer,
    product: FilterProductSlide,
    chat: chatReducer,
  },
});