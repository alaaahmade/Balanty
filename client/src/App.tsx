import { ReactElement } from 'react';
import { Box } from '@mui/material';
import NavBar from './components/NavBar';
import './index.css';
import LeftSideBar from './components/LeftSideBar';
import RightSideBar from './components/RightSideBar';
import RootLayout from './layouts/RootLayout';

const App = (): ReactElement => {
  return <RootLayout />;
};

export default App;
