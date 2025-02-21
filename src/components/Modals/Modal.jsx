import React from 'react';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button, Tab, Tabs } from '@mui/material';

import PropTypes from 'prop-types';
//icon
import CloseIcon from '@mui/icons-material/Close';
import Login from './Login';
import SignUp from './SignUp';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  minHeight: 500,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 4,
};

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function BasicModal({ open, handleClose }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button onClick={handleClose}>
              <CloseIcon />
            </Button>
          </Box>
          <Tabs value={value} onChange={handleChange} centered variant="fullWidth" sx={{

          }}>
            <Tab label="Đăng nhập" />
            <Tab label="Đăng kí" />
          </Tabs>
          <CustomTabPanel value={value} index={0}>
            <Login />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <SignUp />
          </CustomTabPanel>
        </Box>

      </Modal>
    </div >
  );
}

BasicModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

