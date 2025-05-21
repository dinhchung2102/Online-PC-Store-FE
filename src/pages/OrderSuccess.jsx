import Box from "@mui/material/Box";
import Header from "~/components/Header";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import HomeIcon from '@mui/icons-material/Home';
import Footer from "~/components/Footer";


function OrderSuccess() {

  return (
    <Box sx={{ backgroundColor: "#f0f0f0", minHeight: "100vh", }} >
      <Header />
      <Box sx={{ width: "90vw", margin: "10px auto", }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link sx={{ display: 'flex' }} underline="hover" color="inherit" href="/">
            <HomeIcon />
            Trang chủ
          </Link>
          <Typography sx={{}}>Đơn hàng thành công</Typography>
        </Breadcrumbs>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "80vh" }}>
          <Typography variant="h4" sx={{ textAlign: "center", marginTop: "20px", fontWeight: "bold" }}>
            Đơn hàng của bạn đã được xử lý thành công
          </Typography>
          <Typography variant="h6" sx={{ textAlign: "center", marginTop: "20px", fontWeight: "bold" }}>
            Cảm ơn bạn đã mua hàng tại Shop
          </Typography>
        </Box>

      </Box>
      <Footer />
    </Box>
  );
}

export default OrderSuccess;