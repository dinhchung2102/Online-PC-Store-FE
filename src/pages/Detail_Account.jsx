import Footer from "~/components/Footer";
import Header from "~/components/Header";
import React from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  AccountCircle,
  LocationOn,
  ExitToApp,
  ShoppingBag,
} from "@mui/icons-material";

const UserProfile = () => {
    const [selectedScreen, setSelectedScreen] = React.useState("account"); 
  return (
    
    <Container
      maxWidth={false}
      sx={{ bgcolor: "#f5f5f5", minHeight: "100vh", width: "1442px" }}
    >
      {/* Header */}
      <Header />

      <Grid container spacing={3}>
        {/* Sidebar */}
        <Grid item xs={12} md={4}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            p={3}
            mt={3}
            bgcolor="#fff"
            borderRadius={5}
            boxShadow={2}
            sx={{ height: "93.5%" }}
          >
            <Avatar sx={{ width: 80, height: 80 }} />
            <Typography variant="h6" mt={2}>
              Anh Lợi
            </Typography>
            <Typography variant="h6" color="gray">
              0898669176
            </Typography>
            <List>
              <SidebarItem
                icon={
                  <AccountCircle
                    color={selectedScreen === "account" ? "error" : "inherit"}
                  />
                }
                text="Thông tin tài khoản"
                active={selectedScreen === "account"}
                onClick={() => setSelectedScreen("account")}
              />
              <SidebarItem
                icon={
                  <LocationOn
                    color={selectedScreen === "address" ? "error" : "inherit"}
                  />
                }
                text="Sổ địa chỉ"
                active={selectedScreen === "address"}
                onClick={() => setSelectedScreen("address")}
              />
              <SidebarItem
                icon={
                  <ShoppingBag
                    color={selectedScreen === "orders" ? "error" : "inherit"}
                  />
                }
                text="Quản lý đơn hàng"
                active={selectedScreen === "orders"}
                onClick={() => setSelectedScreen("orders")}
              />
              <SidebarItem
                icon={<ExitToApp />}
                text="Đăng xuất"
                onClick={() => alert("Đăng xuất thành công!")}
              />
            </List>
          </Box>
        </Grid>

        {/* Main Content */}
        <Grid item xs={12} md={8}>
          <Box p={3} borderRadius={2} boxShadow={2} mt={3} bgcolor="#fff">
            <Typography variant="h5" mb={2}>
              Thông tin tài khoản
            </Typography>

            {selectedScreen === "account" && (
              <>
                <Box display="flex" alignItems="center" mb={2}>
                  <Typography sx={{ width: "20%" }}>Họ tên</Typography>
                  <TextField
                    fullWidth
                    variant="outlined"
                    defaultValue="Anh Lợi"
                    sx={{ width: 300 }}
                    size="small"
                  />
                </Box>

                <Box display="flex" alignItems="center" mb={2}>
                  <Typography sx={{ width: "20%" }}>Giới tính</Typography>
                  <RadioGroup row defaultValue="male">
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Nam"
                    />
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Nữ"
                    />
                  </RadioGroup>
                </Box>

                <Box display="flex" alignItems="center" mb={2}>
                  <Typography sx={{ width: "20%" }}>Số điện thoại</Typography>
                  <TextField
                    fullWidth
                    variant="outlined"
                    defaultValue="********76"
                    sx={{ width: 300 }}
                    size="small"
                  />
                </Box>

                <Box display="flex" alignItems="center" mb={2}>
                  <Typography sx={{ width: "20%" }}>Email</Typography>
                  <TextField
                    fullWidth
                    variant="outlined"
                    defaultValue="lo******@gmail.com"
                    sx={{ width: 300 }}
                    size="small"
                  />
                  <Button variant="text" sx={{ ml: 2, textTransform: "none" }}>
                    Thay đổi
                  </Button>
                </Box>
                <Box display="flex" alignItems="center" mb={2}>
                  <Typography sx={{ width: "20%" }}>Ngày sinh</Typography>
                  <Box display="flex" gap={2}>
                    <FormControl sx={{ minWidth: 80 }}>
                      <Select
                        defaultValue={"01"}
                        sx={{ fontSize: 14, padding: "2px", height: 45 }}
                      >
                        {[...Array(31).keys()].map((i) => (
                          <MenuItem
                            key={i}
                            value={(i + 1).toString().padStart(2, "0")}
                          >
                            {i + 1}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>

                    <FormControl sx={{ minWidth: 100 }}>
                      <Select
                        defaultValue={"11"}
                        sx={{ fontSize: 14, padding: "2px", height: 45 }}
                      >
                        {[...Array(12).keys()].map((i) => (
                          <MenuItem
                            key={i}
                            value={(i + 1).toString().padStart(2, "0")}
                          >
                            {i + 1}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>

                    <FormControl sx={{ minWidth: 80 }}>
                      <Select
                        defaultValue={"2025"}
                        sx={{ fontSize: 14, padding: "2px", height: 45 }}
                      >
                        {[...Array(100).keys()].map((i) => (
                          <MenuItem key={i} value={(2025 - i).toString()}>
                            {2025 - i}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                </Box>

                <Button
                  variant="contained"
                  color="error"
                  sx={{ mt: 3, fontWeight: "bold", fontSize: "16px", ml: 22 }}
                >
                  LƯU THAY ĐỔI
                </Button>
              </>
            )}

            {selectedScreen === "address" && (
            <>
              <Button variant="contained" color="primary" sx={{ mb: 2 }}>
                + Thêm địa chỉ mới
              </Button>
              <Box p={2} border="1px solid #ddd" borderRadius={1}>
                <Button variant="outlined" color="error" size="small" sx={{ mb: 1 }}>
                  Mặc định
                </Button>
                <Typography fontWeight="bold">Anh Lợi | 0898669176</Typography>
                <Typography>
                  Huỳnh Khương An, Phường 05, Quận Gò Vấp, Hồ Chí Minh, Vietnam
                </Typography>
                <Typography color="primary" sx={{ cursor: "pointer", mt: 1 }}>
                  Cập nhật
                </Typography>
              </Box>
            </>
          )}
          {selectedScreen === "orders" && (
            <>
              <Typography variant="h5">Quản lý đơn hàng</Typography>
              {/* Nội dung quản lý đơn hàng */}
            </>
          )}
          </Box>
        </Grid>
      </Grid>

      {/* Footer */}
      <Footer />
    </Container>
  );
};

const SidebarItem = ({ icon, text, active, onClick }) => (
  <ListItem
    button
    onClick={onClick}
    sx={{ backgroundColor: active ? "#f5f5f5" : "transparent" }}
  >
    <ListItemIcon>{icon}</ListItemIcon>
    <ListItemText primary={text} />
  </ListItem>
);

export default UserProfile;
