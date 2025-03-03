import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useNavigate } from "react-router";

const CATEGORY = [
  {
    nameCate: "Case - Theo hãng",
    subCate: [
      "Case ASUS",
      "Case Corsair",
      "Case Lianli",
      "Case NZXT",
      "Case Inwin",
      "Case Thermaltake",
      "Xem tất cả"
    ]
  },
  {
    nameCate: "Case - Theo giá",
    subCate: [
      "Dưới 1 triệu",
      "Từ 1 triệu đến 2 triệu",
      "Trên 2 triệu",
      "Xem tất cả"
    ]
  },
  {
    nameCate: "Nguồn - Theo Hãng",
    subCate: [
      "Nguồn ASUS",
      "Nguồn DeepCool",
      "Nguồn Corsair",
      "Nguồn NZXT",
      "Nguồn MSI",
      "Xem tất cả"
    ]
  },
  {
    nameCate: "Nguồn - Theo công suất",
    subCate: [
      "Từ 400w - 500w",
      "Từ 500w - 600w",
      "Từ 700w - 800w",
      "Trên 1000w",
      "Xem tất cả"
    ]
  },
  {
    nameCate: "Phụ kiện PC",
    subCate: [
      "Dây LED",
      "Dây rise - Dựng VGA",
      "Giá đỡ VGA",
      "Keo tán nhiệt",
      "Xem tất cả"
    ]
  },
  {
    nameCate: "Loại tản nhiệt",
    subCate: [
      "Tản nhiệt AIO 240mm",
      "Tản nhiệt AIO 280mm",
      "Tản nhiệt AIO 360mm",
      "Tản nhiệt AIO 420mm",
      "Tản nhiệt khí",
      "Fan RGB",
      "Xem tất cả"
    ]
  }
];

function SubCateCase() {
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

export default SubCateCase;