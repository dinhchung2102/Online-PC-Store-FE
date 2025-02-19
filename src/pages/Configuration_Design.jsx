import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Header from '../components/Header';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/autoplay';
import 'swiper/css';
import 'swiper/css/pagination'; 
import 'swiper/css/navigation';
import banner1 from '../assets/images/pc-10-trieu-desktop-15-11.webp';
import banner2 from '../assets/images/pc-15-trieu-desktop-15-11.webp';

function Configuration_Design() {
  const banners = [banner1, banner2];

  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <Header />
      <Box sx={{ width: '100%', height: '300px', position: 'relative', overflow: 'hidden' }}>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          style={{
            position: 'relative',
            paddingBottom: '20px',
          }}
        >
          {banners.map((image, index) => (
            <SwiperSlide key={index}>
              <Box sx={{ height: '100%' }}>
                <img
                  src={image}
                  alt={`Banner ${index + 1}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            '& .swiper-pagination-bullet': {
              backgroundColor: '#ffffff', 
              opacity: 1,
            },
            '& .swiper-pagination-bullet-active': {
              backgroundColor: '#007bff', 
            },
          }}
        />
      </Box>
    </Container>
  );
}

export default Configuration_Design;
