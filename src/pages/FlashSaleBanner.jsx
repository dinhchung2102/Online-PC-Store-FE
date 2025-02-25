import React, { useState, useEffect } from "react";
import { ButtonBase } from "@mui/material";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const calculateTimeLeft = () => {
  const now = new Date();
  const startTime = new Date();
  startTime.setHours(10, 0, 0, 0);
  const targetTime = new Date();
  targetTime.setHours(24, 0, 0, 0);

  if (now < startTime) {
    return null;
  }

  const difference = targetTime - now;
  return {
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

const FlashSaleBanner = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) return null;

  const renderCountdown = (time) => {
    return [time.hours, time.minutes, time.seconds].map((value, index) => (
      <React.Fragment key={index}>
        <Typography
          sx={{
            background: "#000",
            color: "#fff",
            padding: "8px 12px",
            borderRadius: "8px",
            fontWeight: "bold",
            minWidth: "40px",
            textAlign: "center",
            fontSize: "18px",
          }}
        >
          {String(value).padStart(2, "0")}
        </Typography>
        {index < 2 && (
          <Typography sx={{ fontWeight: "bold", fontSize: "22px" }}>
            :
          </Typography>
        )}
      </React.Fragment>
    ));
  };

  const products = [
    {
      id: 1,
      image: "/image/may1.png",
      name: "Màn hình ASUS TUF GA",
      oldPrice: "5.390.000đ",
      price: "4.890.000đ",
      discount: "-9%",
      sold: 7,
    },
    {
      id: 2,
      image: "/image/may2.png",
      name: "Laptop ASUS ROG Zephy",
      oldPrice: "32.990.000đ",
      price: "29.990.000đ",
      discount: "-9%",
      sold: 12,
    },
    {
      id: 3,
      image: "/image/may3.png",
      name: "Chuột Logitech G502 HE",
      oldPrice: "1.590.000đ",
      price: "1.290.000đ",
      discount: "-19%",
      sold: 30,
    },
    {
      id: 4,
      image: "/image/may4.png",
      name: "Bàn phím cơ Keychron K6",
      oldPrice: "2.290.000đ",
      price: "1.990.000đ",
      discount: "-13%",
      sold: 15,
    },
    {
      id: 5,
      image: "/image/may5.png",
      name: "Bàn phím cơ Keychron K6",
      oldPrice: "2.290.000đ",
      price: "1.990.000đ",
      discount: "-13%",
      sold: 15,
    },
  ];

  return (
    <Box
      sx={{
        background: "linear-gradient(to right, #00c6ff, #0072ff)",
        borderRadius: "10px",
        
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "linear-gradient(to right, #00c6ff, #0072ff)",
          padding: "10px 20px",
          borderRadius: "10px",
          marginLeft:"35px"
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <Box
            sx={{
              display: "flex",
              gap: "5px",
              alignItems: "center",
              background: "#fff",
              padding: "5px 10px",
              borderRadius: "10px",
            }}
          >
            {renderCountdown(timeLeft)}
          </Box>
          <Typography
            sx={{
              fontWeight: "bold",
              color: "yellow",
              fontSize: "20px",
              fontStyle: "italic",
              display: "flex",
              alignItems: "center",
            }}
          >
            ⚡ FLASH SALE 10H MỖI NGÀY
          </Typography>
        </Box>
        <Button
          variant="contained"
          sx={{
            background: "white",
            color: "black",
            fontWeight: "bold",
            borderRadius: "8px",
            marginRight: "37px",
          }}
        >
          Flash sale
        </Button>
      </Box>
      <Box sx={{ padding: "20px" }}>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={4}
          loop={true}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ButtonBase
                onClick={() => console.log(`Clicked on ${product.name}`)}
              >
                <Card sx={{ width: "250px", boxShadow: 3, padding: "10px",marginLeft:"35px" }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={product.image}
                    alt={product.name}
                  />
                  <CardContent sx={{ textAlign: "center" }}>
                    <Typography sx={{ fontWeight: "bold", fontSize: "16px" }}>
                      {product.name}
                    </Typography>
                    <Typography
                      sx={{
                        textDecoration: "line-through",
                        color: "gray",
                        fontSize: "14px",
                      }}
                    >
                      {product.oldPrice}
                    </Typography>
                    <Typography
                      sx={{
                        color: "red",
                        fontSize: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      {product.price}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        color: "white",
                        fontWeight: "bold",
                        background: "#ff6666",
                        padding: "4px 8px",
                        borderRadius: "8px",
                        display: "inline-block",
                        marginTop: "5px",
                      }}
                    >
                      🔥 Đã bán: {product.sold}
                    </Typography>
                  </CardContent>
                </Card>
              </ButtonBase>
            </SwiperSlide>
          ))}
        </Swiper>
        <Box sx={{ textAlign: "center", marginTop: "20px" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#2196F3",
              color: "#fff",
              fontWeight: "bold",
              fontSize: "16px",
              textTransform: "none",
              borderRadius: "10px",
              padding: "8px 20px",
              textAlign: "center",
              "&:hover": {
                backgroundColor: "#1E88E5",
              },
            }}
          >
            Xem thêm khuyến mãi
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default FlashSaleBanner;
