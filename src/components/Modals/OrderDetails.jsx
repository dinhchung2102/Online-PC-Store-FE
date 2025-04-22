import React from "react";
import {
  Box,
  Typography,
  Divider,
  Chip,
  Grid,
  Card,
  CardContent,
  Avatar,
  Stack,
} from "@mui/material";

const OrderDetails = ({ order }) => {
  if (!order) return null;

  const shipping = order.shippingAddress?.[0];
  const customer = order.customerInformation?.[0];

  // Hàm này sẽ trả về màu sắc cho trạng thái đơn hàng
  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "warning";  // Màu cam cho trạng thái Pending
      case "completed":
        return "success";  // Màu xanh lá cho trạng thái Completed
      case "cancelled":
        return "error";    // Màu đỏ cho trạng thái Cancelled
      default:
        return "default";  // Màu mặc định nếu không nhận dạng được
    }
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Order Information
      </Typography>

      <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
        <Chip label={`Order ID: ${order._id}`} color="primary" />
        <Chip label={`User ID: ${order.userId}`} color="secondary" />
      </Stack>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h6" gutterBottom>
        Customer Info
      </Typography>
      <Typography>Name: {customer?.name}</Typography>
      <Typography>Phone: {customer?.phone}</Typography>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>
      {/* Hiển thị địa chỉ giao hàng chi tiết */}
      <Typography>
        Ward {shipping?.ward || "N/A"},
        District {shipping?.district || "N/A"},
        City {shipping?.city || "N/A"},
        Country {shipping?.country || "N/A"},
      </Typography>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h6" gutterBottom>
        Order Status
      </Typography>
      <Stack direction="row" spacing={2} alignItems="center">
        <Chip
          label={`Order: ${order.statusOrder}`}
          color={getStatusColor(order.statusOrder)}
        />
        <Chip label={`Payment: ${order.paymentMethod}`} color="default" />
        <Chip
          label={order.isDelivered ? "Delivered" : "Pending"}
          color={order.isDelivered ? "success" : "warning"}
        />
      </Stack>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h6" gutterBottom>
        Products
      </Typography>

      <Grid container spacing={2}>
        {order.orderDetails?.map((item, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card variant="outlined">
              <CardContent sx={{ display: "flex", gap: 2 }}>
                <Avatar
                  variant="rounded"
                  src={item.image}
                  alt={item.name}
                  sx={{ width: 80, height: 80 }}
                />
                <Box>
                  <Typography fontWeight="bold">{item.name}</Typography>
                  <Typography>Quantity: {item.amount}</Typography>
                  <Typography>Discount: {item.discount}%</Typography>
                  <Typography>
                    Total:{" "}
                    {new Intl.NumberFormat("vi-VN").format(item.total_price)}₫
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ my: 2 }} />

      <Typography variant="body1">
        <strong>Total Price: </strong>
        {new Intl.NumberFormat("vi-VN").format(order.totalPrice)}₫
      </Typography>

      <Typography variant="body2" color="text.secondary">
        Created At: {new Date(order.createdAt).toLocaleString("vi-VN")}
      </Typography>
    </Box>
  );
};

export default OrderDetails;
