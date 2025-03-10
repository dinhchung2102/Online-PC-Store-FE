import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useNavigate } from "react-router";

const CATEGORY = [
  {
    nameCate: "Thương hiệu",
    subCate: [
      "ASUS",
      "ACER",
      "MSI",
      "LENOVO",
      "DELL",
      "HP - Pavilion",
      "LG - Gram"
    ]
  },
  {
    nameCate: "Giá bán",
    subCate: [
      "Dưới 15 triệu",
      "Từ 15 đến 20 triệu",
      "Trên 20 triệu"
    ]
  },
  {
    nameCate: "CPU Intel - AMD",
    subCate: [
      "Intel Core i3",
      "Intel Core i5",
      "Intel Core i7",
      "AMD Ryzen"
    ]
  },
  {
    nameCate: "Nhu cầu sử dụng",
    subCate: [
      "Đồ họa - Studio",
      "Học sinh - Sinh viên",
      "Mỏng nhẹ cao cấp"
    ]
  },
  {
    nameCate: "Linh phụ kiện Laptop",
    subCate: [
      "Ram laptop",
      "SSD laptop",
      "Ổ cứng di động"
    ]
  },
  {
    nameCate: "Laptop ASUS",
    subCate: [
      "ASUS OLED Series",
      "Vivobook Series",
      "Zenbook Series"
    ]
  },
  {
    nameCate: "Laptop ACER",
    subCate: [
      "Aspire Series",
      "Swift Series"
    ]
  },
  {
    nameCate: "Laptop MSI",
    subCate: [
      "Modern Series",
      "Prestige Series",
      "Summit Series"
    ]
  },
  {
    nameCate: "Laptop LENOVO",
    subCate: [
      "ThinkBook Series",
      "IdeaPad Series",
      "IdeaPad Pro Series",
      "ThinkPad Series",
      "Yoga Series"
    ]
  },
  {
    nameCate: "Laptop DELL",
    subCate: [
      "Inspiron Series",
      "Vostro Series",
      "Latitude Series",
      "XPS Series"
    ]
  }
];

function SubCateLaptop() {
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

export default SubCateLaptop;