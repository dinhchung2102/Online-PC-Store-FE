/* eslint-disable react/prop-types */

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { formatCurrency } from "../utils/utils";
import React from "react";
import Divider from "@mui/material/Divider";
import Button from '@mui/material/Button';

/* eslint-disable no-unused-vars */
export default function CardOrder({ order }) {
  return (
    <Box sx={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', mb: 2, boxShadow: '1px 1px 8px 2px rgba(0,0,0,0.1)' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid #ccc', borderColor: 'primary.main' }}>
        <Typography sx={{ fontWeight: 'bold' }} variant="subtitle1">Mã đơn hàng: {order._id}</Typography>
        <Typography sx={{ fontWeight: 'bold' }} variant="subtitle1">Trạng thái: {order.statusOrder}</Typography>
      </Box>
      <Box>
        {order.orderDetails.map((item, index) => (
          <React.Fragment key={item.productId || index}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', alignItems: 'center' }}>
              <Box>
                <img src={item.image} alt={item.name} style={{ width: '80px', height: '80px', borderRadius: '8px' }} />
              </Box>
              <Box sx={{ flex: 1, marginLeft: '20px' }}>
                <Typography sx={{ fontWeight: 'bold' }} variant="body1">{item.name}</Typography>
                <Typography sx={{ color: '#333' }} variant="span">Số lượng: {item.amount}</Typography>
              </Box>
              <Box>
                <Typography variant="body1">Tổng tiền: {formatCurrency(item.totalPrice)}</Typography>
              </Box>
            </Box>
            {/* Hiển thị Divider nếu không phải là sản phẩm cuối cùng */}
            {index < order.orderDetails.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </Box>
      <Box sx={{ borderTop: '2px solid #ccc', borderColor: 'primary.main' }}>
        <Box sx={{ textAlign: 'right', mt: 1 }}>
          <Typography variant="h6">
            Tổng tiền:
            <Typography variant="span" sx={{ color: 'primary.main' }}> {formatCurrency(order.totalPrice)}</Typography>
          </Typography>
        </Box>
        <Box sx={{ mt: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography>Phương thức thanh toán: {order.paymentMethod}</Typography>
          <Box sx={{ display: 'flex', gap: 1}}>
            <Button variant="contained">Đã nhận hàng</Button>
            <Button variant="outlined">Yêu cầu hoàn tiền</Button>
            <Button variant="outlined">Liên hệ shop</Button>
          </Box>
        </Box>
      </Box>
    </Box>)
}

// mã dơn hàng
// trạng thái
// số lượng sản phảm
// tổng tiền