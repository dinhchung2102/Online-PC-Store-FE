import React from "react";
import { Grid, Box, Typography, Button, ButtonGroup } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const CartItem = ({ imgProduct }) => {
  const [quantity, setQuantity] = React.useState(1);

  const handleDecrease = () => {
    setQuantity((prev) => Math.max(prev - 1, 0));
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };
  return (
    <Grid
      container
      spacing={3}
      sx={{ paddingBottom: 0 }}
    >
      <Grid size={{ xs: 2 }} >
        <Box
          sx={{
            width: "8vh",
            height: "8vh",
            overflow: "hidden",
          }}
        >
          <img
            src={imgProduct}
            alt="Product"
            style={{
              height: "100%",
              width: "auto",
            }}
          />
        </Box>
      </Grid>
      <Grid

        size={{ xs: 2 }}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-around",
          gap: 1,
        }}
      >
        <Typography sx={{ fontWeight: "bold" }}>
          Laptop ASUS Expertbook P1403CVA-i516-50W
        </Typography>
        <Typography sx={{ color: "#DF062D" }}>
          12.999.000đ
        </Typography>
      </Grid>
      <Grid

        size={{ xs: 2 }}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          justifyContent: "space-around",
          gap: 1,
        }}
      >
        <Button
          variant="outlined"
          size="small"
          color="error"
          startIcon={<DeleteIcon />}
        >
          Xóa
        </Button>
        <ButtonGroup size="small" aria-label="Small button group">
          <Button color="secondary" onClick={handleDecrease}>-</Button>
          <Button color="secondary" >{quantity}</Button>
          <Button color="secondary" onClick={handleIncrease}>+</Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
};

export default CartItem;
