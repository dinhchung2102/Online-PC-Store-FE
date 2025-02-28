import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
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

import SubCateAccessories from "./subCategory/SubCateAccessories";
import SubCateCase from "./subCategory/subCateCase";
import SubCateFurniture from "./subCategory/SubCateFurniture";
import SubCateHandheld from "./subCategory/SubCateHandheld";
import SubCateHeadphone from "./subCategory/SubCateHeadphone";
import SubCateKeyBoard from "./subCategory/SubCateKeyBoard";
import SubCateLaptop from "./subCategory/SubCateLaptop";
import SubCateLaptopGaming from "./subCategory/SubCateLaptopGaming";
import SubCateMain_CPU_VGA from "./subCategory/SubCateMain_CPU_VGA";
import SubCateMicro_Webcam from "./subCategory/SubCateMicro_Webcam";
import SubCateMonitor from "./subCategory/SubCateMonitor";
import SubCateMouse from "./subCategory/SubCateMouse";
import SubCatePCGVN from "./subCategory/SubCatePCGVN";
import SubCateRAM from "./subCategory/SubCateRAM";
import SubCateServices from "./subCategory/SubCateServices";
import SubCateSoftware from "./subCategory/SubCateSoftware";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

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

function Categories() {

  const [hoverCate, setHoverCate] = useState(true);
  const [cateFocus, setCateFocus] = useState("");

  const handleGetLabelName = (e) => {
    setCateFocus(e.target.innerText)
    setHoverCate(true)
  }
  return (
    <Box
      sx={{
        width: 300,
        bgcolor: "rgb(255, 255, 255)",
        borderRadius: "8px",
        minHeight: "600px",
        position: 'relative',
        borderBottomRightRadius: hoverCate ? '0px' : '8px',
        borderTopRightRadius: hoverCate ? '0px' : '8px',
      }}
    >
      <Box sx={{
        display: hoverCate ? 'block' : 'none',
        width: `calc(1442px - 300px)`,
        minHeight: 'inherit',
        height: '100%',
        bgcolor: "white",
        position: "absolute",
        left: '100%',
        zIndex: 99,
        borderBottomRightRadius: '8px',
        borderTopRightRadius: '8px',
        p: 4
      }}
        onMouseEnter={() => setHoverCate(true)}
        onMouseLeave={() => setHoverCate(false)}
      >
        {(() => {
          switch (cateFocus) {
            case 'Laptop':
              return <SubCateLaptop />;
            case 'Laptop Gaming':
              return <SubCateLaptopGaming />;
            case 'PC GVN':
              return <SubCatePCGVN />;
            case 'Main, CPU, VGA':
              return <SubCateMain_CPU_VGA />;
            case 'Case, Nguồn, Tản':
              return <SubCateCase />;
            case 'Ổ cứng, RAM, Thẻ nhớ':
              return <SubCateRAM />;
            case 'Loa, Micro, Webcam':
              return <SubCateMicro_Webcam />;
            case 'Màn hình':
              return <SubCateMonitor />;
            case 'Bàn phím':
              return <SubCateKeyBoard />;
            case 'Chuột + Lót chuột':
              return <SubCateMouse />;
            case 'Tai Nghe':
              return <SubCateHeadphone />;
            case 'Ghế - Bàn':
              return <SubCateFurniture />;
            case 'Phần mềm, mạng':
              return <SubCateSoftware />;
            case 'Handheld, Console':
              return <SubCateHandheld />;
            case 'Phụ kiện (Hub, sạc, cáp..)':
              return <SubCateAccessories />;
            case 'Dịch vụ và thông tin khác':
              return <SubCateServices />;
            default:
              return null;
          }
        })()}
      </Box>
      <List sx={{
      }}>
        {categories.map((item, index) => (
          <ListItem
            onMouseEnter={handleGetLabelName}
            onMouseLeave={() => setHoverCate(false)}
            sx={{

              cursor: "pointer",
              paddingY: 0.5,

              "& .MuiListItemIcon-root": {
                minWidth: "36px",
              },
              "& .MuiTypography-root": {
                fontSize: "0.9rem",
                fontWeight: "bold",
              },
              "&:hover": {
                backgroundColor: "red",
                color: "white",
                "&::after": {
                  content: '""',
                  display: "block",
                  width: "20px",
                  height: "100%",
                  backgroundColor: "transparent",
                  position: "absolute",
                  bottom: 0,
                  right: -20,
                  borderTop: '18.8px solid transparent',
                  borderBottom: '18.8px solid transparent',
                  borderLeft: '10px solid red',
                  zIndex: 999,
                }
              },
            }} key={index}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText sx={{ fontSize: '0.5rem' }} primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default Categories;