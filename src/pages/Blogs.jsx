import * as React from "react";
import {
  Box,
  Grid,
  Container,
  Paper,
  Stack,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Article from "../components/Article";
import imgProduct from "../assets/images/expertbook-p1-p1403cva-i5se16-50w__8__f9120f92bbcf40409391d8b907b7c630_0b12de755584415689fecd42c6a95e6a.webp";
import imgMain from "../assets/images/cpu-new.png";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import ArrowRight from "@mui/icons-material/ArrowRight";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Home from "@mui/icons-material/Home";
import Settings from "@mui/icons-material/Settings";
import People from "@mui/icons-material/People";
import PermMedia from "@mui/icons-material/PermMedia";
import Dns from "@mui/icons-material/Dns";
import Public from "@mui/icons-material/Public";

const data = [
  { icon: <People />, label: "Authentication" },
  { icon: <Dns />, label: "Database" },
  { icon: <PermMedia />, label: "Storage" },
  { icon: <Public />, label: "Hosting" },
];

const FireNav = styled(List)({
  "& .MuiListItemButton-root": {
    paddingLeft: 24,
    paddingRight: 24,
  },
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    marginRight: 16,
  },
  "& .MuiSvgIcon-root": {
    fontSize: 20,
  },
});

const mainArticle = {
  title: "Laptop ExpertBook: Đánh giá chi tiết hiệu năng",
  summary:
    "Dòng laptop ExpertBook của ASUS mang lại hiệu năng mạnh mẽ, thiết kế tinh tế và tính năng bảo mật vượt trội.",
  image: imgMain,
  author: "Nguyễn Văn A",
};

const articles = [
  {
    title: "Laptop Gaming ROG Strix: Sự lựa chọn tuyệt vời cho game thủ",
    summary:
      "ROG Strix là một trong những dòng laptop gaming được yêu thích nhất nhờ vào hiệu năng mạnh mẽ và thiết kế độc đáo.",
    image: imgProduct,
    author: "Nguyễn Văn A",
  },
  {
    title: "MacBook Air M2: Đánh giá chi tiết về hiệu năng và thiết kế",
    summary:
      "MacBook Air M2 mang lại hiệu năng vượt trội, mỏng nhẹ và phù hợp cho những ai yêu thích sự tiện dụng.",
    image: imgProduct,
    author: "Nguyễn Văn A",
  },
  {
    title: "Surface Pro 9: Lựa chọn đa năng cho công việc và giải trí",
    summary:
      "Surface Pro 9 được thiết kế mỏng nhẹ, hiệu năng mạnh mẽ và dễ dàng biến hóa thành một chiếc laptop hoặc máy tính bảng.",
    image: imgProduct,
    author: "Nguyễn Văn A",
  },
  {
    title: "Dell XPS 13: Laptop mỏng nhẹ dành cho dân chuyên nghiệp",
    summary:
      "Dell XPS 13 mang lại sự cân bằng tuyệt vời giữa hiệu năng, thiết kế mỏng nhẹ và tính năng bảo mật.",
    image: imgProduct,
    author: "Nguyễn Văn A",
  },
  {
    title: "HP Spectre x360: Laptop 2-in-1 sang trọng",
    summary:
      "HP Spectre x360 có thiết kế sang trọng, khả năng chuyển đổi linh hoạt và hiệu năng mạnh mẽ cho nhu cầu đa dạng.",
    image: imgProduct,
    author: "Nguyễn Văn A",
  },
];

