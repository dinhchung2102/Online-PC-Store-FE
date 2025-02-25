import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Select,
  MenuItem,
  Container,
  IconButton,
  Stack,
} from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import FilterListIcon from "@mui/icons-material/FilterList";
const products = [
  {
    id: 1,
    image: "/image/m1.png",
    name: "Chuột Logitech G102 LightSync White",
    price: "390.000đ",
    oldPrice: "599.000đ",
    discount: "-35%",
    tags: ["Bán chạy"],
    features: ["Không", "Có dây", "Led RGB"],
  },
  {
    id: 2,
    image: "/image/m2.png",
    name: "Chuột Logitech G102 LightSync Black",
    price: "390.000đ",
    oldPrice: "599.000đ",
    discount: "-35%",
    tags: ["Bán chạy"],
    features: ["Không", "Có dây", "Led RGB"],
  },
  {
    id: 3,
    image: "/image/m3.png",
    name: "Chuột Razer Deathadder Essential White",
    price: "410.000đ",
    oldPrice: "790.000đ",
    discount: "-48%",
    tags: ["Bán chạy"],
    features: ["Không", "Có dây", "Led RGB"],
  },
  {
    id: 4,
    image: "/image/m3.png",
    name: "Chuột Razer Deathadder Essential White",
    price: "410.000đ",
    oldPrice: "790.000đ",
    discount: "-48%",
    tags: ["Bán chạy"],
    features: ["Không", "Có dây", "Led RGB"],
  },
  {
    id: 5,
    image: "/image/m3.png",
    name: "Chuột Razer Deathadder Essential White",
    price: "410.000đ",
    oldPrice: "790.000đ",
    discount: "-48%",
    tags: ["Bán chạy"],
    features: ["Không", "Có dây", "Led RGB"],
  },
  {
    id: 6,
    image: "/image/m3.png",
    name: "Chuột Razer Deathadder Essential White",
    price: "410.000đ",
    oldPrice: "790.000đ",
    discount: "-48%",
    tags: ["Bán chạy"],
    features: ["Không", "Có dây", "Led RGB"],
  },
  {
    id: 2,
    image: "/image/m2.png",
    name: "Chuột Logitech G102 LightSync Black",
    price: "390.000đ",
    oldPrice: "599.000đ",
    discount: "-35%",
    tags: ["Bán chạy"],
    features: ["Không", "Có dây", "Led RGB"],
  },
  {
    id: 2,
    image: "/image/m2.png",
    name: "Chuột Logitech G102 LightSync Black",
    price: "390.000đ",
    oldPrice: "599.000đ",
    discount: "-35%",
    tags: ["Bán chạy"],
    features: ["Không", "Có dây", "Led RGB"],
  },
  {
    id: 2,
    image: "/image/m2.png",
    name: "Chuột Logitech G102 LightSync Black",
    price: "390.000đ",
    oldPrice: "599.000đ",
    discount: "-35%",
    tags: ["Bán chạy"],
    features: ["Không", "Có dây", "Led RGB"],
  },
  {
    id: 2,
    image: "/image/m2.png",
    name: "Chuột Logitech G102 LightSync Black",
    price: "390.000đ",
    oldPrice: "599.000đ",
    discount: "-35%",
    tags: ["Bán chạy"],
    features: ["Không", "Có dây", "Led RGB"],
  },
  {
    id: 2,
    image: "/image/m2.png",
    name: "Chuột Logitech G102 LightSync Black",
    price: "390.000đ",
    oldPrice: "599.000đ",
    discount: "-35%",
    tags: ["Bán chạy"],
    features: ["Không", "Có dây", "Led RGB"],
  },
  {
    id: 2,
    image: "/image/m2.png",
    name: "Chuột Logitech G102 LightSync Black",
    price: "390.000đ",
    oldPrice: "599.000đ",
    discount: "-35%",
    tags: ["Bán chạy"],
    features: ["Không", "Có dây", "Led RGB"],
  },
  {
    id: 2,
    image: "/image/m2.png",
    name: "Chuột Logitech G102 LightSync Black",
    price: "390.000đ",
    oldPrice: "599.000đ",
    discount: "-35%",
    tags: ["Bán chạy"],
    features: ["Không", "Có dây", "Led RGB"],
  },
  {
    id: 2,
    image: "/image/m2.png",
    name: "Chuột Logitech G102 LightSync Black",
    price: "390.000đ",
    oldPrice: "599.000đ",
    discount: "-35%",
    tags: ["Bán chạy"],
    features: ["Không", "Có dây", "Led RGB"],
  },
  {
    id: 2,
    image: "/image/m2.png",
    name: "Chuột Logitech G102 LightSync Black",
    price: "390.000đ",
    oldPrice: "599.000đ",
    discount: "-35%",
    tags: ["Bán chạy"],
    features: ["Không", "Có dây", "Led RGB"],
  },
  {
    id: 2,
    image: "/image/m2.png",
    name: "Chuột Logitech G102 LightSync Black",
    price: "390.000đ",
    oldPrice: "599.000đ",
    discount: "-35%",
    tags: ["Bán chạy"],
    features: ["Không", "Có dây", "Led RGB"],
  },
];

