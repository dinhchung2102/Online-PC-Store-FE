import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import RoomIcon from "@mui/icons-material/Room";
import AssignmentLateIcon from "@mui/icons-material/AssignmentLate";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import Badge from "@mui/material/Badge";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Tooltip from '@mui/material/Tooltip';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';


import SellOutlinedIcon from "@mui/icons-material/SellOutlined"; // Icon Build PC
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined"; // Icon Tin công nghệ
import BuildCircleOutlinedIcon from "@mui/icons-material/BuildCircleOutlined"; // Icon Dịch vụ sửa chữa
import HomeRepairServiceOutlinedIcon from "@mui/icons-material/HomeRepairServiceOutlined"; // Icon Dịch vụ kỹ thuật
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined"; // Icon Thu cũ đổi mới
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined"; // Icon Tra cứu bảo hành

import { useState, useEffect } from "react";
import BasicModal from "./Modals/Modal";
import PropTypes from 'prop-types';
import { isLoggedIn } from "~/services/authService";
import Avatar from '@mui/material/Avatar';
import Divider from "@mui/material/Divider";
import { Logout, PersonAdd, Settings } from "@mui/icons-material";
import { getUserInfo, getToken } from '~/services/userService';
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo, clearUserInfo } from "~/redux/userSlice";
import { addToCart } from "~/redux/cartSlice";
import { getCart } from "~/services/cartService";

const services = [
    { icon: <SellOutlinedIcon />, text: "Tự Build PC theo ý của bạn" },
    { icon: <ArticleOutlinedIcon />, text: "Tin công nghệ" },
    { icon: <BuildCircleOutlinedIcon />, text: "Dịch vụ sửa chữa" },
    { icon: <HomeRepairServiceOutlinedIcon />, text: "Dịch vụ kỹ thuật tại nhà" },
    { icon: <CurrencyExchangeOutlinedIcon />, text: "Thu cũ đổi mới" },
    { icon: <VerifiedOutlinedIcon />, text: "Tra cứu bảo hành" },
];


