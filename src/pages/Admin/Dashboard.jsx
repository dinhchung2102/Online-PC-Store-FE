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
const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
const [availableYears, setAvailableYears] = useState([]);
  const [revenueData, setRevenueData] = useState({
  labels: [],
  datasets: [],
});


  // Biểu đồ đơn hàng theo tháng
 const [orderData, setOrderData] = useState({
  labels: [],
  datasets: [],
});


useEffect(() => {
  const fetchData = async () => {
    const token = localStorage.getItem('access_token');

    try {
      const [orderRes, userRes, productRes] = await Promise.all([
        axios.get("http://localhost:5003/api/order/admin/summary-stats", { headers: { Authorization: `Bearer ${token}` } }),
        axios.get("http://localhost:5001/api/user/admin/count-users", { headers: { Authorization: `Bearer ${token}` } }),
        axios.get("http://localhost:5002/api/product/get-all", { headers: { Authorization: `Bearer ${token}` } }),
      ]);

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
 const fetchChartDataAllYears = async () => {
    const token = localStorage.getItem('access_token');
    try { 

      const years = [2024, 2025];
      setAvailableYears(years);

      const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

      const colorList = ['#1976d2', '#ff9800', '#4caf50', '#e91e63', '#9c27b0'];

      const revenueDataset = [];
      const orderDataset = [];

      for (let i = 0; i < years.length; i++) {
        const year = years[i];
        const res = await axios.get("http://localhost:5003/api/order/admin/revenue-stats-by-year", {
          headers: { Authorization: `Bearer ${token}` },
          params: { year },
        });

        const rawData = res.data.data;

        const revenueValues = rawData.map(item =>
          parseFloat(item.totalRevenue.replace(/[$,]/g, '')) || 0
        );
        const orderValues = rawData.map(item => item.totalOrders || 0);

        revenueDataset.push({
          label: `${year}`,
          data: revenueValues,
          borderColor: colorList[i % colorList.length],
          backgroundColor: 'transparent',
          fill: false,
          tension: 0.2,
        });

        orderDataset.push({
          label: `${year}`,
          data: orderValues,
          backgroundColor: colorList[i % colorList.length],
        });
      }

      setRevenueData({
        labels,
        datasets: revenueDataset,
      });

      setOrderData({
        labels,
        datasets: orderDataset,
      });

    } catch (error) {
      console.error("Failed to fetch multi-year chart data:", error);
    }
  };

  fetchChartDataAllYears();
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
