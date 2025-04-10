import * as React from "react";
import {
  Container,
  Box,
  Step,
  Stepper,
  StepLabel,
  Button,
  Typography,
  Paper,
  Input,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Checkbox
} from "@mui/material";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Check from "@mui/icons-material/Check";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import AddCardIcon from "@mui/icons-material/AddCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Stack from "@mui/material/Stack";
import { Remove, Add, Delete } from "@mui/icons-material";
import imgProduct from "../assets/images/expertbook-p1-p1403cva-i5se16-50w__8__f9120f92bbcf40409391d8b907b7c630_0b12de755584415689fecd42c6a95e6a.webp";
import DeleteIcon from "@mui/icons-material/Delete";
import ButtonGroup from "@mui/material/ButtonGroup";
import CartItem from "../components/CartItems";
import PayInformation from "../components/PayInformation";
import CheckoutForm from "../components/CheckOutForm";
import { useNavigate } from "react-router";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#f0f0f0",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "auto",
}));
const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));
const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <ShoppingCartIcon />,
    2: <PersonSearchIcon />,
    3: <AddCardIcon />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  completed: PropTypes.bool,
  icon: PropTypes.node,
};

const steps = ["Giỏ hàng", "Thông tin đặt hàng", "Thanh toán"];

function Shopping_Cart() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  // const navigate = useNavigate();
  const [quantity, setQuantity] = React.useState(1); // Giá trị mặc định là 1

const handleDecrease = () => {
  setQuantity((prev) => Math.max(prev - 1, 0));
};

const handleIncrease = () => {
  setQuantity((prev) => prev + 1);
};
const handleNav = () => {
  // reset form nếu cần
  navigate("/products/all");
  window.location.reload(); // điều hướng tới trang sản phẩm
};

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };
  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
      }}
    >
      <Box width="100%">
        <Header />
      </Box>
      <Box
        sx={{
          width: "50%",
          height: "auto",
          marginTop: 5,
          padding: 2,
          backgroundColor: "#ffffff",
        }}
      >
        <Stepper
          alternativeLabel
          activeStep={activeStep}
          connector={<ColorlibConnector />}
        >
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label}>
                <StepLabel StepIconComponent={ColorlibStepIcon}>
                  {label}
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
  // Bước cuối: hoàn tất
  <React.Fragment>
    <Box sx={{ width: "100%", padding: 5, textAlign: 'center' }}>
    <Typography sx={{ mt: 2, mb: 1 }}>
      Thanh toán thành công!
    </Typography>
    </Box>
    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
      <Box sx={{ flex: "1 1 auto" }} />
      <Button variant="contained" color="primary" onClick={handleNav}>Tiếp tục mua sắm</Button>
    </Box>
  </React.Fragment>
) : activeStep === steps.length - 1 ? (
  // Bước xác nhận đặt hàng
  <React.Fragment>
    <CheckoutForm />
    {/* TODO: Hiển thị thông tin đơn hàng hoặc tóm tắt */}
    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
      <Button color="inherit" onClick={handleBack} sx={{ mr: 1 }}>
        Quay lại
      </Button>
      <Box sx={{ flex: "1 1 auto" }} />
      <Button variant="contained" color="primary" onClick={handleNext}>Hoàn tất đặt hàng</Button>
    </Box>
  </React.Fragment>
) : activeStep === steps.length - 2 ? (
  // Bước nhập thông tin giao hàng
  <React.Fragment>
    <PayInformation />
    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
      <Button color="inherit" onClick={handleBack} sx={{ mr: 1 }}>
        Quay lại
      </Button>
      <Box sx={{ flex: "1 1 auto" }} />
      <Button  variant="contained" color="primary" onClick={handleNext}>Tiếp tục</Button>
    </Box>
  </React.Fragment>
) : (
  // Bước đầu: Giỏ hàng
  <React.Fragment>
    <Box sx={{ width: "100%", padding: 5 }}>
      <Stack spacing={3}>
        {[1, 2].map((item, index) => (
          <Item key={index}>
            <CartItem imgProduct={imgProduct} />
          </Item>
        ))}
      </Stack>
    </Box>

    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
  <Button
    color="inherit"
    onClick={activeStep === 0 ? handleNav : handleBack}
    sx={{ mr: 1 }}
  >
    Tiếp tục mua sắm
  </Button>
  <Box sx={{ flex: "1 1 auto" }} />
  <Button variant="contained" color="primary" onClick={handleNext}>
    Tiến hành thanh toán
  </Button>
</Box>

  </React.Fragment>
)}
      </Box>
      <Footer />
    </Container>
  );
}

export default Shopping_Cart;