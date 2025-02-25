import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Avatar,
  Divider,
  Modal,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductList_Modal from "../components/Modals/ProductList_Modal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/autoplay";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import banner1 from "../assets/images/pc-10-trieu-desktop-15-11.webp";
import banner2 from "../assets/images/pc-15-trieu-desktop-15-11.webp";
import Grid from "@mui/material/Grid";
import imgPhanVan from "../assets/images/Gemini_Generated_Image_h0akdah0akdah0ak1.png";
import MessageIcon from "@mui/icons-material/Message";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { PhoneInTalk, Directions } from "@mui/icons-material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import imgCPU from "../assets/images/cpu-new.png";
import imgBanPhim from "../assets/images/ban-phim-new.png";
import imgChuot from "../assets/images/chuot-new.png";
import imgMainBoard from "../assets/images/mainboard-new.png";
import imgManHinh from "../assets/images/man-hinh-new.png";
import imgNguon from "../assets/images/nguon-new.png";
import imgHHD from "../assets/images/o-cung-hhd-new.png";
import imgSSD from "../assets/images/o-cung-ssd-new.png";
import imgRAM from "../assets/images/ram-new.png";
import imgTaiNghe from "../assets/images/tai-nghe-new.png";
import imgTanNhiet from "../assets/images/tan-nhiet-cpu-neww.png";
import imgvga from "../assets/images/vga-new.png";
import imgCase from "../assets/images/vo-case-new.png";
import imgCuaHang from "../assets/images/Cua_hang.webp";
import { Link } from "react-router";

