import React from "react";
import { Box, Button, Grid, Typography, Paper, Divider } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';

const PricingCard = ({ title, price, duration, features, bestDeal, normalDeal }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        border: '3px solid #DDC7BB',
        borderRadius: "20px",
        position: "relative",
        // backgroundColor: bestDeal ? "#f7e7d9" : "#f5f5f5",
        backgroundColor: "#f5f5f5",
        height: bestDeal ? "520px" : "460px", // Set custom height for the best deal
        overflow: 'hidden',
        display: 'flex',          // Sử dụng flexbox
        flexDirection: 'column',  // Đặt các phần tử theo cột
      }}
    >
      {bestDeal && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            backgroundColor: "#4F3527",
            color: "#fff",
            px: 1.5,
            py: 0.5,
            borderRadius: "4px",
            fontWeight: "bold",
          }}
        >
          SAVE MORE
        </Box>
      )}

      {normalDeal && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            backgroundColor: "#4F3527",
            color: "#fff",
            px: 1.5,
            py: 0.5,
            borderRadius: "4px",
            fontWeight: "bold",
          }}
        >
          SAVE
        </Box>
      )}


      <Box sx={{ backgroundColor: '#DDC7BB', p: 2, }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2, color: "#4F3527" }}>
          {title}
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#4F3527" }}>
          {price}
        </Typography>
        <Typography variant="subtitle1" sx={{ color: "#4F3527", mb: 2, fontWeight: 'bold' }}>
          {duration}
        </Typography>
      </Box>
      <Box mt={1} p={2}>
        {features.map((feature, index) => (
          <React.Fragment key={index}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between', // Đẩy icon tick ra cuối
                mt: 2
              }}
            >
              <Typography variant="body1" sx={{ color: '#4F3527', fontWeight: 'bold' }}>
                {feature}
              </Typography>
              <CheckIcon sx={{ color: '#4F3527', ml: 2 }} /> {/* Icon tick */}
            </Box>
            <Divider sx={{ backgroundColor: '#DDC7BB', borderBottomWidth: 3 }} />
          </React.Fragment>
        ))}
      </Box>
      <Box sx={{ padding: 2, mt: 'auto', background: '#DDC7BB' }}>
        <Button
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: "#4F3527",
            borderRadius: '20px',
            "&:hover": {
              backgroundColor: "#5e4339",
            },
          }}
        >
          Get Started
        </Button>
      </Box>
    </Paper>
  );
};

const Pricing = () => {
  const pricingOptions = [
    {
      title: "3 MONTHS",
      price: "$39/month",
      duration: "3 month usage",
      features: ["3 month usage", "Inpaint module", "Upscale 3x", "Commercial use"],
    },
    {
      title: "12 MONTHS",
      price: "$25/month",
      duration: "12 month usage",
      features: ["12 month usage", "Inpaint module", "Upscale 6x", "Commercial use"],
      bestDeal: true,
    },
    {
      title: "6 MONTHS",
      price: "$29/month",
      duration: "6 month usage",
      features: ["6 month usage", "Inpaint module", "Upscale 4x", "Commercial use"],
      normalDeal: true,
    },
  ];

  return (
    <Box sx={{ p: 5 }}>
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        {pricingOptions.map((option, index) => (
          <Grid
            item
            xs={12}
            md={2.5} // Wider column for the best deal in the middle
            key={index}
          >
            <PricingCard {...option} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Pricing;
