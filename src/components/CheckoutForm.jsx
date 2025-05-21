
import { useState } from "react";
import PaymentMethodPopup from "./Modals/PaymentMethodPopup";

import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Chip,
  Divider,
  Paper,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { useSelector } from "react-redux";
import { formatCurrency } from "~/utils/utils";


// eslint-disable-next-line react/prop-types
const CheckoutForm = ({ _setPaymentMethod }) => {
  const cart = useSelector((state) => state.cart.cartItems);
  const user = useSelector((state) => state.user.userInfo);

  console.log('cart', cart);
  console.log('user', user);

  const getQuantityItem = () => cart.reduce((total, item) => total += item.amountProduct, 0)

  const getTotalPrice = () => cart.reduce((total, item) => total += item.totalPrice, 0)

  const userAddress = () => {
    if (user.address.length > 0) {
      const values = Object.values(user.address[0]);
      return `${values.join(", ")}`;
    }
    return "Chưa có thông tin";
  }

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
              <Typography fontWeight={500}>{getQuantityItem()}</Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography>Tiền hàng (tạm tính)</Typography>
            </Grid>
            <Grid item xs={6} textAlign="right" fontWeight={500}>
              <Typography fontWeight={500}>{formatCurrency(getTotalPrice())}</Typography>
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
              <Typography fontWeight="bold" color="error" >{formatCurrency(getTotalPrice())}</Typography>
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
              ? `Phương thức: ${paymentMethod === "COD"
                ? "Thanh toán khi nhận hàng"
                : paymentMethod === "BANK"
                  ? "Chuyển khoản ngân hàng"
                  : paymentMethod === "MOMO"
                    ? "Ví MOMO"
                    : "VNPAY / ATM / VISA"
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
            {user.fullname}
          </Grid>

          <Grid item xs={4} >
            <Typography>Số điện thoại</Typography>
          </Grid>
          <Grid item xs={8} textAlign="right" fontWeight={500}>
            {user.phone}
          </Grid>

          <Grid item xs={4}>
            <Typography>Email</Typography>
          </Grid>
          <Grid item xs={8} textAlign="right" fontWeight={500}>
            {user.email || "chưa có thông tin"}
          </Grid>

          <Grid item xs={4}>
            <Typography>Nhận hàng tại</Typography>
          </Grid>
          <Grid item xs={8} textAlign="right" fontWeight={500}>
            {user.address.length > 0
              ? (userAddress())
              : "Chưa có thông tin"}
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
        onSelect={(value) => {
          setPaymentMethod(value)
          _setPaymentMethod(value);
        }}
      />
    </Box>
  );
};

export default CheckoutForm;