function Configuration_Design() {
  const banners = [banner1, banner2];
  const [open, setOpen] = React.useState(false);

  const [title, setTitle] = useState("CPU");

  const handleOpen = (newTitle) => {
    setTitle(newTitle);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const renderComponentCard = (imageSrc, title, onClick) => (
    <ListItem
      sx={{
        display: "flex",
        alignItems: "center",
        padding: 3,
        backgroundColor: "#f0f0f0",
        marginBottom: "8px",
        borderRadius: 3,
      }}
    >
      <img
        src={imageSrc}
        alt={title}
        style={{ height: "60px", marginRight: "16px" }}
      />
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h6">{title}</Typography>
      </Box>
      <Button
        variant="outlined"
        sx={{
          textTransform: "none",
          backgroundColor: "#E11B1D",
          width: "15vh",
          color: "white",
          "&:hover": {
            color: "#E11B1D",
            backgroundColor: "#f0f0f0",
          },
        }}
        onClick={onClick}
      >
        Chọn
      </Button>
    </ListItem>
  );

  const StoreItem = ({
    imageUrl,
    address,
    hours,
    hotline,
    mapLink,
    phoneLink,
  }) => (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: 292.5,
        marginRight: 1,
        backgroundColor: "#fff",
        borderRadius: 2,
        boxShadow: 1,
        padding: 1,
        border: 1,
        borderColor: "rgba(145, 158, 171, 0.24)",
      }}
    >
      <Link href={mapLink} target="_blank" rel="noopener noreferrer">
        <img
          src={imageUrl}
          alt={address}
          width="100%"
          style={{ borderRadius: "8px", objectFit: "cover" }}
        />
      </Link>
      <Box sx={{ paddingTop: 1, textAlign: "start" }}>
        <Typography variant="h6" color="text.primary" noWrap>
          {address}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Mở cửa: {hours}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Hotline: {hotline}
        </Typography>
      </Box>

      <Divider sx={{ marginY: 1 }} />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "5px 0px",
        }}
      >
        <Button
          href={phoneLink}
          startIcon={<PhoneInTalk />}
          variant="contained"
          sx={{
            width: "45%",
            textTransform: "none",
            fontSize: "13px",
            backgroundColor: "white",
            color: "#DF062D",
            border: 1,
            borderColor: "#DF062D",
            "&:hover": { backgroundColor: "rgba(224, 94, 94, 0.5)" },
          }}
        >
          Liên hệ
        </Button>
        <Button
          href={mapLink}
          target="_blank"
          rel="noopener noreferrer"
          startIcon={<Directions />}
          variant="contained"
          sx={{
            width: "45%",
            textTransform: "none",
            fontSize: "13px",
            backgroundColor: "white",
            color: "#DF062D",
            border: 1,
            borderColor: "#DF062D",
            "&:hover": { backgroundColor: "rgba(224, 94, 94, 0.5)" },
          }}
        >
          Chỉ đường
        </Button>
      </Box>
    </Box>
  );

  const StoreList = () => {
    const swiperRef = useRef(null);
    const stores = [
      {
        address: "190B Hoàng Văn Thụ, P4, Quận Tân Bình",
        hours: "9h-22h (tất cả các ngày trong tuần)",
        hotline: "18001770",
        mapLink: "https://g.page/cps377hcm?share",
        phoneLink: "tel:18001770",
      },
      {
        address: "377-379 Điện Biên Phủ, P. 25, Q. Bình Thạnh",
        hours: "8h-22h (tất cả các ngày trong tuần)",
        hotline: "(028) 7107 7377",
        mapLink: "https://g.page/cps377hcm?share",
        phoneLink: "tel:02871077377",
      },
      {
        address: "133 Thái Hà, P. Trung Liệt, Q, Đống Đa",
        hours: "8h-22h (tất cả các ngày trong tuần)",
        hotline: "(024) 7100 3133",
        mapLink: "https://g.page/r/CZcTd_IfEBt9EBA",
        phoneLink: "tel:02471003133",
      },
      {
        address: "4A Nguyễn Văn Cừ, Q.1, TP.HCM",
        hours: "9h-22h (tất cả các ngày trong tuần)",
        hotline: "(028) 7100 3134",
        mapLink: "https://g.page/cps377hcm?share",
        phoneLink: "tel:02871003134",
      },
      {
        address: "123 Lê Lợi, Q.1, TP.HCM",
        hours: "9h-22h (tất cả các ngày trong tuần)",
        hotline: "(028) 7100 3135",
        mapLink: "https://g.page/cps377hcm?share",
        phoneLink: "tel:02871003135",
      },
      {
        address: "456 Nguyễn Trãi, Q.5, TP.HCM",
        hours: "9h-22h (tất cả các ngày trong tuần)",
        hotline: "(028) 7100 3136",
        mapLink: "https://g.page/cps377hcm?share",
        phoneLink: "tel:02871003136",
      },
    ];

    useEffect(() => {
      const swiperInstance = document.querySelector(".swiper").swiper;

      return () => {
        swiperInstance.off("slideNextTransitionStart");
        swiperInstance.off("slidePrevTransitionStart");
        swiperInstance.off("slideChange");
      };
    }, []);

    return (
      <Swiper
        ref={swiperRef}
        spaceBetween={10}
        slidesPerView={4}
        scrollbar={{ draggable: true }}
        modules={[Navigation]}
        style={{ width: "100%" }}
      >
        {stores.map((store, index) => (
          <SwiperSlide key={index}>
            <StoreItem
              imageUrl={imgCuaHang}
              address={store.address}
              hours={store.hours}
              hotline={store.hotline}
              mapLink={store.mapLink}
              phoneLink={store.phoneLink}
            />
          </SwiperSlide>
        ))}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "0px",
            transform: "translateY(-50%)",
            zIndex: 1000,
          }}
        >
          <Button
            onClick={() => swiperRef.current.swiper.slidePrev()}
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              color: "#DF062D",
              padding: "1px",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "rgba(224, 94, 94, 0.2)",
              },
            }}
          >
            <NavigateBeforeIcon sx={{ fontSize: "40px" }} />
          </Button>
        </Box>

        <Box
          sx={{
            position: "absolute",
            top: "50%",
            right: "20px",
            transform: "translateY(-50%)",
            zIndex: 1000,
          }}
        >
          <Button
            onClick={() => swiperRef.current.swiper.slideNext()}
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              color: "#DF062D",
              padding: "1px",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "rgba(224, 94, 94, 0.2)",
              },
            }}
          >
            <NavigateNextIcon sx={{ fontSize: "40px" }} />
          </Button>
        </Box>
      </Swiper>
    );
  };
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "100%" }}>
        <Header />
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          position: "relative",
        }}
      >
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          style={{
            position: "relative",
            paddingBottom: "30px",
            marginBottom: "50px",
          }}
        >
          {banners.map((image, index) => (
            <SwiperSlide key={index}>
              <Box sx={{ height: "100%" }}>
                <img
                  src={image}
                  alt={`Banner ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            "& .swiper-pagination-bullet": {
              backgroundColor: "#ffffff",
              opacity: 1,
            },
            "& .swiper-pagination-bullet-active": {
              backgroundColor: "#007bff",
            },
          }}
        />
      </Box>
      <Box
        sx={{
          textAlign: "center",
          padding: 4,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "90%",
          height: "auto",
          minHeight: "200px",
        }}
      >
        <Grid container spacing={3} sx={{ width: "100%" }}>
          <Grid
            item
            xs={8}
            sx={{
              height: "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <Typography variant="h4" gutterBottom>
              Gợi ý cấu hình PC theo nhu cầu
            </Typography>

            <Grid container spacing={2} sx={{ width: "100%" }}>
              <Grid item xs={3}>
                <Box
                  onClick={() => handleOpen("PC Gaming")}
                  sx={{ position: "relative" }}
                >
                  <img
                    src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:100/q:90/plain/https://dashboard.cellphones.com.vn/storage/1.png"
                    alt="PC Gaming"
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      backgroundColor: "rgba(0,0,0,0.5)",
                      color: "#fff",
                      padding: 1,
                      textAlign: "center",
                      borderRadius: "5px",
                    }}
                  >
                    <Typography variant="body2">PC Gaming</Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={3}>
                <Box
                  onClick={() => handleOpen("PC Đồ họa")}
                  sx={{ position: "relative" }}
                >
                  <img
                    src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:100/q:90/plain/https://dashboard.cellphones.com.vn/storage/2.png"
                    alt="PC Đồ họa"
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      backgroundColor: "rgba(0,0,0,0.5)",
                      color: "#fff",
                      padding: 1,
                      textAlign: "center",
                      borderRadius: "5px",
                    }}
                  >
                    <Typography variant="body2">PC Đồ họa</Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={3}>
                <Box
                  onClick={() => handleOpen("PC Văn phòng - Học tập")}
                  sx={{ position: "relative" }}
                >
                  <img
                    src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:100/q:90/plain/https://dashboard.cellphones.com.vn/storage/3.png"
                    alt="PC Văn phòng - Học tập"
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      backgroundColor: "rgba(0,0,0,0.5)",
                      color: "#fff",
                      padding: 1,
                      textAlign: "center",
                      borderRadius: "5px",
                    }}
                  >
                    <Typography variant="body2">
                      PC Văn phòng - Học tập
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              height: "auto",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: 2,
            }}
          >
            <Typography variant="h6" color={"grey"} sx={{ fontWeight: "bold" }}>
              Bạn phân vân khi chọn cấu hình?
            </Typography>
            <Box sx={{ height: "68%" }}>
              <img
                src={imgPhanVan}
                alt="Gemini Image"
                style={{
                  width: "150px",
                  height: "120px",
                }}
              />
            </Box>
            <Button
              variant="outlined"
              sx={{
                width: "70%",
                borderRadius: 3,
                textTransform: "none",
                border: 1.2,
              }}
            >
              <MessageIcon sx={{ color: "red", marginRight: 1 }} />
              <Typography
                variant="body1"
                color={"grey"}
                sx={{ fontWeight: "bold" }}
              >
                Liên hệ với chuyên gia
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          textAlign: "center",
          padding: 4,
          justifyContent: "center",
          alignItems: "center",
          width: "90%",
        }}
      >
        <Grid container spacing={3} sx={{ width: "100%" }}>
          <Grid
            item
            xs={8}
            sx={{
              height: "auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              paddingLeft: 2,
              backgroundColor: "pi",
            }}
          >
            <Typography variant="h4" gutterBottom>
              Tự chọn cấu hình PC cho bạn
            </Typography>

            <List sx={{ paddingRight: 5, width: "100%" }}>
              {renderComponentCard(imgCPU, "CPU", () => handleOpen("CPU"))}
              {renderComponentCard(imgvga, "Card màn hình", () =>
                handleOpen("Card màn hình")
              )}
              {renderComponentCard(imgBanPhim, "Bàn phím", () =>
                handleOpen("Bàn phím")
              )}
              {renderComponentCard(imgCase, "Case", () => handleOpen("Case"))}
              {renderComponentCard(imgChuot, "Chuột", () =>
                handleOpen("Chuột")
              )}
              {renderComponentCard(imgHHD, "Ổ cứng HHD", () =>
                handleOpen("Ổ cứng HHD")
              )}
              {renderComponentCard(imgMainBoard, "Mainboard", () =>
                handleOpen("Mainboard")
              )}
              {renderComponentCard(imgManHinh, "Màn hình", () =>
                handleOpen("Màn hình")
              )}
              {renderComponentCard(imgNguon, "Nguồn", () =>
                handleOpen("Nguồn")
              )}
              {renderComponentCard(imgRAM, "RAM", () => handleOpen("RAM"))}
              {renderComponentCard(imgSSD, "Ổ cứng SSD", () =>
                handleOpen("Ổ cứng SSD")
              )}
              {renderComponentCard(imgTaiNghe, "Tai nghe", () =>
                handleOpen("Tai nghe")
              )}
              {renderComponentCard(imgTanNhiet, "Tản nhiệt CPU", () =>
                handleOpen("Tản nhiệt CPU")
              )}
            </List>
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              backgroundColor: "white",
              height: "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              className="desktop"
              sx={{
                height: "auto",
                marginTop: "8vh",
                borderRadius: 5,
                border: 2,
                borderColor: "#DF062D",
                padding: 2,
                width: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                  padding: "16px",
                }}
              >
                <Typography variant="h6">Tạm tính:</Typography>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", color: "#DF062D" }}
                >
                  2.890.000đ
                </Typography>
              </Box>

              {/* Additional Text Price */}
              <Box sx={{ padding: "0 16px", textAlign: "right" }}>
                <Typography variant="body2" color="textSecondary">
                  Giá chưa bao gồm Ưu đãi Build PC.
                </Typography>
                <Button
                  variant="text"
                  sx={{
                    padding: "0",
                    textDecoration: "underline",
                    marginTop: "8px",
                    textTransform: "none",
                  }}
                >
                  Xem chi tiết
                </Button>
              </Box>

              {/* Cart and Buy Button Section */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  padding: "16px",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                {/* Thêm vào giỏ Button */}
                <Button
                  variant="contained"
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "white",
                    color: "#DF062D",
                    height: "6vh",
                    width: "48%",
                    "&:hover": {
                      backgroundColor: "#ffffff",
                    },
                  }}
                >
                  <span sx={{ padding: 0 }}>
                    <ShoppingCartIcon sx={{ fontSize: 30, color: "#DF062D" }} />
                  </span>
                  <Typography
                    variant="body2"
                    sx={{
                      marginLeft: "8px",
                      color: "#DF062D",
                      fontWeight: "bold",
                    }}
                  >
                    Thêm vào giỏ
                  </Typography>
                </Button>

                {/* Mua ngay Button */}
                <Button
                  variant="contained"
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#E11B1D",
                    color: "white",
                    padding: "10px 20px",
                    height: "6vh",
                    width: "48%",
                    "&:hover": {
                      backgroundColor: "#DF062D",
                    },
                  }}
                >
                  Mua ngay
                </Button>
              </Box>
            </Box>
            <Box
              id="boxWatch"
              sx={{ width: "100%", marginTop: "16px", height: "auto" }}
            >
              <Box
                className="video-guidelines"
                sx={{ height: "auto", borderRadius: 5 }}
              >
                <iframe
                  src="https://www.youtube.com/embed/Ag-uGr7LQ4k"
                  title="tutorial video"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="button__vid"
                  style={{
                    width: "100%",
                    height: "300px",
                    padding: "15px 0px",
                    backgroundColor: "black",
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          textAlign: "center",
          padding: 4,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          width: "90%",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Các cửa hàng hỗ trợ build pc
        </Typography>
        {StoreList()}
      </Box>

      <Box sx={{ width: "100%" }}>
        <Footer />
      </Box>

      <ProductList_Modal open={open} handleClose={handleClose} title={title} />
    </Container>
  );
}

export default Configuration_Design;
