// src/components/Navigation/Navbar.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { logout } from '../../redux/slices/authSlice';
import { clearAuth } from '../../services/localStorage.service';
import FileUploader from './FileUploader';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  IconButton,
  Divider,
} from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
// Assume logo.png is in assets folder
import logo from '../../assets/logo.png';

const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { isAuthenticated, username } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const handleLogout = () => {
    dispatch(logout());
    clearAuth();
    handleClose();
    navigate('/login');
  };
  
  return (
    <AppBar 
    position="fixed" 
    sx={{ 
      zIndex: (theme) => theme.zIndex.drawer + 1,
      backgroundColor: 'white',  // Set background color to white
      color: 'black',           // Set default text color to black
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' // Optional: subtle shadow
    }}
  >
    <Toolbar>
      <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center'}}>
        <img 
          src={logo} 
          alt="GSynergy Logo" 
          style={{ height: '40px', marginRight: '16px' }} 
        />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center', color: 'black' }}>
          Data Viewer App
        </Typography>
      </Box>
      
      {isAuthenticated && (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <FileUploader />
          <Divider 
            orientation="vertical" 
            flexItem 
            sx={{ mx: 2, backgroundColor: 'rgba(0,0,0,0.3)' }} // Dark divider
          />
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            sx={{ color: 'black' }} // Icon color
          >
            <AccountCircle />
            <Typography variant="body1" sx={{ ml: 1, color: 'black' }}>
              {username}
            </Typography>
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleLogout}>Sign Out</MenuItem>
          </Menu>
        </Box>
      )}
      
      {!isAuthenticated && (
        <Button 
          sx={{ color: 'black' }} // Black text for sign-in button
          onClick={() => navigate('/login')}
        >
          Sign In
        </Button>
      )}
    </Toolbar>
  </AppBar>
  );
};

export default Navbar;
