import React, { useEffect, useState } from "react";
import axios from "axios";
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
  CircularProgress,
} from "@mui/material";

const OrderDetails = ({ order }) => {
  const [orderDetail, setOrderDetail] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDetail = async () => {
      if (!order?._id) return;

      try {
        setLoading(true);
        const res = await axios.get(
          `http://localhost:5003/api/order/get-detail-order/${order._id}`
        );
        setOrderDetail(res.data?.data);
        console.log(res.data)
      } catch (err) {
        console.error("Failed to fetch order detail:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [order]);

  if (!order || loading) {
    return (
      <Box display="flex" justifyContent="center" py={4}>
        <CircularProgress />
      </Box>
    );
  }

  if (!orderDetail) return null;

  const shipping = orderDetail.shippingAddress;
  const customer = orderDetail.customerInformation;

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "warning";
      case "completed":
        return "success";
      case "cancelled":
        return "error";
      default:
        return "default";
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
      <Typography>Name: {order.customerInformation?.fullname || "N/A"}</Typography>
      <Typography>Phone: {order.customerInformation?.phone || "N/A"}</Typography>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>
      <Typography>
         {order.shippingAddress?.ward || "N/A"},
         {order.shippingAddress?.district || "N/A"},
         {order.shippingAddress?.province || ""},
         {order.shippingAddress?.country || ""}
      </Typography>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h6" gutterBottom>
        Order Status
      </Typography>
      <Stack direction="row" spacing={2} alignItems="center">
        <Chip label={`Order: ${order.statusOrder}`} color={getStatusColor(order.statusOrder)} />
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

      <Grid container spacing={0}>
        {orderDetail.orderDetailIds?.map((item, index) => {
          const product = item.productId || {}; // dữ liệu sản phẩm thực tế
          return (
            <Grid item xs={12} md={12} key={index}>
              <Card variant="outlined">
                <CardContent sx={{ display: "flex", gap: 2 }}>
                  <Avatar
                    variant="rounded"
                    src={item.image || ""}
                    alt={item.name || "Product"}
                    sx={{ width: 80, height: 80 }}
                  />
                  <Box>
                    <Typography fontWeight="bold">{item.name || "N/A"}</Typography>
                    <Typography>Quantity: {item.amount}</Typography>
                    <Typography>Discount: {item.discount || 0}%</Typography>
                    <Typography >
                      Total: {new Intl.NumberFormat("vi-VN").format(item.total_price || 0)}₫
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      <Divider sx={{ my: 2 }} />

      <Typography sx={{fontSize: "20px"}}>
        <strong>Total Price: </strong>
        {new Intl.NumberFormat("vi-VN").format(order.totalPrice || 0)}₫
      </Typography>

      <Typography variant="body2" color="text.secondary">
        Created At: {new Date(order.createdAt).toLocaleString("vi-VN")}
      </Typography>
    </Box>
  );
};

export default OrderDetails;
