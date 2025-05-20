/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import NewAddressModal from "./NewAddressModal";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { getUserInfo } from "../services/userService";
import { updateUserInfo } from "../services/userService";
import {
  Avatar,
  Box,
  Button,
  Container,
  FormControl,
  Grid,
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
// import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import CardOrder from "~/components/CardOrder";
import { useSelector } from "react-redux";


function SelectActionCard({ summary, setSelectedFilterOrder }) {
  return (
    <Card sx={{ bgcolor: summary.color, }}>
      <CardActionArea
        onClick={() => {
          setSelectedFilterOrder(summary.title);
        }}
        sx={{

          height: '100%',
          '&[data-active]': {
            backgroundColor: 'action.selected',
            '&:hover': {
              backgroundColor: 'action.selectedHover',
            },
          },
        }}
      >
        <CardContent sx={{ height: '100%' }}>
          <Typography variant="subtitle1" component="div" sx={{ fontWeight: 'bold' }}>
            {summary.title}: {summary.quatity}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

const UserProfile = () => {
  // order
  const orders = useSelector((state) => state.order.orders);
  const userInfo = useSelector((state) => state.user.userInfo);
  console.log('userInfo:', userInfo);
  console.log('orders:', orders);

  const [selectedFilterOrder, setSelectedFilterOrder] = useState("Số lượng đơn hàng");

  const [orderFilter, setOrderFilter] = useState(orders)

  useEffect(() => {
    if (selectedFilterOrder === "Số lượng đơn hàng") {
      setOrderFilter(orders);
    } else if (selectedFilterOrder === "Đơn hàng đang giao") {
      setOrderFilter(orders.filter(order => order.statusOrder === "pending"));
    } else if (selectedFilterOrder === "Đơn hàng đã giao") {
      setOrderFilter(orders.filter(order => order.statusOrder === "completed"));
    } else if (selectedFilterOrder === "Đơn hàng đã hủy") {
      setOrderFilter(orders.filter(order => order.statusOrder === "cancelled"));
    }
  }, [selectedFilterOrder, orders]);


  const summaryOrder = [
    {
      id: 1,
      title: 'Số lượng đơn hàng',
      quatity: orders.length,
      color: '#88FF98'
    },
    {
      id: 2,
      title: 'Đơn hàng đang giao',
      quatity: orders.filter(order => order.statusOrder === "pending").length,
      color: '#88BCFF',

    },
    {
      id: 3,
      title: 'Đơn hàng đã giao',
      quatity: orders.filter(order => order.statusOrder === "completed").length,
      color: '#F9FF88'

    },
    {
      id: 4,
      title: 'Đơn hàng đã hủy',
      quatity: orders.filter(order => order.statusOrder === "cancelled").length,
      color: '#FF8888'

    },
  ];


  const [fullname, setfullname] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [userData, setUserData] = useState(null);
  const [addresses, setAddresses] = useState([]);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getUserInfo(); // Gọi API để lấy thông tin người dùng
        setUserData(data); // Lưu dữ liệu vào state
        console.log("User data:", data); // In ra dữ liệu để kiểm tra
        if (data.address && Array.isArray(data.address)) {
          setAddresses(data.address);
          console.log("Addresses:", data.address); // In ra địa chỉ để kiểm tra
        }
      } catch (error) {
        console.error("Lỗi khi lấy thông tin người dùng:", error.message);
      }
    };

    fetchUserData();
  }, []);

  const handleNameChange = (event) => {
    setfullname(event.target.value);
  };

  const handlephoneChange = (event) => {
    setphone(event.target.value);
  };
  const handleemailChange = (event) => {
    setemail(event.target.value);
  };
  useEffect(() => {
    if (userData) {
      if (userData.name) setfullname(userData.name);
      if (userData.phone) setphone(userData.phone);
      if (userData.email) setemail(userData.email);
    }
  }, [userData]);
  const handleSaveChanges = async () => {
    try {
      const updatedUser = {
        name: fullname,
        phone,
        email,
      };
      await updateUserInfo(updatedUser); // gọi API của bạn
      alert("Cập nhật thành công!");
    } catch (err) {
      alert("Cập nhật thất bại!");
    }
  };

  const [selectedScreen, setSelectedScreen] = React.useState("account");
  const [open, setOpen] = useState(false);
  const handleDeleteAddress = async (id) => {
    try {
      // Lọc ra các địa chỉ còn lại (không bao gồm địa chỉ cần xóa)
      const updatedAddresses = addresses.filter((addr) => addr._id !== id);

      // Cập nhật lại danh sách địa chỉ trong state
      setAddresses(updatedAddresses);

      // Gọi API cập nhật lại danh sách địa chỉ
      await updateUserInfo({ address: updatedAddresses });

      alert("Xóa địa chỉ thành công!");
    } catch (err) {
      alert("Lỗi khi xóa địa chỉ!");
    }
  };
  const handleAddAddress = (newAddress) => {
    setAddresses([...addresses, { id: addresses.length + 1, ...newAddress }]);
    setOpen(false); // Đóng modal sau khi thêm
  };
  return (
    <Container
      maxWidth={true}
      sx={{ bgcolor: "#f5f5f5", minHeight: "100vh", "&.MuiContainer-root": { padding: 0 } }}
    >
      {/* Header */}
      <Header />

      <Grid container spacing={2} sx={{ padding: 2 }}>
        {/* Sidebar */}
        <Grid item xs={12} md={3}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            p={3}
            bgcolor="#fff"
            borderRadius={2}
            boxShadow={2}
            sx={{ height: "93.5%" }}
          >
            <Avatar sx={{ width: 80, height: 80 }} />
            <Typography variant="h6" mt={2}  >
              {userData ? userData.fullname : "Đang tải..."}{" "}
              {/* Kiểm tra userData trước khi truy cập */}
            </Typography>
            <Typography variant="h6" color="gray">
              {userData ? userData.phone : "Đang tải..."}
            </Typography>
            <List sx={{ '&:hover': { cursor: "pointer" } }}>
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
        <Grid item xs={12} md={9}>
          <Box p={3} borderRadius={2} boxShadow={2} bgcolor="#fff">
            {selectedScreen === "account" && (
              <>
                <Typography variant="h5" mb={2}>
                  Thông tin tài khoản
                </Typography>
                <Box display="flex" alignItems="center" mb={2}>
                  <Typography sx={{ width: "20%" }}>Họ tên</Typography>
                  <TextField
                    fullWidth
                    variant="outlined"
                    value={fullname}
                    onChange={handleNameChange}
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
                    value={phone}
                    onChange={handlephoneChange}
                    sx={{ width: 300 }}
                    size="small"
                  />
                </Box>

                <Box display="flex" alignItems="center" mb={2}>
                  <Typography sx={{ width: "20%" }}>Email</Typography>
                  <TextField
                    fullWidth
                    value={email}
                    onChange={handleemailChange}
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
                        defaultValue={"05"}
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
                        defaultValue={"02"}
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
                        defaultValue={"2003"}
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
                  onClick={handleSaveChanges}
                >
                  LƯU THAY ĐỔI
                </Button>
              </>
            )}

            {selectedScreen === "address" && (
              <>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="h5" mb={2}>
                    Thông tin tài khoản
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ mb: 2 }}
                    onClick={() => setOpen(true)}
                  >
                    + Thêm địa chỉ mới
                  </Button>
                </Box>
                {addresses.map((addr, index) => (
                  <Box
                    key={addr._id} // Dùng _id làm key để tránh trùng
                    p={2}
                    border="1px solid #ddd"
                    borderRadius={1}
                    mb={1}
                  >
                    {addr.default && (
                      <Button
                        variant="outlined"
                        color="error"
                        size="small"
                        sx={{ mb: 1 }}
                      >
                        Mặc định
                      </Button>
                    )}
                    <Typography fontWeight="bold">{fullname} | {phone}</Typography>

                    <Typography fontWeight="bold">
                      {`Địa chỉ ${index + 1}: ${addr.ward}, ${addr.district}, ${addr.city}, ${addr.country}`}
                    </Typography>
                    <Box sx={{ display: "flex" }}>
                      <Typography
                        color="primary"
                        sx={{ cursor: "pointer", mt: 1 }}
                      >
                        Cập nhật
                      </Typography>
                      <Typography
                        color="primary"
                        sx={{ cursor: "pointer", mt: 1, ml: 2 }}
                        onClick={() => handleDeleteAddress(addr._id)} // Đảm bảo dùng _id để xóa đúng address
                      >
                        Xóa
                      </Typography>
                    </Box>
                  </Box>
                ))}
                <NewAddressModal
                  open={open}
                  handleClose={() => setOpen(false)}
                  onAdd={handleAddAddress}
                />
              </>
            )}
            {selectedScreen === "orders" && (
              <>
                <Typography variant="h5" mb={2}>
                  Quản lí đơn hàng
                </Typography>
                {/* Nội dung quản lý đơn hàng */}
                <Box sx={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2 }}>
                  {summaryOrder.map((order) => <SelectActionCard key={order.id} summary={order} setSelectedFilterOrder={setSelectedFilterOrder} />)}
                </Box>
                <Box sx={{ mt: 2, maxHeight: "70vh", overflowY: "auto", mr: -2 }}>
                  <Box sx={{ mr: 1}}>
                    {orderFilter.map(order => <CardOrder key={order._id} order={order} />)}
                  </Box>
                </Box>

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
SidebarItem.propTypes = {
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default UserProfile;
