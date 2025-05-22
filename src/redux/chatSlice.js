// src/redux/chatSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  messages: [], // mảng chứa các tin nhắn
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addMessage(state, action) {
      // action.payload = { text: string, from: 'user' | 'ai' }
      state.messages.push(action.payload);
    },
    clearMessages(state) {
      state.messages = [];
    },
  },
});

export const { addMessage, clearMessages } = chatSlice.actions;

export default chatSlice.reducer;
