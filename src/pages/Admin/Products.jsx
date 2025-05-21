import React, { useEffect, useState, useMemo } from 'react';
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
  const [products, setProducts] = useState([]);
  const [openComputerDialog, setOpenComputerDialog] = useState(false);
  const [selectedComputer, setSelectedComputer] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [categoryNames, setCategoryNames] = useState({});
  const [supplierNames, setSupplierNames] = useState({});
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
useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5002/api/product/get-all', {
             headers: { 'Cache-Control': 'no-cache' }
          });
        setProducts(response.data.data);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };
    fetchProducts();
  }, []);

useEffect(() => {
  const fetchCategoryNames = async () => {
    const missingIds = [...new Set(
      products
        .map(p => p.category)        
        .filter(id => id && !categoryNames[id])
    )];

    if (missingIds.length === 0) return;

    const updatedNames = { ...categoryNames };

    await Promise.all(
      missingIds.map(async (id) => {
        try {
          const res = await axios.get(`http://localhost:5002/api/category/get-by-id/${id}`, {
             headers: { 'Cache-Control': 'no-cache' }
          });
          updatedNames[id] = res.data?.name || 'Unknown';
        } catch (err) {
          console.warn("Failed to fetch category", id);
          updatedNames[id] = 'Unknown';
        }
      })
    );

    setCategoryNames(updatedNames);
  };

  fetchCategoryNames();
}, [products]);
useEffect(() => {
  const fetchSupplierNames = async () => {
    const missingIds = [...new Set(
      products
        .map(p => p.supplier)        
        .filter(id => id && !supplierNames[id])
    )];

    if (missingIds.length === 0) return;

    const updatedNames = { ...supplierNames };

    await Promise.all(
      missingIds.map(async (id) => {
        try {
          const res = await axios.get(`http://localhost:5002/api/supplier/get-by-id/${id}`, {
             headers: { 'Cache-Control': 'no-cache' }
          });
          updatedNames[id] = res.data?.name || 'Unknown';
        } catch (err) {
          console.warn("Failed to fetch supplier", id);
          updatedNames[id] = 'Unknown';
        }
      })
    );

    setSupplierNames(updatedNames);
  };

  fetchSupplierNames();
}, [products]);

  const categoryMap = useMemo(() => categoryNames, [categoryNames]);
  

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
      imageFile: null,
      imagePreview: null,
    });
    setOpenDialog(true);
  };

  const handleSave = async () => {
    const token = localStorage.getItem('access_token');

    try {
      if (editingProduct) {
        const productData = {
          ...form,
          price: parseFloat(form.price),
          computer: {
            ...form.computer,
            ram: parseInt(form.computer.ram, 10),
            storage: parseInt(form.computer.storage, 10),
          },
        };

        await axios.put(
          `http://localhost:5002/api/product/admin/update/${editingProduct._id}`,
          productData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Cache-Control': 'no-cache'
          
            },
          }
        );

        setProducts((prev) =>
          prev.map((p) => (p._id === editingProduct._id ? { ...p, ...productData } : p))
        );
      } else {
        const formData = new FormData();
        
        formData.append('name', form.name);
        formData.append('price', parseFloat(form.price));
        formData.append('description', form.description);
        formData.append('inventory', form.inventory);
        formData.append('category', form.category);
        formData.append('supplier', form.supplier);

        formData.append(
          'computer',
          JSON.stringify({
            ...form.computer,
            ram: parseInt(form.computer.ram, 10),
            storage: parseInt(form.computer.storage, 10),
          })
        );

        if (form.imageFile) {
          console.log(form.imageFile)
         
          formData.append('image', form.imageFile);
        }
      
        const response = await axios.post(
          'http://localhost:5002/api/product/admin/create',
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'multipart/form-data',
            },
          }
        );
