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

import React from "react";
import BasicModal from "./Modals/Modal";
import PropTypes from 'prop-types';


function Header() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
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
                    <NavButton icon={<PersonIcon />} text1="Đăng" text2="nhập" onClick={handleOpen} />

                </Box>
            </Toolbar>
            <BasicModal open={open} handleClose={handleClose} />
        </AppBar>
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