import { Box, Typography } from "@mui/material";


import Slider from '@mui/material/Slider';
import { useState } from "react";
import { formatCurrency } from "~/utils/utils";
import ItemFilter from "./ItemFilter";

const FILTER = {
  title: "Loại sản phẩm",
  listFilter: [
    { name: "Laptop", checked: true },
    { name: "Máy tính để bàn", checked: false },
    { name: "Màng hình", checked: false },
  ]
}

function Filter() {
  const [value, setValue] = useState([10000000, 90000000]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const valueLabelFormat = (value) => {
    return formatCurrency(value);
  };
  return (
    <Box sx={{ bgcolor: "#fff", px: 1.5, py: 1, }}>
      <Box >
        <Typography variant="subtitle2">Khoảng giá</Typography>
        <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
          <Typography variant="caption" >{formatCurrency(value[0])}</Typography>
          <Typography>-</Typography>
          <Typography variant="caption" >{formatCurrency(value[1])}</Typography>
        </Box>
        <Slider
          getAriaLabel={() => 'Temperature range'}
          value={value}
          onChange={handleChange}
          size="small"
          max={100000000}
          min={0}
          valueLabelDisplay="auto"
          valueLabelFormat={valueLabelFormat}
        />
      </Box>
      <ItemFilter title={FILTER.title} listFilter={FILTER.listFilter} />
      <ItemFilter title={FILTER.title} listFilter={FILTER.listFilter} />
      <ItemFilter title={FILTER.title} listFilter={FILTER.listFilter} />
    </Box>
  );
}

export default Filter;