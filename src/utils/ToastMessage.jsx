import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import PropTypes from 'prop-types';

export default function ToastMessage({ open, handleClose, message }) {
  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        message={message}
        action={action}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      />
    </div>
  );
}

ToastMessage.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};