function Header() {
    // redux
    const dispatch = useDispatch();
    const userInfo = useSelector((state) => state.user.userInfo);

    // Modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // login
    const [isLogin, setIsLogin] = useState(false);

    // handle menu profile
    const [anchorEl, setAnchorEl] = useState(null);
    const openMenu = Boolean(anchorEl);
    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleCloseMenu = () => setAnchorEl(null);

    // ten nguoi dung
    const [name, setName] = useState("");

    // toast
    // const [openToast, setOpenToast] = useState(false);
    // const handleCloseToast = () => setOpenToast(false);

    // handle click logout
    const handleLogout = () => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        localStorage.removeItem("userId");
        dispatch(clearUserInfo());
        window.location.reload();
    }

    useEffect(() => {
        if (userInfo) {
            setName(userInfo.name);
        }
    }, [userInfo]);


    useEffect(() => {
        const fetchUserInfo = async () => {
            if (isLoggedIn()) {
                // setOpenToast(true)
                setIsLogin(true);
                const user = await getUserInfo();
                const token = getToken();
                console.log("token", token.token);
                dispatch(setUserInfo({
                    id: user._id,
                    name: user.name,
                    address: [],
                    phone: "",
                    email: "",
                    token: token?.token,
                    refresh_token: token?.refreshToken,
                    avatar: "",
                }));

                const carts = await getCart(user._id);
                carts.forEach((item) => {
                    dispatch(addToCart({
                        ...item
                    }))
                })

            } else {
                setIsLogin(false);
                console.log("Người dùng chưa đăng nhập");
            }
        };
        fetchUserInfo();
    }, [])

    return (
        <Box>

            <AppBar position="static" sx={{ bgcolor: "red", p: 1 }}>
                <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                    {/* Logo */}
                    <Box
                        component="img"
                        src="/image/logo.png"
                        alt="Logo"
                        sx={{ height: 40, ml: 2 }}
                    />

                    {/* Nút Menu */}
                    <IconButton color="inherit" aria-label="menu" sx={{ ml: 2 }}>
                        <MenuIcon />
                        <Typography variant="h6" sx={{ ml: 1 }}>
                            Danh mục
                        </Typography>
                    </IconButton>

                    {/* Thanh tìm kiếm */}
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            bgcolor: "white",
                            borderRadius: 1,
                            px: 2,
                            py: 0.8,
                            width: "30%",
                            ml: 2,
                        }}
                    >
                        <InputBase placeholder="Bạn cần tìm gì?" sx={{ flex: 1 }} />
                        <SearchIcon sx={{ color: "gray" }} />
                    </Box>

                    {/* Các nút điều hướng */}
                    <Box sx={{ display: "flex", gap: 2 }}>
                        <NavButton
                            icon={<SupportAgentIcon />}
                            text1="Hotline"
                            text2="1900.5301"
                        />
                        <NavButton icon={<RoomIcon />} text1="Hệ thống" text2="Showroom" />
                        <NavButton
                            icon={<AssignmentLateIcon />}
                            text1="Tra cứu"
                            text2="Đơn hàng"
                        />
                        <NavButton
                            icon={<ShoppingCartIcon />}
                            text1="Giỏ"
                            text2="hàng"
                            badgeContent={1}
                        />
                        {isLogin ?
                            <Box id="basic-avatar" sx={{ display: 'flex', alignItems: 'center' }} >
                                <Tooltip title="Account settings">
                                    <Avatar
                                        sx={{ cursor: 'pointer' }}
                                        alt="Remy Sharp"
                                        src=""
                                        aria-controls={openMenu ? 'basic-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={openMenu ? 'true' : undefined}
                                        onClick={handleClick}
                                    />
                                </Tooltip>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={openMenu}
                                    onClose={handleCloseMenu}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-avatar',
                                    }}
                                    slotProps={{
                                        paper: {
                                            elevation: 0,
                                            sx: {
                                                overflow: 'visible',
                                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                mt: 1.5,
                                                '& .MuiAvatar-root': {
                                                    width: 32,
                                                    height: 32,
                                                    ml: -0.5,
                                                    mr: 1,
                                                },
                                                '&::before': {
                                                    content: '""',
                                                    display: 'block',
                                                    position: 'absolute',
                                                    top: 0,
                                                    right: 14,
                                                    width: 10,
                                                    height: 10,
                                                    bgcolor: 'background.paper',
                                                    transform: 'translateY(-50%) rotate(45deg)',
                                                    zIndex: 0,
                                                },
                                            },
                                        },
                                    }}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >
                                    <Box
                                        sx={{
                                            bgcolor: 'white',
                                            p: '6px 18px'
                                        }} >
                                        <Typography sx={{ fontWeight: 'bold' }}>Xin chào {name} ❤</Typography>
                                    </Box>
                                    <MenuItem onClick={handleClose}>
                                        <ListItemIcon>
                                            <PermIdentityIcon />
                                        </ListItemIcon>
                                        Thông tin cá nhân
                                    </MenuItem>
                                    <Divider />
                                    <MenuItem onClick={handleClose}>
                                        <ListItemIcon>
                                            <PersonAdd fontSize="small" />
                                        </ListItemIcon>
                                        Add another account
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <ListItemIcon>
                                            <Settings fontSize="small" />
                                        </ListItemIcon>
                                        Settings
                                    </MenuItem>
                                    <MenuItem onClick={handleLogout}>
                                        <ListItemIcon>
                                            <Logout fontSize="small" />
                                        </ListItemIcon>
                                        Logout
                                    </MenuItem>
                                </Menu>
                            </Box>
                            :
                            <NavButton icon={<PersonIcon />} text1="Đăng" text2="nhập" onClick={handleOpen} />
                        }

                    </Box>
                </Toolbar>
                <BasicModal open={open} handleClose={handleClose} />
            </AppBar>
            {/* Danh mục sản phẩm */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 4,
                    p: 2,
                    borderBottom: "1px solid #ddd",
                }}
            >
                {services.map((service, index) => (
                    <Box
                        key={index}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            cursor: "pointer",
                        }}
                    >
                        {service.icon}
                        <Typography sx={{ fontSize: "14px", fontWeight: "500" }}>
                            {service.text}
                        </Typography>
                    </Box>
                ))}
            </Box>
            {/* <ToastMessage open={openToast} handleClose={handleCloseToast} message="Đăng nhập thành công" /> */}
        </Box >
    );
};
/* Component nút điều hướng */


const NavButton = ({ icon, text1, text2, badgeContent, onClick }) => (
    <Box
        onClick={onClick}
        sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "red",
            color: "white",
            padding: "8px 16px",
            borderRadius: "8px",
            gap: 1,
            width: "fit-content",
            cursor: "pointer",
        }}
    >
        {badgeContent ? (
            <Badge badgeContent={badgeContent} color="warning">
                {icon}
            </Badge>
        ) : (
            icon
        )}
        <Box>
            <Typography variant="body1" sx={{ fontWeight: "bold", lineHeight: 1 }}>
                {text1}
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: "bold", lineHeight: 1 }}>
                {text2}
            </Typography>
        </Box>
    </Box>
);


NavButton.propTypes = {
    icon: PropTypes.element.isRequired,
    text1: PropTypes.string.isRequired,
    text2: PropTypes.string.isRequired,
    badgeContent: PropTypes.number,
    onClick: PropTypes.func,
};


export default Header;