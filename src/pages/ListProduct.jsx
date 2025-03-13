import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import Header from "~/components/Header";
import { useParams } from "react-router";
import Grid from "@mui/material/Unstable_Grid2";

import HomeIcon from '@mui/icons-material/Home';
import Footer from "~/components/Footer";

function ListProduct() {

  const { category } = useParams();

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
            <Box sx={{
              bgcolor: "#fff",
            }}>
              filter
            </Box>
          </Grid>
          <Grid item lg={10} md={10}>
            <Box sx={{
              bgcolor: "#fff",
            }}>
              list product
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </Box>
  );
}

export default ListProduct;
