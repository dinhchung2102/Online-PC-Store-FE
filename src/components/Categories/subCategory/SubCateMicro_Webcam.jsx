import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useNavigate } from "react-router";

const CATEGORY = [
  {
    nameCate: "Thương hiệu loa",
    subCate: [
      "Edifier",
      "Razer",
      "Logitech",
      "SoundMax"
    ]
  },
  {
    nameCate: "Kiểu Loa",
    subCate: [
      "Loa vi tính",
      "Loa Bluetooth",
      "Loa Soundbar",
      "Loa mini",
      "Sub phụ (Loa trầm)"
    ]
  },
  {
    nameCate: "Webcam",
    subCate: [
      "Độ phân giải 4k",
      "Độ phân giải Full HD (1080p)",
      "Độ phân giải 720p"
    ]
  },
  {
    nameCate: "Microphone",
    subCate: [
      "Micro HyperX"
    ]
  }
];

function SubCateMicro_Webcam() {
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
export default SubCateMicro_Webcam;