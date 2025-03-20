import Box from "@mui/material/Box";
import Header from "~/components/Header";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import HomeIcon from '@mui/icons-material/Home';
import { useLocation } from "react-router";
import Divider from "@mui/material/Divider";
import StarIcon from '@mui/icons-material/Star';
import { formatCurrency } from "~/utils/utils";
import CheckIcon from '@mui/icons-material/Check';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Button from "@mui/material/Button";

function DetailProduct() {

  const location = useLocation();
  const { product } = location.state || {};

  console.log(product);
  return (
    <Box sx={{ backgroundColor: "#f0f0f0", minHeight: "100vh", }} >
      <Header />
      <Box sx={{ width: "90vw", margin: "10px auto", }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link sx={{ display: 'flex' }} underline="hover" color="inherit" href="/">
            <HomeIcon />
            Trang chủ
          </Link>
          <Typography sx={{}}>{product.name}</Typography>
        </Breadcrumbs>

        <Box sx={{ width: "100%", mt: "10px", bgcolor: 'white', p: 2, display: 'flex' }}>
          <Box sx={{ width: '40%', p: 2 }}>
            <img style={{ width: '100%' }} src={product.image} />
          </Box>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Box sx={{ width: '60%', p: 2 }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>{product.name}</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', my: 1, }}>
              <Typography sx={{ fontWeight: 'bold', color: '#ff8a00' }} component="span" >0.0</Typography>
              <StarIcon sx={{ color: '#ff8a00' }} />
              <Typography sx={{ color: 'black', ml: 1.5 }} component="span" >(0 đánh giá)</Typography>
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'primary.main', mt: 3 }}>{formatCurrency(product.price)}</Typography>
            <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 1 }}>
                <CheckCircleIcon sx={{ color: 'primary.main' }} />
                <Typography variant="subtitle2">Bảo hành chính hãng 24 tháng. </Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 1 }}>
                <CheckCircleIcon sx={{ color: 'primary.main' }} />
                <Typography variant="subtitle2">Hỗ trợ đổi mới trong 7 ngày. </Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 1 }}>
                <CheckCircleIcon sx={{ color: 'primary.main' }} />
                <Typography variant="subtitle2">Miễn phí giao hàng toàn quốc.</Typography>
              </Box>
            </Box>
            <Box sx={{ mt: 3 }}>
              <Button
                variant="contained"
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1,
                  px: 12,
                  '&.MuiButtonBase-root': { textTransform: 'none' }
                }}
              >
                <Typography variant="h5">Mua ngay</Typography>
                <Typography variant="subtitle2">Giao hàng tận nơi hoặc nhận tại cửa hàng</Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default DetailProduct;