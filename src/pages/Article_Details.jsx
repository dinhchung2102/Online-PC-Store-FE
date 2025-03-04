import * as React from "react";
import { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Paper,
  Button,
  IconButton,
  Grid,
  Divider,
  Stack,
  Link,
  Chip,
  Menu, MenuItem 
} from "@mui/material";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Check from "@mui/icons-material/Check";
import ShareIcon from "@mui/icons-material/Share";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import EditIcon from "@mui/icons-material/Edit";
import Header from "../components/Header";
import Footer from "../components/Footer";
import imgProduct from "../assets/images/expertbook-p1-p1403cva-i5se16-50w__8__f9120f92bbcf40409391d8b907b7c630_0b12de755584415689fecd42c6a95e6a.webp";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

function Article_Details() {
    const [liked, setLiked] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const handleLikeClick = () => {
        setLiked(!liked); 
    }
    const handleShareClick = (event) => {
        setAnchorEl(event.currentTarget); 
    };
    const handleClose = () => {
        setAnchorEl(null); 
    };
    const handleSharePlatform = (platform) => {
        const urlToShare = "https://example.com"; 
        const shareMessage = "Chia sẻ trang chi tiết bài viết"; 
    
        let shareUrl = '';
    
        switch (platform) {
          case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(urlToShare)}`;
            break;
          case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(urlToShare)}&text=${encodeURIComponent(shareMessage)}`;
            break;
          case 'whatsapp':
            shareUrl = `https://wa.me/?text=${encodeURIComponent(shareMessage + ' ' + urlToShare)}`;
            break;
            case 'instagram':
                shareUrl = `https://www.instagram.com/`; 
                break;
          default:
            break;
        }
    
        if (shareUrl) {
          window.open(shareUrl, '_blank', 'width=600,height=400'); 
          handleClose(); 
        }
    };
    
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
      }}
    >
      <Box width="100%">
        <Header />
      </Box>

      <Box sx={{ width: "80%", marginTop: 5 }}>
        <Paper sx={{ padding: 3, backgroundColor: "#fff", boxShadow: 3 }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
            Tổng hợp 5 cách tải video Threads về điện thoại và máy tính
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Stack direction="row" spacing={0} sx={{ alignItems: 'center' }}>
              <IconButton size="small" sx={{ marginRight: 1, color: 'red' }}>
                <EditIcon fontSize="small" />
              </IconButton>
              <Typography variant="body2" sx={{ color: 'red' }}>Nguyễn Văn A</Typography>
              <Typography variant="body2" sx={{ color: "gray", marginLeft: 4 }}>
                5 ngày trước
              </Typography>
            </Stack>

            <Stack direction="row" spacing={2}>
              <Button
                variant={liked ? "contained" : "outlined"}
                color="primary"
                onClick={handleLikeClick}
                startIcon={<ThumbUpIcon />}
              >
                Thích
              </Button>
              <Button
                variant="outlined"
                color="info"
                onClick={handleShareClick}
                startIcon={<ShareIcon />}
              >
                Chia sẻ
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={() => handleSharePlatform('facebook')}>
                  <FacebookIcon sx={{ marginRight: 2 }} />
                  Facebook
                </MenuItem>
                <MenuItem onClick={() => handleSharePlatform('twitter')}>
                  <TwitterIcon sx={{ marginRight: 2 }} />
                  Twitter
                </MenuItem>
                <MenuItem onClick={() => handleSharePlatform('whatsapp')}>
                  <WhatsAppIcon sx={{ marginRight: 2 }} />
                  WhatsApp
                </MenuItem>
                <MenuItem onClick={() => handleSharePlatform('instagram')}>
                  <InstagramIcon sx={{ marginRight: 2 }} />
                  Instagram
                </MenuItem>
              </Menu>
            </Stack>
          </Box>

          <Divider sx={{ marginY: 3 }} />

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img
              src={imgProduct}
              alt="Article"
              style={{ width: "80%", borderRadius: 8 }}
            />
          </Box>

          <Typography variant="body1" sx={{ marginTop: 2 }}>
            Mạng xã hội mới nổi của Meta là Threads đang ngày càng thu hút đông đảo người dùng bởi nội dung video ngắn gọn, sáng tạo. Tuy nhiên, ứng dụng này lại không hỗ trợ tính năng tải video trực tiếp, gây không ít bất tiện cho người dùng muốn lưu lại những khoảnh khắc yêu thích. Đừng lo lắng GEARVN sẽ bật mí 5 cách tải video Threads cực nhanh, giúp bạn dễ dàng lưu giữ những khoảnh khắc đáng nhớ. Hãy cùng theo dõi trong bài viết sau nhé!
          </Typography>

          <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: '26px', marginTop: 3 }}>
            Tải video Threads bằng ứng dụng SnapDownloader (tải video Threads nhanh chóng)
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            SnapDownloader là một ứng dụng mạnh mẽ, không chỉ hỗ trợ tải video từ Threads mà còn từ nhiều nền tảng khác như YouTube, Facebook, Vimeo,... Điểm mạnh của ứng dụng này là tốc độ tải nhanh, giao diện thân thiện và khả năng tải video với nhiều độ phân giải khác nhau, từ SD đến 4K. 
          </Typography>
          
          <Box sx={{ marginTop: 5 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 2 }}>
              Xem thêm các bài viết khác
            </Typography>

            <Box sx={{ marginTop: 2 }}>
              <ul>
                <li>
                  <Link href="#" variant="body2" color="primary" sx={{textDecoration: 'none'}}>
                    Mẹo tải video Instagram về điện thoại, máy tính siêu tiện lợi
                  </Link>
                </li>
                <li>
                  <Link href="#" variant="body2" color="primary" sx={{textDecoration: 'none'}}>
                    Cách tải video youtube miễn phí với Youtube Downloader HD
                  </Link>
                </li>
                <li>
                  <Link href="#" variant="body2" color="primary" sx={{textDecoration: 'none'}}>
                    6 cách tải video từ Youtube về máy tính, điện thoại dễ nhất
                  </Link>
                </li>
              </ul>
            </Box>
          </Box>

          <Box sx={{ marginTop: 5 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 2 }}>
              Tags
            </Typography>

            <Stack direction="row" spacing={2}>
              <Chip label="Tải video" color="primary" />
              <Chip label="Threads" color="secondary" />
              <Chip label="SnapDownloader" color="default" />
              <Chip label="Video" color="info" />
            </Stack>
          </Box>
        </Paper>
      </Box>

      <Box width="100%">
        <Footer />
      </Box>
    </Container>
  );
}

export default Article_Details;
