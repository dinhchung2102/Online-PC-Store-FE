import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useNavigate } from "react-router";

const CATEGORY = [
  {
    nameCate: "Thương hiệu tai nghe",
    subCate: [
      "ASUS",
      "HyperX",
      "Corsair",
      "Razer"
    ]
  },
  {
    nameCate: "Thương hiệu tai nghe",
    subCate: [
      "Steelseries",
      "Rapoo",
      "Logitech",
      "Edifier"
    ]
  },
  {
    nameCate: "Giá tai nghe",
    subCate: [
      "Tai nghe dưới 1 triệu",
      "Tai nghe 1 triệu đến 2 triệu",
      "Tai nghe 2 đến 3 triệu",
      "Tai nghe 3 đến 4 triệu",
      "Tai nghe trên 4 triệu"
    ]
  },
  {
    nameCate: "Kiểu kết nối",
    subCate: [
      "Tai nghe Wireless",
      "Tai nghe Bluetooth"
    ]
  },
  {
    nameCate: "Kiểu tai nghe",
    subCate: [
      "Tai nghe Over-ear",
      "Tai nghe Gaming in-ear"
    ]
  }
];

function SubCateHeadphone() {
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

export default SubCateHeadphone;