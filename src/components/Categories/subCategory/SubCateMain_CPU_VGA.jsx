import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useNavigate } from "react-router";

const CATEGORY = [
  {
    nameCate: "VGA RTX 50 SERIES",
    subCate: [
      "RTX 5090",
      "RTX 5080",
      "RTX 5070Ti",
      "RTX 5070"
    ]
  },
  {
    nameCate: "VGA (Trên 12 GB VRAM)",
    subCate: [
      "RTX 4070 SUPER (12GB)",
      "RTX 4070Ti SUPER (16GB)",
      "RTX 4080 SUPER (16GB)",
      "RTX 4090 SUPER (24GB)"
    ]
  },
  {
    nameCate: "VGA (Dưới 12 GB VRAM)",
    subCate: [
      "RTX 4060Ti (8 - 16GB)",
      "RTX 4060 (8GB)",
      "RTX 3060 (12GB)",
      "RTX 3050 (6 - 8GB)",
      "GTX 1650 (4GB)",
      "GT 710 / GT 1030 (2 - 4GB)"
    ]
  },
  {
    nameCate: "VGA - Card màn hình",
    subCate: [
      "NVIDIA Quadro",
      "AMD Radeon"
    ]
  },
  {
    nameCate: "Bo mạch chủ Intel",
    subCate: [
      "Z890 (Mới)",
      "Z790",
      "B760",
      "H610",
      "X299X",
      "Xem tất cả"
    ]
  },
  {
    nameCate: "Bo mạch chủ AMD",
    subCate: [
      "AMD X870 (Mới)",
      "AMD X670",
      "AMD X570",
      "AMD B650 (Mới)",
      "AMD B550",
      "AMD A320",
      "AMD TRX40"
    ]
  },
  {
    nameCate: "CPU - Bộ vi xử lý Intel",
    subCate: [
      "CPU Intel Core Ultra Series 2 (Mới)",
      "CPU Intel 9",
      "CPU Intel 7",
      "CPU Intel 5",
      "CPU Intel 3"
    ]
  },
  {
    nameCate: "CPU - Bộ vi xử lý AMD",
    subCate: [
      "CPU AMD Athlon",
      "CPU AMD R3",
      "CPU AMD R5",
      "CPU AMD R7",
      "CPU AMD R9"
    ]
  }
];

function SubCateMain_CPU_VGA() {
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

export default SubCateMain_CPU_VGA;