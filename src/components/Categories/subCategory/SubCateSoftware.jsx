import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useNavigate } from "react-router";

const CATEGORY = [
  {
    nameCate: "Hãng sản xuất",
    subCate: [
      "Asus",
      "LinkSys",
      "TP-LINK",
      "Mercusys"
    ]
  },
  {
    nameCate: "Router Wi-Fi",
    subCate: [
      "Gaming",
      "Phổ thông",
      "Xuyên tường",
      "Router Mesh Pack",
      "Router WiFi 5",
      "Router WiFi 6"
    ]
  },
  {
    nameCate: "USB Thu sóng - Card mạng",
    subCate: [
      "Usb WiFi",
      "Card WiFi",
      "Dây cáp mạng"
    ]
  },
  {
    nameCate: "Microsoft Office",
    subCate: [
      "Microsoft Office 365",
      "Office Home 2024"
    ]
  },
  {
    nameCate: "Microsoft Windows",
    subCate: [
      "Windows 11 Home",
      "Windows 11 Pro"
    ]
  }
];

function SubCateSoftware() {
  const navigate = useNavigate();
  return (
    <Box >
      <Grid container spacing={2} columns={5}>
        {CATEGORY.map((item, index) => (
          <Grid key={index} sx={{ mb: 2 }} xs={1}>
            <Typography variant="subtitle2" sx={{ color: 'red', cursor: 'pointer' }}>{item.nameCate}</Typography>
            <Box sx={{}}>
              {item.subCate.map((subItem, subIndex) => (
                <Typography
                  onClick={() => {navigate(`/products/${subItem}`)}}
                  key={subIndex}
                  sx={{ cursor: 'pointer', '&:hover': { color: 'red' } }}
                >
                  {subItem}
                </Typography>
              ))}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default SubCateSoftware;