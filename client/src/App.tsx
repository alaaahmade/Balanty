import { ReactElement } from 'react';
import { Box } from '@mui/material';
import NavBar from './components/NavBar';
import './index.css';

const App = (): ReactElement => {
  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <NavBar />
    </Box>
  );
};

export default App;
