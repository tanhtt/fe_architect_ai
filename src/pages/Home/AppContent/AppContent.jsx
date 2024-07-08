import Box from '@mui/material/Box'
import architectAI from '~/assets/imgs/final.png'
import houseEx from '~/assets/imgs/image 5.png'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import EditNoteIcon from '@mui/icons-material/EditNote'
import PaidIcon from '@mui/icons-material/Paid'
import { InputAdornment } from '@mui/material'
import { Grid } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'
import AllInboxIcon from '@mui/icons-material/AllInbox'
import HandshakeIcon from '@mui/icons-material/Handshake'

function AppContent() {
  return (
    <>
      {/* Home Section  */}
      <Box sx={{ position: 'relative', width: '100%', height: '100vh' }}>
        {/* Background Image  */}
        <Box
          component="img"
          src={architectAI}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1
          }}
        />
        {/* Overlay to blur  */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Lớp phủ màu đen với độ mờ
            zIndex: 2
          }}
        />

        {/* Content in Background  */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 3, // Đảm bảo nội dung nằm trên lớp phủ
            color: 'white', // Màu chữ
            padding: 3
          }}
        >
          <Box sx={{ padding: '5rem', maxWidth: '40vw' }}>
            <Typography variant='h2' sx={{ fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Architect AI</Typography>
            <Typography variant='h6' sx={{ fontWeight: 'bold', mt: '2rem', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>is a software that helps you create a unique and modern design with advanced AI technology, helping you minimize design time, choose materials, arrange and measure meticulous details, etc. ..</Typography>
            <Button
              variant="contained"
              sx={{
                mt: '2rem',
                backgroundColor: 'white',
                color: 'black',
                fontSize: '1.5rem',
                width: '10rem',
                boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                '&:hover': {
                  backgroundColor: '#ccc' // Màu nền khi hover
                }
              }}
            >
      Sign up
            </Button>
            <br/>
            <Button
              variant="contained"
              sx={{
                mt: '2rem',
                backgroundColor: 'black',
                color: 'white',
                fontSize: '1.5rem',
                width: '10rem',
                boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                '&:hover': {
                  backgroundColor: 'gray' // Màu nền khi hover
                }
              }}
            >
      Free trial
            </Button>
          </Box>

          <Box sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <Box sx={{
              width: '70vw',
              bgcolor: '#DDC7BB',
              borderRadius: '8px',
              padding: '20px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <Box>
                <TextField
                  placeholder='You are?'
                  type="text"
                  sx={{
                    marginRight: '3rem',
                    minWidth: '120px',
                    maxWidth: '180px',
                    backgroundColor: '#FBF5F1',
                    borderRadius: '8px',
                    '& input': { color: '#695346', fontWeight: 'bold' },
                    '& label.Mui-focused': { color: '#000' },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: 'transparent' },
                      '&:hover fieldset': { borderColor: 'transparent' },
                      '&.Mui-focused fieldset': { borderColor: 'transparent' }
                    },
                    '& .MuiInputBase-input': {
                      borderRadius: '8px',
                      '&::placeholder': {
                        color: '#695346',
                        fontWeight: 'bold',
                        opacity: 1
                      }
                    }
                  }}
                  InputProps={{
                    endAdornment:
                  <InputAdornment position="end">
                    <AccountCircleIcon sx={{ color: '#695346' }} />
                  </InputAdornment>
                  }}
                />
                <TextField
                  placeholder='Age'
                  type="text"
                  sx={{
                    marginRight: '3rem',
                    minWidth: '120px',
                    maxWidth: '180px',
                    backgroundColor: '#FBF5F1',
                    borderRadius: '8px',
                    '& input': { color: '#695346', fontWeight: 'bold' },
                    '& label.Mui-focused': { color: '#000' },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: 'transparent' },
                      '&:hover fieldset': { borderColor: 'transparent' },
                      '&.Mui-focused fieldset': { borderColor: 'transparent' }
                    },
                    '& .MuiInputBase-input': {
                      borderRadius: '8px',
                      '&::placeholder': {
                        color: '#695346',
                        fontWeight: 'bold',
                        opacity: 1
                      }
                    }
                  }}
                  InputProps={{
                    endAdornment:
                  <InputAdornment position="end">
                    <EditNoteIcon sx={{ color: '#695346' }} />
                  </InputAdornment>
                  }}
                />
                <TextField
                  placeholder='Price Range'
                  type="text"
                  sx={{
                    marginRight: '3rem',
                    minWidth: '120px',
                    maxWidth: '180px',
                    backgroundColor: '#FBF5F1',
                    borderRadius: '8px',
                    '& input': { color: '#695346', fontWeight: 'bold' },
                    '& label.Mui-focused': { color: '#000' },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: 'transparent' },
                      '&:hover fieldset': { borderColor: 'transparent' },
                      '&.Mui-focused fieldset': { borderColor: 'transparent' }
                    },
                    '& .MuiInputBase-input': {
                      borderRadius: '8px',
                      '&::placeholder': {
                        color: '#695346',
                        fontWeight: 'bold',
                        opacity: 1
                      }
                    }
                  }}
                  InputProps={{
                    endAdornment:
                  <InputAdornment position="end">
                    <PaidIcon sx={{ color: '#695346' }} />
                  </InputAdornment>
                  }}
                />
              </Box>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#2B1B12',
                  color: 'white',
                  fontSize: '1.5rem',
                  width: '10rem',
                  boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                  '&:hover': {
                    backgroundColor: 'gray' // Màu nền khi hover
                  }
                }}
              >
      Start
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Data Section  */}
      <Box
        sx={{
          width: '100%',
          padding: 5,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        {/* image house */}
        <Box
          component='img'
          src={houseEx}
        >
        </Box>
        {/* content right section  */}
        <Box
          sx={{
            padding: '6rem'
          }}
        >
          <Typography variant='h3'
            sx={{
              fontWeight: 'bold',
              color: '#2B1B12'
            }}
          >We Help You To Find
          Your Dream Architectual</Typography>
          <Typography variant='h6' sx={{ fontWeight: 'bold', mt: '2rem', color: '#2B1B12' }}>is a software that helps you create a unique and modern design with advanced AI technology, helping you minimize design time, choose materials, arrange and measure meticulous details, etc. ..</Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mt: 2
            }}
          >
            <Box>
              <Typography variant='h4' sx={{ color: '#4F3527', fontWeight: 'bold' }}>4K+</Typography>
              <Typography variant='h6' sx={{ color: '#4F3527' }}>Architectural Available</Typography>
            </Box>
            <Box>
              <Typography variant='h4' sx={{ color: '#4F3527', fontWeight: 'bold' }}>1K+</Typography>
              <Typography variant='h6' sx={{ color: '#4F3527' }}>Architectural Sold</Typography>
            </Box>
            <Box>
              <Typography variant='h4' sx={{ color: '#4F3527', fontWeight: 'bold' }}>590+</Typography>
              <Typography variant='h6' sx={{ color: '#4F3527' }}>Architect Used</Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Why chose us section  */}
      <Box sx={{ width: '100%', maxWidth: '900px', margin: 'auto' }}>
        <Typography variant="h3" sx={{ textAlign: 'center', mb: 3, fontWeight: 'bold', color: '#2B1B12' }}>
        Why Choose Us
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'center', mb: 6, fontWeight: 'bold', color: '#4F3527' }}>
        Elevating Your Home Buying Experience with Expertise, Integrity, and Unmatched Personalized Service
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', bgcolor: '#DDC7BB', borderRadius: '10px', padding: '10px', minHeight: '150px' }}>
              <Box sx={{ padding: '8px', bgcolor: '#FBF5F1', borderRadius: '8px' }}>
                <CheckCircleIcon sx={{ fontSize: '2.5rem', padding: 0, lineHeight: 0 }}/>
              </Box>
              <Typography variant="h6" sx={{ color: '#4F3527', mt: '5px' }}>Absolute Quality</Typography>
              <Typography variant="body2" sx={{ color: '#4F3527', mt: '5px' }}>
              Ensuring quality and accuracy for each design refined by the user
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', bgcolor: '#DDC7BB', borderRadius: '10px', padding: '10px', minHeight: '150px' }}>
              <Box sx={{ padding: '8px', bgcolor: '#FBF5F1', borderRadius: '8px' }}>
                <ManageAccountsIcon sx={{ fontSize: '2.5rem', padding: 0, lineHeight: 0 }}/>
              </Box>
              <Typography variant="h6" sx={{ color: '#4F3527', mt: '5px' }}>Professional</Typography>
              <Typography variant="body2" sx={{ color: '#4F3527', mt: '5px' }}>
              Professional operations team, 24/24 customer support in case of problems
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', bgcolor: '#DDC7BB', borderRadius: '10px', padding: '10px', minHeight: '150px' }}>
              <Box sx={{ padding: '8px', bgcolor: '#FBF5F1', borderRadius: '8px' }}>
                <AllInboxIcon sx={{ fontSize: '2.5rem', padding: 0, lineHeight: 0 }}/>
              </Box>
              <Typography variant="h6" sx={{ color: '#4F3527', mt: '5px' }}>Attractive price</Typography>
              <Typography variant="body2" sx={{ color: '#4F3527', mt: '5px' }}>
              Support discounts for interns and attractive incentive packages for architects
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', bgcolor: '#DDC7BB', borderRadius: '10px', padding: '10px', minHeight: '150px' }}>
              <Box sx={{ padding: '8px', bgcolor: '#FBF5F1', borderRadius: '8px' }}>
                <HandshakeIcon sx={{ fontSize: '2.5rem', padding: 0, lineHeight: 0 }}/>
              </Box>
              <Typography variant="h6" sx={{ color: '#4F3527', mt: '5px' }}>Reliability</Typography>
              <Typography variant="body2" sx={{ color: '#4F3527', mt: '5px' }}>
              Reliable level with more than 500 partners nationwide, 5 years of success in the field of architecture
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default AppContent
