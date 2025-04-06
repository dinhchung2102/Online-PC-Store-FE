import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: {
    id: null,
    name: '',
    address: [],
    phone: '',
    email: '',
    token: '',
    refresh_token: '',
    avatar: '',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      const user = action.payload;
      state.userInfo = {
        id: user.id,
        name: user.name,
        address: user.address || [],
        phone: user.phone || '',
        email: user.email || '',
        token: user.access_token || '',
        refresh_token: user.refresh_token || '',
        avatar: user.avatar || '',
      };
    },
    clearUserInfo: (state) => {
      state.userInfo = {
        id: null,
        name: '',
        address: [],
        phone: '',
        email: '',
        token: '',
        refresh_token: '',
        avatar: '',
      }
    },
  },
});

export const { setUserInfo, clearUserInfo } = userSlice.actions;

export default userSlice.reducer;
