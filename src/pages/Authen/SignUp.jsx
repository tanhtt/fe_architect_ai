import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import { Link, useNavigate } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import ForgotPassword from './ForgotPassword';
import { GoogleIcon, FacebookIcon, SitemarkIcon } from './CustomIcons';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import '../../styles/AppHeader.css'
import { API_ROOT } from '~/utils/constants';

import { toast } from 'react-toastify';
// import AppTheme from './theme/AppTheme';
// import ColorModeSelect from './theme/ColorModeSelect';

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',  // Màu nền khi chưa focus
          borderRadius: '8px',
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#ad7e65',  // Màu viền khi chưa focus
            },
            '&:hover fieldset': {
              borderColor: '#ad7e65',  // Màu viền khi hover
            },
            '&.Mui-focused': {
              backgroundColor: '#fff',  // Màu nền khi được focus
              '& fieldset': {
                borderColor: '#ad7e65',    // Màu viền khi được focus
              },
              '& .MuiInputBase-input': {
                color: '#000',          // Màu chữ khi được focus
              },
            },
          },
          '& .MuiInputBase-input': {
            transition: 'color 0.3s ease',  // Animation khi thay đổi màu chữ
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#DDC7BB', // màu viền
          borderWidth: '2px', // độ dày của viền
          color: '#000', // màu chữ
          '&:hover': {
            backgroundColor: '#ad7e65',
            color: '#fff', // màu chữ khi hover
          },
        },
      },
    },
  },
});

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  [theme.breakpoints.up('sm')]: {
    maxWidth: '450px',
  },
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

const SignUpContainer = styled(Stack)(({ theme }) => ({
  padding: 20,
  marginTop: '3vh',
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    zIndex: -1,
    inset: 0,
    backgroundImage:
      'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
    backgroundRepeat: 'no-repeat',
    ...theme.applyStyles('dark', {
      backgroundImage:
        'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
    }),
  },
}));

export default function SignUp(props) {
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
  const [confirmPasswordError, setConfirmPasswordError] = React.useState(false);
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const firstName = data.get('firstName');
    const lastName = data.get('lastName');
    const telNo = data.get('telNo');
    const email = data.get('email');
    const password = data.get('password');

    if (!validateInputs()) return;
    try {
      // Send POST request to backend API
      const response = await fetch(`${API_ROOT}/sign-up`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          telNo,
          email,
          password,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        toast.success('Sign-up successful!');
        // Redirect to the signup page after successful sign-in
        navigate('/signin'); // Redirect to signup page
      }
      else {
        const errorData = await response.json();
        toast.error("Sign-up Fail! "+ errorData.message);
      }
    } catch (error) {
      toast.error('Request failed. Please try again later.');
      // Handle network errors or other unexpected issues
    }
  };
  const validateInputs = () => {
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const telNo = document.getElementById('telNo');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    let isValid = true;

    if (!firstName.value) {
      toast.error('Please enter your first name.');
      isValid = false;
    }

    if (!lastName.value) {
      toast.error('Please enter your last name.');
      isValid = false;
    }

    if (!telNo.value || !/^\d+$/.test(telNo.value)) {
      toast.error('Please enter a valid phone number.');
      isValid = false;
    }

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage('Password must be at least 6 characters long.');
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    if (!confirmPassword.value || confirmPassword.value !== password.value) {
      setConfirmPasswordError(true);
      setConfirmPasswordErrorMessage('Passwords do not match.');
      isValid = false;
    } else {
      setConfirmPasswordError(false);
      setConfirmPasswordErrorMessage('');
    }

    return isValid;
  };


  return (
    // <AppTheme {...props}>
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <SignUpContainer direction="column" justifyContent="space-between">
        {/* <ColorModeSelect sx={{ position: 'fixed', top: '1rem', right: '1rem' }} /> */}
        <Card variant="outlined">
          <Link to="/"
            className='custom-link'
            sx={{
              textDecoration: "none",
              color: "#4F3527",
              fontWeight: 'bold',
              width: "fit-content",
              '&:hover': {
                textDecoration: "underline"
              }
            }}
          >ArchitectAI</Link>
          <Typography
            component="h1"
            variant="h4"
            sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
          >
            Sign up
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              gap: 2,
            }}
          >
            <FormControl>
              <FormLabel htmlFor="firstName">First Name</FormLabel>
              <TextField
                id="firstName"
                name="firstName"
                placeholder="John"
                required
                fullWidth
                variant="outlined"
                size='small'
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="lastName">Last Name</FormLabel>
              <TextField
                id="lastName"
                name="lastName"
                placeholder="Doe"
                required
                fullWidth
                variant="outlined"
                size='small'
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="telNo">Phone Number</FormLabel>
              <TextField
                id="telNo"
                name="telNo"
                placeholder="123456789"
                required
                fullWidth
                variant="outlined"
                size='small'
                type="tel"
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <TextField
                error={emailError}
                helperText={emailErrorMessage}
                id="email"
                type="email"
                name="email"
                placeholder="your@email.com"
                autoComplete="email"
                autoFocus
                required
                fullWidth
                variant="outlined"
                color={emailError ? 'error' : 'primary'}
                sx={{ ariaLabel: 'email' }}
                size='small'
              />
            </FormControl>
            <FormControl>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <FormLabel htmlFor="password">Password</FormLabel>
              </Box>
              <TextField
                error={passwordError}
                helperText={passwordErrorMessage}
                name="password"
                placeholder="••••••"
                type="password"
                id="password"
                autoComplete="current-password"
                autoFocus
                required
                fullWidth
                variant="outlined"
                color={passwordError ? 'error' : 'primary'}
                size='small'
              />
            </FormControl>
            <FormControl>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <FormLabel htmlFor="password">Confirm password</FormLabel>
              </Box>
              <TextField
                error={confirmPasswordError}
                helperText={confirmPasswordErrorMessage}
                name="confirmPassword"
                placeholder="••••••"
                type="password"
                id="confirmPassword"
                autoFocus
                required
                fullWidth
                variant="outlined"
                color={passwordError ? 'error' : 'primary'}
                size='small'
              />
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={validateInputs}
            >
              Sign up
            </Button>
            <Typography sx={{ textAlign: 'center' }}>
              Already have an account?{' '}
              <span>
                <Link
                  to="/signin"
                  className='custom-link'
                  variant="body2"
                  sx={{ alignSelf: 'center' }}
                >
                  Sign in
                </Link>
              </span>
            </Typography>
          </Box>
          <Divider>or</Divider>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Button
              type="submit"
              fullWidth
              onClick={() => alert('Sign up with Google')}
              startIcon={<GoogleIcon />}
            >
              Sign up with Google
            </Button>
            <Button
              type="submit"
              fullWidth
              onClick={() => alert('Sign up with Facebook')}
              startIcon={<FacebookIcon />}
            >
              Sign up with Facebook
            </Button>
          </Box>
        </Card>
      </SignUpContainer>
    </ThemeProvider>
    // </AppTheme>
  );
}
