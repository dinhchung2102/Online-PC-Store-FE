import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useNavigate } from "react-router";

const CATEGORY = [
  {
    nameCate: "KHUYẾN MÃI HOT",
    subCate: [
      "Thu cũ đổi mới VGA",
      "PC RX 6500XT - 9tr990",
      "PC RX 6600 - 12TR690"
    ]
  },
  {
    nameCate: "PC KHUYẾN MÃI",
    subCate: [
      "Hyperion 4090 Core Ultra",
      "Hyperion 4090",
      "Dragon ACE 4080 Super",
      "Dragon X 4070 Super",
      "Project Zero White"
    ]
  },
  {
    nameCate: "PC KHUYẾN MÃI",
    subCate: [
      "BTF i7 - 4070Ti Super",
      "BTF i5 - 4070 Super",
      "BTF i5 - 4070 Super",
      "i5 - 4060",
      "i5 - 4060Ti"
    ]
  },
  {
    nameCate: "PC Văn phòng",
    subCate: [
      "Homework Athlon - Giá chỉ 3.990k",
      "Homework R3 - Giá chỉ 5,690k",
      "Homework R5 - Giá chỉ 5,690k",
      "Homework I5 - Giá chỉ 5,690k"
    ]
  },
  {
    nameCate: "PC theo cấu hình VGA",
    subCate: [
      "PC sử dụng VGA 1650",
      "PC sử dụng VGA 3050",
      "PC sử dụng VGA 3060",
      "PC sử dụng VGA RX 6600",
      "Xem tất cả PC GVN"
    ]
  },
  {
    nameCate: "PC theo cấu hình VGA",
    subCate: [
      "PC sử dụng VGA 4060",
      "PC sử dụng VGA 4070",
      "PC sử dụng VGA 4080",
      "PC sử dụng VGA 4090",
      "Xem tất cả PC GVN"
    ]
  },
  {
    nameCate: "PC theo cấu hình (Intel)",
    subCate: [
      "PC I3 (Giá chỉ từ 7 triệu)",
      "PC I5 (Giá chỉ từ 10 triệu)",
      "PC I7 (Giá chỉ từ 27 triệu)",
      "PC I9 (Giá chỉ từ 40 triệu)",
      "Xem tất cả PC"
    ]
  },
  {
    nameCate: "PC theo cấu hình (AMD)",
    subCate: [
      "PC R3 (Giá chỉ từ 5 triệu)",
      "PC R5 (Giá chỉ từ 7 triệu)",
      "PC R7 (Giá chỉ từ 37 triệu)",
      "PC R9 (Giá chỉ từ 40 triệu)",
      "Xem tất cả PC"
    ]
  },
  {
    nameCate: "Phần mềm bản quyền",
    subCate: [
      "Windows bản quyền - Chỉ từ 2.990K",
      "Office 365 bản quyền - Chỉ từ 990K"
    ]
  },
  {
    nameCate: "A.I PC - GVN",
    subCate: [
      "Intelligent Powered by ASUS"
    ]
  }
];

function SubCatePCGVN() {
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

export default SubCatePCGVN;