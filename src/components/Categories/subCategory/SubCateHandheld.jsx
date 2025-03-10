import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useNavigate } from "react-router";

const CATEGORY = [
  {
    nameCate: "Handheld PC",
    subCate: [
      "Rog Ally",
      "MSI Claw",
      "Legion Go"
    ]
  },
  {
    nameCate: "Tay cầm",
    subCate: [
      "Tay cầm Playstation",
      "Tay cầm Rapoo",
      "Tay cầm DareU",
      "Xem tất cả"
    ]
  },
  {
    nameCate: "Vô lăng lái xe, máy bay",
    subCate: []
  },
  {
    nameCate: "Sony Playstation",
    subCate: [
      "Sony PSS (Máy) chính hãng",
      "Tay cầm chính hãng"
    ]
  }
];

function SubCateHandheld() {
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

export default SubCateHandheld;