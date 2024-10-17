// ImageCarousel.js
import React, { useState } from "react";
import Slider from "react-slick";
import { Box, Typography, Dialog } from "@mui/material";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ImageCarousel = ({ images }) => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClickOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Box sx={{ width: "80%", margin: "auto" }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box key={index} sx={{ textAlign: "center" }}>
            <img
              src={image.src}
              alt={image.alt}
              style={{ width: "100%", height: "auto", cursor: "pointer" }}
              onClick={() => handleClickOpen(image)}
            />
            <Typography variant="h6" sx={{ marginTop: "10px" }}>
              {image.alt}
            </Typography>
          </Box>
        ))}
      </Slider>

      {/* Modal for enlarging image */}
      <Dialog open={open} onClose={handleClose} width="xl">
        <Box sx={{ padding: 2, textAlign: "center" }}>
          {selectedImage && (
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              style={{ width: "100%", height: "auto" }}
            />
          )}
        </Box>
      </Dialog>
    </Box>
  );
};

export default ImageCarousel;
