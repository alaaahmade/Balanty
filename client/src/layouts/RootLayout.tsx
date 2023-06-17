import React, { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import NavBar from '../components/RootComponents/navBar/NavBar';
import { LeftSideBar, RightSideBar } from '../components';
import CreateMatch from '../pages/CreateMatch';

interface RootLayoutProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
}

const RootLayout: React.FC<RootLayoutProps> = ({
  setOpen,
  open,
}): ReactElement => {
  return (
    <Box
      sx={{
        position: 'fixed',
        width: '100%',
      }}
    >
      <NavBar />
      <LeftSideBar setOpen={setOpen} />
      <CreateMatch open={open} setOpen={setOpen} />
      <RightSideBar />
      <Outlet />
    </Box>
  );
};

export default RootLayout;
