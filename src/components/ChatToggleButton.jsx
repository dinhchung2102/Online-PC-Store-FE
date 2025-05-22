import { useState, useEffect } from 'react';
import Fab from '@mui/material/Fab';
import ChatIcon from '@mui/icons-material/Chat';
import ChatWidget from '~/components/ChatWidget'; // Đã có sẵn
import Box from '@mui/material/Box';

export default function ChatToggleButton() {
  const [openChat, setOpenChat] = useState(false);
  const handleClose = () => setOpenChat(false);

  const toggleChat = () => {
    setOpenChat((prev) => !prev);
  };

  // Đóng chat khi click bên ngoài
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        openChat &&
        !document.getElementById('chat-box')?.contains(e.target) &&
        !document.getElementById('chat-toggle-btn')?.contains(e.target)
      ) {
        setOpenChat(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openChat]);

  return (
    <>
      {openChat && <ChatWidget id="chat-box" handleClose={handleClose} />}

      <Box
        id="chat-toggle-btn"
        sx={{
          position: 'fixed',
          bottom: 30,
          right: 30,
          zIndex: 9999,
        }}
      >
        <Fab color="primary" onClick={toggleChat}>
          <ChatIcon />
        </Fab>
      </Box>
    </>
  );
}
