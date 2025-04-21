import React, { useState } from 'react';
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
  Chip,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Add, Delete, Edit, Refresh } from '@mui/icons-material';

let idCounter = 3;

export default function Products() {
  const [products, setProducts] = useState([
    {
      id: 1,
      product_id: 5,
      category_id: '67418dade421844d6aa97d9d',
      name: 'Leather Jacket JKL',
      image: 'https://ash.vn/cdn/shop/files/ao-khoac-the-thao-waac-nam-essential-windshield-den-m-golf-360_800x.webp?v=1694907038',
      price: 149.99,
      stars: 4.6,
      description: 'Stylish leather jacket made from premium quality material.',
      size: ['S', 'M', 'L', 'XL', 'XXL'],
      color: ['red', 'yellow', 'black'],
    },
  ]);

  const [openDialog, setOpenDialog] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [form, setForm] = useState({
    product_id: '',
    category_id: '',
    name: '',
    image: '',
    price: '',
    stars: '',
    description: '',
    size: '',
    color: '',
  });

  const handleOpenNew = () => {
    setEditingProduct(null);
    setForm({
      product_id: '',
      category_id: '',
      name: '',
      image: '',
      price: '',
      stars: '',
      description: '',
      size: '',
      color: '',
    });
    setOpenDialog(true);
  };

  const handleSave = () => {
    const productData = {
      ...form,
      id: editingProduct ? editingProduct.id : idCounter++,
      size: form.size.split(',').map((s) => s.trim()),
      color: form.color.split(',').map((c) => c.trim()),
      price: parseFloat(form.price),
      stars: parseFloat(form.stars),
    };

    if (editingProduct) {
      setProducts((prev) =>
        prev.map((p) => (p.id === editingProduct.id ? productData : p))
      );
    } else {
      setProducts((prev) => [...prev, productData]);
    }

    setOpenDialog(false);
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setForm({
      ...product,
      size: product.size.join(', '),
      color: product.color.join(', '),
    });
    setOpenDialog(true);
  };

  const handleDelete = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const columns = [
    { field: 'product_id', headerName: 'Product ID', width: 100 },
    { field: 'category_id', headerName: 'Category ID', width: 200 },
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
    }
    ,
    { field: 'price', headerName: 'Price ($)', width: 100 },
    { field: 'stars', headerName: 'Stars', width: 100 },
    { field: 'description', headerName: 'Description', flex: 2 },
    {
      field: 'size',
      headerName: 'Size',
      width: 120,
      renderCell: (params) =>
        params.value.map((s, i) => <Chip key={i} label={s} size="small" sx={{ mr: 0.5 }} />),
    },
    {
      field: 'color',
      headerName: 'Color',
      width: 120,
      renderCell: (params) =>
        params.value.map((c, i) => <Chip key={i} label={c} size="small" sx={{ mr: 0.5 }} />),
    },
    {
      field: 'actions',
      headerName: '',
      width: 100,
      sortable: false,
      renderCell: (params) => (
        <Stack direction="row" spacing={1}>
          <IconButton size="small" onClick={() => handleEdit(params.row)}>
            <Edit fontSize="inherit" />
          </IconButton>
          <IconButton size="small" onClick={() => handleDelete(params.row.id)}>
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
        <IconButton onClick={() => {}}>
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
        />
      </Box>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} fullWidth>
        <DialogTitle>{editingProduct ? 'Edit Product' : 'New Product'}</DialogTitle>
        <DialogContent>
          <Stack spacing={2} mt={1}>
            <TextField label="Product ID" value={form.product_id} onChange={(e) => setForm({ ...form, product_id: e.target.value })} fullWidth />
            <TextField label="Category ID" value={form.category_id} onChange={(e) => setForm({ ...form, category_id: e.target.value })} fullWidth />
            <TextField label="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} fullWidth />
            <TextField label="Image URL" value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} fullWidth />
            <TextField label="Price" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} fullWidth />
            <TextField label="Stars" value={form.stars} onChange={(e) => setForm({ ...form, stars: e.target.value })} fullWidth />
            <TextField label="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} multiline rows={3} fullWidth />
            <TextField label="Sizes (comma separated)" value={form.size} onChange={(e) => setForm({ ...form, size: e.target.value })} fullWidth />
            <TextField label="Colors (comma separated)" value={form.color} onChange={(e) => setForm({ ...form, color: e.target.value })} fullWidth />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button onClick={handleSave} variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
