import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import Header from "~/components/Header";

import HomeIcon from '@mui/icons-material/Home';

function ListProduct() {
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
        margin: "20px auto",
      }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link sx={{ display: 'flex'}} underline="hover" color="inherit" href="/">
            <HomeIcon />
            Trang chủ
          </Link>
          <Typography sx={{  }}></Typography>
        </Breadcrumbs>
      </Box>
    </Box>
  );
}

export default ListProduct;
