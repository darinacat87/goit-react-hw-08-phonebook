import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { useSelector } from 'react-redux';
import { getIsLoggedIn, getUserName } from 'redux/authSlice';
import Login from 'components/Login/Login';
import Signup from 'components/NavigationSignup/NavigationSignup';
import NavLogout from 'components/Logout/Logout';

export default function Navigation() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const userName = useSelector(getUserName);
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex', justifyContent: 'flex-end' },
            }}
          >
            {!isLoggedIn && (
              <>
                <Login />
                <Signup />
              </>
            )}
            {isLoggedIn && (
              <>
                <h3>Hello, {userName} :) </h3>
                <NavLogout />
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
