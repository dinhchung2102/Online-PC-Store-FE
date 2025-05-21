import Container from "@mui/material/Container";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import FlashSaleBanner from "./FlashSaleBanner";
import { getAllProducts } from "../services/productService";
import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Link,
  Card,
  CardMedia,
  CardContent,
  Button,
  Stack,
} from "@mui/material";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "~/components/Footer";

import Header from "~/components/Header";
import Categories from "~/components/Categories";
import { useNavigate } from "react-router";
import { formatCurrency } from "~/utils/utils";

const banners = [
  "/image/1a.png",
  "/image/1b.png",
  "/image/1c.png",
  "/image/1d.png",
  "/image/1e.png",
  "/image/1f.png",
  "/image/1g.png",
  "/image/1h.png",
];
const product1 = ["/image/4.png", "/image/5.png"];
const product2 = [];
const product3 = ["/image/1.png", "/image/2.png", "/image/3.png"];

const productsMouse = [
  {
    id: 1,
    name: "Chuột Logitech G502 X Plus",
    image: "/image/m1.png",
    price: "3.090.000đ",
    oldPrice: "3.590.000đ",
    discount: "-14%",
  },
  {
    id: 2,
    name: "Chuột không dây Rapoo M20",
    image: "/image/m2.png",
    price: "90.000đ",
    oldPrice: "150.000đ",
    discount: "-40%",
  },
  {
    id: 3,
    name: "Chuột không dây MonsGeek D1 Pink",
    image: "/image/m3.png",
    price: "120.000đ",
    oldPrice: "299.000đ",
    discount: "-60%",
  },
  {
    id: 4,
    name: "Chuột Razer DeathAdder V3",
    image: "/image/m4.png",
    price: "3.190.000đ",
    oldPrice: "3.590.000đ",
    discount: "-11%",
  },
  {
    id: 5,
    name: "Chuột Steelseries Rival 3",
    image: "/image/m5.png",
    price: "750.000đ",
    oldPrice: "990.000đ",
    discount: "-24%",
  },
  {
    id: 6,
    name: "Chuột Steelseries Rival 3",
    image: "/image/m5.png",
    price: "750.000đ",
    oldPrice: "990.000đ",
    discount: "-24%",
  },
  {
    id: 7,
    name: "Chuột Steelseries Rival 3",
    image: "/image/m5.png",
    price: "750.000đ",
    oldPrice: "990.000đ",
    discount: "-24%",
  },
];

