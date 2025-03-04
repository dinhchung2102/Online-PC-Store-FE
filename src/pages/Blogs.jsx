import * as React from "react";
import { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Paper,
  Button,
  IconButton,
  Grid,
  Divider,
  Stack,
  Link,
  Chip,
} from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import imgProduct from "../assets/images/expertbook-p1-p1403cva-i5se16-50w__8__f9120f92bbcf40409391d8b907b7c630_0b12de755584415689fecd42c6a95e6a.webp"; // Ví dụ ảnh cho bài viết

const blogPosts = [
  {
    title: "Tổng hợp 5 cách tải video Threads về điện thoại và máy tính",
    description:
      "Mạng xã hội mới nổi của Meta là Threads đang ngày càng thu hút đông đảo người dùng bởi nội dung video ngắn gọn, sáng tạo. Tuy nhiên, ứng dụng này lại không hỗ trợ tính năng tải video trực tiếp, gây không ít bất tiện cho người dùng.",
    imgUrl: imgProduct,
    link: "#",
  },
  {
    title: "Mẹo tải video Instagram về điện thoại, máy tính siêu tiện lợi",
    description:
      "Instagram đã trở thành một phần quan trọng trong cuộc sống hàng ngày, và nhiều người muốn lưu lại những khoảnh khắc tuyệt vời trên ứng dụng này. Hãy cùng khám phá cách tải video Instagram đơn giản và nhanh chóng.",
    imgUrl: imgProduct,
    link: "#",
  },
  {
    title: "Cách tải video youtube miễn phí với Youtube Downloader HD",
    description:
      "Tải video từ YouTube đã trở nên dễ dàng hơn bao giờ hết với các công cụ như Youtube Downloader HD. Tìm hiểu cách tải video miễn phí và nhanh chóng từ YouTube trên máy tính và điện thoại.",
    imgUrl: imgProduct,
    link: "#",
  },
  // Add more blog posts as necessary
];

function Blogs() {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
      }}
    >
      <Box width="100%">
        <Header />
      </Box>

      <Box
        sx={{
          width: "80%",
          marginTop: 5,
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 3 }}>
          Tin Công Nghệ Mới
        </Typography>
        <Grid container spacing={3}>
          {blogPosts.map((post, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                sx={{
                  padding: 2,
                  boxShadow: 3,
                  backgroundColor: "#fff",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
                  <img
                    src={post.imgUrl}
                    alt={post.title}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: 8,
                    }}
                  />
                  <Typography variant="h6" sx={{ fontWeight: "bold", marginTop: 2 }}>
                    {post.title}
                  </Typography>
                  <Typography variant="body2" sx={{ marginTop: 1, color: "gray" }}>
                    {post.description}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ marginTop: 2 }}
                    component={Link}
                    href={post.link}
                  >
                    Đọc thêm
                  </Button>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box width="100%">
        <Footer />
      </Box>
    </Container>
  );
}

export default Blogs;