console.log("Created product response:", response.data);

        setProducts((prev) => [...prev, response.data]);
      }

      setOpenDialog(false);
    } catch (error) {
      console.error('Error saving product', error.response?.data || error.message);

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
      imageFile: null,
      imagePreview: product.image,
    });
    setOpenDialog(true);
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem('access_token');
    try {
      await axios.delete(`http://localhost:5002/api/product/admin/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
           'Cache-Control': 'no-cache'
        },
      });
      setProducts((prev) => prev.filter((p) => p._id !== id));
    } catch (error) {
      console.error('Error deleting product', error);
    }
  };

  const handleRefresh = async () => {
    try {
      const response = await axios.get('http://localhost:5555/api/product/product/get-all', {
         headers: { 'Cache-Control': 'no-cache' }
      });
      setProducts(response.data.data);
    } catch (error) {
      console.error("Error refreshing products", error);
    }
  };

const columns = [
    { field: '_id', headerName: 'ID', width: 220 },
   {
  field: 'category',
  headerName: 'Category',
  width: 180,
  renderCell: (params) => {
    const categoryId = params.row?.category;
    const name = categoryNames[categoryId];
    return name || 'Unknown';
  }
}
,
    { field: 'supplier', headerName: 'Supplier ID', width: 180,
       renderCell: (params) => {
    const supplierId = params.row?.supplier;
    const name = supplierNames[supplierId];
    return name || 'Unknown';
  }
     },
    { field: 'name', headerName: 'Name', flex: 1 },
    {
      field: 'image',
      headerName: 'Image',
      width: 100,
      renderCell: (params) => (
        <img src={params.value} alt="" style={{ width: 50, height: 50, objectFit: 'cover' }} />
      ),
    },
    {
  field: 'price',
  headerName: 'Price (₫)',
  width: 120,
  renderCell: (params) => {
    return params.value.toLocaleString('vi-VN', {
      style: 'currency',
      currency: 'VND',
      minimumFractionDigits: 0
    });
  }
}
,
    { field: 'description', headerName: 'Description', flex: 2 },
    {
      field: 'computer',
      headerName: 'Computer',
      width: 120,
      renderCell: (params) => (
        <Button size="small" onClick={() => handleOpenComputer(params.row.computer)}>View</Button>
      ),
    },
    {
      field: 'actions',
      headerName: '',
      width: 100,
      renderCell: (params) => (
        <Stack direction="row" spacing={1}>
          <IconButton onClick={() => handleEdit(params.row)}><Edit fontSize="small" /></IconButton>
          <IconButton onClick={() => handleDelete(params.row._id)}><Delete fontSize="small" /></IconButton>
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
    rows={products.map((product) => ({
      ...product,
      id: product._id, // thêm id để DataGrid không lỗi
    }))}
    columns={columns}
    pageSize={5}
    rowsPerPageOptions={[5]}
    disableRowSelectionOnClick
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
            <TextField
              label="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              fullWidth
            />

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
            {form.imagePreview && (
              <img
                src={form.imagePreview}
                alt="Preview"
                style={{ width: 150, marginTop: 10, borderRadius: 8 }}
              />
            )}

            <TextField
              label="Price"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
              fullWidth
            />

            <TextField
              label="Description"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              multiline
              rows={3}
              fullWidth
            />

            <Typography variant="subtitle1">Computer Details</Typography>
            <TextField
              label="Brand"
              value={form.computer.brand}
              onChange={(e) =>
                setForm({ ...form, computer: { ...form.computer, brand: e.target.value } })
              }
              fullWidth
            />
            <TextField
              label="RAM (GB)"
              value={form.computer.ram}
              onChange={(e) =>
                setForm({ ...form, computer: { ...form.computer, ram: e.target.value } })
              }
              fullWidth
            />
            <TextField
              label="Type"
              value={form.computer.type}
              onChange={(e) =>
                setForm({ ...form, computer: { ...form.computer, type: e.target.value } })
              }
              fullWidth
            />
            <TextField
              label="Storage (GB)"
              value={form.computer.storage}
              onChange={(e) =>
                setForm({ ...form, computer: { ...form.computer, storage: e.target.value } })
              }
              fullWidth
            />
            <TextField
              label="Processor"
              value={form.computer.processor}
              onChange={(e) =>
                setForm({ ...form, computer: { ...form.computer, processor: e.target.value } })
              }
              fullWidth
            />
            <TextField
              label="Operating System"
              value={form.computer.os}
              onChange={(e) =>
                setForm({ ...form, computer: { ...form.computer, os: e.target.value } })
              }
              fullWidth
            />
            <TextField
              label="Series"
              value={form.computer.series}
              onChange={(e) =>
                setForm({ ...form, computer: { ...form.computer, series: e.target.value } })
              }
              fullWidth
            />

            <TextField
              label="Inventory ID"
              value={form.inventory}
              onChange={(e) => setForm({ ...form, inventory: e.target.value })}
              fullWidth
            />

            <TextField
              label="Category ID"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              fullWidth
            />

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
          <Button onClick={handleSave} variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
