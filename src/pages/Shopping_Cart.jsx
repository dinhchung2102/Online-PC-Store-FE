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
import Grid from "@mui/material/Unstable_Grid2";
import imgProduct from "../assets/images/expertbook-p1-p1403cva-i5se16-50w__8__f9120f92bbcf40409391d8b907b7c630_0b12de755584415689fecd42c6a95e6a.webp";
import DeleteIcon from "@mui/icons-material/Delete";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useSelector } from "react-redux";
import BasicModal from "~/components/Modals/Modal";

const buttons = [
  <Button key="one" color="secondary">
    -
  </Button>,
  <Button key="two" color="secondary">
    1
  </Button>,
  <Button key="three" color="secondary">
    +
  </Button>,
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "9vh",
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

  // modal login
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  // get user info from redux
  const UserInfo = useSelector((state) => state.user.userInfo);
  console.log(UserInfo);

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

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

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <Box>
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
            // height: "50vh",
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
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you are finished
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleReset}>Tiếp tục mua sắm</Button>
              </Box>
            </React.Fragment>
          ) : (
            ///
            <Box>
              {
                UserInfo.id !== null ? (
                  <React.Fragment>
                    <Box sx={{ width: "100%", padding: 5 }}>
                      <Stack spacing={2}>
                        <Item>
                          <Grid
                            container
                            spacing={3}
                            sx={{ backgroundColor: "#f0f0f0", paddingBottom: 0 }}
                          >
                            <Grid item xs={2}>
                              <Box
                                sx={{ width: "8vh", height: "8vh", overflow: "hidden" }}
                              >
                                <img
                                  src={imgProduct}
                                  alt="Product"
                                  style={{
                                    height: "100%",
                                    width: "auto", // Make sure the image covers the container without stretching
                                  }}
                                />
                              </Box>
                            </Grid>
                            <Grid
                              item
                              xs={7}
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start", // Align text to the left
                                justifyContent: "space-around", // Align at the top
                                gap: 1,
                              }}
                            >
                              <Typography sx={{ fontWeight: "bold", textAlign: "left" }}>
                                Laptop ASUS Expertbook P1403CVA-i516-50W
                              </Typography>
                              <Typography sx={{ color: "#DF062D" }}>
                                Giá: 12.999.000đ
                              </Typography>
                            </Grid>

                            <Grid
                              item
                              xs={3}
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-end", // Align text to the left
                                justifyContent: "space-around", // Align at the top
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
                                {buttons}
                              </ButtonGroup>
                            </Grid>
                          </Grid>
                        </Item>
                      </Stack>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                      <Button
                        color="inherit"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        sx={{ mr: 1 }}
                      >
                        Tiếp tục mua sắm
                      </Button>
                      <Box sx={{ flex: "1 1 auto" }} />
                      {/* {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )} */}
                      <Button onClick={handleNext}>
                        {activeStep === steps.length - 1
                          ? "Hoàn tất đặt hàng"
                          : "Đặt hàng"}
                      </Button>
                    </Box>
                  </React.Fragment>
                ) : (
                  <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", py: 4 }}>
                    <Button onClick={() => handleOpenModal()} variant="outlined">Vui lòng đăng nhập để thêm sản phẩm</Button>
                  </Box>
                )
              }
            </Box>

          )}
        </Box>
      </Container>
      <Footer />
      <BasicModal open={openModal} handleClose={handleCloseModal} />
    </Box>
  );
}

export default Shopping_Cart;
