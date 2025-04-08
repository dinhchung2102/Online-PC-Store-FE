import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Checkbox,
  Select,
  MenuItem,
  InputLabel,
  Button,
  Divider
} from "@mui/material";

const provinces = [
  { label: "Hồ Chí Minh", value: "HC" },
  { label: "Hà Nội", value: "HI" },
  { label: "Đà Nẵng", value: "DA" },
  { label: "An Giang", value: "AG" },
  { label: "Bà Rịa - Vũng Tàu", value: "BV" },
  // ... thêm các tỉnh khác nếu cần
];

export default function CartInfoForm() {
  const [gender, setGender] = useState("Anh");
  const [method, setMethod] = useState("Giao hàng tận nơi");
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");
  const [billChecked, setBillChecked] = useState(false);

  return (
    <Box>
      {/* Thông tin khách hàng */}
      <Box mb={4}>
        <Typography variant="h6" gutterBottom>
          Thông tin khách mua hàng
        </Typography>
        <FormControl>
          <RadioGroup row value={gender} onChange={(e) => setGender(e.target.value)}>
            <FormControlLabel value="Anh" control={<Radio />} label="Anh" />
            <FormControlLabel value="Chị" control={<Radio />} label="Chị" />
          </RadioGroup>
        </FormControl>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Nhập họ tên" required />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Nhập số điện thoại" required inputProps={{ minLength: 10, maxLength: 12 }} />
          </Grid>
        </Grid>
      </Box>

      {/* Phương thức nhận hàng */}
      <Box mb={4}>
        <Typography variant="h6" gutterBottom>
          Chọn cách nhận hàng
        </Typography>
        <FormControl>
          <RadioGroup value={method} onChange={(e) => setMethod(e.target.value)}>
            <FormControlLabel value="Giao hàng tận nơi" control={<Radio />} label="Giao hàng tận nơi" />
            <FormControlLabel value="Nhận hàng tại Showroom" control={<Radio />} label="Nhận hàng tại Showroom" />
          </RadioGroup>
        </FormControl>

        {method === "Giao hàng tận nơi" && (
          <Grid container spacing={2} mt={1}>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth required>
                <InputLabel>Chọn Tỉnh, Thành phố</InputLabel>
                <Select value={province} onChange={(e) => setProvince(e.target.value)} label="Chọn Tỉnh, Thành phố">
                  {provinces.map((p) => (
                    <MenuItem key={p.value} value={p.value}>
                      {p.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth required>
                <InputLabel>Chọn Quận, Huyện</InputLabel>
                <Select value={district} onChange={(e) => setDistrict(e.target.value)} label="Chọn Quận, Huyện">
                  {/* Dữ liệu mẫu */}
                  <MenuItem value="1">Quận 1</MenuItem>
                  <MenuItem value="2">Quận 2</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth required>
                <InputLabel>Chọn Phường, Xã</InputLabel>
                <Select value={ward} onChange={(e) => setWard(e.target.value)} label="Chọn Phường, Xã">
                  {/* Dữ liệu mẫu */}
                  <MenuItem value="P1">Phường 1</MenuItem>
                  <MenuItem value="P2">Phường 2</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Số nhà, tên đường" required />
            </Grid>
          </Grid>
        )}
      </Box>

      {/* Lưu ý đơn hàng */}
      <Box mb={4}>
        <TextField fullWidth label="Lưu ý, yêu cầu khác (Không bắt buộc)" />
      </Box>

      {/* Hoá đơn */}
      <Box mb={4}>
        <FormControlLabel
          control={<Checkbox checked={billChecked} onChange={(e) => setBillChecked(e.target.checked)} />}
          label="Xuất hoá đơn cho đơn hàng"
        />
        {billChecked && (
          <Grid container spacing={2} mt={1}>
            <Grid item xs={12}>
              <TextField fullWidth label="Tên công ty" required />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Địa chỉ công ty" required />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Mã số thuế" type="number" required />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Email" type="email" required />
            </Grid>
          </Grid>
        )}
      </Box>

      {/* Tổng tiền và hành động */}
      <Divider sx={{ my: 2 }} />
      <Box mb={2} sx={{display: 'flex', flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
        <Typography variant="h6">
          Tổng tiền: 
        </Typography>
        <Typography variant="h6" style={{ color: "#f00" }}>3.890.000₫</Typography>
      </Box>
      <Box>
        <Typography variant="body2" >
          Bạn có thể chọn hình thức thanh toán sau khi đặt hàng
        </Typography>
      </Box>
    </Box>
  );
}
