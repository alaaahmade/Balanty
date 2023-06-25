import React, { ReactElement, useContext, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import NavBar from '../components/RootComponents/navBar/NavBar';
import { LeftSideBar, RightSideBar } from '../components';
import CreateMatch from '../pages/CreateMatch';
import { open } from '../context';

const RootLayout: React.FC = (): ReactElement => {
  const [Profile, setProfile] = useState(false);
  const { pathname } = useLocation();
  const contextValue = useContext(open);

  if (!contextValue) {
    return <div>Loading...</div>;
  }
  const { openPage, updateOpen } = contextValue;
  useEffect(() => {
    if (pathname.startsWith('/profile')) {
      setProfile(true);
    } else {
      setProfile(false);
    }
  }, [pathname]);
  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <NavBar />
      <LeftSideBar setOpen={updateOpen || (() => undefined)} />
      <CreateMatch
        open={openPage || false}
        setOpen={updateOpen || (() => undefined)}
      />
      {!Profile && <RightSideBar />}

      <Outlet />
    </Box>
  );
};

export default RootLayout;
