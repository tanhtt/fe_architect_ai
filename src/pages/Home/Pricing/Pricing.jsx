import React from "react";
import { Box, Button, Grid, Typography, Paper, Divider } from "@mui/material";

const PricingCard = ({ title, price, duration, features, bestDeal }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        borderRadius: 2,
        position: "relative",
        backgroundColor: bestDeal ? "#f7e7d9" : "#f5f5f5",
      }}
    >
      {bestDeal && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            backgroundColor: "#b08b71",
            color: "#fff",
            px: 1.5,
            py: 0.5,
            borderRadius: "0 4px 4px 0",
            fontWeight: "bold",
          }}
        >
          SAVE MORE
        </Box>
      )}

      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
        {title}
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: "bold", color: "#6d4c41" }}>
        {price}
      </Typography>
      <Typography variant="subtitle1" sx={{ color: "#757575", mb: 2 }}>
        {duration}
      </Typography>
      <Divider />
      <Box mt={2}>
        {features.map((feature, index) => (
          <Typography key={index} variant="body1" sx={{ mb: 1 }}>
            {feature}
          </Typography>
        ))}
      </Box>
      <Button
        fullWidth
        variant="contained"
        sx={{
          mt: 3,
          backgroundColor: "#6d4c41",
          "&:hover": {
            backgroundColor: "#5e4339",
          },
        }}
      >
        Get Started
      </Button>
    </Paper>
  );
};

const Pricing = () => {
  const pricingOptions = [
    {
      title: "3 MONTHS",
      price: "$39/month",
      duration: "3 month usage",
      features: ["Inpaint module", "Upscale 3x", "Commercial use"],
    },
    {
      title: "12 MONTHS",
      price: "$25/month",
      duration: "12 month usage",
      features: ["Inpaint module", "Upscale 6x", "Commercial use"],
      bestDeal: true,
    },
    {
      title: "6 MONTHS",
      price: "$29/month",
      duration: "6 month usage",
      features: ["Inpaint module", "Upscale 4x", "Commercial use"],
    },
  ];

  return (
    <Box sx={{ p: 5 }}>
      <Grid container spacing={3} justifyContent="center">
        {pricingOptions.map((option, index) => (
          <Grid item xs={12} md={4} key={index}>
            <PricingCard {...option} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Pricing;
