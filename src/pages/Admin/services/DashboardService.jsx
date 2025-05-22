import axios from "axios";

const API_ORDER = "http://localhost:5003/api/order";
const API_USER = "http://localhost:5001/api/user";
const API_PRODUCT = "http://localhost:5002/api/product";

const getAuthHeader = () => ({
  headers: { Authorization: `Bearer ${localStorage.getItem('access_token')}` },
});

export const fetchDashboardStats = async () => {
  try {
    const [orderRes, userRes, productRes] = await Promise.all([
      axios.get(`${API_ORDER}/admin/summary-stats`, getAuthHeader()),
      axios.get(`${API_USER}/admin/count-users`, getAuthHeader()),
      axios.get(`${API_PRODUCT}/get-all`, { headers: { 'Cache-Control': 'no-cache' } }),
    ]);

    const formatter = new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    });

    const cleanMoney = (value) =>
      formatter.format(Number(String(value).replace(/\$/g, '').replace(/,/g, '')));

    return {
      totalProducts: productRes.data.pagination?.total ?? 0,
      totalOrders: orderRes.data.data?.totalOrders ?? 0,
      totalRevenue: cleanMoney(orderRes.data.data?.totalRevenue ?? 0),
      totalCustomers: userRes.data.data?.totalUsers ?? 0,
    };
  } catch (error) {
    console.error("Error fetching dashboard stats:", error);
    throw error;
  }
};

export const fetchRevenueAndOrdersByYear = async (years) => {
  const token = localStorage.getItem('access_token');
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const colorList = ['#1976d2', '#ff9800', '#4caf50', '#e91e63', '#9c27b0'];

  const revenueDataset = [];
  const orderDataset = [];

  try {
    for (let i = 0; i < years.length; i++) {
      const year = years[i];

      const res = await axios.get(`${API_ORDER}/admin/revenue-stats-by-year`, {
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

    return {
      labels,
      revenueDataset,
      orderDataset,
    };
  } catch (error) {
    console.error("Error fetching chart data:", error);
    throw error;
  }
};
