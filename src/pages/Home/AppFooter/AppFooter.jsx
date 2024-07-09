import { Box, Grid, Link, Typography, Container, IconButton } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import architectAI from '~/assets/imgs/architectai.png'

const socialMediaLinks = {
  facebook: '#',
  twitter: '#',
  instagram: '#'
}

function AppFooter() {
  return (
    <>
      <Box
        sx={{
          bgcolor: '#DDC7BB',
          color: '#4F3527',
          py: 3,
          borderTop: '1px solid',
          borderColor: 'divider',
          padding: '3rem'
        }}
      >
        <Container maxWidth={false}>
          <Grid container spacing={2} justifyContent="space-between">
            <Grid item xs={12} sm={6} md={4} textAlign='center'>
              <Box
                component="img"
                sx={{ width: '240px', cursor: 'pointer' }}
                src={architectAI}
              ></Box>
              {/* Add your logo component or image here */}
              <Typography sx={{ color: '#4F3527', fontSize: 'bold' }} >Bringing you closer to your dream home, one click at a time.</Typography>
            </Grid>
            <Grid item xs={6} sm={3} md={2}>
              <Typography variant="h5" color="#4F3527" fontWeight='bold' gutterBottom sx={{ marginBottom: '5px'}}>
              About
              </Typography>
              <Link href="#" color="inherit" fontWeight='bold' display="block">Our Story</Link>
              <Link href="#" color="inherit" fontWeight='bold' display="block">Careers</Link>
              <Link href="#" color="inherit" fontWeight='bold' display="block">Our Team</Link>
              <Link href="#" color="inherit" fontWeight='bold' display="block">Resources</Link>
            </Grid>
            <Grid item xs={6} sm={3} md={2}>
              <Typography variant="h5" color="#4F3527" fontWeight='bold' gutterBottom sx={{ marginBottom: '5px'}}>
              Support
              </Typography>
              <Link href="#" color="inherit" fontWeight='bold' display="block">FAQ</Link>
              <Link href="#" color="inherit" fontWeight='bold' display="block">Contact Us</Link>
              <Link href="#" color="inherit" fontWeight='bold' display="block">Help Center</Link>
              <Link href="#" color="inherit" fontWeight='bold' display="block">Terms of Service</Link>
            </Grid>
            <Grid item xs={6} sm={3} md={2}>
              <Typography variant="h5" color="#4F3527" fontWeight='bold' gutterBottom sx={{ marginBottom: '5px'}}>
              Find Us
              </Typography>
              <Link href="#" color="inherit" fontWeight='bold' display="block">Events</Link>
              <Link href="#" color="inherit" fontWeight='bold' display="block">Locations</Link>
              <Link href="#" color="inherit" fontWeight='bold' display="block">Newsletter</Link>
            </Grid>
            <Grid item xs={6} sm={3} md={2}>
              <Typography variant="h5" color="#4F3527" fontWeight='bold' gutterBottom sx={{ marginBottom: '5px'}}>
              Our Social
              </Typography>
              <Link href="#" color="inherit" fontWeight='bold' display="flex"><FacebookIcon sx={{ marginRight: '3px' }}/>facebook</Link>
              <Link href="#" color="inherit" fontWeight='bold' display="flex"><TwitterIcon sx={{ marginRight: '3px' }}/>twitter</Link>
              <Link href="#" color="inherit" fontWeight='bold' display="flex"><InstagramIcon sx={{ marginRight: '3px' }}/>instagram</Link>
            </Grid>
          </Grid>
          <Typography variant="body2" color="text.secondary" align="center" sx={{ pt: 4 }}>
          © 2024 Company Co. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </>
  )
}

export default AppFooter
