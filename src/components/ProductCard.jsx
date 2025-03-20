
import PropTypes from 'prop-types';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { useNavigate } from "react-router";
import StarIcon from '@mui/icons-material/Star';
import { formatCurrency } from '~/utils/utils';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <Card
      onClick={() => navigate(`/detailProduct/${product._id}`, { state: { product } })}
      sx={{
        Width: '100%',
        height: '100%',
        cursor: 'pointer',
        transition: '0.2s all',
        '&:hover': { transform: 'translateY(-2px)' },
        '&:hover img': { transform: 'scale(1.02)' }
      }}>
      {/* <Link href='#' target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}> */}
      <CardMedia
        height="260"
        component="img"
        image={product.image}
        alt={product.name}
        sx={{ transition: '0.2s all' }}
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

      {/* </Link> */}
    </Card>
  );
};
ProductCard.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
