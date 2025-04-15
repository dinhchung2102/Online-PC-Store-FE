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
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Add, Delete, Edit, Refresh } from '@mui/icons-material';

let idCounter = 3;

export default function Products() {
  const [Products, setProducts] = useState([
    { id: 1, title: 'Grocery List Item', text: 'Buy more coffee.' },
    { id: 2, title: 'Personal Goal', text: 'Finish reading the book.' },
  ]);
  const [openDialog, setOpenDialog] = useState(false);
  const [editingNote, setEditingNote] = useState(null);
  const [form, setForm] = useState({ title: '', text: '' });

  const handleOpenNew = () => {
    setEditingNote(null);
    setForm({ title: '', text: '' });
    setOpenDialog(true);
  };

  const handleSave = () => {
    if (editingNote) {
      setProducts((prev) =>
        prev.map((note) =>
          note.id === editingNote.id ? { ...note, ...form } : note
        )
      );
    } else {
      setProducts((prev) => [...prev, { id: idCounter++, ...form }]);
    }
    setOpenDialog(false);
  };

  const handleEdit = (note) => {
    setEditingNote(note);
    setForm({ title: note.title, text: note.text });
    setOpenDialog(true);
  };

  const handleDelete = (id) => {
    setProducts((prev) => prev.filter((note) => note.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'Title', flex: 1 },
    { field: 'text', headerName: 'Text', flex: 2 },
    {
      field: 'actions',
      headerName: '',
      width: 100,
      sortable: false,
      renderCell: (params) => (
        <Stack direction="row" spacing={1}>
          <IconButton
            aria-label="edit"
            size="small"
            onClick={() => handleEdit(params.row)}
          >
            <Edit fontSize="inherit" />
          </IconButton>
          <IconButton
            aria-label="delete"
            size="small"
            onClick={() => handleDelete(params.row.id)}
          >
            <Delete fontSize="inherit" />
          </IconButton>
        </Stack>
      ),
    },
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Products</Typography>

      <Stack direction="row" justifyContent="space-between" sx={{ mb: 2 }}>
        <IconButton onClick={() => {}}><Refresh /></IconButton>
        <Button variant="contained" startIcon={<Add />} onClick={handleOpenNew}>
          Create New
        </Button>
      </Stack>

      <Box sx={{ height: 400 }}>
        <DataGrid
          rows={Products}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableRowSelectionOnClick
        />
      </Box>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} fullWidth>
        <DialogTitle>{editingNote ? 'Edit Note' : 'New Note'}</DialogTitle>
        <DialogContent>
          <Stack spacing={2} mt={1}>
            <TextField
              label="Title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              fullWidth
            />
            <TextField
              label="Text"
              value={form.text}
              onChange={(e) => setForm({ ...form, text: e.target.value })}
              multiline
              rows={4}
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
