import { ReactElement } from 'react';
import { ThemeProvider } from '@emotion/react';
import LightTheme from './themes';
import LoginWrapper from './components/auth/LoginWrapper';

const App = (): ReactElement => {
  return (
    <ThemeProvider theme={LightTheme}>
      <LoginWrapper isPlayer isSignup />
    </ThemeProvider>
  );
};

export default App;
