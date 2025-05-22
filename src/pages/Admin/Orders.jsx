import React, { useEffect, useState } from "react";
import axios from 'axios';
import {
  Box,
  Typography,
  Chip,
  Stack,
  CircularProgress,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const getStatusColor = (status) => {
  switch (status) {
    case "In Stock":
      return "success";
    case "Low Stock":
      return "warning";
    case "Out of Stock":
      return "error";
    default:
      return "default";
  }
};

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortModel, setSortModel] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    const token = localStorage.getItem('access_token');
    try {
      const res = await axios.get("http://localhost:5003/api/order/admin/sales-stats", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = res.data;
      const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
      });

      const cleanMoney = (value) =>
        formatter.format(Number(String(value).replace(/\$/g, '').replace(/,/g, '')));

      if (data && Array.isArray(data.data)) {
        const formatted = data.data.map((item) => ({
          id: item.productId,
          product: item.productName,
          status: item.status,
          totalOrders: item.totalOrders,
          revenue: cleanMoney(item.revenue),
          avgOrder: cleanMoney(item.avgOrderValue),
          processingTime: item.processingTime,
        }));
        setOrders(formatted);
      }
    } catch (error) {
      console.error("Failed to fetch sales stats:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, []);



  const columns = [
    {
      field: "product",
      headerName: "Product Name",
      flex: 1.5,
      renderHeader: () => (
        <Stack direction="row" alignItems="center" spacing={1}>
          <span>Product Name</span>
        </Stack>
      ),
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      renderCell: (params) => (
        <Chip label={params.value} color={getStatusColor(params.value)} />
      ),
    },
    { field: "totalOrders", headerName: "Total Orders", width: 130 },
    { field: "revenue", headerName: "Revenue", width: 130 },
    { field: "avgOrder", headerName: "Avg Order Value", width: 150 },
    { field: "processingTime", headerName: "Processing Time", width: 150 },
  ];

  return (
    <Box p={4}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Orders
      </Typography>

      <Box sx={{ height: 550 }}>
        {loading ? (
          <Stack alignItems="center" justifyContent="center" sx={{ height: "100%" }}>
            <CircularProgress />
          </Stack>
        ) : (
          <DataGrid
            rows={orders}
            columns={columns}
            pageSize={7}
            rowsPerPageOptions={[7]}
            disableRowSelectionOnClick
            sortingOrder={["asc", "desc"]}
            sortModel={sortModel}
            onSortModelChange={(model) => setSortModel(model)}
          />
        )}
      </Box>
    </Box>
  );
};

export default OrdersPage;
