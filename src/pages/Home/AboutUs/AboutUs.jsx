import React from 'react';
import { Box, Typography, Link } from '@mui/material';

function AboutUs() {
  return (
    <Box
      sx={{
        padding: '50px 20px',
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'left',
      }}
    >
      <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mb: 3 }}>
        About Us
      </Typography>
      <Typography variant="body1" paragraph>
        Welcome to our platform, where innovation meets architecture. We are committed to
        revolutionizing the way architects and interior designers bring their visions to life. Our platform
        leverages advanced artificial intelligence to provide seamless support throughout the design process.
        Whether you are creating a cozy home or a grand commercial space, our AI-powered tools offer
        intuitive solutions, smart suggestions, and real-time collaboration.
      </Typography>
      <Typography variant="body1" paragraph>
        We believe in empowering architects to focus on creativity and innovation while our technology
        handles the complexities. Join us in transforming the design industry, making it more efficient,
        creative, and accessible for everyone. Together, let's build the future of architecture and interior design.
      </Typography>

      <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 4 }}>
        Contact:
      </Typography>
      <Typography variant="body1">
        <strong>Email:</strong>{' '}
        <Link href="mailto:architectAIVN@gmail.com">architectAIVN@gmail.com</Link>
      </Typography>
      <Typography variant="body1">
        <strong>Contact:</strong> 0xxxxxxxxx
      </Typography>
      <Typography variant="body1">
        <strong>Address:</strong> Hoa Hai, Ngu Hanh Son district, Da Nang City
      </Typography>
    </Box>
  );
}

export default AboutUs;
