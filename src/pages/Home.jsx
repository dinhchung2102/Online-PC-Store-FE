import Container from "@mui/material/Container";
import {
  Box,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Badge,
  Menu,
  MenuItem,
} from "@mui/material";
import {  List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import RoomIcon from "@mui/icons-material/Room";
import AssignmentLateIcon from "@mui/icons-material/AssignmentLate";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined"; // Icon Build PC
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined"; // Icon Tin công nghệ
import BuildCircleOutlinedIcon from "@mui/icons-material/BuildCircleOutlined"; // Icon Dịch vụ sửa chữa
import HomeRepairServiceOutlinedIcon from "@mui/icons-material/HomeRepairServiceOutlined"; // Icon Dịch vụ kỹ thuật
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined"; // Icon Thu cũ đổi mới
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined"; // Icon Tra cứu bảo hành
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import ComputerIcon from "@mui/icons-material/Computer";
import MemoryIcon from "@mui/icons-material/Memory";
import PowerIcon from "@mui/icons-material/Power";
import SdStorageIcon from "@mui/icons-material/SdStorage";
import SpeakerIcon from "@mui/icons-material/Speaker";
import TvIcon from "@mui/icons-material/Tv";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import MouseIcon from "@mui/icons-material/Mouse";
import HeadsetIcon from "@mui/icons-material/Headset";
import ChairIcon from "@mui/icons-material/Chair";
import WifiIcon from "@mui/icons-material/Wifi";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import UsbIcon from "@mui/icons-material/Usb";
import InfoIcon from "@mui/icons-material/Info";


const services = [
  { icon: <SellOutlinedIcon />, text: "Tự Build PC theo ý của bạn" },
  { icon: <ArticleOutlinedIcon />, text: "Tin công nghệ" },
  { icon: <BuildCircleOutlinedIcon />, text: "Dịch vụ sửa chữa" },
  { icon: <HomeRepairServiceOutlinedIcon />, text: "Dịch vụ kỹ thuật tại nhà" },
  { icon: <CurrencyExchangeOutlinedIcon />, text: "Thu cũ đổi mới" },
  { icon: <VerifiedOutlinedIcon />, text: "Tra cứu bảo hành" },
];
const categories = [
  { icon: <LaptopMacIcon />, text: "Laptop" },
  { icon: <LaptopChromebookIcon />, text: "Laptop Gaming" },
  { icon: <ComputerIcon />, text: "PC GVN" },
  { icon: <MemoryIcon />, text: "Main, CPU, VGA" },
  { icon: <PowerIcon />, text: "Case, Nguồn, Tản" },
  { icon: <SdStorageIcon />, text: "Ổ cứng, RAM, Thẻ nhớ" },
  { icon: <SpeakerIcon />, text: "Loa, Micro, Webcam" },
  { icon: <TvIcon />, text: "Màn hình" },
  { icon: <KeyboardIcon />, text: "Bàn phím" },
  { icon: <MouseIcon />, text: "Chuột + Lót chuột" },
  { icon: <HeadsetIcon />, text: "Tai Nghe" },
  { icon: <ChairIcon />, text: "Ghế - Bàn" },
  { icon: <WifiIcon />, text: "Phần mềm, mạng" },
  { icon: <SportsEsportsIcon />, text: "Handheld, Console" },
  { icon: <UsbIcon />, text: "Phụ kiện (Hub, sạc, cáp..)" },
  { icon: <InfoIcon />, text: "Dịch vụ và thông tin khác" },
];


function Home() {
  return (
    <Container maxWidth={false} sx={{ bgcolor: "#f5f5f5", minHeight: "100vh", width: "1442px" }}>
      {/* Header */}
      <AppBar position="static" sx={{ bgcolor: "red", p: 1 }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo */}
          <Box component="img" src="/image/logo.png" alt="Logo" sx={{ height: 40, ml: 3 }} />

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
            <InputBase
              placeholder="Bạn cần tìm gì?"
              sx={{ flex: 1 }}
            />
            <SearchIcon sx={{ color: "gray" }} />
          </Box>

          {/* Các nút điều hướng */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <NavButton icon={<SupportAgentIcon />} text1="Hotline" text2="1900.5301" />
            <NavButton icon={<RoomIcon />} text1="Hệ thống" text2="Showroom" />
            <NavButton icon={<AssignmentLateIcon />} text1="Tra cứu" text2="Đơn hàng" />
            <NavButton icon={<ShoppingCartIcon />} text1="Giỏ" text2="hàng" badgeContent={1} />
            <NavButton icon={<PersonIcon />} text1="Đăng" text2="nhập" />
          </Box>
        </Toolbar>
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
        <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 1 ,cursor: "pointer"}}>
          {service.icon}
          <Typography sx={{ fontSize: "14px", fontWeight: "500", }}>{service.text}</Typography>
        </Box>
      ))}
    </Box>
    <Box sx={{ width: 280, bgcolor: "#f5f5f5", p: 0, borderRadius: "8px" }}>
      <List>
        {categories.map((item, index) => (
          <ListItem button key={index}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
    </Container>
  );
}

/* Component nút điều hướng */
const NavButton = ({ icon, text1, text2, badgeContent }) => (
  <Box
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

export default Home;
