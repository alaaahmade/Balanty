import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import NavBar from '../components/NavBar';
import LeftSideBar from '../components/LeftSideBar';
import RightSideBar from '../components/RightSideBar';

const RootLayout = () => {
  return (
    <Box>
      <NavBar />
      <LeftSideBar />
      <RightSideBar />
      <Outlet />
    </Box>
  );
};

export default RootLayout;
