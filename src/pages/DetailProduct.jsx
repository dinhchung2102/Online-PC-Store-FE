import Box from "@mui/material/Box";
import Header from "~/components/Header";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import HomeIcon from '@mui/icons-material/Home';
import { useLocation, useNavigate } from "react-router";
import Divider from "@mui/material/Divider";
import StarIcon from '@mui/icons-material/Star';
import { formatCurrency, keyToVietnamese } from "~/utils/utils";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Button from "@mui/material/Button";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { useEffect, useState } from "react";
import { getAllProducts } from "~/services/productService";
import Footer from "~/components/Footer";


function DetailProduct() {

  // sản phẩm tương tự
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchAllProduct = async () => {
      const products = await getAllProducts();
      setProducts(products);
    }
    fetchAllProduct();
  }, [])


  const navigate = useNavigate();
  const handleClickBuy = () => {
    navigate("/shopping-cart");
  }
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
                onClick={handleClickBuy}
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
            <Typography variant="body1" sx={{ mt: 2 }}>Mô tả sản phẩm: {product.description}</Typography>
          </Box>
        </Box>
        <Box sx={{ width: '100%', mt: 2, display: 'flex', gap: 2 }}>
          <Box sx={{ width: '60%', bgcolor: 'white', p: 2 }}>
            <Typography variant="h5">Thông tin sản phẩm</Typography>
            <Box>
              <Typography sx={{ fontWeight: 'bold', my: 2 }} variant="h6">Thông số kĩ thuật</Typography>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 500 }}>
                  <TableBody >
                    {Object.entries(product?.computer).map(([key, value]) => (
                      <TableRow key={key}>
                        <TableCell
                          component="th"
                          scope="row"
                          sx={{
                            fontWeight: 'bold',  // Làm đậm cột đầu tiên
                            color: 'text.primary',
                            fontSize: '1.128rem',
                            bgcolor: 'f5f5f5',
                            width: 120,
                          }}
                        >
                          {keyToVietnamese(key)}
                        </TableCell>
                        <TableCell style={{ width: 200, fontSize: '1.128rem', '&.MuiTableCellRoot': { p: 1 } }} >
                          {value}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Box>
          <Box sx={{ width: '40%', bgcolor: 'white', p: 2 }}>
            <Typography variant="h5">Sản phẩm tương tự</Typography>
            <Box>
              {products.map((product, index) => (
                <React.Fragment key={product.id || index}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 2 }}>
                    <img
                      style={{ width: '140px', height: '140px', objectFit: 'contain' }}
                      src={product.image}
                      alt={product.name}
                    />
                    <Box>
                      <Typography sx={{ fontWeight: 'bold', cursor: 'pointer' }}>
                        {product.name}
                      </Typography>
                      <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', mb: 1 }}>
                        <Typography sx={{ fontWeight: 'bold', color: '#ff8a00' }} component="span">
                          0.0
                        </Typography>
                        <StarIcon sx={{ color: '#ff8a00' }} />
                        <Typography sx={{ color: 'black', ml: 1.5 }} component="span">
                          (0 đánh giá)
                        </Typography>
                      </Box>
                      <Typography variant="" sx={{ fontWeight: 'bold', color: 'primary.main', mt: 3 }}>
                        {formatCurrency(product.price)}
                      </Typography>
                    </Box>
                  </Box>
                  {/* Hiển thị Divider nếu không phải là sản phẩm cuối cùng */}
                  {index < products.length - 1 && <Divider sx={{ my: 2 }} />}
                </React.Fragment>
              ))}
            </Box>
          </Box>

        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default DetailProduct;