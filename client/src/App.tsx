import { ReactElement } from 'react';
import { Box } from '@mui/material';
import NavBar from './components/NavBar';
import './index.css';
import LeftSideBar from './components/LeftSideBar';

const App = (): ReactElement => {
  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <NavBar />
      <LeftSideBar />
    </Box>
  );
};

export default App;
