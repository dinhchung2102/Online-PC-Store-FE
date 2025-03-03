import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useNavigate } from "react-router";

const CATEGORY = [
  {
    nameCate: "Thương hiệu",
    subCate: [
      "AKKO",
      "AULA",
      "Dare-U",
      "Durgod",
      "FL-Esports",
      "Corsair",
      "E-Dra",
      "Cidoo",
      "Machenike",
      "ASUS",
      "Logitech",
      "Razer",
      "Leopold",
      "Steelseries",
      "Rapoo",
      "VGN"
    ]
  },
  {
    nameCate: "Giá tiền",
    subCate: [
      "Dưới 1 triệu",
      "1 triệu - 2 triệu",
      "2 triệu - 3 triệu",
      "3 triệu - 4 triệu",
      "Trên 4 triệu"
    ]
  },
  {
    nameCate: "Kết nối",
    subCate: [
      "Bluetooth",
      "Wireless"
    ]
  },
  {
    nameCate: "Phụ kiện bàn phím",
    subCate: [
      "Keycaps",
      "Dwarf Factory",
      "Kệ tay"
    ]
  }
];

function SubCateKeyBoard() {
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

export default SubCateKeyBoard;