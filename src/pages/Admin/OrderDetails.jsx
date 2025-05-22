import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import OrderDetails from "../../components/Modals/OrderDetails";
import axios from "axios"; // Import axios
import { Add, Delete, Edit, Refresh } from "@mui/icons-material";
const OrdersPage = () => {
  const [orders, setOrders] = useState([]); // State lưu trữ danh sách đơn hàng
  const [loading, setLoading] = useState(true); // Trạng thái tải
  const [error, setError] = useState(""); // Trạng thái lỗi
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [userNames, setUserNames] = useState({});
  useEffect(() => {
    const fetchUserNames = async () => {
      const missingIds = [
        ...new Set(
          orders.map((p) => p.userId).filter((id) => id && !userNames[id])
        ),
      ];

      if (missingIds.length === 0) return;

      const updatedNames = { ...userNames };

      await Promise.all(
        missingIds.map(async (id) => {
          try {
            const res = await axios.get(
              `http://localhost:5001/api/user/get-detail/${id}`,
              {
                headers: { "Cache-Control": "no-cache" },
              }
            );
            updatedNames[id] = res.data?.name || "Unknown";
          } catch (err) {
            console.warn("Failed to fetch user", id);
            updatedNames[id] = "Unknown";
          }
        })
      );

      setUserNames(updatedNames);
    };

    fetchUserNames();
  }, [orders]);
  const columns = [
    { field: "_id", headerName: "Order ID", flex: 1 },
    {
      field: "customerName",
      headerName: "Customer",
      width: 200,
      renderCell: (params) => {
        return params.row?.customerInformation?.fullname || "Unknown";
      },
    },
    {
      field: "statusOrder",
      headerName: "Order Status",
      width: 130,
      renderCell: (params) => {
        const status = params.value;
        let color;
        if (status === "cancelled") {
          color = "error"; // Màu đỏ cho trạng thái cancelled
        } else if (status === "completed") {
          color = "success"; // Màu xanh lá cho trạng thái completed
        } else if (status === "pending") {
          color = "warning"; // Màu cam cho trạng thái pending
        } else {
          color = "default"; // Màu mặc định nếu không phải các trạng thái trên
        }

        return <Chip label={status} color={color} />;
      },
    },
    {
      field: "isDelivered",
      headerName: "Delivery",
      width: 120,
      renderCell: (params) => (
        <Chip
          label={params.value ? "Delivered" : "Pending"}
          color={params.value ? "success" : "warning"}
        />
      ),
    },
    {
      field: "totalPrice",
      headerName: "Total",
      width: 120,
      renderCell: (params) => {
        const value = params.row?.totalPrice;
        if (typeof value === "number") {
          return new Intl.NumberFormat("vi-VN").format(value) + "₫";
        }
        return "N/A";
      },
    },
  ];

  // Gọi API để lấy danh sách đơn hàng
  const fetchOrders = async () => {
    try {
      // Lấy token từ localStorage
      const token = localStorage.getItem("access_token");
      if (!token) {
        throw new Error("Token is missing. Please log in again.");
      }

      // Gọi API để lấy danh sách đơn hàng
      const response = await axios.get(
        "http://localhost:5003/api/order/admin/get-all-order",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Lưu dữ liệu vào state
      setOrders(response.data.data); // Giả sử response.data.data là danh sách đơn hàng
      console.log(response.data.data);
    } catch (error) {
      setError(error.response?.data?.message || "Không thể tải đơn hàng");
    } finally {
      setLoading(false);
    }
  };

  // UseEffect để tải đơn hàng khi component load
  useEffect(() => {
    fetchOrders();
  }, []);

  // Hàm reload đơn hàng
  const reloadOrders = () => {
    setLoading(true); // Thiết lập lại trạng thái loading
    fetchOrders(); // Gọi lại API để tải đơn hàng mới
  };

  const handleRowClick = (params) => {
    console.log("Selected Order Data:", params.row); // In ra dữ liệu của hàng đã chọn
    setSelectedOrder(params.row);
  };

  if (loading) {
    return <div>Đang tải đơn hàng...</div>;
  }

  if (error) {
    return (
      <div>
        {error} <Button onClick={reloadOrders}>Thử lại</Button>
      </div>
    );
  }

  return (
    <Box p={4}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Orders List
      </Typography>
      <IconButton onClick={reloadOrders}>
        <Refresh />
      </IconButton>
      <Box sx={{ height: 500, mt: 2 }}>
        <DataGrid
          rows={orders}
          columns={columns}
          getRowId={(row) => row._id} // Sử dụng _id của mỗi đơn hàng làm id
          pageSize={5}
          onRowClick={handleRowClick}
        />
      </Box>

      {/* ✅ Dialog popup order detail */}
      <Dialog
        open={!!selectedOrder}
        onClose={() => setSelectedOrder(null)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>Order Detail</DialogTitle>
        <DialogContent dividers>
          {selectedOrder && <OrderDetails order={selectedOrder} />}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setSelectedOrder(null)}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default OrdersPage;
