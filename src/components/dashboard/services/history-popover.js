import React from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Typography
} from '@mui/material';
import PropTypes from 'prop-types';

export const HistoryPopover = (props) => {
  const { onClose, open, data, ...other } = props;

  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      onClose={onClose}
      open={open}
      {...other}>
      <Box
        sx={{
          alignItems: 'center',
          backgroundColor: 'primary.main',
          color: 'primary.contrastText',
          display: 'flex',
          justifyContent: 'space-between',
          px: 3,
          py: 2
        }}
      >
        <Typography variant="h6">
          Details
        </Typography>
      </Box>
      <DialogContent sx={{ height: '150px' }}>
        <Box sx={{ fontWeight: 'bold', mb: 2 }}>
          Year range - 1990-2000
        </Box>
        <Box>
          Information - {data}
        </Box>

        <Button
        color="primary"
        variant="outlined"
        onClick={onClose}
        align="right"
        sx={{
            position: 'absolute',
            bottom: 20,
            right: 20
        }}
      >
       Close
      </Button>
      </DialogContent>
    </Dialog>
  );
};

HistoryPopover.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool
};
