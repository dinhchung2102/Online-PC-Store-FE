import { Box, Button, Typography } from "@mui/material";
import Input from '@mui/material/Input';

import SearchIcon from '@mui/icons-material/Search';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import logo from '~/assets/logo/PC_online.png'

import { Link } from "react-router";
import React from "react";
import BasicModal from "./Modal";

function Header() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Box sx={{
            backgroundColor: 'primary.main',
            height: (theme) => theme.appPC.HeaderHeight,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
        }}>
            <Box sx={{
                width: (theme) => theme.appPC.screenWidth,
                display: 'flex',
                alignItems: 'center',
                margin: '0 auto',
            }}>
                <img src={logo} style={{ width: '120px' }} />
                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    margin: '0 auto',
                    padding: '4px 10px',
                    backgroundColor: '#fff',
                    borderRadius: '4px',
                }}>
                    <Input disableUnderline placeholder="Bạn cần tìm gì?" sx={{
                        backgroundColor: '#fff',
                        width: '100%',
                    }} />
                    <Button variant="text">
                        <SearchIcon />
                    </Button>
                </Box>

                <Box sx={{
                    display: 'flex',
                    alignItems: 'center'
                }} >
                    <Link style={{
                        display: 'flex',
                        alignItems: 'center',
                        color: '#fff',
                        textDecoration: 'none',
                        marginLeft: '12px',
                    }}>
                        <Inventory2OutlinedIcon />
                        <Typography sx={{
                            width: '60px',
                            fontSize: '12px',
                            fontWeight: 600,
                            marginLeft: '4px',
                        }}
                        >Tra cứu đơn hàng</Typography>
                    </Link>
                    <Link style={{
                        display: 'flex',
                        alignItems: 'center',
                        color: '#fff',
                        textDecoration: 'none',
                        marginLeft: '12px',
                    }}>
                        <ShoppingCartOutlinedIcon />
                        <Typography sx={{
                            width: '40px',
                            fontSize: '12px',
                            fontWeight: 600,
                            marginLeft: '4px',
                        }}
                        >Giỏ hàng</Typography>
                    </Link>
                    <Button onClick={handleOpen} style={{
                        display: 'flex',
                        alignItems: 'center',
                        color: '#fff',
                        textDecoration: 'none',
                        marginLeft: '12px',
                    }}>
                        <AccountCircleOutlinedIcon />
                        <Typography sx={{
                            width: '60px',
                            fontSize: '12px',
                            fontWeight: 600,
                            marginLeft: '4px',
                        }}
                        >Đăng nhập Đăng kí</Typography>
                    </Button>
                </Box>
            </Box>
            <BasicModal open={open} handleClose={handleClose}/>
        </Box>
    );
}



export default Header;