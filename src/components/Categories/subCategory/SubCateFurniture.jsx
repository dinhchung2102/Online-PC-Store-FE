import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useNavigate } from "react-router";

const CATEGORY = [
  {
    nameCate: "Thương hiệu ghế Gaming",
    subCate: [
      "Corsair",
      "Warrior",
      "E-DRA",
      "DXRacer",
      "Cougar",
      "AKRaing"
    ]
  },
  {
    nameCate: "Giá tiền",
    subCate: [
      "Dưới 5 triệu",
      "Từ 5 đến 10 triệu",
      "Trên 10 triệu"
    ]
  },
  {
    nameCate: "Thương hiệu ghế CTH",
    subCate: [
      "Warrior",
      "Sihoo",
      "E-Dra"
    ]
  },
  {
    nameCate: "Kiểu ghế",
    subCate: [
      "Ghế Công thái học",
      "Ghế Gaming"
    ]
  },
  {
    nameCate: "Bàn Gaming",
    subCate: [
      "Bàn Gaming DXRacer",
      "Bàn Gaming E-Dra",
      "Bàn Gaming Warrior"
    ]
  },
  {
    nameCate: "Bàn công thái học",
    subCate: [
      "Bàn CTH Warrior"
    ]
  },
  {
    nameCate: "Phụ kiện bàn ghế",
    subCate: []
  }
];

function SubCateFurniture() {
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

export default SubCateFurniture;