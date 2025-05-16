import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getOrderByUserId } from '~/services/orderService';

const initialState = {
  orders: [],
  loading: false,
  error: null,
};

// Lấy danh sách đơn hàng từ server
export const fetchOrders = createAsyncThunk(
  'order/fetchOrders',
  async (userId, thunkAPI) => {
    try {
      const data = await getOrderByUserId(userId);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addOrder: (state, action) => {
      state.orders.push(action.payload);
    },
    removeOrder: (state, action) => { // dispatch(removeOrder(orderId));
      const orderId = action.payload;orderId
      state.orders = state.orders.filter(order => order._id !== orderId);
    },
    updateOrderStatus: (state, action) => { // dispatch(updateOrderStatus({ orderId, status: newStatus }));
      const { _id, status } = action.payload;
      const order = state.orders.find(order => order._id === _id);
      if (order) {
        order.statusOrder = status;
      }
    },
    clearOrders: (state) => {
      state.orders = [];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const {
  addOrder,
  removeOrder,
  updateOrderStatus,
  clearOrders
} = orderSlice.actions;

export default orderSlice.reducer;