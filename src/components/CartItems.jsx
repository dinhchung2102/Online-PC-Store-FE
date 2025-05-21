/* eslint-disable react/prop-types */

import PropTypes from "prop-types";
import { Box, Typography, Button, ButtonGroup } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { formatCurrency } from "../utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { updateQuantity, removeFromCart } from "~/redux/cartSlice";
import { updateCart, removeProductFromCart } from "~/services/cartService";

const CartItem = ({ cart }) => {
  const userInfo = useSelector((state) => state.user.userInfo);

  console.log("cart", cart);
  const dispatch = useDispatch();

  const handleDecrease = async () => {
    dispatch(updateQuantity({ productId: cart.productId, amountProduct: cart.amountProduct - 1 }));
    const response = await updateCart(userInfo.id, cart.productId, cart.amountProduct - 1, cart.priceProduct * (cart.amountProduct - 1));
    console.log("Response:", response); // Kiểm tra phản hồi từ server
  };

  const handleIncrease = async () => {
    dispatch(updateQuantity({ productId: cart.productId, amountProduct: cart.amountProduct + 1 }));
    const response = await updateCart(userInfo.id, cart.productId, cart.amountProduct + 1, cart.priceProduct * (cart.amountProduct + 1));
    console.log("Response:", response); // Kiểm tra phản hồi từ server
  };

  const handleDelete = async () => {
    dispatch(removeFromCart(cart.productId));
    const response = await removeProductFromCart(cart._id);
    console.log("Response:", response); // Kiểm tra phản hồi từ server
  }
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingBottom: 0,
        gap: 3,
        marginBottom: 2,
        height: '100px'
      }}
    >
      {/* Product Image */}
      <Box
        sx={{
          height: '100px',
          width: '100px',
          border: '1px solid #ddd'
        }}
      >
        <img
          src={cart.imageProduct}
          alt="Product"
          style={{
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </Box>

      {/* Product Info */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-around',
          gap: 1,
          flexGrow: 1,
        }}
      >
        <Typography sx={{ fontWeight: 'bold' }}>
          {cart.nameProduct}
        </Typography>
        <Typography sx={{ color: '#DF062D' }}>
          Giá: {formatCurrency(cart.priceProduct)}
        </Typography>
        <Typography sx={{ fontWeight: 'thin', color: '#333' }}>
          Tổng tiền: {formatCurrency(cart.priceProduct * cart.amountProduct)}
        </Typography>
      </Box>

      {/* Actions */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          justifyContent: 'space-around',
          gap: 1,
        }}
      >
        <Button
          variant="outlined"
          size="small"
          color="error"
          startIcon={<DeleteIcon />}
          onClick={handleDelete}
        >
          Xóa
        </Button>
        <ButtonGroup size="small" aria-label="Small button group">
          <Button color="secondary" onClick={handleDecrease}>-</Button>
          <Button color="secondary">{cart.amountProduct}</Button>
          <Button color="secondary" onClick={handleIncrease}>+</Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
};
CartItem.propTypes = {
  cart: PropTypes.shape({
    imageProduct: PropTypes.string.isRequired,
    nameProduct: PropTypes.string.isRequired,
    priceProduct: PropTypes.number.isRequired,
    amountProduct: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;
