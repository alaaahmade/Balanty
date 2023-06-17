import { ReactElement, useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import RootLayout from './layouts/RootLayout';
import LightTheme from './themes';
import CreateMatch from './pages/CreateMatch';

const App = (): ReactElement => {
  const [open, setOpen] = useState(false);

  return (
    <ThemeProvider theme={LightTheme}>
      <RootLayout setOpen={setOpen} open={open} />
      <CreateMatch open={open} setOpen={setOpen} />
    </ThemeProvider>
  );
};

export default App;
