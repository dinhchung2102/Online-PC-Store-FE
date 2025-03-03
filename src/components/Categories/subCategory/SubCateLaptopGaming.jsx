import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useNavigate } from "react-router";

const CATEGORY = [
  {
    nameCate: "Thương hiệu",
    subCate: [
      "ACER / PREDATOR",
      "ASUS / ROG",
      "MSI",
      "LENOVO",
      "DELL",
      "GIGABYTE / AORUS",
      "HP"
    ]
  },
  {
    nameCate: "Giá bán",
    subCate: [
      "Dưới 20 triệu",
      "Từ 20 đến 25 triệu",
      "Từ 25 đến 30 triệu",
      "Trên 30 triệu",
      "Gaming cao cấp",
      "Gaming RTX 40 Series"
    ]
  },
  {
    nameCate: "ACER | PREDATOR",
    subCate: [
      "Nitro Series",
      "Aspire Series",
      "Predator Series",
      "ACER RTX 40 Series"
    ]
  },
  {
    nameCate: "ASUS | ROG Gaming",
    subCate: [
      "ROG Series",
      "TUF Series",
      "Zephyrus Series",
      "ROG Strix G",
      "ROG Flow series",
      "TUF RTX 40 Series",
      "ROG RTX 40 Series",
      "ROG Ally"
    ]
  },
  {
    nameCate: "MSI Gaming",
    subCate: [
      "Titan GT Series",
      "Stealth GS Series",
      "Raider GE Series",
      "Vector GP Series",
      "Crosshair / Pulse GL Series",
      "Sword / Katana GF66 Series",
      "Cyborg / Thin GF Series",
      "Delta / Alpha / Bravo Series"
    ]
  },
  {
    nameCate: "LENOVO Gaming",
    subCate: [
      "Legion Gaming",
      "Ideapad Gaming",
      "Lenovo RTX 40 Series",
      "LOQ Series"
    ]
  },
  {
    nameCate: "DELL Gaming",
    subCate: [
      "Dell Gaming G Series",
      "Alienware Series",
      "Dell RTX 40 Series"
    ]
  },
  {
    nameCate: "HP Gaming",
    subCate: [
      "HP Victus",
      "HP Omen"
    ]
  },
  {
    nameCate: "Card đồ họa",
    subCate: [
      "GTX 1650",
      "RTX 3050 / 3050Ti",
      "RTX 3060",
      "RTX 3070 / 3080",
      "AMD Radeon RX",
      "RTX 40 Series"
    ]
  },
  {
    nameCate: "Linh - Phụ kiện Laptop",
    subCate: [
      "Ram laptop",
      "SSD laptop",
      "Ổ cứng di động"
    ]
  }
];

function SubCateLaptopGaming() {
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

export default SubCateLaptopGaming;