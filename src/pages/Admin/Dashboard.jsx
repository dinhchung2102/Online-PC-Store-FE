// src/pages/Admin/Dashboard.jsx

import React, { useState, useEffect } from 'react';
import { Box, Grid, Card, CardContent, Typography, CardHeader } from '@mui/material';
import StoreIcon from '@mui/icons-material/Store';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import axios from "axios"; // Import axios
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from 'chart.js';

// Cấu hình Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement
);

function Dashboard() {
  // Mock data cho các thống kê
  const [stats, setStats] = useState({
    // totalProducts: 120,
    // totalOrders: 150,
    // totalRevenue: 25000,
    // totalCustomers: 300,
  });

  // Biểu đồ doanh thu theo tháng
  const revenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue',
        data: [5000, 4000, 6000, 7000, 8000, 7500], // Dữ liệu giả lập
        borderColor: '#1976d2',
        backgroundColor: 'rgba(25, 118, 210, 0.2)',
        fill: true,
      },
    ],
  };

  // Biểu đồ đơn hàng theo tháng
  const orderData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Orders',
        data: [120, 140, 110, 130, 150, 180],
        backgroundColor: '#28a745',
      },
    ],
  };

useEffect(() => {
  const fetchData = async () => {
    const token = localStorage.getItem('access_token');

    try {
      // Gọi API đơn hàng
      const orderRes = await axios.get("http://localhost:5003/api/order/admin/revenue-stats", {
        headers: { Authorization: `Bearer ${token}` },
      });
console.log(orderRes.data)
      // Gọi API user
      const userRes = await axios.get(`http://localhost:5001/api/user/admin/count-users`, {
        headers: { Authorization: `Bearer ${token}` },
      });

       const productRes = await axios.get('http://localhost:5002/api/product/get-all', {
                   headers: { 'Cache-Control': 'no-cache' }
                });
      const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
      });

      const cleanMoney = (value) =>
        formatter.format(Number(String(value).replace(/\$/g, '').replace(/,/g, '')));

      // Cập nhật thống kê
      setStats({
         totalProducts: productRes.data.pagination?.total ?? 0,
    totalOrders: orderRes.data.data?.totalOrders ?? 0,
    totalRevenue: cleanMoney(orderRes.data.data?.totalRevenue ?? 0),
        totalCustomers: userRes.data.data?.totalUsers ?? 0,
      });
    } catch (error) {
      console.error("Failed to fetch dashboard stats:", error);
    }
  };

  fetchData();
}, []);


  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        {/* Card: Tổng số sản phẩm */}
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardHeader
              title="Total Products"
              avatar={<StoreIcon sx={{ backgroundColor: '#1976d2', color: 'white' }} />}
            />
            <CardContent>
              <Typography variant="h6">{stats.totalProducts}</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card: Tổng số đơn hàng */}
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardHeader
              title="Total Orders"
              avatar={<ShoppingCartIcon sx={{ backgroundColor: '#28a745', color: 'white' }} />}
            />
            <CardContent>
              <Typography variant="h6">{stats.totalOrders}</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card: Tổng doanh thu */}
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardHeader
              title="Total Revenue"
              avatar={<AttachMoneyIcon sx={{ backgroundColor: '#ffc107', color: 'white' }} />}
            />
            <CardContent>
              <Typography variant="h6">{stats.totalRevenue}</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card: Tổng khách hàng */}
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardHeader
              title="Total Customers"
              avatar={<AccountCircleIcon sx={{ backgroundColor: '#17a2b8', color: 'white' }} />}
            />
            <CardContent>
              <Typography variant="h6">{stats.totalCustomers}</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Biểu đồ Doanh thu */}
        <Grid item xs={12} sm={6} md={6}>
          <Card>
            <CardHeader title="Revenue Over Time" />
            <CardContent>
              <Line data={revenueData} options={{ responsive: true }} />
            </CardContent>
          </Card>
        </Grid>

        {/* Biểu đồ Đơn hàng */}
        <Grid item xs={12} sm={6} md={6}>
          <Card>
            <CardHeader title="Orders Over Time" />
            <CardContent>
              <Bar data={orderData} options={{ responsive: true }} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;
