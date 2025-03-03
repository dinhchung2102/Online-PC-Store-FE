import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useNavigate } from "react-router";

const CATEGORY = [
  {
    nameCate: "Hãng sản xuất",
    subCate: [
      "LG",
      "MSI",
      "Asus",
      "Lenovo",
      "ViewSonic",
      "Samsung",
      "Dell",
      "Philips",
      "Gigabyte",
      "E-Dra",
      "AOC",
      "Dahua",
      "Acer",
      "HKC"
    ]
  },
  {
    nameCate: "Giá tiền",
    subCate: [
      "Dưới 5 triệu",
      "Từ 5 triệu đến 10 triệu",
      "Từ 10 triệu đến 20 triệu",
      "Từ 20 triệu đến 30 triệu",
      "Trên 30 triệu"
    ]
  },
  {
    nameCate: "Độ Phân giải",
    subCate: [
      "Màn hình Full HD",
      "Màn hình 2K 1440p",
      "Màn hình 4K UHD",
      "Màn hình 6K"
    ]
  },
  {
    nameCate: "Tần số quét",
    subCate: [
      "60Hz",
      "75Hz",
      "100Hz",
      "144Hz",
      "240Hz"
    ]
  },
  {
    nameCate: "Màn hình cong",
    subCate: [
      "24\" Curved",
      "27\" Curved",
      "32\" Curved",
      "Trên 32\" Curved"
    ]
  },
  {
    nameCate: "Kích thước",
    subCate: [
      "Màn hình 22\"",
      "Màn hình 24\"",
      "Màn hình 27\"",
      "Màn hình 29\"",
      "Màn hình 32\"",
      "Màn hình Trên 32\"",
      "Hỗ trợ giá treo (VESA)"
    ]
  },
  {
    nameCate: "Màn hình đồ hoạ",
    subCate: [
      "Màn hình đồ hoạ 24\"",
      "Màn hình đồ hoạ 27\"",
      "Màn hình đồ hoạ 32\""
    ]
  },
  {
    nameCate: "Phụ kiện màn hình",
    subCate: [
      "Giá treo màn hình",
      "Phụ kiện dây HDMI, DPLAN",
      "Có cảm ứng"
    ]
  },
  {
    nameCate: "Màn hình di động",
    subCate: [
      "Full HD 1080p",
      "2K 1440p"
    ]
  },
  {
    nameCate: "Máy chiếu",
    subCate: [
      "Máy chiếu Asus",
      "Máy chiếu Beccube",
      "Máy chiếu Wanbo",
      "Máy chiếu ViewSonic"
    ]
  }
];

function SubCateMonitor() {
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
                  onClick={() => { navigate(`/products/${subItem}`) }}
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

export default SubCateMonitor;