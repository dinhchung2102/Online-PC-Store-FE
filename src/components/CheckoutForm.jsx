import React from "react";
import { useState } from "react";
import PaymentMethodPopup from "./Modals/PaymentMethodPopup";

import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
  Chip,
  Divider,
  Paper,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";

const CheckoutForm = () => {
  const [openPaymentModal, setOpenPaymentModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");

  return (
    <Box sx={{ padding: 4 }}>
      {/* --- THÔNG TIN ĐƠN HÀNG --- */}
      <Box component={Paper} elevation={3} sx={{ p: 2, mt: 4 }}>
        <TextField
          fullWidth
          label="Nhập mã giảm giá (chỉ áp dụng 1 lần)"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  sx={{ whiteSpace: "nowrap", minWidth: "auto", px: 2 }}
                >
                  Áp dụng
                </Button>
              </InputAdornment>
            ),
          }}
        />

        <Box mt={2}>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Typography>Số lượng sản phẩm</Typography>
            </Grid>
            <Grid item xs={6} textAlign="right" fontWeight={500}>
              <Typography fontWeight={500}>01</Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography>Tiền hàng (tạm tính)</Typography>
            </Grid>
            <Grid item xs={6} textAlign="right" fontWeight={500}>
              <Typography fontWeight={500}>8.290.000đ</Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography>Phí vận chuyển</Typography>
            </Grid>
            <Grid item xs={6} textAlign="right" >
              <Typography fontWeight={500}>Miễn phí</Typography>
            </Grid>

            <Grid item xs={12}>
              <Divider sx={{ my: 1 }} />
            </Grid>

            <Grid item xs={6}>
              <Typography fontWeight="bold">Tổng tiền (đã gồm VAT)</Typography>
            </Grid>
            <Grid item xs={6} textAlign="right" >
              <Typography fontWeight="bold" color="error" >8.290.000đ</Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* --- THÔNG TIN THANH TOÁN --- */}
      <Box component={Paper} elevation={3} sx={{ p: 2, mt: 4 }}>
        <Typography variant="subtitle1" gutterBottom>
          THÔNG TIN THANH TOÁN
        </Typography>
        <Box
          onClick={() => setOpenPaymentModal(true)}
          sx={{
            backgroundColor: "#fff",
            borderRadius: 2,
            padding: 2,
            mt: 4,
            border: "1px solid #eee",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <span role="img" aria-label="pay">💳</span>
          <Typography color={paymentMethod ? "black" : "error"}>
            {paymentMethod
              ? `Phương thức: ${paymentMethod === "cod"
                ? "Thanh toán khi nhận hàng"
                : paymentMethod === "bank"
                  ? "Chuyển khoản ngân hàng"
                  : paymentMethod === "momo"
                    ? "Ví MoMo"
                    : "VNPay / ATM / Visa"
              }`
              : "Chọn phương thức thanh toán"}
          </Typography>
        </Box>

        <Typography variant="caption" color="text.secondary">
          Nhận thêm nhiều ưu đãi tại cổng
        </Typography>
      </Box>

      {/* --- THÔNG TIN NHẬN HÀNG --- */}
      <Box component={Paper} elevation={3} sx={{ p: 2, mt: 4 }}>
        <Typography variant="subtitle1" gutterBottom>
          THÔNG TIN NHẬN HÀNG
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <Typography>Khách hàng</Typography>
          </Grid>
          <Grid item xs={8} textAlign="right" fontWeight={500}>
            <Chip
              label="S-NULL"
              color="error"
              size="small"
              sx={{ mr: 1 }}
            />
            Gia Vĩ Nguyễn Hoàng
          </Grid>

          <Grid item xs={4} >
            <Typography>Số điện thoại</Typography>
          </Grid>
          <Grid item xs={8} textAlign="right" fontWeight={500}>
            0972296068
          </Grid>

          <Grid item xs={4}>
            <Typography>Email</Typography>
          </Grid>
          <Grid item xs={8} textAlign="right" fontWeight={500}>
            nguyenhoanggia...@gmail.com
          </Grid>

          <Grid item xs={4}>
            <Typography>Nhận hàng tại</Typography>
          </Grid>
          <Grid item xs={8} textAlign="right" fontWeight={500}>
            48/27 đường Lương Thực, Xã Thạnh Phú, Huyện Vĩnh Cửu, Đồng Nai
          </Grid>
        </Grid>
      </Box>

      {/* --- CẢNH BÁO DƯỚI CÙNG --- */}
      <Box mt={2}>
        <Typography variant="body2" color="error">
          ⚠️ Bằng việc Đặt hàng, bạn đồng ý với Điều khoản sử dụng của CellphoneS.
        </Typography>
      </Box>

      <PaymentMethodPopup
        open={openPaymentModal}
        onClose={() => setOpenPaymentModal(false)}
        selected={paymentMethod}
        onSelect={(value) => setPaymentMethod(value)}
      />
    </Box>
  );
};

export default CheckoutForm;
