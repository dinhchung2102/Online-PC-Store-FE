/* eslint-disable react/prop-types */
import React from 'react';
import { Paper, Box, Typography, IconButton, TextField, Button, Link } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector, useDispatch } from 'react-redux';
import { addMessage } from '~/redux/chatSlice';
import { sendMessageChatBot } from '../services/ChatBot';
import { useNavigate } from 'react-router';
import { getFilterByKey } from '../services/searchFilterService';
import { setProducts, clearProducts } from "~/redux/filterProductSlide";

export default function ChatWidget({ id, handleClose }) {
  const navigate = useNavigate();
  const reduxMessages = useSelector((state) => state.chat.messages);
  const dispatch = useDispatch();

  const [input, setInput] = React.useState('');

  const messagesEndRef = React.useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [reduxMessages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    // Thêm tin nhắn user vào redux
    dispatch(addMessage({ text: input, from: 'user' }));
    const userMessage = input;
    setInput('');

    try {
      // Gửi tin nhắn đến API và lấy phản hồi
      const data = await sendMessageChatBot(userMessage);
      console.log("data", data.data);
      // Thêm phản hồi AI vào redux
      dispatch(addMessage({ text: data.data.reply, from: 'ai', url: data.data.url || null }));

    } catch (error) {
      console.error("Lỗi khi gọi API chatbot:", error);
      dispatch(addMessage({ text: 'Xin lỗi, đã xảy ra lỗi khi kết nối với chatbot.', from: 'ai' }));
    }
  };



  // const data = await sendMessageChatBot(input)
  // dispatch(addMessage({ text: data.reply, from: 'ai' })); // Thêm tin nhắn AI vào redux
  // console.log("reduxMessages", reduxMessages);

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
              {msg.text}{msg.url && <Link sx={{ cursor: 'pointer', color: 'primary.main' }} onClick={async () => {
                navigate(msg.url, { state: { url: msg.url } })
                const product = await getFilterByKey(msg.url)
                dispatch(clearProducts())
                dispatch(setProducts(product))
              }}>Xem chi tiết</Link>}
            </Typography>
          </Box>
        ))}
        <Box ref={messagesEndRef} />
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