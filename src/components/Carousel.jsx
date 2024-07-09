import React, { useState } from 'react'
import { Box, IconButton, Paper } from '@mui/material'
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'
import { useSpring, animated } from 'react-spring'
import MyCard from './MyCard'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const MyCarousel = ({ items }) => {
  const [startIndex, setStartIndex] = useState(0)

  const [props, api] = useSpring(() => ({
    from: { transform: 'translateX(0%)' }
  }))

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prevIndex) => prevIndex - 1)
      api.start({
        transform: `translateX(-${(startIndex - 1) * 33.33}%)`
      })
    }
  }

  const handleNext = () => {
    if (startIndex < items.length - 3) {
      setStartIndex((prevIndex) => prevIndex + 1)
      api.start({
        transform: `translateX(-${(startIndex + 1) * 33.33}%)`
      })
    }
  }

  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', width: '90vw' }}>
        <Box sx={{ overflow: 'hidden', width: 'calc(100%)' }}>
          <animated.div style={{ display: 'flex', ...props }}>
            {items.map((item, index) => (
              <MyCard
                key={index}
                item={item}
              />
            ))}
          </animated.div>
        </Box>

      </Box>
      <Box
        sx={{
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'center'
        }}>
        <IconButton sx={{ bgcolor: '#ccc', textAlign:'center', margin: '10px' }} onClick={handlePrev} disabled={startIndex === 0}>
          <KeyboardArrowLeftIcon />
        </IconButton>
        <IconButton sx={{ bgcolor: '#ccc', textAlign:'center', margin: '10px' }} onClick={handleNext} disabled={startIndex >= items.length - 3}>
          <KeyboardArrowRightIcon />
        </IconButton>
      </Box>
    </Box>
  )
}

export default MyCarousel