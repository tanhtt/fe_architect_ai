import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import { Avatar, Button, Typography, Menu, MenuItem, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import architectAI from '~/assets/imgs/architectai.png';
import { Link, useNavigate } from 'react-router-dom';
import '../../../styles/AppHeader.css';
import { Link as LinkInside } from 'react-scroll';

function AppHeader() {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const navigate = useNavigate()
  const [user, setUser] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  // Handle avatar click to open menu
  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Handle menu close
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('user'); // Remove user info from localStorage
    setUser(null); // Update state to reflect user is logged out
    navigate('/signin'); // Redirect to the sign-in page
  };

  const loadUserInfo = () => {
    const userInfo = JSON.parse(localStorage.getItem('user'));
    setUser(userInfo);
  };

  // useEffect to load user information on mount and listen for storage changes
  useEffect(() => {
    loadUserInfo();

    const handleStorageChange = () => {
      loadUserInfo();
    };

    // Add event listener for localStorage changes
    window.addEventListener('storage', handleStorageChange);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // Handle click on Services button
  const handleServicesClick = () => {
    if (!user) {
      setOpenDialog(true); // Open dialog if user is not logged in
    } else {
      navigate('/generation'); // Navigate to services page if logged in
    }
  };

  // Handle dialog confirmation
  const handleDialogConfirm = () => {
    setOpenDialog(false);
    navigate('/signin'); // Redirect to sign-in page
  };

  // Handle dialog cancel
  const handleDialogCancel = () => {
    setOpenDialog(false); // Close dialog without any action
  };

  return (
    <>
      <Box
        px={2}
        sx={{
          width: '100%',
          height: (theme) => theme.architect_ai.appBarHeight,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box
            component="img"
            sx={{ width: '250px', cursor: 'pointer' }}
            src={architectAI}
          />
        </Box>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Button size="large" sx={{ color: '#000' }} onClick={() => navigate('/')}>
                Home
            </Button>
            <Button size="large" sx={{ color: '#000' }} onClick={handleServicesClick}>
                Service
            </Button>
            <Button size="large" sx={{ color: '#000' }} onClick={() => navigate('/aboutus')}>
                About
            </Button>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Tooltip title="Search" sx={{ cursor: 'pointer' }}>
            <SearchIcon />
          </Tooltip>

          {user ? (
          <>
            <Avatar
              alt={user.firstName}
              sx={{ cursor: 'pointer' }}
              onClick={handleAvatarClick}
            >
              {user.firstName[0]}
            </Avatar>
            <Menu
              anchorEl={anchorEl}
              open={isMenuOpen}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>
                <Link to="/profile" className="custom-link">
                  Profile
                </Link>
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                <Link className="custom-link">
                  Logout
                </Link>
              </MenuItem>
            </Menu>
          </>
        ) : (
          <Link className='custom-link' to="/signin">
            <Button size='large' sx={{ bgcolor: '#000', color: '#fff', '&:hover': {
              bgcolor: '#333',
              color: '#fff'
            } }}>Sign in</Button>
          </Link>
        )}

          <Button
            size="large"
            variant="text"
            sx={{ color: '#FFA403' }}
          >
            <Link className="custom-link" to="/pricing">
              Free Trial
            </Link>
          </Button>
        </Box>
      </Box>
      {/* Confirmation Dialog */}
      <Dialog open={openDialog} onClose={handleDialogCancel}>
        <DialogTitle>Login Required</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You need to be logged in to access the services. Would you like to log in now?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDialogConfirm} color="primary">
            Yes, log in
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AppHeader;
