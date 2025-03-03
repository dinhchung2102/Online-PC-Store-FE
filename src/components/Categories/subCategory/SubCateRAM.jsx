import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useNavigate } from "react-router";

const CATEGORY = [
  {
    nameCate: "Dung lượng RAM",
    subCate: [
      "8 GB",
      "16 GB",
      "32 GB",
      "64 GB",
      "Xem tất cả"
    ]
  },
  {
    nameCate: "Loại RAM",
    subCate: [
      "DDR4",
      "DDR5",
      "Xem tất cả"
    ]
  },
  {
    nameCate: "Hãng RAM",
    subCate: [
      "Corsair",
      "Kingston",
      "G Skill",
      "PNY",
      "Xem tất cả"
    ]
  },
  {
    nameCate: "Dung lượng HDD",
    subCate: [
      "HDD 1 TB",
      "HDD 2 TB",
      "HDD 4 TB - 6 TB",
      "HDD trên 8 TB",
      "Xem tất cả"
    ]
  },
  {
    nameCate: "Hãng HDD",
    subCate: [
      "WesterDigital",
      "Seagate",
      "Toshiba",
      "Xem tất cả"
    ]
  },
  {
    nameCate: "Dung lượng SSD",
    subCate: [
      "120GB - 128GB",
      "250GB - 256GB",
      "480GB - 512GB",
      "960GB - 1TB",
      "2TB",
      "Trên 2TB",
      "Xem tất cả"
    ]
  },
  {
    nameCate: "Hãng SSD",
    subCate: [
      "Samsung",
      "Wester Digital",
      "Kingston",
      "Corsair",
      "PNY",
      "Xem tất cả"
    ]
  },
  {
    nameCate: "Thẻ nhớ / USB",
    subCate: [
      "Sandisk"
    ]
  },
  {
    nameCate: "Ổ cứng di động",
    subCate: []
  }
];

function SubCateRAM() {
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

export default SubCateRAM;