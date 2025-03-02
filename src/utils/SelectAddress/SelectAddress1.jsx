import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const host = "https://provinces.open-api.vn/api/";

const SelectAddress1 = ({ onAddressChange }) => {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);

  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedWard, setSelectedWard] = useState(null);

  // Gọi API lấy danh sách tỉnh/thành phố
  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const response = await fetch(`${host}?depth=1`);
        const data = await response.json();
        setProvinces(data);
      } catch (error) {
        console.error("Lỗi khi lấy danh sách tỉnh/thành phố:", error);
      }
    };
    fetchProvinces();
  }, []);

  // Hàm gọi API lấy quận/huyện khi chọn tỉnh/thành phố
  const handleChangeProvince = async (event) => {
    const province = provinces.find(p => p.code === event.target.value);
    setSelectedProvince(province);
    setSelectedDistrict(null); 
    setSelectedWard(null);
    setDistricts([]);
    setWards([]);

    try {
      const response = await fetch(`${host}p/${province.code}?depth=2`);
      const data = await response.json();
      setDistricts(data.districts || []);
    } catch (error) {
      console.error("Lỗi khi lấy danh sách quận/huyện:", error);
    }

    // Cập nhật địa chỉ lên component cha
    onAddressChange(province.name, "", "");
  };

  // Hàm gọi API lấy phường/xã khi chọn quận/huyện
  const handleChangeDistrict = async (event) => {
    const district = districts.find(d => d.code === event.target.value);
    setSelectedDistrict(district);
    setSelectedWard(null);
    setWards([]);

    try {
      const response = await fetch(`${host}d/${district.code}?depth=2`);
      const data = await response.json();
      setWards(data.wards || []);
    } catch (error) {
      console.error("Lỗi khi lấy danh sách phường/xã:", error);
    }

    // Cập nhật địa chỉ lên component cha
    onAddressChange(selectedProvince?.name, district.name, "");
  };

  // Hàm cập nhật phường/xã khi chọn
  const handleChangeWard = (event) => {
    const ward = wards.find(w => w.code === event.target.value);
    setSelectedWard(ward);

    // Cập nhật địa chỉ lên component cha
    onAddressChange(selectedProvince?.name, selectedDistrict?.name, ward.name);
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      {/* Select Tỉnh/Thành phố */}
      <FormControl sx={{ width: "100%" }} size="small">
        <InputLabel id="select-province-label">Tỉnh, thành phố</InputLabel>
        <Select
          labelId="select-province-label"
          value={selectedProvince?.code || ""}
          onChange={handleChangeProvince}
        >
          {provinces.map((province) => (
            <MenuItem key={province.code} value={province.code}>
              {province.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Select Quận/Huyện */}
      <FormControl sx={{ width: "100%" }} size="small" disabled={!selectedProvince}>
        <InputLabel id="select-district-label">Quận, huyện</InputLabel>
        <Select
          labelId="select-district-label"
          value={selectedDistrict?.code || ""}
          onChange={handleChangeDistrict}
        >
          {districts.map((district) => (
            <MenuItem key={district.code} value={district.code}>
              {district.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Select Phường/Xã */}
      <FormControl sx={{ width: "100%" }} size="small" disabled={!selectedDistrict}>
        <InputLabel id="select-ward-label">Phường, xã</InputLabel>
        <Select
          labelId="select-ward-label"
          value={selectedWard?.code || ""}
          onChange={handleChangeWard}
        >
          {wards.map((ward) => (
            <MenuItem key={ward.code} value={ward.code}>
              {ward.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

SelectAddress1.propTypes = {
  onAddressChange: PropTypes.func.isRequired,
};

export default SelectAddress1;
