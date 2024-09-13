import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import { Box } from '@mui/material';

const ImageSlider = () => {
  const [sliderValue, setSliderValue] = useState(50);

  // Hàm xử lý khi slider thay đổi
  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '500px',
        height: '300px',
      }}
    >
      {/* Hình ảnh đầu tiên (background) */}
      <img
        src="https://th.bing.com/th/id/R.444ee05f7214d0733408ed264aa162c0?rik=y5VdqX%2boTOhlbg&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f04%2flandscape-wallpaper-hd-backgrounds.jpg&ehk=NstFyx3yEGqPuC1FsArlbLzq%2bbCyPnobk4HDI9yiGR4%3d&risl=&pid=ImgRaw&r=0"
        alt="Image 1"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />

      {/* Hình ảnh thứ hai, sẽ bị mask dựa vào slider */}
      <img
        src="https://th.bing.com/th/id/OIP.HW3eq5JDvyr1XFQ9rMuszAHaEo?rs=1&pid=ImgDetMain"
        alt="Image 2"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          clipPath: `inset(0 ${100 - sliderValue}% 0 0)`, // Sử dụng clipPath để mask ảnh thứ hai
        }}
      />

      {/* Thanh slider */}
      <Slider
        value={sliderValue}
        onChange={handleSliderChange}
        aria-labelledby="image-mask-slider"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 2,
          '& .MuiSlider-thumb': {
            backgroundColor: 'white', // Màu sắc của thanh kéo
            border: '2px solid black',
            height: '100%', // Chiều cao của thanh trượt
          },
          '& .MuiSlider-track': {
            display: 'none', // Ẩn track của slider
          },
          '& .MuiSlider-rail': {
            display: 'none', // Ẩn rail của slider
          },
        }}
        orientation="horizontal" // Chuyển slider thành thanh dọc
      />
    </Box>
  );
};

export default ImageSlider;
