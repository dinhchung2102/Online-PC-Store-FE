/* eslint-disable react/prop-types */
import React from 'react';
import { Paper, Box, Typography, IconButton, TextField, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector, useDispatch } from 'react-redux';
import { addMessage } from '~/redux/chatSlice';

export default function ChatWidget({ id, handleClose }) {
  const reduxMessages = useSelector((state) => state.chat.messages);
  const dispatch = useDispatch();

  const [input, setInput] = React.useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    // Thêm tin nhắn user vào redux
    dispatch(addMessage({ text: input, from: 'user' }));
    setInput('');

    // Giả sử trả lời AI tự động sau 1s (bạn có thể thay bằng API call)
    setTimeout(() => {
      dispatch(addMessage({ text: 'Đây là phản hồi từ AI', from: 'ai' }));
    }, 1000);
  };

  return (
    <Paper
      id={id}
      elevation={6}
      sx={{
        position: 'fixed',
        bottom: 100,
        right: 30,
        width: 300,
        height: 400,
        p: 2,
        zIndex: 9998,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography fontWeight="bold">🤖 Chat với AI của chúng tôi</Typography>
        <IconButton size="small" onClick={() => { handleClose()}}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Box
        sx={{
          flex: 1,
          overflowY: 'auto',
          bgcolor: '#f5f5f5',
          p: 1,
          my: 1,
          borderRadius: 1,
        }}
      >
        {reduxMessages.map((msg, i) => (
          <Box
            key={i}
            sx={{
              display: 'flex',
              justifyContent: msg.from === 'user' ? 'flex-end' : 'flex-start', // Căn phải nếu là user, căn trái nếu là AI
              mb: 1,
            }}
          >
            <Typography
              sx={{
                bgcolor: msg.from === 'user' ? '#1976d2' : '#ffffff', // Màu xanh cho user, trắng cho AI
                color: msg.from === 'user' ? '#ffffff' : '#000000', // Màu chữ trắng cho user, đen cho AI
                borderRadius: 4,
                padding: 1,
                maxWidth: '90%', // Giới hạn chiều rộng tin nhắn
              }}
            >
              {msg.text}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box display="flex" gap={1}>
        <TextField
          fullWidth
          size="small"
          placeholder="Nhập tin nhắn..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <Button onClick={handleSend} variant="contained" size="small">Gửi</Button>
      </Box>
    </Paper>
  );
}