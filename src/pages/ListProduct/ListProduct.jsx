import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import Header from "~/components/Header";
import { useParams } from "react-router";
import Grid from "@mui/material/Unstable_Grid2";

import HomeIcon from '@mui/icons-material/Home';
import Footer from "~/components/Footer";
import Filter from "./Filter";

import Chip from '@mui/material/Chip';
import DoneIcon from '@mui/icons-material/Done';
import { useEffect, useState } from "react";
import ProductCard from "~/components/ProductCard";
import { getAllProducts } from "~/services/productService";



function ListProduct() {
  const { category } = useParams();

  // sort pproducts
  const [ascendingOrder, setAscendingOrder] = useState(false);
  const [descendingOrder, setDescendingOrder] = useState(false);
  const [bestSeller, setBestSeller] = useState(false);
  const [newest, setNewest] = useState(false);

  // list products
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchAllProduct = async () => {
      const products = await getAllProducts();
      setProducts(products);
    }
    fetchAllProduct();
  }, [])

  return (
    <Box
      sx={{
        backgroundColor: "#f0f0f0",
        minHeight: "100vh",
      }}
    >
      <Header />
      <Box sx={{
        width: "90vw",
        margin: "10px auto",
      }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link sx={{ display: 'flex' }} underline="hover" color="inherit" href="/">
            <HomeIcon />
            Trang chủ
          </Link>
          <Typography sx={{}}>{category}</Typography>
        </Breadcrumbs>

        <Grid
          container
          spacing={1}
          sx={{ width: "100%", minHeight: "80vh", mt: "10px", }}>
          <Grid item lg={2} md={2}>
            <Filter />
          </Grid>
          <Grid item lg={10} md={10}>
            <Box sx={{
              bgcolor: "#fff",
              p: 2
            }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>{category} (100 sản phẩm)</Typography>
              <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 2 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mr: 2 }}>Sắp xếp theo</Typography>
                <Chip
                  sx={{ borderRadius: 1, cursor: 'pointer' }}
                  onClick={() => setAscendingOrder(prev => !prev)}
                  clickable
                  label="Giá tăng"
                  icon={ascendingOrder && <DoneIcon />}
                />
                <Chip
                  sx={{ borderRadius: 1, cursor: 'pointer' }}
                  onClick={() => setDescendingOrder(prev => !prev)}
                  clickable
                  label="Giá giảm"
                  icon={descendingOrder && <DoneIcon />}
                />
                <Chip
                  sx={{ borderRadius: 1, cursor: 'pointer' }}
                  onClick={() => setBestSeller(prev => !prev)}
                  clickable
                  label="Bán chạy nhất"
                  icon={bestSeller && <DoneIcon />}
                />
                <Chip
                  sx={{ borderRadius: 1, cursor: 'pointer' }}
                  onClick={() => setNewest(prev => !prev)}
                  clickable
                  label="Mới nhất"
                  icon={newest && <DoneIcon />}
                />
              </Box>
            </Box>
            <Grid m={0} spacing={2} container sx={{ bgcolor: "#fff", mt: 1 }}>
              {products?.map((product, index) => {
                return (
                  <Grid key={index} lg={4} >
                    <ProductCard product={product} />
                  </Grid>
                )
              })}

            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </Box>
  );
}

export default ListProduct;
