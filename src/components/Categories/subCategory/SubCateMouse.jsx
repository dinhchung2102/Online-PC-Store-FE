import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useNavigate } from "react-router";

const CATEGORY = [
  {
    nameCate: "Thương hiệu chuột",
    subCate: [
      "Logitech",
      "Razer",
      "Corsair",
      "Pulsar",
      "Microsoft",
      "Dare U",
      "ASUS",
      "Steelseries",
      "Glorious",
      "Rapoo"
    ]
  },
  {
    nameCate: "Chuột theo giá tiền",
    subCate: [
      "Dưới 500 nghìn",
      "Từ 500 nghìn - 1 triệu",
      "Từ 1 triệu - 2 triệu",
      "Trên 2 triệu - 3 triệu",
      "Trên 3 triệu"
    ]
  },
  {
    nameCate: "Loại chuột",
    subCate: [
      "Chuột chơi game",
      "Chuột văn phòng"
    ]
  },
  {
    nameCate: "Logitech",
    subCate: [
      "Logitech Gaming",
      "Logitech Văn phòng"
    ]
  },
  {
    nameCate: "Thương hiệu lót chuột",
    subCate: [
      "GEARVN",
      "ASUS",
      "Steelseries",
      "Dare-U",
      "Razer"
    ]
  },
  {
    nameCate: "Các loại lót chuột",
    subCate: [
      "Mềm",
      "Cứng",
      "Dày",
      "Mỏng",
      "Viền có led"
    ]
  },
  {
    nameCate: "Lót chuột theo size",
    subCate: [
      "Nhỏ",
      "Vừa",
      "Lớn"
    ]
  }
];

function SubCateMouse() {
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

export default SubCateMouse;