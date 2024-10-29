import React from 'react';
import { Box, Typography, Button, styled } from '@mui/material';

const PaypalIntegration = () => {
  return (
    <Box className="container">
      <Typography variant="h5" className="text-center mt-5">
        PayPal Payment Integration
      </Typography>
      <form method="post" action="/payment/create" className="mt-5 card p-3">
        <Box className="d-flex justify-content-center">
          <Button type="submit" variant="contained" className="btn btn-primary">
            Pay with PayPal
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default PaypalIntegration;