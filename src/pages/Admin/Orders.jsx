import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import FilterListIcon from "@mui/icons-material/FilterList";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const orders = [
  {
    product: "Premium Wireless Headphones",
    status: "In Stock",
    totalOrders: 8345,
    revenue: "$212,423",
    avgOrder: "$185.50",
    processingTime: "2d 15h",
  },
  {
    product: "Smart Fitness Watch",
    status: "Low Stock",
    totalOrders: 12567,
    revenue: "$458,945",
    avgOrder: "$149.99",
    processingTime: "1d 8h",
  },
  {
    product: "Organic Coffee Beans",
    status: "In Stock",
    totalOrders: 25890,
    revenue: "$129,450",
    avgOrder: "$24.99",
    processingTime: "1d 2h",
  },
  {
    product: "Gaming Laptop Pro",
    status: "Out of Stock",
    totalOrders: 3456,
    revenue: "$4,147,200",
    avgOrder: "$1,199.99",
    processingTime: "3d 12h",
  },
  {
    product: "Yoga Mat Premium",
    status: "In Stock",
    totalOrders: 15678,
    revenue: "$548,730",
    avgOrder: "$34.99",
    processingTime: "1d 4h",
  },
  {
    product: "Smartphone Case",
    status: "In Stock",
    totalOrders: 42567,
    revenue: "$425,670",
    avgOrder: "$19.99",
    processingTime: "1d 0h",
  },
  {
    product: "Professional Camera Kit",
    status: "Low Stock",
    totalOrders: 2345,
    revenue: "$2,345,000",
    avgOrder: "$999.99",
    processingTime: "2d 8h",
  },
  {
    product: "Wireless Charging Pad",
    status: "In Stock",
    totalOrders: 18934,
    revenue: "$567,890",
    avgOrder: "$29.99",
    processingTime: "1d 6h",
  },
  {
    product: "Smart Home Hub",
    status: "In Stock",
    totalOrders: 7890,
    revenue: "$789,000",
    avgOrder: "$99.99",
    processingTime: "2d 0h",
  },
];;

const getStatusColor = (status) => {
  switch (status) {
    case "In Stock":
      return "success";
    case "Low Stock":
      return "default";
    case "Out of Stock":
      return "error";
    default:
      return "default";
  }
};

const OrdersPage = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [sortDirection, setSortDirection] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSort = (direction) => {
    setSortDirection(direction);
    handleMenuClose();
  };

  const sortedOrders = [...orders].sort((a, b) => {
    if (!sortDirection) return 0;
    return sortDirection === "asc"
      ? a.product.localeCompare(b.product)
      : b.product.localeCompare(a.product);
  });

  return (
    <Box p={4}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Orders
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Box display="flex" alignItems="center">
                  Product Name
                  <IconButton onClick={handleMenuClick} size="small">
                    <MoreVertIcon fontSize="small" />
                  </IconButton>
                  <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
                    <MenuItem onClick={() => handleSort("asc")}> 
                      <ListItemIcon>
                        <ArrowUpwardIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>Sort by ASC</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={() => handleSort("desc")}> 
                      <ListItemIcon>
                        <ArrowDownwardIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>Sort by DESC</ListItemText>
                    </MenuItem>
                    <Divider />
                    <MenuItem disabled>
                      <ListItemIcon>
                        <FilterListIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>Filter</ListItemText>
                    </MenuItem>
                    <MenuItem disabled>
                      <ListItemIcon>
                        <VisibilityOffIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>Hide column</ListItemText>
                    </MenuItem>
                    <MenuItem disabled>
                      <ListItemIcon>
                        <ViewColumnIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>Manage columns</ListItemText>
                    </MenuItem>
                  </Menu>
                </Box>
              </TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Total Orders</TableCell>
              <TableCell>Revenue</TableCell>
              <TableCell>Avg Order Value</TableCell>
              <TableCell>Processing Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedOrders.map((order, index) => (
              <TableRow key={index}>
                <TableCell>{order.product}</TableCell>
                <TableCell>
                  <Chip label={order.status} color={getStatusColor(order.status)} />
                </TableCell>
                <TableCell>{order.totalOrders}</TableCell>
                <TableCell>{order.revenue}</TableCell>
                <TableCell>{order.avgOrder}</TableCell>
                <TableCell>{order.processingTime}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default OrdersPage;
