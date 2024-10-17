import React, { useState, useEffect } from 'react';
import {
  AppBar, Toolbar, Typography, Container, Avatar, IconButton, Table, TableBody, TableCell, TableContainer, TableHead,
  TableRow, Paper, TablePagination, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button,
  Menu,
  MenuItem
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { API_ROOT } from '~/utils/constants';


// AdminUserPage component
const AdminUserPage = () => {
  const [user, setUser] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [totalUsers, setTotalUsers] = useState(0);
  const [selectedUser, setSelectedUser] = useState(null); // Selected user information
  const [open, setOpen] = useState(false); // Dialog open status
  const navigate = useNavigate()

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

  useEffect(() => {
    fetchUsers(page, rowsPerPage);
  }, [page, rowsPerPage]);

  // Fetch user data from API
  const fetchUsers = async (page, limit) => {
    try {
      const response = await fetch(`${API_ROOT}/users`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setTotalUsers(data.length); // Set total users from API data

      // Paginate the data
      const start = page * limit;
      const end = start + limit;
      setUsers(data.slice(start, end).map(user => ({
        id: user.id,
        username: `${user.firstName.trim()} ${user.lastName.trim()}`, // Combine first and last name
        email: user.email.trim(),
        role: user.isActive ? 'User' : 'Inactive' // Assuming 'User' role for active users
      })));
    } catch (error) {
      console.error('Error fetching users:', error);
      // Handle errors here, maybe set an error state
    }
  };

  // Handle row click event
  const handleRowClick = (user) => {
    setSelectedUser(user); // Update selected user
    setOpen(true); // Open dialog to show details
  };

  // Close dialog
  const handleClose = () => {
    setOpen(false);
    setSelectedUser(null); // Reset selected user
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div>
      {/* Admin Header */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Admin Dashboard
          </Typography>
          <IconButton edge="end" color="inherit" onClick={handleAvatarClick}>
            <Avatar alt="Admin Profile" src="/path-to-admin-avatar.jpg" />
          </IconButton>
          <Menu
              anchorEl={anchorEl}
              open={isMenuOpen}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleLogout}>
                  Logout
              </MenuItem>
            </Menu>
        </Toolbar>
      </AppBar>

      {/* User Table */}
      <Container sx={{ marginTop: 4 }}>
        <Paper>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Username</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Role</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user, index) => (
                  <TableRow key={user.id} onClick={() => handleRowClick(user)} style={{ cursor: 'pointer' }}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{user.username}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.role}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Pagination */}
          <TablePagination
            component="div"
            count={totalUsers}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            labelRowsPerPage="Số dòng mỗi trang"
          />
        </Paper>
      </Container>

      {/* Dialog for displaying user details */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Thông tin chi tiết người dùng</DialogTitle>
        {selectedUser && (
          <DialogContent>
            <DialogContentText>ID: {selectedUser.id}</DialogContentText>
            <DialogContentText>Username: {selectedUser.username}</DialogContentText>
            <DialogContentText>Email: {selectedUser.email}</DialogContentText>
            <DialogContentText>Role: {selectedUser.role}</DialogContentText>
          </DialogContent>
        )}
        <DialogActions>
          <Button onClick={handleClose} color="primary">Đóng</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AdminUserPage;
