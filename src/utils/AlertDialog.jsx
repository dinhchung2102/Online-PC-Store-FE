import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Alert from '@mui/material/Alert';

export default function AlertDialog({ state, message, open, handleClose }) {

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent sx={{ padding: 0, minWidth: 300 }}>
          <DialogContentText id="alert-dialog-description">
          <Alert severity={state}>{message}</Alert>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  )
}

AlertDialog.propTypes = {
  state: PropTypes.any,
  message: PropTypes.string,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

