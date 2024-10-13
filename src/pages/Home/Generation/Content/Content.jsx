import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container, TextField, InputAdornment, Grid, Button, Typography, Slider, Select, MenuItem, ToggleButton, ToggleButtonGroup, FormControl, InputLabel, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ImageIcon from '@mui/icons-material/Image';
import FolderIcon from '@mui/icons-material/Folder';

// Custom theme with typography color set globally
const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#4F3527',
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          color: '#DDC7BB', // Replace with your desired hex color
        },
        thumb: {
          color: '#DDC7BB', // Color for the thumb (handle)
          '&:hover': {
            boxShadow: '0px 0px 0px 8px rgba(79, 53, 39, .3)', // On hover effect
          },
          '&.Mui-active': {
            boxShadow: '0px 0px 0px 14px rgba(79, 53, 39, .3)', // When active
          },
        },
        track: {
          color: '#DDC7BB', // Color for the slider's track
        },
        rail: {
          color: '#AA988F', // Color for the unfilled portion of the slider (optional)
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#DDC7BB', // Thay màu khi focus
          },
        },
        notchedOutline: {
          borderColor: '#BFADA4', // Màu mặc định của viền
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#4F3527', // Thay màu khi select được focus
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#DDC7BB', // Thay màu của TextField khi focus
          },
        },
      },
    }
  }
});

