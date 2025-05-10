import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { callAPI, callApiDistrict, callApiWard, host } from "./callApiProvince";
// import { useSelector } from "react-redux";


// eslint-disable-next-line react/prop-types
function SelectAddress({ setAddress }) {

  // const cart = useSelector((state) => state.cart.cartItems);

  const [wards, setWards] = React.useState([]);
  const [districts, setDistricts] = React.useState([]);
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
    const ward = wards.find(w => w.code === event.target.value);
    setSelectWard(ward);
    setAddress((prev) => ({
      ...prev,

      ward: ward.name,
      district: selectDistrict.name,
      province: selectedProvince.name,
    }));
  };
  const handleChangeDistrict = async (event) => {
    const district = districts.find(d => d.code === event.target.value);
    setSelectDistrict(district);

    try {
      const data = await callApiWard(host + "d/" + `${event.target.value}` + "?depth=2");
      setWards(data.wards);
    } catch (error) {
      console.error("Error fetching wards:", error);
    }
  };
  const handleChangeProvinces = async (event) => {
    const province = provinces.find(p => p.code === event.target.value);
    console.log(province);
    setSelectedProvince(province);

    try {
      const data = await callApiDistrict(host + "p/" + `${event.target.value}` + "?depth=2");
      setDistricts(data.districts);
    } catch (error) {
      console.error("Error fetching districts:", error);
    }
  };
  return (
    <Box sx={{ display: 'flex', gap: 2, justifyContent: 'space-between', width: '100%', flexDirection: 'row-reverse' }}>
      <FormControl sx={{ width: '100%' }} size="small" disabled={!selectDistrict}>
        <InputLabel id="select-ward-label">Phường, xã</InputLabel>
        <Select
          labelId="select-ward-label"
          id="select-ward"
          value={selectWard.code || ''}
          label="Phường, xã"
          onChange={handleChangeWard}
        >
          {wards && wards.map((ward) => (
            <MenuItem key={ward.code} value={ward.code}>{ward.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ width: '100%' }} size="small" disabled={!selectedProvince}>
        <InputLabel id="select-district-label">Quận, huyện</InputLabel>
        <Select
          labelId="select-district-label"
          id="select-district"
          value={selectDistrict.code || ''}
          label="Quận, huyện"
          onChange={handleChangeDistrict}
        >
          {districts && districts.map((district) => (
            <MenuItem key={district.code} value={district.code}>{district.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ width: '100%' }} size="small" >
        <InputLabel id="select-provinces-label">Tỉnh, thành phố</InputLabel>
        <Select
          labelId="select-provinces-label"
          id="select-provinces"
          value={selectedProvince.code || ''}
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