import React, { useState, useEffect } from 'react';
import {
  AppBar, Toolbar, Typography, Container, Avatar, IconButton, Table, TableBody, TableCell, TableContainer, TableHead,
  TableRow, Paper, TablePagination, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, CircularProgress, Tabs, Tab, Box, Grid,
  Button, Menu, MenuItem, Divider, Select, FormControl, InputLabel
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { API_ROOT } from '~/utils/constants';

// Tab panel component
const TabPanel = ({ children, value, index, ...other }) => (
  <div
    role="tabpanel"
    hidden={value !== index}
    {...other}
  >
    {value === index && <Box p={3}>{children}</Box>}
  </div>
);

const AdminUserPage = () => {
  const [user, setUser] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [totalUsers, setTotalUsers] = useState(0);
  const [selectedUserDetails, setSelectedUserDetails] = useState(null); // Selected user details
  const [userTransactions, setUserTransactions] = useState([]); // User transaction data
  const [open, setOpen] = useState(false); // Dialog open status
  const [loading, setLoading] = useState(false); // Loading state for dialog
  const [tabValue, setTabValue] = useState(0); // Tab value to control which tab is active
  const navigate = useNavigate();

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/signin');
  };

  const loadUserInfo = () => {
    const userInfo = JSON.parse(localStorage.getItem('user'));
    setUser(userInfo);
  };

  useEffect(() => {
    loadUserInfo();
    const handleStorageChange = () => loadUserInfo();
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  useEffect(() => {
    fetchUsers(page, rowsPerPage);
  }, [page, rowsPerPage]);

  const fetchUsers = async (page, limit) => {
    try {
      const response = await fetch(`${API_ROOT}/users`);
      const data = await response.json();
      setTotalUsers(data.length);
      const start = page * limit;
      const end = start + limit;
      setUsers(data.slice(start, end).map(user => ({
        id: user.id,
        username: `${user.firstName.trim()} ${user.lastName.trim()}`,
        email: user.email.trim(),
        role: user.isActive ? 'User' : 'Inactive'
      })));
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleRowClick = async (user) => {
    setLoading(true);
    setOpen(true);
    try {
      const [usageResponse, transactionResponse] = await Promise.all([
        fetch(`${API_ROOT}/users/${user.id}/usages`),
        fetch(`${API_ROOT}/users/${user.id}/transaction`)
      ]);

      if (!usageResponse.ok || !transactionResponse.ok) {
        throw new Error('Failed to fetch user details or transactions');
      }

      const usageData = await usageResponse.json();
      const transactionData = await transactionResponse.json();

      setSelectedUserDetails(usageData);
      setUserTransactions(transactionData);
    } catch (error) {
      console.error('Error fetching user details or transactions:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateTransaction = async (userId, subscriptionType) => {
    try {
      const response = await fetch(`${API_ROOT}/users/${userId}/transaction`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: 0,
          subscriptionType,
          status: 'SUCCESS',
        }),
      });
      if (response.ok) {
        alert('Transaction created successfully!');
        setUserTransactions([...userTransactions, await response.json()]);
      } else {
        throw new Error('Failed to create transaction');
      }
    } catch (error) {
      console.error('Error creating transaction:', error);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedUserDetails(null);
    setUserTransactions([]);
    setTabValue(0); // Reset to the first tab
  };

  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleTabChange = (event, newValue) => setTabValue(newValue);

  return (
    <div>
      {/* Admin Header */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>Admin Dashboard</Typography>
          <IconButton edge="end" color="inherit" onClick={handleAvatarClick}>
            <Avatar alt="Admin Profile" src="/path-to-admin-avatar.jpg" />
          </IconButton>
          <Menu anchorEl={anchorEl} open={isMenuOpen} onClose={handleMenuClose}>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      {/* User Table */}
      <Container sx={{ marginTop: 4 }}>
        <Paper elevation={2}>
          <TableContainer>
            <Table>
              <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Username</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Role</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user, index) => (
                  <TableRow key={user.id} onClick={() => handleRowClick(user)} hover style={{ cursor: 'pointer' }}>
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
            labelRowsPerPage="Rows per page"
          />
        </Paper>
      </Container>

      {/* Dialog for displaying user details */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>
          User Details
        </DialogTitle>
        {loading ? (
          <DialogContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CircularProgress />
          </DialogContent>
        ) : (
          <>
            <Tabs value={tabValue} onChange={handleTabChange} indicatorColor="primary" textColor="primary" sx={{ paddingX: 4}}>
              <Tab label="User Usages" />
              <Tab label="Transactions" />
            </Tabs>

            <TabPanel value={tabValue} index={0}>
              {selectedUserDetails && (
                <DialogContent>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="subtitle1" color="textSecondary">User ID:</Typography>
                      <Typography variant="body1">{selectedUserDetails.user.id}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="subtitle1" color="textSecondary">Username:</Typography>
                      <Typography variant="body1">{`${selectedUserDetails.user.firstName} ${selectedUserDetails.user.lastName}`}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="subtitle1" color="textSecondary">Email:</Typography>
                      <Typography variant="body1">{selectedUserDetails.user.email}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="subtitle1" color="textSecondary">Phone:</Typography>
                      <Typography variant="body1">{selectedUserDetails.user.telNo}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="subtitle1" color="textSecondary">Start Time:</Typography>
                      <Typography variant="body1">{new Date(selectedUserDetails.startTime).toLocaleString()}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="subtitle1" color="textSecondary">End Time:</Typography>
                      <Typography variant="body1">
                      {selectedUserDetails.endTime ? new Date(selectedUserDetails.endTime).toLocaleString() : 'Not yet'}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="subtitle1" color="textSecondary">Subscriber:</Typography>
                      <Typography variant="body1">{selectedUserDetails.subscriber ? 'Yes' : 'No'}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="subtitle1" color="textSecondary">Generated Images:</Typography>
                      <Typography variant="body1">{selectedUserDetails.noGeneratingImages}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="subtitle1" color="textSecondary">Exported Images:</Typography>
                      <Typography variant="body1">{selectedUserDetails.noExportingImages}</Typography>
                    </Grid>
                  </Grid>
                </DialogContent>
              )}

              
            </TabPanel>

            <TabPanel value={tabValue} index={1}>
              {userTransactions.length > 0 ? (
                <TableContainer component={Paper} elevation={0}>
                  <Table>
                    <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
                      <TableRow>
                        <TableCell>Transaction ID</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell>Subscription Type</TableCell>
                        <TableCell>Status</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {userTransactions.map((transaction) => (
                        <TableRow key={transaction.id}>
                          <TableCell>{transaction.id}</TableCell>
                          <TableCell>${transaction.amount}</TableCell>
                          <TableCell>{transaction.subscriptionType}</TableCell>
                          <TableCell>{transaction.status}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              ) : (
                <DialogContentText>No transactions found for this user.</DialogContentText>
              )}
              {/* Button to create a transaction if none exist */}
      {userTransactions.length === 0 && (
        <Box sx={{ marginTop: 2 }}>
          <FormControl fullWidth>
            <InputLabel>Subscription Type</InputLabel>
            <Select
              onChange={(e) => handleCreateTransaction(selectedUserDetails.user.id, e.target.value)}
              defaultValue=""
            >
              <MenuItem value="ONE_MONTH">One Month</MenuItem>
              <MenuItem value="THREE_MONTHS">Three Months</MenuItem>
              <MenuItem value="SIX_MONTHS">Six Months</MenuItem>
              <MenuItem value="TWELVE_MONTHS">Twelve Months</MenuItem>
            </Select>
          </FormControl>
          {/* <Button 
            variant="contained" 
            color="primary" 
            sx={{ marginTop: 2 }}
            onClick={() => handleCreateTransaction(selectedUserDetails.user.id, 'ONE_MONTH')}
          >
            Create Transaction
          </Button> */}
        </Box>
      )}
            </TabPanel>
          </>
        )}

        <DialogActions>
          <Button onClick={handleClose} color="primary">Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AdminUserPage;
