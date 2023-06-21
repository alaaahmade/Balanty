import { Avatar, Box } from '@mui/material';
import React, { ReactElement } from 'react';
import LeftSideBar from '../RootComponents/leftSideBar/LeftSideBar';
import NavBar from '../RootComponents/navBar/NavBar';

const PlayerBackground: React.FC = (): ReactElement => {
  return (
    <div>
      <NavBar />
      <div style={{ display: 'flex', right: 0 }}>
        <div>
          <Box
            sx={{
              width: 300,
              height: 300,
              backgroundColor: 'primary.dark',
              '&:hover': {
                backgroundColor: 'primary.main',
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          />
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 56, height: 56 }}
          />
        </div>
        <LeftSideBar />
      </div>
    </div>
  );
};

export default PlayerBackground;
