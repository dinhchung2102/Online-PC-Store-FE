import React, { useState } from "react";
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Chip,
  Stack,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import FilterListIcon from "@mui/icons-material/FilterList";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const orders = [
  {
    id: 1,
    product: "Premium Wireless Headphones",
    status: "In Stock",
    totalOrders: 8345,
    revenue: "$212,423",
    avgOrder: "$185.50",
    processingTime: "2d 15h",
  },
  {
    id: 2,
    product: "Smart Fitness Watch",
    status: "Low Stock",
    totalOrders: 12567,
    revenue: "$458,945",
    avgOrder: "$149.99",
    processingTime: "1d 8h",
  },
  // ... thêm các đơn hàng khác ở đây nếu có
];

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
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [sortModel, setSortModel] = useState([]);

  const handleMenuClick = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  const handleSort = (direction) => {
    setSortModel([
      {
        field: "product",
        sort: direction,
      },
    ]);
    handleMenuClose();
  };

  const columns = [
    {
      field: "product",
      headerName: "Product Name",
      flex: 1.5,
      // ❌ Không cần renderCell => tránh chèn icon thừa
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
      </Box>
    </Box>
  );
};

export default OrdersPage;
