import React from "react";
import { Box, Button, Grid, Typography, Paper, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CheckIcon from '@mui/icons-material/Check';
import oneMonth from '~/assets/imgs/qrcodes/1month.jpg'
import threeMonth from '~/assets/imgs/qrcodes/3month.jpg'
import sixMonth from '~/assets/imgs/qrcodes/6month.jpg'
import oneYear from '~/assets/imgs/qrcodes/12month.jpg'

const qrCodeImages = {
  "1 MONTH": oneMonth,
  "3 MONTHS": threeMonth,
  "6 MONTHS": sixMonth,
  "12 MONTHS": oneYear,
};

const PricingCard = ({ title, price,amount,  duration, features, bestDeal, normalDeal }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/payment", { state: { qrCodeUrl: qrCodeImages[title], amount } });
  };

  return (
    <Paper
      elevation={3}
      sx={{
        border: '3px solid #DDC7BB',
        borderRadius: "20px",
        position: "relative",
        backgroundColor: "#f5f5f5",
        height: bestDeal ? "520px" : "460px",
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
      }}
    >
      {bestDeal && (
        <Box sx={{
          position: "absolute",
          top: 0,
          right: 0,
          backgroundColor: "#4F3527",
          color: "#fff",
          px: 1.5,
          py: 0.5,
          borderRadius: "4px",
          fontWeight: "bold",
        }}>SAVE MORE</Box>
      )}

      <Box sx={{ backgroundColor: '#DDC7BB', p: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2, color: "#4F3527" }}>{title}</Typography>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#4F3527" }}>{price}</Typography>
        <Typography variant="subtitle1" sx={{ color: "#4F3527", mb: 2, fontWeight: 'bold' }}>{duration}</Typography>
      </Box>
      <Box mt={1} p={2}>
        {features.map((feature, index) => (
          <React.Fragment key={index}>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              mt: 2
            }}>
              <Typography variant="body1" sx={{ color: '#4F3527', fontWeight: 'bold' }}>{feature}</Typography>
              <CheckIcon sx={{ color: '#4F3527', ml: 2 }} />
            </Box>
            <Divider sx={{ backgroundColor: '#DDC7BB', borderBottomWidth: 3 }} />
          </React.Fragment>
        ))}
      </Box>
      <Box sx={{ padding: 2, mt: 'auto', background: '#DDC7BB' }}>
        <Button fullWidth variant="contained"
          onClick={handleCardClick}
        sx={{
          backgroundColor: "#4F3527",
          borderRadius: '20px',
          "&:hover": { backgroundColor: "#5e4339" },
        }}>Get Started</Button>
      </Box>
    </Paper>
  );
};

const Pricing = () => {
  const pricingOptions = [
    {
      title: "1 MONTH",
      price: "$10/month",
      amount: '253.530',
      duration: "1 month usage",
      features: ["1 month usage", "Inpaint module", "Upscale 3x", "Commercial use"],
    },
    {
      title: "3 MONTHS",
      price: "$39/month",
      amount: '633.825',
      duration: "3 month usage",
      features: ["3 month usage", "Inpaint module", "Upscale 3x", "Commercial use"],
    },
    {
      title: "12 MONTHS",
      amount: '2.129.652',
      price: "$25/month",
      duration: "12 month usage",
      features: ["12 month usage", "Inpaint module", "Upscale 6x", "Commercial use"],
      bestDeal: true,
    },
    {
      title: "6 MONTHS",
      amount: '1.216.944',
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
