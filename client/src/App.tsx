import { ReactElement } from 'react';
import { ThemeProvider } from '@emotion/react';
// import RootLayout from './layouts/RootLayout';
import LightTheme from './themes';
import { Header } from './components';

const App = (): ReactElement => {
  return (
    <ThemeProvider theme={LightTheme}>
      {/* <RootLayout /> */}
      <Header key={null} type="" props={undefined} />
    </ThemeProvider>
  );
};

export default App;
