import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import { useLocation } from 'react-router-dom';

const QRPayment = () => {
  const location = useLocation();
  const { amount, qrCodeUrl } = location.state || {};

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          width: '80%',
          maxWidth: '800px',
          backgroundColor: '#fff',
          borderRadius: 2,
          boxShadow: 3,
          overflow: 'hidden',
        }}
      >
        {/* Left side: Payment Guide */}
        <Box
          sx={{
            flex: 1,
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            bgcolor: '#f0f4f8',
          }}
        >
          <Typography variant="h5" gutterBottom>
            Payment Instructions
          </Typography>
          <Typography variant="body1" gutterBottom>
            Scan the QR code on the right to proceed with your payment. Please note, this QR code is unique to you and must be verified by an admin.
          </Typography>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            Amount to Pay:
          </Typography>
          <Typography variant="h6" color="primary" gutterBottom>
            {amount} vnđ
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="body2" color="textSecondary">
            After scanning the code, complete the payment in your app. Once your payment is received, our team will review and confirm it. If there are any issues, please reach out to our support team.
          </Typography>
        </Box>

        {/* Right side: QR Code */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: 3,
          }}
        >
          <img
            src={qrCodeUrl}
            alt="QR Code for Payment"
            style={{ width: '80%', maxWidth: '200px', height: 'auto' }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default QRPayment;
