
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Paper,
} from "@mui/material";

const paymentMethods = [
  {
    value: "cod",
    label: "Thanh toán khi nhận hàng",
    icon: "🧧",
  },
  {
    value: "bank",
    label: "Chuyển khoản ngân hàng qua mã QR",
    icon: "📲",
  },
  {
    value: "vnpay",
    label: "VNPAY",
    icon: "🏦",
  },
  {
    value: "visa",
    label: "Qua thẻ Visa/Master/JCB/Napas",
    icon: "💳",
  },
  {
    value: "momo",
    label: "Ví MoMo",
    icon: "👜",
  },
];

// eslint-disable-next-line react/prop-types
const PaymentMethodPopup = ({ open, onClose, selected, onSelect }) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle fontSize={14} fontWeight="bold">
        KHẢ DỤNG
      </DialogTitle>
      <DialogContent dividers>
        {paymentMethods.map((method) => (
          <Paper
            key={method.value}
            onClick={() => onSelect(method.value)}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: 2,
              mb: 1,
              border:
                selected === method.value ? "2px solid #1976d2" : "1px solid #ccc",
              borderRadius: 2,
              cursor: "pointer",
              backgroundColor: selected === method.value ? "#e3f2fd" : "#fff",
              transition: "all 0.2s",
              gap: 2,
            }}
          >
            <Typography fontSize={24}>{method.icon}</Typography>
            <Typography>{method.label}</Typography>
          </Paper>
        ))}
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button onClick={onClose} color="inherit">
          Hủy
        </Button>
        <Button
          variant="contained"
          disabled={!selected}
          onClick={onClose}
        >
          Xác nhận
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PaymentMethodPopup;
