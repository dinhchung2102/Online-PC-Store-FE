import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { callAPI, callApiDistrict, callApiWard, host } from "./callApiProvince";


function SelectAddress() {
  const [ward, setWard] = React.useState([]);
  const [district, setDistrict] = React.useState([]);
  const [provinces, setProvinces] = React.useState([]);

  const [selectedProvince, setSelectedProvince] = React.useState('');
  const [selectDistrict, setSelectDistrict] = React.useState('');
  const [selectWard, setSelectWard] = React.useState('');

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await callAPI('https://provinces.open-api.vn/api/?depth=1');
      setProvinces(data)
    };
    fetchData();
  }, []);

  const handleChangeWard = (event) => {
    setSelectWard(event.target.value);
  };
  const handleChangeDistrict = async (event) => {
    setSelectDistrict(event.target.value);

    try {
      const data = await callApiWard(host + "d/" + `${event.target.value}` + "?depth=2");
      setWard(data.wards);
    } catch (error) {
      console.error("Error fetching wards:", error);
    }
  };
  const handleChangeProvinces = async (event) => {
    console.log(event.target.value);
    setSelectedProvince(event.target.value);

    try {
      const data = await callApiDistrict(host + "p/" + `${event.target.value}` + "?depth=2");
      setDistrict(data.districts);
    } catch (error) {
      console.error("Error fetching districts:", error);
    }
  };
  return (
    <Box sx={{ display: 'flex', gap: 2, justifyContent: 'space-between', width: '100%' }}>
      <FormControl sx={{ width: '100%' }} size="small">
        <InputLabel id="select-ward-label">Phường, xã</InputLabel>
        <Select
          labelId="select-ward-label"
          id="select-ward"
          value={selectWard}
          label="Phường, xã"
          onChange={handleChangeWard}
        >
          {ward && ward.map((ward) => (
            <MenuItem key={ward.code} value={ward.code}>{ward.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ width: '100%' }} size="small">
        <InputLabel id="select-district-label">Quận, huyện</InputLabel>
        <Select
          labelId="select-district-label"
          id="select-district"
          value={selectDistrict}
          label="Quận, huyện"
          onChange={handleChangeDistrict}
        >
          {district && district.map((district) => (
            <MenuItem key={district.code} value={district.code}>{district.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ width: '100%' }} size="small">
        <InputLabel id="select-provinces-label">Tỉnh, thành phố</InputLabel>
        <Select
          labelId="select-provinces-label"
          id="select-provinces"
          value={selectedProvince}
          label="Tỉnh, thành phố"
          onChange={handleChangeProvinces}
        >
          {provinces && provinces.map((province) => (
            <MenuItem key={province.code} value={province.code}>{province.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default SelectAddress;