import { useState } from "react";
import SelectAddress1 from "~/utils/SelectAddress/SelectAddress1";
import { Modal, Box, Typography, TextField, Button } from "@mui/material";
import { updateUserInfo } from "../services/userService";
import { getUserInfo } from "../services/userService";

const NewAddressModal = ({ open, handleClose, onAdd }) => {
  // Lấy user từ Redux nếu cần

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");
  const [detail, setDetail] = useState("");

  const handleAddressChange = (
    selectedCity,
    selectedDistrict,
    selectedWard
  ) => {
    setCity(selectedCity);
    setDistrict(selectedDistrict);
    setWard(selectedWard);
  };

  const handleSubmit = async () => {
    if (!city || !district || !ward || !detail) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    const newAddress = {
      ward: `${detail},${ward}`, 
      district,
      city,
      country: "Việt Nam",
    };

    try {
      const data = await getUserInfo(); // Fetch dữ liệu user mới nhất
      console.log("User data:", data);
      const updatedAddresses = [...(data?.address || []), newAddress];
      console.log("Updated addresses:", updatedAddresses);
      await updateUserInfo({address:updatedAddresses });
      console.log("Địa chỉ đã được cập nhật thành công!");
      onAdd?.(newAddress);
      handleClose();
    } catch (error) {
      console.error("Lỗi cập nhật địa chỉ:", error);
      alert("Cập nhật địa chỉ thất bại!");
    }

    // Reset form
    setName("");
    setPhone("");
    setCity("");
    setDistrict("");
    setWard("");
    setDetail("");
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 500,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 3,
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" mb={2}>
          ĐỊA CHỈ MỚI
        </Typography>

        <Typography variant="subtitle1">Thông tin khách hàng</Typography>
        <TextField
          fullWidth
          label="Nhập Họ Tên"
          value={name}
          onChange={(e) => setName(e.target.value)}
          margin="dense"
        />
        <TextField
          fullWidth
          label="Nhập Số điện thoại"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          margin="dense"
        />

        <Typography variant="subtitle1" mt={2}>
          Địa chỉ
        </Typography>
        <SelectAddress1 onAddressChange={handleAddressChange} />
        <TextField
          fullWidth
          label="Chi tiết địa chỉ"
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
          margin="dense"
        />
        <Button
          fullWidth
          variant="contained"
          color="error"
          sx={{ mt: 2 }}
          onClick={handleSubmit}
        >
          HOÀN THÀNH
        </Button>
      </Box>
    </Modal>
  );
};

export default NewAddressModal;
