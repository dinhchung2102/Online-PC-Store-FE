import * as React from "react";
import {
  Container,
  Box,
  Step,
  Stepper,
  StepLabel,
  Button,
  Typography,
  Divider,
} from "@mui/material";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import AddCardIcon from "@mui/icons-material/AddCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Stack from "@mui/material/Stack";

import CartItem from "../components/CartItems";
import PayInformation from "../components/PayInformation";
import CheckoutForm from "../components/CheckOutForm";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import BasicModal from "~/components/Modals/Modal";
import { useEffect } from "react";
import { fetchCart, clearCart } from "~/redux/cartSlice";
import { updateUserInfo } from "../services/userService";
import { createOrder } from "../services/orderService";
import { deleteAllCartItems } from "../services/cartService";


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

  const dispatch = useDispatch();

  // modal login
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  // get user info from redux
  const userInfo = useSelector((state) => state.user.userInfo);

  // get cart from redux
  const carts = useSelector((state) => state.cart.cartItems);
  console.log("carts", carts);

  useEffect(() => {
    console.log('chạy vào đây nè ')
    dispatch(fetchCart(userInfo.id));
  }, [dispatch, userInfo.id]);

  // checkout form
  // set phuong thuc thanh toan
  const [paymentMethod, setPaymentMethod] = React.useState("CASH");
  // console.log('paymentMethod', paymentMethod);
  // eslint-disable-next-line no-unused-vars
  const [shippingPrice, setShippingPrice] = React.useState(0);

  const navigate = useNavigate()
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  // const navigate = useNavigate();
  // const [quantity, setQuantity] = React.useState(1); // Giá trị mặc định là 1

  // const handleDecrease = () => {
  //   setQuantity((prev) => Math.max(prev - 1, 0));
  // };

  // const handleIncrease = () => {
  //   setQuantity((prev) => prev + 1);
  // };

  // const handleUpdateInfoUser = 

  const handleNav = () => {
    // reset form nếu cần
    navigate("/products/all");
    window.location.reload(); // điều hướng tới trang sản phẩm
  };

  // const isStepOptional = (step) => {
  //   return step === 1;
  // };

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

  // const handleSkip = () => {
  //   if (!isStepOptional(activeStep)) {
  //     throw new Error("You can't skip a step that isn't optional.");
  //   }

  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //   setSkipped((prevSkipped) => {
  //     const newSkipped = new Set(prevSkipped.values());
  //     newSkipped.add(activeStep);
  //     return newSkipped;
  //   });
  // };

  // const handleReset = () => {
  //   setActiveStep(0);
  // };

  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        pb: 5,
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
          width: { xs: "90%", sm: "80%", md: "70%", lg: "60%" },
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
            // const labelProps = {};
            // if (isStepOptional(index)) {
            // }
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
        {userInfo.id === null ? (
          <Box sx={{ width: "100%", padding: 5, textAlign: 'center' }}>
            <Button variant="contained" onClick={() => handleOpenModal()}>Vui lòng đăng nhập để xem giỏ hàng của bạn</Button>
          </Box>
        ) : (
          <Box>
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
                <CheckoutForm _setPaymentMethod={setPaymentMethod} />
                {/* TODO: Hiển thị thông tin đơn hàng hoặc tóm tắt */}
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Button color="inherit" onClick={handleBack} sx={{ mr: 1 }}>
                    Quay lại
                  </Button>
                  <Box sx={{ flex: "1 1 auto" }} />
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={async () => {
                      await createOrder(userInfo.id, carts, shippingPrice, paymentMethod)
                      handleNext()
                      dispatch(clearCart())
                      await deleteAllCartItems(carts)
                    }}
                  >
                    Hoàn tất đặt hàng
                  </Button>
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
                  <Button variant="contained" color="primary"
                    onClick={() => {
                      handleNext()
                      console.log("userInfo", userInfo);
                      updateUserInfo(userInfo)
                    }}
                  >Tiếp tục</Button>
                </Box>
              </React.Fragment>
            ) : (
              // Bước đầu: Giỏ hàng
              <React.Fragment>
                <Box sx={{ width: "100%", padding: 5 }}>
                  {carts.length > 0 ? (
                    <Stack>
                      <Box>
                        {carts.map((cart, index) => (
                          <Box key={cart._id}>
                            <CartItem cart={cart} />
                            {index < carts.length - 1 && <Divider sx={{ my: 2 }} />}
                          </Box>
                        )
                        )}
                      </Box>
                    </Stack>
                    //{index < products.length - 1 && <Divider sx={{ my: 2 }} />}
                  ) : (
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
                        Giỏ hàng của bạn đang trống!
                      </Typography>
                    </Box>

                  )}
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
                  <Button disabled={carts.length < 1 ? true : false} variant="contained" color="primary" onClick={handleNext}>
                    Tiến hành thanh toán
                  </Button>
                </Box>

              </React.Fragment>
            )}
          </Box>
        )}
      </Box>
      <Footer />
      <BasicModal open={openModal} handleClose={handleCloseModal} />
    </Container>
  );
}

export default Shopping_Cart;
