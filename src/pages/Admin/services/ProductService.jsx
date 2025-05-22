import axios from 'axios';

const API_BASE = 'http://localhost:5002/api';
const getToken = () => localStorage.getItem('access_token');

export const fetchAllProducts = async () => {
  const res = await axios.get(`${API_BASE}/product/get-all`, {
    headers: { 'Cache-Control': 'no-cache' }
  });
  return res.data?.data || [];
};

export const fetchComputerOptions = async () => {
  const token = getToken();
  const res = await axios.get(`${API_BASE}/computerOption/admin/get-grouped`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return res.data;
};

export const fetchAllCategories = async () => {
  const token = getToken();
  const res = await axios.get(`${API_BASE}/category/get-all`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return res.data;
};

export const fetchAllSuppliers = async () => {
  const token = getToken();
  const res = await axios.get(`${API_BASE}/supplier/get-all`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return res.data;
};

export const fetchCategoryById = async (id) => {
  const res = await axios.get(`${API_BASE}/category/get-by-id/${id}`, {
    headers: { 'Cache-Control': 'no-cache' }
  });
  return res.data?.name || 'Unknown';
};

export const fetchSupplierById = async (id) => {
  const res = await axios.get(`${API_BASE}/supplier/get-by-id/${id}`, {
    headers: { 'Cache-Control': 'no-cache' }
  });
  return res.data?.name || 'Unknown';
};

export const createProduct = async (formData) => {
  const token = getToken();
  const res = await axios.post(`${API_BASE}/product/admin/create`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  });
  return res.data;
};

export const updateProduct = async (id, productData) => {
  const token = getToken();
  await axios.put(`${API_BASE}/product/admin/update/${id}`, productData, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Cache-Control': 'no-cache'
    },
  });
};

export const deleteProduct = async (id) => {
  const token = getToken();
  await axios.delete(`${API_BASE}/product/admin/delete/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Cache-Control': 'no-cache'
    },
  });
};
