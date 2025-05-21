import { Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router";

export default function NotFoundPage() {
  const navigate = useNavigate();
  const handleBackHome = () => {
    navigate("/");
  };
  return (
    <Container maxWidth="sm" sx={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
    }}>
      <Typography
        variant="h1"
        sx={{
          fontSize: '3.75rem',
          fontWeight: 'bold',
          color: '#1f2937',
          marginBottom: '1rem'
        }}
      >
        404
      </Typography>
      <Typography
        variant="h5"
        sx={{
          color: '#4b5563',
          marginBottom: '1.5rem'
        }}
      >
        Oops! Trang bạn tìm kiếm không tồn tại.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{
          backgroundColor: '#2563eb',
          '&:hover': { backgroundColor: '#1d4ed8' }
        }}
        onClick={handleBackHome}
      >
        Quay lại Trang Chủ
      </Button>
    </Container>
  );
}