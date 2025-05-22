import React, { useEffect, useState } from "react";
import axios from 'axios';
import {
  Box,
  Typography,
  Chip,
  Stack,
  CircularProgress,
  Avatar,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const getStatusColor = (status) => {
  switch (status) {
    case "ACTIVE":
      return "success";
    case "INACTIVE":
      return "default";
    case "BANNED":
      return "error";
    default:
      return "default";
  }
};

const UserPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortModel, setSortModel] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('access_token');
      try {
        const res = await axios.get("http://localhost:5001/api/user/admin/get-all", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = res.data;

        if (data && Array.isArray(data.data)) {
          const formatted = data.data.map((item, index) => ({
            id: item._id || index,
            username: item.username,
            fullname: item.fullname || "N/A",
            email: item.email || "N/A",
            status: item.status || "UNKNOWN",
            gender: item.gender || "N/A",
            phone: item.phone || "N/A",
            avatar: item.avatar || "",
          }));
          setUsers(formatted);
        }
      } catch (error) {
        console.error("Failed to fetch users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const columns = [
    {
      field: "avatar",
      headerName: "Avatar",
      width: 100,
      renderCell: (params) => (
        <Avatar alt="User Avatar" src={params.value || undefined} />
      ),
    },
    { field: "username", headerName: "Username", flex: 1 },
    { field: "fullname", headerName: "Full Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1.5 },
    { field: "phone", headerName: "Phone", flex: 1 },
    { field: "gender", headerName: "Gender", width: 120 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      renderCell: (params) => (
        <Chip label={params.value} color={getStatusColor(params.value)} />
      ),
    },
  ];

  return (
    <Box p={4}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        User List
      </Typography>

      <Box sx={{ height: 550 }}>
        {loading ? (
          <Stack alignItems="center" justifyContent="center" sx={{ height: "100%" }}>
            <CircularProgress />
          </Stack>
        ) : (
          <DataGrid
            rows={users}
            columns={columns}
            pageSize={7}
            rowsPerPageOptions={[7]}
            disableRowSelectionOnClick
            sortingOrder={["asc", "desc"]}
            sortModel={sortModel}
            onSortModelChange={(model) => setSortModel(model)}
          />
        )}
      </Box>
    </Box>
  );
};

export default UserPage;
