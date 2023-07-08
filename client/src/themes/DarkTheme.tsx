import { createTheme } from '@mui/material';

const DarkTheme = createTheme({
  typography: {
    fontFamily: 'IBM Plex Sans Arabic',
  },
  direction: 'rtl', // before: 'ltr', after: 'rtl'
  palette: {
    mode: 'dark',
    primary: {
      main: '#2CB674',
      // second: '#01031C',
      // contrastText: '#000',
      // wightColor: '#fff',
      // grayColor: '#D9D9D9',
    },
  },
});

export default DarkTheme;
