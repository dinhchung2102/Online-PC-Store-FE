import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: '',
  type: '', // 'success' | 'error' | 'info' | 'warning'
  visible: false,
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    showNotification: (state, action) => {
      const { message, type } = action.payload;
      state.message = message;
      state.type = type;
      state.visible = true;
    },
    hideNotification: (state) => {
      state.visible = false;
      state.message = '';
      state.type = '';
    },
  },
});

export const { showNotification, hideNotification } = notificationSlice.actions;

// ✅ Thunk tự động hiển thị và ẩn sau 3s
export const triggerNotification = ({ message, type = 'info', duration = 3000 }) => (dispatch) => {
  dispatch(showNotification({ message, type }));
  setTimeout(() => {
    dispatch(hideNotification());
  }, duration);
};

export default notificationSlice.reducer;
