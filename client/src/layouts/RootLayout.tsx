import React, { ReactElement, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import NavBar from '../components/RootComponents/navBar/NavBar';
import { LeftSideBar, RightSideBar } from '../components';
import CreateMatch from '../pages/CreateMatch';
import { open } from '../context';

const RootLayout: React.FC = (): ReactElement => {
  const contextValue = useContext(open);

  if (!contextValue) {
    return <div>Loading...</div>;
  }
  const { openPage, updateOpen } = contextValue;

  return (
    <Box
      sx={{
        position: 'fixed',
        width: '100%',
      }}
    >
      <NavBar />
      <LeftSideBar setOpen={updateOpen || (() => undefined)} />
      <CreateMatch
        open={openPage || false}
        setOpen={updateOpen || (() => undefined)}
      />
      <RightSideBar />
      <Outlet />
    </Box>
  );
};

export default RootLayout;
