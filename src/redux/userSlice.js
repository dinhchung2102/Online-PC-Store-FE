import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: {
    id: null,
    username: '',
    address: [],
    phone: '',
    email: '',
    token: '',
    refresh_token: '',
    avatar: '',
    gender: '',
    dateOfBirth: '',
    fullname: '',
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
        username: user.username,
        address: user.address || [],
        phone: user.phone || '',
        email: user.email || '',
        token: user.token || '',
        refresh_token: user.refresh_token || '',
        avatar: user.avatar || '',
        gender: user.gender || '',
        dateOfBirth: user.dateOfBirth || '',
        fullname: user.fullname || '',
      };
    },
    updateUserInfo: (state, action) => {
      const updates = action.payload;
      state.userInfo = {
        ...state.userInfo,
        ...updates,
      };
    },
    clearUserInfo: (state) => {
      state.userInfo = {
        id: null,
        username: '',
        address: [],
        phone: '',
        email: '',
        token: '',
        refresh_token: '',
        avatar: '',
        gender: '',
        dateOfBirth: '',
        fullname: '',
      }
    },
  },
});

export const { setUserInfo, updateUserInfo, clearUserInfo } = userSlice.actions;

export default userSlice.reducer;