function Home() {
  const [product, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const product = await getAllProducts();
        const data = product.data;
        console.log("Product data:", data);
        if (!data) return
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <Container maxWidth="xl"
      sx={{ bgcolor: "#f5f5f5", minHeight: "100vh", "&.MuiContainer-root": { padding: 0 },  }}
    >
      {/* Header */}
      <Header />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 1,
          flexDirection: "row",
          padding: 2,

        }}
      >
        {/* Sidebar */}
        <Categories />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            width: "50%",
            borderRadius: "10px",
            mt: -1,
          }}
        >
          <Box sx={{ width: "100%", my: 2 }}>
            <Slider
              dots
              infinite
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              autoplay
              autoplaySpeed={2000}
              arrows={false}
              sx={{ borderRadius: "10px" }}
            >
              {banners.map((banner, index) => (
                <Box
                  key={index}
                  component="img"
                  src={banner}
                  alt={`Banner ${index}`}
                  sx={{ width: "80%", borderRadius: "10px" }}
                />
              ))}
            </Slider>
          </Box>
          <Box>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
              {product1.map((product, index) => (
                <Box
                  key={index}
                  component="img"
                  src={product}
                  alt={`Product ${index}`}
                  sx={{ width: "50%", height: "250px" }}
                />
              ))}
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
              {product2.map((product, index) => (
                <Box
                  key={index}
                  component="img"
                  src={product}
                  alt={`Product ${index}`}
                  sx={{ width: "50%", height: "250px" }}
                />
              ))}
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            flexDirection: "column",
            gap: 1,
          }}
        >
          {product3.map((product, index) => (
            <Box
              key={index}
              component="img"
              src={product}
              alt={`Product ${index}`}
              sx={{ width: "100%" }}
            />
          ))}
        </Box>
      </Box>

      <Box>
        <FlashSaleBanner />
      </Box>

      {/* Chuột bán chạy */}
      <Box
        sx={{
          maxWidth: "100%",
          backgroundColor: "rgb(255, 255, 255)",
          borderRadius: "10px",
          mt: 2,
          p: 2,
        }}
      >
        <Box sx={{ mb: 2 }}>
          <Stack direction="row" alignItems="center" spacing={2} sx={{}}>
            {/* Tiêu đề màu đỏ */}
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Chuột bán chạy
            </Typography>

            {/* Icon giao hàng + text */}
            <Stack direction="row" alignItems="center" spacing={1}>
              <LocalShippingIcon sx={{ color: "red" }} />
              <Typography variant="body1">Giao hàng toàn quốc</Typography>
            </Stack>

            {/* Đẩy phần danh sách brand + link sang phải */}
            <Box sx={{ flexGrow: 1 }} />

            {/* Danh sách brand */}
            <Stack direction="row" alignItems="center" spacing={2}>
              <Typography>
                <Button>Logitech</Button>
              </Typography>
              <Typography>
                <Button>Razer</Button>
              </Typography>
              <Typography>
                <Button>Asus</Button>
              </Typography>
              <Typography>
                <Button>Corsair</Button>
              </Typography>
              <Typography>
                <Button>Dare-U</Button>
              </Typography>
              <Typography>
                <Button>Rapoo</Button>
              </Typography>
            </Stack>

            {/* Link 'Xem tất cả' */}
            <Link
              href="#"
              underline="none"
              sx={{ color: "blue", fontWeight: "bold" }}
            >
              Xem tất cả
            </Link>
          </Stack>
        </Box>
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          navigation={true}
          modules={[Navigation]}
          height={400}
        >
          {productsMouse.map((product) => (
            <SwiperSlide key={product.id}>
              <Card sx={{ textAlign: "center", boxShadow: 5, borderRadius: 0 }}>
                <CardMedia
                  component="img"
                  height="250px"
                  image={product.image}
                  alt={product.name}
                  sx={{ objectFit: "contain" }}
                />
                <CardContent>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {product.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ textDecoration: "line-through" }}
                  >
                    {product.oldPrice}
                  </Typography>
                  <Typography variant="h6" color="primary" fontWeight="bold">
                    {product.price}{" "}
                    <span style={{ color: "red" }}>{product.discount}</span>
                  </Typography>
                  <Button variant="contained" color="primary" sx={{ mt: 1 }}>
                    Mua ngay
                  </Button>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      {/* Laptop bán chạy */}

      <Box
        sx={{
          maxWidth: "100%",
          backgroundColor: "rgb(255, 255, 255)",
          borderRadius: "10px",
          mt: 2,
          p: 2,
        }}
      >
        {/* Thanh tiêu đề */}
        <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Laptop gaming bán chạy
          </Typography>

          <Stack direction="row" alignItems="center" spacing={1}>
            <LocalShippingIcon sx={{ color: "red" }} />
            <Typography variant="body1">Miễn phí giao hàng</Typography>
          </Stack>

          {/* Đẩy phần brand và link sang phải */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Danh sách thương hiệu */}
          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography>
              <Button>ASUS</Button>
            </Typography>
            <Typography>
              <Button>ACER</Button>
            </Typography>
            <Typography>
              <Button>MSI</Button>
            </Typography>
            <Typography>
              <Button>LENOVO</Button>
            </Typography>
            <Typography>
              <Button>GIGABYTE</Button>
            </Typography>
            <Typography>
              <Button>DELL</Button>
            </Typography>
          </Stack>

          {/* Link 'Xem tất cả' */}
          <Link
            href="#"
            underline="none"
            sx={{ color: "blue", fontWeight: "bold" }}
          >
            Xem tất cả
          </Link>
        </Stack>

        {/* Slider hiển thị laptop */}
        <Swiper
          spaceBetween={20}
          navigation
          modules={[Navigation]}
          style={{ zIndex: 1 }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            600: {
              slidesPerView: 2,
            },
            960: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
        >
          {product.map((prod) => (
            <SwiperSlide key={prod._id}>
              <Card
                sx={{
                  textAlign: "center",
                  boxShadow: 5,
                  borderRadius: 0,
                  height: 420,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={prod.image}
                  alt={prod.name}
                  sx={{ objectFit: "contain" }}
                />
                <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                  <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    sx={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2, // Hiển thị tối đa 2 dòng
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      height: "48px", // phù hợp với 2 dòng text

                    }}
                  >
                    {prod.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "gray",
                      mb: 1,
                      display: "-webkit-box",
                      WebkitLineClamp: 2, // Hiển thị tối đa 2 dòng
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      height: "40px", // phù hợp với 2 dòng text
                    }}
                  >
                    {prod.description}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ textDecoration: "line-through", height: "20px" }}
                  >
                    {prod.promotion && formatCurrency(prod.price * (prod.promotion.discountValue / 100))}
                  </Typography>
                  <Typography variant="h6" color="primary" fontWeight="bold">
                    {formatCurrency(prod.price)}
                    <span
                      style={{
                        color: "red",
                        fontSize: "0.8rem",
                        marginLeft: 8,
                      }}
                    >
                      {prod.discount}
                    </span>
                  </Typography>

                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ mt: "auto", width: "100%" }}
                    onClick={() => navigate(`/detailProduct/${prod._id}`, { state: { product: prod } })}
                  >
                    Mua ngay
                  </Button>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {/* Footer */}
      <Footer />
    </Container>
  );
}

/* Component nút điều hướng */

export default Home;