function Content() {
  const [renderMode, setRenderMode] = React.useState('Interior');
  const [inputType, setInputType] = React.useState('Photo');
  const [renderStyle, setRenderStyle] = React.useState('Modern');
  const [frame, setFrame] = React.useState('');
  const [similarityLevel, setSimilarityLevel] = React.useState('Similar');
  const [renderPerformance, setRenderPerformance] = React.useState(50);
  const [customSize, setCustomSize] = React.useState({ width: 512, height: 512 });
  const [imageNumber, setImageNumber] = React.useState(1);
  const [imageUpload, setImageUpload] = React.useState();

  const handleRenderModeChange = (event, newMode) => setRenderMode(newMode);
  const handleInputTypeChange = (event, newType) => setInputType(newType);
  const handleRenderStyleChange = (event) => setRenderStyle(event.target.value);
  const handleFrameChange = (event) => setFrame(event.target.value);
  const handleRenderPerformanceChange = (event, newValue) => setRenderPerformance(newValue);
  const handleWidthChange = (event, newValue) => setCustomSize({ ...customSize, width: newValue });
  const handleHeightChange = (event, newValue) => setCustomSize({ ...customSize, height: newValue });
  const handleImageNumberChange = (event, newValue) => setImageNumber(newValue);
  const handleSimilarityLevelChange = (event, newLevel) => setSimilarityLevel(newLevel);

  const handleInputWidthChange = (event) => {
    const value = event.target.value === '' ? '' : Number(event.target.value);
    setCustomSize({ ...customSize, width: value });
  };

  const handleInputHeightChange = (event) => {
    const value = event.target.value === '' ? '' : Number(event.target.value);
    setCustomSize({ ...customSize, height: value });
  };

  const handleBlur = () => {
    // Ensures the value stays within the slider's range (512 to 2048)
    if (customSize.width < 512) {
      setCustomSize({ ...customSize, width: 512 });
    } else if (customSize.width > 2048) {
      setCustomSize({ ...customSize, width: 2048 });
    }
  };

  const fileInputRef = React.useRef(null);

  const handleBoxClick = () => {
    fileInputRef.current.click(); // Trigger the click event on the hidden input
  };

  function handleUploadImage(e) {
    console.log(e.target.files);
    // setImageUpload(URL.createObjectURL(e.target.files[0]));
    setImageUpload(e.target.files[0]);
  }

  const handleGenerate = async () => {
    // const payload = {
    //   // renderMode,
    //   // inputType,
    //   // renderStyle,
    //   // frame,
    //   // similarityLevel,
    //   // renderPerformance,
    //   // customSize,
    //   // imageNumber,
    //   image: imageUpload,
    // };

    const data = new FormData();
    data.append("image", imageUpload);
    console.log(imageUpload)
    console.log(renderStyle)
    console.log(frame)
    console.log(customSize.width)
    console.log(customSize.height)

    try {
      const response = await fetch(`http://localhost:8080/render?style=${renderStyle}&material=${frame}&width=${customSize.width}&height=${customSize.height}`, {
        method: 'POST',
        headers: {
          // 'content-type': 'multipart/form-data',
          // "Accept": "application/json",
          "type": "formData"
        },
        body: data,
        mode: 'no-cors'
      });

      const result = await response.json();
      console.log('Server response:', result);
    } catch (error) {
      console.error('Error sending data to backend:', error);
    }
  };

  const MAX = 100;
  const MIN = 0;
  const marks = [
    {
      value: MIN,
      label: '',
    },
    {
      value: MAX,
      label: '',
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{
        backgroundColor: "#DDC7BB",
        // marginTop: (theme) => `calc(${theme.architect_ai.appBarHeight})`,
        marginTop: '20px',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginBottom: '20px',
        padding: '20px',
        width: '95vw'
      }}>

        <Grid container spacing={4}>
          {/* left section  */}
          <Grid item xs={4}>
            {/* Render Mode */}
            <Grid item xs={12}>
              <Typography variant="h6">RENDER MODE</Typography>
              <ToggleButtonGroup value={renderMode} exclusive onChange={handleRenderModeChange} fullWidth>
                <ToggleButton value="Interior">Interior</ToggleButton>
                <ToggleButton value="Exterior">Exterior</ToggleButton>
                <ToggleButton value="Master Plan">Master Plan</ToggleButton>
              </ToggleButtonGroup>
            </Grid>

            {/* Input Type */}
            <Grid item xs={12} mt={1}>
              <Typography variant="h6">INPUT TYPE</Typography>
              <ToggleButtonGroup value={inputType} exclusive onChange={handleInputTypeChange} fullWidth size='small'>
                <ToggleButton value="Photo">Photo</ToggleButton>
                <ToggleButton value="Sketch">Sketch</ToggleButton>
                <ToggleButton value="3D Model">3D Model</ToggleButton>
              </ToggleButtonGroup>
            </Grid>

            {/* Render Style & Frame */}
            <Grid item container xs={12} justifyContent="space-between" spacing={2} mt={1}>
              <Grid item xs={6}>
                <Typography variant="h6">RENDER STYLE</Typography>
                <FormControl fullWidth size='small'>
                  <Select value={renderStyle} onChange={handleRenderStyleChange}>
                    <MenuItem value="Modern">Modern</MenuItem>
                    <MenuItem value="Classic">Classic</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6">FRAME</Typography>
                <FormControl fullWidth size='small'>
                  <Select value={frame} onChange={handleFrameChange}>
                    <MenuItem value="Wooden">Wooden</MenuItem>
                    <MenuItem value="Metal">Metal</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>


            {/* Custom  */}
            <Typography variant="h6" mt={1}>CUSTOM</Typography>
            {/* Custom Size */}
            <Grid item container xs={12} sx={{ backgroundColor: '#BFADA4', padding: '20px', borderRadius: '20px' }}>
              <Grid item container xs={12}>
                <Grid item container xs={12} justifyContent='space-between' alignItems='center' >
                  <Grid item>
                    <Typography gutterBottom>Width</Typography>
                  </Grid>
                  <Grid item>
                    <TextField
                      value={customSize.width}
                      onChange={handleInputWidthChange}
                      onBlur={handleBlur}
                      inputProps={{
                        step: 10,
                        min: 512,
                        max: 2048,
                        type: 'number',
                      }}
                      size="small"
                      InputProps={{
                        endAdornment: <InputAdornment position="end">px</InputAdornment>,
                      }}
                    />
                  </Grid>
                  <Slider value={customSize.width} min={512} max={2048} onChange={handleWidthChange} size='small' />
                </Grid>
                <Grid item container xs={12} justifyContent='space-between' alignItems='center'>
                  <Grid item>
                    <Typography gutterBottom>Height</Typography>
                  </Grid>
                  <Grid item>
                    <TextField
                      value={customSize.height}
                      onChange={handleInputHeightChange}
                      onBlur={handleBlur}
                      inputProps={{
                        step: 10,
                        min: 512,
                        max: 2048,
                        type: 'number',
                      }}
                      size="small"
                      InputProps={{
                        endAdornment: <InputAdornment position="end">px</InputAdornment>,
                      }}
                    />
                  </Grid>
                  <Slider value={customSize.height} min={512} max={2048} onChange={handleHeightChange} size='small' />
                </Grid>
              </Grid>
            </Grid>

            <Grid item container mt={1} xs={12} sx={{ backgroundColor: '#BFADA4', padding: '20px', borderRadius: '20px' }}>
              {/* Image Number */}
              <Grid item xs={12}>
                <Typography gutterBottom>Image Number: {imageNumber}</Typography>
                <Slider value={imageNumber} min={1} max={10} onChange={handleImageNumberChange} size='small' />
              </Grid>
            </Grid>

            {/* Upload Image */}
            <Grid item xs={12} mt={1}>
              <Typography variant="h6" mt={1}>UPLOAD IMAGE</Typography>
              <Box onClick={handleBoxClick} height={150} display="flex" alignItems="center" justifyContent="center" sx={{ padding: '5px', border: '1px solid #BFADA4', borderRadius: '20px', backgroundColor: '#BFADA4', cursor: 'pointer' }}>
                {imageUpload ? (
                  <img
                    src={imageUpload}
                    alt="Uploaded Preview"
                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                  />
                ) : (
                  <AddIcon sx={{ color: '#DDC7BB' }} />
                )}
              </Box>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }} // Hide the input
                onChange={handleUploadImage} // Handle file selection
              />
            </Grid>

            {/* Similarity Level */}
            <Grid item xs={12}>
              <Typography gutterBottom></Typography>
              <Typography variant="h6" mt={1}>SIMILARITY LEVEL</Typography>
              <ToggleButtonGroup value={similarityLevel} exclusive onChange={handleSimilarityLevelChange} fullWidth size='small'>
                <ToggleButton value="Similar">Similar</ToggleButton>
                <ToggleButton value="Balanced">Balanced</ToggleButton>
                <ToggleButton value="Creative">Creative</ToggleButton>
              </ToggleButtonGroup>
            </Grid>
          </Grid>

          {/* right section  */}
          <Grid item xs={8}>
            {/* Generate Button */}
            <Grid container spacing={3}>
              <Grid item xs={6}>
                {/* Render Performance */}
                <Grid item xs={12} sx={{ backgroundColor: '#BFADA4', padding: '20px', borderRadius: '20px' }}>
                  <Typography variant="h6" mt={1}>RENDER PERFORMANCE</Typography>
                  <Slider
                    value={renderPerformance}
                    min={MIN}
                    max={MAX}
                    valueLabelDisplay="auto"
                    onChange={handleRenderPerformanceChange}
                    marks={marks}
                    size='small'
                  />
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography
                      variant="body2"
                    >
                      Fast render
                    </Typography>
                    <Typography
                      variant="body2"
                    >
                      Best quality
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Button variant="contained" fullWidth
                  onClick={handleGenerate}
                  sx={{
                    fontSize: '18px', // Change text size
                    padding: '10px 20px', // Change button size (padding)
                    backgroundColor: '#F1B18F', // Change background color
                    color: '#4F3527',
                    height: '100%',
                    borderRadius: '20px',
                    boxShadow: 'none',
                    '&:hover': {
                      backgroundColor: '#F1B18F', // Change hover color
                    },
                  }}
                >
                  Generate
                </Button>
              </Grid>
            </Grid>

            <Grid container mt={1}>
              <Box display="flex" alignItems="center" justifyContent="center" sx={{ border: '1px solid #BFADA4', borderRadius: '20px', backgroundColor: '#BFADA4', width: '100%', height: '600px' }}>
                <ImageIcon sx={{ color: '#DDC7BB' }} />
              </Box>
            </Grid>

            <Grid container spacing={3} mt={1} justifyContent='space-between'>
              {/* Download/Share */}
              <Grid item xs={2.5}>
                <Button variant="contained" fullWidth
                  sx={{
                    fontSize: '18px', // Change text size
                    padding: '10px 20px', // Change button size (padding)
                    backgroundColor: '#BFADA4', // Change background color
                    color: '#4F3527',
                    height: '100%',
                    borderRadius: '20px',
                    boxShadow: 'none',
                    '&:hover': {
                      backgroundColor: '#F1B18F', // Change hover color
                    },
                  }}
                >DOWNLOAD IMAGE</Button>
              </Grid>
              <Grid item xs={2.5}>
                <Button variant="contained" fullWidth
                  sx={{
                    fontSize: '18px', // Change text size
                    padding: '10px 20px', // Change button size (padding)
                    backgroundColor: '#BFADA4', // Change background color
                    color: '#4F3527',
                    height: '100%',
                    borderRadius: '20px',
                    boxShadow: 'none',
                    '&:hover': {
                      backgroundColor: '#F1B18F', // Change hover color
                    },
                  }}
                >DOWNLOAD ALL IMAGE</Button>
              </Grid>
              <Grid item xs={2.5}>
                <Button variant="contained" fullWidth
                  sx={{
                    fontSize: '18px', // Change text size
                    padding: '10px 20px', // Change button size (padding)
                    backgroundColor: '#BFADA4', // Change background color
                    color: '#4F3527',
                    height: '100%',
                    borderRadius: '20px',
                    boxShadow: 'none',
                    '&:hover': {
                      backgroundColor: '#F1B18F', // Change hover color
                    },
                  }}
                >SHARE TO</Button>
              </Grid>
              <Grid item xs={2.5}>
                <Button variant="contained" fullWidth
                  sx={{
                    fontSize: '18px', // Change text size
                    padding: '10px 20px', // Change button size (padding)
                    backgroundColor: '#BFADA4', // Change background color
                    color: '#4F3527',
                    height: '100%',
                    borderRadius: '20px',
                    boxShadow: 'none',
                    '&:hover': {
                      backgroundColor: '#F1B18F', // Change hover color
                    },
                  }}
                >SEND TO INPAINTING</Button>
              </Grid>
              <Grid item xs={2}>
                <Button variant="contained" fullWidth
                  sx={{
                    fontSize: '18px', // Change text size
                    padding: '10px 20px', // Change button size (padding)
                    backgroundColor: '#BFADA4', // Change background color
                    color: '#4F3527',
                    height: '100%',
                    borderRadius: '20px',
                    boxShadow: 'none',
                    '&:hover': {
                      backgroundColor: '#F1B18F', // Change hover color
                    },
                  }}
                ><FolderIcon size="large" /></Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default Content;
