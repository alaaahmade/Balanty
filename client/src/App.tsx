import { ReactElement } from 'react';
import { ThemeProvider } from '@emotion/react';
import LightTheme from './themes';
import { Header } from './components';

const App = (): ReactElement => {
  return (
    <ThemeProvider theme={LightTheme}>
      {/* <RootLayout /> */}
      <Header />
    </ThemeProvider>
  );
};

export default App;
