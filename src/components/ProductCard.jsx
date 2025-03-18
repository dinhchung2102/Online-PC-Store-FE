
import PropTypes from 'prop-types';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { Link } from "react-router";
import StarIcon from '@mui/icons-material/Star';
import { formatCurrency } from '~/utils/utils';

const ProductCard = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 300, height: '100%' }}>
      <Link href='#' target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
        <CardMedia
          height="300"
          component="img"
          image={product.image}
          alt={product.name}
        />
        <CardContent sx={{ bgcolor: 'white', padding: 2, '&:last-child': { pb: 2 }, height: '100%' }}>
          <Typography
            variant="body3"
            component="div"
            sx={{
              fontWeight: 'bold',
              color: 'black',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              maxWidth: '100%'
            }}
          >
            {product.name}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', my: 1 }}>
            <Typography variant="body3" color="primary" fontWeight='bold'>
              {formatCurrency(product.price)}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', my: 1, }}>
            <Typography sx={{ fontWeight: 'bold', color: '#ff8a00' }} component="span" >0.0</Typography>
            <StarIcon sx={{ color: '#ff8a00' }} />
            <Typography sx={{ color: 'black', ml: 1.5 }} component="span" >(0 đánh giá)</Typography>
          </Box>
        </CardContent>

      </Link>
    </Card>
  );
};
ProductCard.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
