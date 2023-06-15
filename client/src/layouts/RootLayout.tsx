import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import NavBar from '../components/RootComponents/navBar/NavBar';
import { LeftSideBar, RightSideBar } from '../components';

const RootLayout = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        width: '100%',
      }}
    >
      <NavBar />
      <LeftSideBar />
      <RightSideBar />
      <Outlet />
    </Box>
  );
};

export default RootLayout;
