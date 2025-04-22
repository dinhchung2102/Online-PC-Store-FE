import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  TextField,
  Typography,
  Grid,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Add, Delete, Edit, Refresh } from '@mui/icons-material';

export default function Products() {
  const [products, setProducts] = useState([]); // State để lưu trữ sản phẩm
  const [openComputerDialog, setOpenComputerDialog] = useState(false);
  const [selectedComputer, setSelectedComputer] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [form, setForm] = useState({
    name: '',
    image: '',
    imageFile: null,
    imagePreview: null,
    price: '',
    description: '',
    inventory: '',
    category: '',
    supplier: '',
    computer: {
      brand: '',
      ram: '',
      type: '',
      storage: '',
      processor: '',
      os: '',
      series: '',
    },
  });
  

  // Gọi API để lấy danh sách sản phẩm khi component được render
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5002/api/product/get-all'); // Đảm bảo sử dụng URL chính xác của API
        setProducts(response.data); // Cập nhật state với dữ liệu lấy từ API
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };

    fetchProducts();
  }, []); // Empty array làm dependency để chỉ chạy một lần khi component được render

  const handleOpenNew = () => {
    setEditingProduct(null);
    setForm({
      name: '',
      image: '',
      price: '',
      description: '',
      computer: { brand: '', ram: '', type: '', storage: '', processor: '', os: '', series: '' },
      inventory: '',
      category: '',
      supplier: '',
    });
    setOpenDialog(true);
  };

  const handleSave = async () => {
    const token = localStorage.getItem('access_token');
  
    try {
      if (editingProduct) {
        // If editing an existing product, send JSON without file upload
        const productData = {
          ...form,
          price: parseFloat(form.price),
          computer: {
            ...form.computer,
            ram: parseInt(form.computer.ram, 10),
            storage: parseInt(form.computer.storage, 10),
          },
        };
  
        // Send PUT request to update the product
        await axios.put(
          `http://localhost:5002/api/product/admin/update/${editingProduct._id}`,
          productData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
  
        // Update the local product list after edit
        setProducts((prev) =>
          prev.map((p) => (p._id === editingProduct._id ? { ...p, ...productData } : p))
        );
      } else {
        // If creating a new product, use FormData to upload image
        const formData = new FormData();
        formData.append('name', form.name);
        formData.append('price', parseFloat(form.price));
        formData.append('description', form.description);
        formData.append('inventory', form.inventory);
        formData.append('category', form.category);
        formData.append('supplier', form.supplier);
        
        // Add computer details, converting it to a JSON string for nested objects
        formData.append('computer', JSON.stringify({
          ...form.computer,
          ram: parseInt(form.computer.ram, 10),
          storage: parseInt(form.computer.storage, 10),
        }));
  
        // Add image file if it exists
        if (form.imageFile) {
          formData.append('image', form.imageFile);
        }
  
        // Send POST request to create the product
        const response = await axios.post(
          'http://localhost:5002/api/product/admin/create',
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'multipart/form-data', // Ensure the correct content type for file uploads
            },
          }
        );
  
        // Update the local product list after new product creation
        setProducts((prev) => [...prev, response.data]);
      }
  
      // Close the dialog after successful save
      setOpenDialog(false);
    } catch (error) {
      console.error('Error saving product', error);
    }
  };
  
  
  
  const handleOpenComputer = (computer) => {
    setSelectedComputer(computer);
    setOpenComputerDialog(true);
  };
  const handleEdit = (product) => {
    setEditingProduct(product);
    setForm({
      ...product,
      price: product.price.toString(),
      computer: {
        ...product.computer,
        ram: product.computer.ram.toString(),
        storage: product.computer.storage.toString(),
      },
    });
    setOpenDialog(true);
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem('access_token');
    try {
      await axios.delete(`http://localhost:5002/api/product/admin/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        // withCredentials: true, // <--- thêm dòng này nếu BE yêu cầu
      });
      setProducts((prev) => prev.filter((p) => p._id !== id));
    } catch (error) {
      console.error('Error deleting product', error);
    }
  };
  

  const handleRefresh = async () => {
    try {
      const response = await axios.get('http://localhost:5002/api/product/get-all'); // API refresh
      setProducts(response.data);
    } catch (error) {
      console.error("Error refreshing products", error);
    }
  };

  const columns = [
    { field: '_id', headerName: 'ID', width: 220 },
    { field: 'category', headerName: 'Category ID', width: 180 },
    { field: 'supplier', headerName: 'Supplier ID', width: 180 },
    { field: 'name', headerName: 'Name', flex: 1 },
    {
      field: 'image',
      headerName: 'Image',
      width: 120,
      renderCell: (params) => (
        <img
          src={params.value}
          alt="product"
          style={{ width: 60, height: 60, objectFit: 'cover', borderRadius: 4 }}
        />
      ),
    },
    { field: 'price', headerName: 'Price (₫)', width: 120 },
    { field: 'description', headerName: 'Description', flex: 2 },
    {
      field: 'computer',
      headerName: 'Computer',
      width: 120,
      renderCell: (params) => (
        <Button size="small" onClick={() => handleOpenComputer(params.row.computer)}>
          View
        </Button>
      ),
    },
    {
      field: 'actions',
      headerName: '',
      width: 100,
      renderCell: (params) => (
        <Stack direction="row" spacing={1}>
          <IconButton size="small" onClick={() => handleEdit(params.row)}>
            <Edit fontSize="inherit" />
          </IconButton>
          <IconButton size="small" onClick={() => handleDelete(params.row._id)}>
            <Delete fontSize="inherit" />
          </IconButton>
        </Stack>
      ),
    },
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Products
      </Typography>

      <Stack direction="row" justifyContent="space-between" sx={{ mb: 2 }}>
        <IconButton onClick={handleRefresh}>
          <Refresh />
        </IconButton>
        <Button variant="contained" startIcon={<Add />} onClick={handleOpenNew}>
          Create New
        </Button>
      </Stack>

      <Box sx={{ height: 500 }}>
      <DataGrid
  rows={products}
  columns={columns}
  pageSize={5}
  rowsPerPageOptions={[5]}
  disableRowSelectionOnClick
  getRowId={(row) => row._id} // Use the _id field as the unique identifier
/>
      </Box>
 {/* Computer Details Dialog */}
 <Dialog open={openComputerDialog} onClose={() => setOpenComputerDialog(false)}>
        <DialogTitle>Computer Details</DialogTitle>
        <DialogContent>
          {selectedComputer && (
            <Grid container spacing={2} mt={1}>
              <Grid item xs={5}>
                <Typography><strong>Brand:</strong></Typography>
              </Grid>
              <Grid item xs={7}>
                <Typography>{selectedComputer.brand}</Typography>
              </Grid>

              <Grid item xs={5}>
                <Typography><strong>Type:</strong></Typography>
              </Grid>
              <Grid item xs={7}>
                <Typography>{selectedComputer.type}</Typography>
              </Grid>

              <Grid item xs={5}>
                <Typography><strong>RAM (GB):</strong></Typography>
              </Grid>
              <Grid item xs={7}>
                <Typography>{selectedComputer.ram}</Typography>
              </Grid>

              <Grid item xs={5}>
                <Typography><strong>Storage (GB):</strong></Typography>
              </Grid>
              <Grid item xs={7}>
                <Typography>{selectedComputer.storage}</Typography>
              </Grid>

              <Grid item xs={5}>
                <Typography><strong>Processor:</strong></Typography>
              </Grid>
              <Grid item xs={7}>
                <Typography>{selectedComputer.processor}</Typography>
              </Grid>

              <Grid item xs={5}>
                <Typography><strong>OS:</strong></Typography>
              </Grid>
              <Grid item xs={7}>
                <Typography>{selectedComputer.os}</Typography>
              </Grid>

              <Grid item xs={5}>
                <Typography><strong>Series:</strong></Typography>
              </Grid>
              <Grid item xs={7}>
                <Typography>{selectedComputer.series}</Typography>
              </Grid>
            </Grid>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenComputerDialog(false)}>Close</Button>
        </DialogActions>
      </Dialog>


      {/* New/Edit Dialog */}
<Dialog open={openDialog} onClose={() => setOpenDialog(false)} fullWidth>
  <DialogTitle>{editingProduct ? 'Edit Product' : 'New Product'}</DialogTitle>
  <DialogContent>
    <Stack spacing={2} mt={1}>
      {/* Name field */}
      <TextField 
        label="Name" 
        value={form.name} 
        onChange={(e) => setForm({ ...form, name: e.target.value })} 
        fullWidth 
      />

      {/* Image upload */}
      <Typography variant="subtitle1">Image Upload</Typography>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files[0];
          if (file) {
            setForm({ ...form, imageFile: file, imagePreview: URL.createObjectURL(file) });
          }
        }}
      />
      
      {/* Image preview */}
      {form.imagePreview && (
        <img
          src={form.imagePreview}
          alt="Preview"
          style={{ width: 150, marginTop: 10, borderRadius: 8 }}
        />
      )}

      {/* Price field */}
      <TextField 
        label="Price" 
        value={form.price} 
        onChange={(e) => setForm({ ...form, price: e.target.value })} 
        fullWidth 
      />

      {/* Description field */}
      <TextField 
        label="Description" 
        value={form.description} 
        onChange={(e) => setForm({ ...form, description: e.target.value })} 
        multiline 
        rows={3} 
        fullWidth 
      />
      
      {/* Computer details section */}
      <Typography variant="subtitle1">Computer Details</Typography>
      <TextField 
        label="Brand" 
        value={form.computer.brand} 
        onChange={(e) => setForm({ ...form, computer: { ...form.computer, brand: e.target.value } })} 
        fullWidth 
      />
      <TextField 
        label="RAM (GB)" 
        value={form.computer.ram} 
        onChange={(e) => setForm({ ...form, computer: { ...form.computer, ram: e.target.value } })} 
        fullWidth 
      />
      <TextField 
        label="Type" 
        value={form.computer.type} 
        onChange={(e) => setForm({ ...form, computer: { ...form.computer, type: e.target.value } })} 
        fullWidth 
      />
      <TextField 
        label="Storage (GB)" 
        value={form.computer.storage} 
        onChange={(e) => setForm({ ...form, computer: { ...form.computer, storage: e.target.value } })} 
        fullWidth 
      />
      <TextField 
        label="Processor" 
        value={form.computer.processor} 
        onChange={(e) => setForm({ ...form, computer: { ...form.computer, processor: e.target.value } })} 
        fullWidth 
      />
      <TextField 
        label="Operating System" 
        value={form.computer.os} 
        onChange={(e) => setForm({ ...form, computer: { ...form.computer, os: e.target.value } })} 
        fullWidth 
      />
      <TextField 
        label="Series" 
        value={form.computer.series} 
        onChange={(e) => setForm({ ...form, computer: { ...form.computer, series: e.target.value } })} 
        fullWidth 
      />

      {/* Inventory ID field */}
      <TextField 
        label="Inventory ID" 
        value={form.inventory} 
        onChange={(e) => setForm({ ...form, inventory: e.target.value })} 
        fullWidth 
      />

      {/* Category ID field */}
      <TextField 
        label="Category ID" 
        value={form.category} 
        onChange={(e) => setForm({ ...form, category: e.target.value })} 
        fullWidth 
      />

      {/* Supplier ID field */}
      <TextField 
        label="Supplier ID" 
        value={form.supplier} 
        onChange={(e) => setForm({ ...form, supplier: e.target.value })} 
        fullWidth 
      />
    </Stack>
  </DialogContent>
  <DialogActions>
    <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
    <Button onClick={handleSave} variant="contained">Save</Button>
  </DialogActions>
</Dialog>

    </Box>
  );
}
