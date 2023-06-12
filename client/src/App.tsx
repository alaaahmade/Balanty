import { ReactElement } from 'react';
import { Box } from '@mui/material';
import NavBar from './components/NavBar';
import './index.css';
import LeftSideBar from './components/LeftSideBar';
import RightSideBar from './components/RightSideBar';

const App = (): ReactElement => {
  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <NavBar />
      <LeftSideBar />
      <RightSideBar />
    </Box>
  );
};

export default App;
