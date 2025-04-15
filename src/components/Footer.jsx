import Container from "@mui/material/Container";
import "swiper/css";
import "swiper/css/navigation";
import { Box, Typography, IconButton, Link } from "@mui/material";
import { Facebook, YouTube, LinkedIn } from "@mui/icons-material";
import Grid from '@mui/material/Grid';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Footer = () => {
  const paymentLogos = [
    "/image/pay_1.png",
    "/image/pay_2.png",
    "/image/pay_3.png",
    "/image/pay_4.png",
    "/image/pay_5.png",
    "/image/pay_6.png",
    "/image/pay_7.png",
    "/image/pay_8.png",
  ];

  const shippingLogos = [
    "/image/ship_1.png",
    "/image/ship_2.png",
    "/image/ship_3.png",
    "/image/ship_4.png",
  ];

  return (
    <Box component="footer" sx={{ bgcolor: "#f5f5f5", mt: 3, pt: 4, pb: 4 }}>
      <Container sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
        {/* Cột 1: Giới thiệu */}
        <Box marginLeft={-15}>
          <Typography variant="h6">VỀ GEARVN</Typography>
          <Link href="#" color="inherit" display="block" underline="none">
            Giới thiệu
          </Link>
          <Link href="#" color="inherit" display="block" underline="none">
            Tuyển dụng
          </Link>
          <Link href="#" color="inherit" display="block" underline="none">
            Liên hệ
          </Link>
        </Box>

        {/* Cột 2: Chính sách */}
        <Box>
          <Typography variant="h6">CHÍNH SÁCH</Typography>
          <Link href="#" color="inherit" display="block" underline="none">
            Chính sách bảo hành
          </Link>
          <Link href="#" color="inherit" display="block" underline="none">
            Chính sách giao hàng
          </Link>
          <Link href="#" color="inherit" display="block" underline="none">
            Chính sách bảo mật
          </Link>
        </Box>

        {/* Cột 3: Thông tin */}
        <Box>
          <Typography variant="h6">THÔNG TIN</Typography>
          <Link href="#" color="inherit" display="block" underline="none">
            Hệ thống cửa hàng
          </Link>
          <Link href="#" color="inherit" display="block" underline="none">
            Hướng dẫn mua hàng
          </Link>
          <Link href="#" color="inherit" display="block" underline="none">
            Hướng dẫn thanh toán
          </Link>
          <Link href="#" color="inherit" display="block" underline="none">
            Hướng dẫn trả góp
          </Link>
        </Box>

        {/* Cột 4: Tổng đài hỗ trợ */}
        <Box marginRight={-15.3}>
          <Typography variant="h6">TỔNG ĐÀI HỖ TRỢ</Typography>
          <Typography>
            Mua hàng:{" "}
            <Link href="tel:19005301" color="inherit" underline="none" sx={{ color: "blue" }}>
              1900.5301
            </Link>
          </Typography>
          <Typography>
            Bảo hành:{" "}
            <Link href="tel:19005325" color="inherit" underline="none" sx={{ color: "blue" }}>
              1900.5325
            </Link>
          </Typography>
          <Typography>
            Khiếu nại:{" "}
            <Link href="tel:18006173" color="inherit" underline="none" sx={{ color: "blue" }}>
              1800.6173
            </Link>
          </Typography>
          <Typography>
            Email:{" "}
            <Link href="mailto:cskh@gearvn.com" color="inherit" underline="none" sx={{ color: "blue" }}>
              cskh@gearvn.com
            </Link>
          </Typography>
        </Box>
      </Container>

      {/* ĐƠN VỊ VẬN CHUYỂN */}
      <Grid item xs={12} md={12} sx={{ textAlign: "center", mt: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
          ĐƠN VỊ VẬN CHUYỂN
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {shippingLogos.map((src, index) => (
            <Grid item key={index}>
              <img
                src={src}
                alt={`Shipping logo ${index + 1}`}
                style={{ width: 80, height: "auto" }}
              />
            </Grid>
          ))}
        </Grid>

        {/* CÁCH THỨC THANH TOÁN */}
        <Typography variant="h6" sx={{ fontWeight: "bold", mt: 4, mb: 2 }}>
          CÁCH THỨC THANH TOÁN
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {paymentLogos.map((src, index) => (
            <Grid item key={index}>
              <img
                src={src}
                alt={`Payment logo ${index + 1}`}
                style={{ width: 80, height: "auto" }}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>

      {/* Kết nối mạng xã hội */}
      <Box mt={4} textAlign="center">
        <Typography variant="h6">KẾT NỐI VỚI CHÚNG TÔI</Typography>
        <IconButton color="primary" href="#">
          <Facebook />
        </IconButton>
        <IconButton color="error" href="#">
          <YouTube />
        </IconButton>
        <IconButton color="primary" href="#">
          <LinkedIn />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
