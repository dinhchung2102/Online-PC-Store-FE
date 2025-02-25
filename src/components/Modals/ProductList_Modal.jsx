import * as React from "react";
import {
  Box,
  Typography,
  Button,
  Input,
  IconButton,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Paper,
  InputBase,
  Grid,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import Chip from "@mui/material/Chip";
import SearchIcon from "@mui/icons-material/Search";
import ProductCard from "../ProductCard";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1050,
  bgcolor: "#F5F5F5",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
};

const products = [
  {
    link: "https://cellphones.com.vn/pc-cps-gaming-g4.html",
    image:
      "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/r/group_167_3_.png",
    name: "PC CPS Gaming G04 i5 12400F / 16GB - 256GB / RX 6500",
    originalPrice: "16.890.000đ",
    discountedPrice: "11.290.000đ",
    discountPercentage: 33,
  },
  {
    link: "#",
    image:
      "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/r/group_167_3_.png",
    name: "PC CPS Gaming G04 i5 12400F / 16GB - 256GB / RX 6500",
    originalPrice: "16.890.000đ",
    discountedPrice: "11.290.000đ",
    discountPercentage: 33,
  },
  {
    link: "#",
    image:
      "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/r/group_167_3_.png",
    name: "PC CPS Gaming G04 i5 12400F / 16GB - 256GB / RX 6500",
    originalPrice: "16.890.000đ",
    discountedPrice: "11.290.000đ",
    discountPercentage: 33,
  },
  {
    link: "#",
    image:
      "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/r/group_167_3_.png",
    name: "PC CPS Gaming G04 i5 12400F / 16GB - 256GB / RX 6500",
    originalPrice: "16.890.000đ",
    discountedPrice: "11.290.000đ",
    discountPercentage: 33,
  },
  {
    link: "#",
    image:
      "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/r/group_167_3_.png",
    name: "PC CPS Gaming G04 i5 12400F / 16GB - 256GB / RX 6500",
    originalPrice: "16.890.000đ",
    discountedPrice: "11.290.000đ",
    discountPercentage: 33,
  },
];
const ProductList_Modal = ({ open, handleClose, title, description }) => {
  const [price, setPrice] = React.useState("");
  const [filter, setFilter] = React.useState("");
  const handleChangePrice = (event) => {
    setPrice(event.target.value);
  };
  const handleChangeFilter = (event) => {
    setFilter(event.target.value);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h5"
          component="h2"
          sx={{ marginBottom: 2 }}
        >
          {title}
        </Typography>
        <Box
          sx={{
            width: "100%",
            backgroundColor: "white",
            padding: 2,
          }}
        >
          <Box
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          >
            <Typography variant="h6" sx={{ fontWeight: "light" }}>
              Chọn thương hiệu:{" "}
            </Typography>
            <Button
              variant="outlined"
              color="error"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "12vh",
                height: "5vh",
                padding: "1px",
                borderColor: "grey",
                marginLeft: 1,
              }}
            >
              Tất cả
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "12vh",
                height: "5vh",
                padding: "1px",
                borderColor: "grey",
                marginLeft: 1,
              }}
            >
              <img
                src="https://dashboard.cellphones.com.vn/storage/ScnNyuNQAnXGmurXAoHZN8oL1OY6way1mWrqsoSS.jpg"
                alt="Seagate"
                style={{ width: "100%" }}
              />
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "12vh",
                height: "5vh",
                padding: "1px",
                borderColor: "grey",
                marginLeft: 1,
              }}
            >
              <img
                src="https://dashboard.cellphones.com.vn/storage/iOyot2VszuuTxiXK98cIyQI1l0KV4mG9fnQ7gytQ.jpg"
                alt="Western Digital"
                style={{ width: "100%" }}
              />
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: 2,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "light" }}>
              Lọc theo:{" "}
            </Typography>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small-label">Giá</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={price}
                label="Giá"
                onChange={handleChangePrice}
              >
                <MenuItem value="">
                  <em>Tất cả</em>
                </MenuItem>
                <MenuItem value={10}>Dưới 1 triệu</MenuItem>
                <MenuItem value={20}>1 triệu - 2 triệu</MenuItem>
                <MenuItem value={30}>2 triệu trở lên</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 2,
            }}
          >
            <Box>
              <Paper
                component="form"
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: 400,
                  border: "1px solid red",
                  borderRadius: "4px",
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Bạn cần tìm gì?"
                  inputProps={{ "aria-label": "Bạn cần tìm gì?" }}
                />
                <IconButton
                  type="button"
                  sx={{ p: "10px", color: "red" }}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
              </Paper>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "light" }}>
                Sắp xếp:{" "}
              </Typography>
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small-label">Sắp xếp</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={filter}
                  label="Sắp xêp"
                  onChange={handleChangeFilter}
                >
                  <MenuItem value="">
                    <em>Tất cả</em>
                  </MenuItem>
                  <MenuItem value={10}>Giá tăng dần</MenuItem>
                  <MenuItem value={20}>Giá giảm dần</MenuItem>
                  <MenuItem value={30}>Mua nhiều</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            backgroundColor: "#F5F5F5",
            padding: 2,
            maxHeight: "400px",
            overflowY: "auto",
          }}
        >
          <Grid container spacing={2}>
            {products.map((product, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                {" "}
                {/* xs=12, sm=6, md=3 */}
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Modal>
  );
};

export default ProductList_Modal;
