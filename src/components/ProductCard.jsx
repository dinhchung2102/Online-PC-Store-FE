
import PropTypes from 'prop-types';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import { Link } from "react-router";
const ProductCard = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link href='#' target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
        <CardMedia
          component="img"
          height="233"
          image={product.image}
          alt={product.name}
        />
        <CardContent>
          <Typography
            variant="body3"
            component="div"
            sx={{
              fontWeight: 'bold',
              color: 'black',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              maxWidth: '100%'
            }}
          >
            {product.name}
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: 1 }}>
            <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'line-through' }}>
              {product.originalPrice}
            </Typography>
            <Typography variant="body3" color="primary" fontWeight='bold'>
              {product.discountedPrice}
            </Typography>
          </Box>
        </CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '0 16px 16px' }}>
          <Button variant="outlined" color="primary" href='#' target="_blank" sx={{ textTransform: 'none' }}>
            Xem chi tiết
          </Button>
          <Button variant="contained" color="error">
            Chọn
          </Button>
        </Box>
      </Link>
    </Card>
  );
};
ProductCard.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    originalPrice: PropTypes.string.isRequired,
    discountedPrice: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
