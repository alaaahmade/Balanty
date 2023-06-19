import { ReactElement } from 'react';
import { ThemeProvider } from '@emotion/react';
import LightTheme from './themes';
import LoginWrapper from './components/auth/LoginWrapper';
import SignupWrapper from './components/auth/SignupWrapper';

const App = (): ReactElement => {
  return (
    <ThemeProvider theme={LightTheme}>
      <LoginWrapper isPlayer />
      {/* <SignupWrapper isPlayer /> */}
    </ThemeProvider>
  );
};

export default App;
