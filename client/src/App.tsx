import { ReactElement } from 'react';
import './index.css';
import { ThemeProvider } from '@emotion/react';
import RootLayout from './layouts/RootLayout';
import LightTheme from './themes/LightTheme';

const App = (): ReactElement => {
  return (
    <ThemeProvider theme={LightTheme}>
      <RootLayout />
    </ThemeProvider>
  );
};

export default App;
