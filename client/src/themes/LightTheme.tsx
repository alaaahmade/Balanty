import { createTheme } from '@mui/material';

const LightTheme = createTheme({
  typography: {
    fontFamily: 'IBM Plex Sans Arabic',
  },
  direction: 'rtl', // before: 'ltr', after: 'rtl'
});

export default LightTheme;
