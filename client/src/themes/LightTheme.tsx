import { createTheme } from '@mui/material';

const LightTheme = createTheme({
  typography: {
    fontFamily: 'IBM Plex Sans Arabic',
  },
  direction: 'rtl', // before: 'ltr', after: 'rtl'
  // palette: {
  //   primary: {
  //     main: '#2CB674',
  //     second: '#01031C',
  //     contrastText: '#000',
  //     wightColor: '#fff',
  //     grayColor: '#D9D9D9',
  //   },
  // },
});

export default LightTheme;
