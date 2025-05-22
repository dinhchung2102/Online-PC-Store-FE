/* eslint-disable no-unused-vars */
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import Header from "~/components/Header";
import { useLocation } from "react-router";
import Grid from "@mui/material/Grid2";

import HomeIcon from '@mui/icons-material/Home';
import Footer from "~/components/Footer";
import Filter from "./Filter";

import Chip from '@mui/material/Chip';
import DoneIcon from '@mui/icons-material/Done';
import ProductCard from "~/components/ProductCard";
import Pagination from '@mui/material/Pagination';
import { keyToVietnamese } from "~/utils/utils";
import { useSelector } from "react-redux";
import { useState } from "react";



function FilterProduct() {
  const location = useLocation();

  console.log("ocation.search", location.search);

  const product = useSelector((state) => state.product.products);
  console.log('product', product);


  const queryParams = new URLSearchParams(location.search);
  const brand = queryParams.get("brand");

  // sort pproducts
  const [ascendingOrder, setAscendingOrder] = useState(false);
  const [descendingOrder, setDescendingOrder] = useState(false);
  const [bestSeller, setBestSeller] = useState(false);
  const [newest, setNewest] = useState(false);

  // list products
  // const [products, setProducts] = useState([]);

  // pagination
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState(1);

  // useEffect(() => {
  //   const fetchAllProduct = async () => {
  //     const products = await getFilterByKey(url);
  //     console.log('products', products);
  //     setProducts(products.data);
  //     setNumOfPages(products?.pagination.total_pages || 1);
  //     setPage(products?.pagination.page || 1);
  //   }
  //   fetchAllProduct();
  // }, [])

  // console.log(products);

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
          <Typography sx={{}}>{keyToVietnamese(brand || "Lọc thông tin")}</Typography>
        </Breadcrumbs>

        <Grid
          container
          spacing={1}
          sx={{ width: "100%", minHeight: "80vh", mt: "10px", }}>
          <Grid size={{ md: 2, lg: 2 }}>
            <Filter />
          </Grid>
          <Grid size={{ md: 10, lg: 10 }}>
            <Box sx={{
              bgcolor: "#fff",
              p: 2
            }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>{keyToVietnamese(brand || "Lọc thông tin")}</Typography>
              <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 2 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mr: 2 }}>Sắp xếp theo</Typography>
                <Chip
                  sx={{ borderRadius: 1, cursor: 'pointer' }}
                  onClick={() => setAscendingOrder(prev => !prev)}
                  clickable
                  label="Giá tăng"
                  icon={ascendingOrder ? <DoneIcon /> : null}
                />
                <Chip
                  sx={{ borderRadius: 1, cursor: 'pointer' }}
                  onClick={() => setDescendingOrder(prev => !prev)}
                  clickable
                  label="Giá giảm"
                  icon={descendingOrder ? <DoneIcon /> : null}
                />
                <Chip
                  sx={{ borderRadius: 1, cursor: 'pointer' }}
                  onClick={() => setBestSeller(prev => !prev)}
                  clickable
                  label="Bán chạy nhất"
                  icon={bestSeller ? <DoneIcon /> : null}
                />
                <Chip
                  sx={{ borderRadius: 1, cursor: 'pointer' }}
                  onClick={() => setNewest(prev => !prev)}
                  clickable
                  label="Mới nhất"
                  icon={newest ? <DoneIcon /> : null}
                />
              </Box>
            </Box>
            <Box sx={{ bgcolor: "#fff" }}>
              <Grid spacing={1} container sx={{ my: 1, mx: 0 }}>
                {(Array.isArray(product) ? product : product?.products || []).map((item) => (
                  <Grid key={item._id} item xs={12} sm={6} md={4} lg={3}>
                    <ProductCard product={item} />
                  </Grid>
                ))}
              </Grid>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 2 }}>
                <Pagination count={numOfPages} color="primary" page={page} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </Box>
  );
}

export default FilterProduct;
