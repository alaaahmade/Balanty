import { ReactElement } from 'react';
import { ThemeProvider } from '@emotion/react';
import LightTheme from './themes';
import { Header } from './components';

import Profile from './components/playerProfile/Profile';

const App = (): ReactElement => {
  return (
    <ThemeProvider theme={LightTheme}>
      <Profile />
      {/* <Header key={null} type="" props={undefined} /> */}
    </ThemeProvider>
  );
};

export default App;
