import React from 'react';
import { Box, Typography, Button, styled } from '@mui/material';

const ErrorComponent = () => {
  return (
    <Box className="container">
      <Box className="d-flex flex-column align-items-center justify-content-center" sx={{ height: '80vh' }}>
        <Typography variant="h4" color="error.main" gutterBottom>
          Payment Failed
        </Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          An error occurred during the payment process. Please try again later.
        </Typography>
        <StyledButton variant="contained" color="primary" href="/">
          Return to Home
        </StyledButton>
      </Box>
    </Box>
  );
};

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(3),
}));

export default ErrorComponent;