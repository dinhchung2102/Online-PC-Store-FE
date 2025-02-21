import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";


function SelectAddress() {
  const [ward, setWard] = React.useState('');
  const [district, setDistrict] = React.useState('');
  const [city, setCity] = React.useState('');

  const handleChangeWard = (event) => {
    setWard(event.target.value);
  };
  const handleChangeDistrict = (event) => {
    setDistrict(event.target.value);
  };
  const handleChangeCity = (event) => {
    setCity(event.target.value);
  };
  return (
    <Box sx={{ display: 'flex', gap: 2, justifyContent: 'space-between', width: '100%' }}>
      <FormControl sx={{ width: '100%' }} size="small">
        <InputLabel id="select-ward-label">Phường, xã</InputLabel>
        <Select
          labelId="select-ward-label"
          id="select-ward"
          value={ward}
          label="Phường, xã"
          onChange={handleChangeWard}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ width: '100%' }} size="small">
        <InputLabel id="select-district-label">Quận huyện</InputLabel>
        <Select
          labelId="select-district-label"
          id="select-district"
          value={district}
          label="Quận, huyện"
          onChange={handleChangeDistrict}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ width: '100%' }} size="small">
        <InputLabel id="select-city-label">Tỉnh, thành phố</InputLabel>
        <Select
          labelId="select-city-label"
          id="select-city"
          value={city}
          label="Tỉnh, thành phố"
          onChange={handleChangeCity}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default SelectAddress;