const topics = [
  { name: "Công nghệ AI", image: imgProduct },
  { name: "Gaming", image: imgProduct },
  { name: "Smartphones", image: imgProduct },
  { name: "Laptop", image: imgProduct },
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

      <Box sx={{ flexGrow: 1, width: "90%" }}>
        <Grid container spacing={2}>
          <Grid item xs={9} sx={{ marginTop: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Article {...mainArticle} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Article {...mainArticle} />
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ marginTop: 2 }}>
              {articles.slice(0, 3).map((article, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Article {...article} />
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={3}>
            <Box sx={{ display: "flex", flexDirection: "column", padding: 2 }}>
              <ThemeProvider
                theme={createTheme({
                  components: {
                    MuiListItemButton: {
                      defaultProps: {
                        disableTouchRipple: true,
                      },
                    },
                  },
                  palette: {
                    mode: "dark",
                    primary: { main: "rgb(255, 255, 255)" },
                    background: { paper: "rgb(5, 30, 52)" },
                  },
                })}
              >
                <Paper elevation={3} sx={{ maxWidth: 400 }}>
                  <FireNav component="nav" disablePadding>
                    <ListItemButton
                      component="a"
                      href="#customized-list"
                      sx={{
                        backgroundColor: "#D93031",
                        "&:hover": {
                          backgroundColor: "white",
                          border: "1px solid #D93031",
                        },
                      }}
                    >
                      <ListItemIcon sx={{ fontSize: 30, color: "white" }}>
                        🔥
                      </ListItemIcon>
                      <ListItemText
                        sx={{
                          my: 0,
                          color: "white",
                          "&:hover": {
                            color: "#D93031",
                          },
                        }}
                        primary="CHỦ ĐỀ HOT"
                        primaryTypographyProps={{
                          fontSize: 24,
                          fontWeight: "bold",
                          letterSpacing: 1.5,
                        }}
                      />
                    </ListItemButton>
                    <Divider />
                    <Box>
                      {topics.map((item) => (
                        <ListItemButton
                          key={item.name}
                          sx={{
                            py: 1,
                            minHeight: 40,
                            color: "rgb(0, 0, 0)",
                            "&:hover": {
                              backgroundColor: "white",
                              color: "#D93031",
                              border: "1px solid #D93031",
                            },
                          }}
                        >
                          <ListItemIcon sx={{ color: "inherit" }}>
                            <img
                              src={item.image}
                              alt={item.name}
                              style={{ width: 30, height: 30 }}
                            />
                          </ListItemIcon>
                          <ListItemText
                            primary={item.name}
                            primaryTypographyProps={{
                              fontSize: 20,
                              fontWeight: "medium",
                            }}
                          />
                        </ListItemButton>
                      ))}
                    </Box>
                  </FireNav>
                </Paper>
              </ThemeProvider>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", padding: 2 }}>
              <ThemeProvider
                theme={createTheme({
                  components: {
                    MuiListItemButton: {
                      defaultProps: {
                        disableTouchRipple: true,
                      },
                    },
                  },
                  palette: {
                    mode: "dark",
                    primary: { main: "rgb(255, 255, 255)" },
                    background: { paper: "rgb(5, 30, 52)" },
                  },
                })}
              >
                <Paper elevation={3} sx={{ maxWidth: 400 }}>
                  <FireNav component="nav" disablePadding>
                    <ListItemButton
                      component="a"
                      href="#customized-list"
                      sx={{
                        backgroundColor: "#D93031",
                        "&:hover": {
                          backgroundColor: "white",
                          border: "1px solid #D93031",
                        },
                      }}
                    >
                      <ListItemIcon sx={{ fontSize: 30, color: "white" }}>
                        🔥
                      </ListItemIcon>
                      <ListItemText
                        sx={{
                          my: 0,
                          color: "white",
                          "&:hover": {
                            color: "#D93031",
                          },
                        }}
                        primary="CHỦ ĐỀ GAME"
                        primaryTypographyProps={{
                          fontSize: 24,
                          fontWeight: "bold",
                          letterSpacing: 1.5,
                        }}
                      />
                    </ListItemButton>
                    <Divider />
                    <Box>
                      {topics.map((item) => (
                        <ListItemButton
                          key={item.name}
                          sx={{
                            py: 1,
                            minHeight: 40,
                            color: "rgb(0, 0, 0)",
                            "&:hover": {
                              backgroundColor: "white",
                              color: "#D93031",
                              border: "1px solid #D93031",
                            },
                          }}
                        >
                          <ListItemIcon sx={{ color: "inherit" }}>
                            <img
                              src={item.image}
                              alt={item.name}
                              style={{ width: 30, height: 30 }}
                            />
                          </ListItemIcon>
                          <ListItemText
                            primary={item.name}
                            primaryTypographyProps={{
                              fontSize: 20,
                              fontWeight: "medium",
                            }}
                          />
                        </ListItemButton>
                      ))}
                    </Box>
                  </FireNav>
                </Paper>
              </ThemeProvider>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", padding: 2 }}>
              <ThemeProvider
                theme={createTheme({
                  components: {
                    MuiListItemButton: {
                      defaultProps: {
                        disableTouchRipple: true,
                      },
                    },
                  },
                  palette: {
                    mode: "dark",
                    primary: { main: "rgb(30, 47, 148)" },
                    background: { paper: "rgb(5, 30, 52)" },
                  },
                })}
              >
                <Paper elevation={3} sx={{ maxWidth: 400 }}>
                  <FireNav component="nav" disablePadding>
                    <ListItemButton
                      component="a"
                      href="#customized-list"
                      sx={{
                        backgroundColor: "#03304B",
                        "&:hover": {
                          backgroundColor: "white",
                          border: "1px solid #03304B",
                        },
                      }}
                    >
                      <ListItemIcon sx={{ fontSize: 30, color: "white" }}>
                        🔥
                      </ListItemIcon>
                      <ListItemText
                        sx={{
                          my: 0,
                          color: "white",
                          "&:hover": {
                            color: "#03304B",
                          },
                        }}
                        primary="BÀI VIẾT MỚI"
                        primaryTypographyProps={{
                          fontSize: 24,
                          fontWeight: "bold",
                          letterSpacing: 1.5,
                        }}
                      />
                    </ListItemButton>
                    <Divider />
                    <Box>
                      {articles.map((article, index) => (
                        <ListItemButton
                          key={index}
                          sx={{
                            py: 1,
                            minHeight: 40,
                            color: "rgb(0, 0, 0)",
                            "&:hover": {
                              backgroundColor: "white",
                              color: "#D93031",
                              border: "1px solid #03304B",
                            },
                          }}
                        >
                          <ListItemIcon sx={{ color: "inherit" }}>
                            <img
                              src={article.image}
                              alt={article.title}
                              style={{ width: 40, height: 40 }}
                            />
                          </ListItemIcon>
                          <ListItemText
                            primary={article.title}
                            primaryTypographyProps={{
                              fontSize: 16,
                              fontWeight: "medium",
                            }}
                          />
                        </ListItemButton>
                      ))}
                    </Box>
                  </FireNav>
                </Paper>
              </ThemeProvider>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box width="100%">
        <Footer />
      </Box>
    </Container>
  );
}

export default Blogs;