const ProductCard = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 250, m: 2, textAlign: "center" }}>
      <CardMedia
        component="img"
        image={product.image}
        alt={product.name}
        sx={{ height: 150, objectFit: "contain" }}
      />
      <CardContent>
        {product.tags.map((tag, index) => (
          <Button
            key={index}
            variant="contained"
            color="error"
            size="small"
            sx={{ mb: 1 }}
          >
            {tag}
          </Button>
        ))}
        <Typography variant="body1" fontWeight="bold">
          {product.name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {product.features.join(" • ")}
        </Typography>
        <Typography
          variant="body2"
          sx={{ textDecoration: "line-through", color: "gray" }}
        >
          {product.oldPrice}
        </Typography>
        <Typography variant="h6" color="error">
          {product.price} {product.discount}
        </Typography>
      </CardContent>
    </Card>
  );
};
ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    oldPrice: PropTypes.string.isRequired,
    discount: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

const MouseAll = () => {
  return (
    <Container
      maxWidth={false}
      sx={{ bgcolor: "#f5f5f5", minHeight: "100vh", width: "1442px" }}
    >
      <Header></Header>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        p={2}
        bgcolor="white"
        boxShadow={1}
      >
        
        <Stack direction="row" spacing={1} sx={{ mx: 2 }}>
          {[
            "Tình trạng sản phẩm",
            "Giá",
            "Hãng",
            "Kết nối",
            "LED",
            "Loại sản phẩm",
            "Màu sắc",
            "Pin",
          ].map((label) => (
            <Select
              key={label}
              defaultValue=""
              displayEmpty
              sx={{
                minWidth: 120, // Giảm chiều rộng
                height: 32, // Giảm chiều cao
                fontSize: 12, // Nhỏ chữ
                padding: "4px 8px", // Giảm padding
                border: "1px solid #ccc", // Viền vừa với chữ
                borderRadius: 1,
              }}
            >
              <MenuItem value="" sx={{ fontSize: 12 }}>
                {label}
              </MenuItem>
            </Select>
          ))}
        </Stack>
        <Button
          variant="outlined"
          sx={{
            borderRadius: 2,
            ml: 2,
            height: 32, // Chiều cao nhỏ lại
            fontSize: 12, // Chữ nhỏ lại
            padding: "4px 8px", // Viền vừa với chữ
            border: "1px solid #ccc",
          }}
        >
          Xếp theo: Nổi bật
        </Button>
      </Box>
      <Box p={3}>
        <Grid container spacing={2} justifyContent="center">
          {products.map((product) => (
            <Grid item key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Footer></Footer>
    </Container>
  );
};

export default MouseAll;
