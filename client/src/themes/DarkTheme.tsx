import { PaletteColorOptions, createTheme } from '@mui/material';

const DarkTheme = createTheme({
  typography: {
    fontFamily: 'IBM Plex Sans Arabic',
  },
  direction: 'rtl',
  palette: {
    primary: {
      main: '#2CB674',
      second: '#181818',
      contrastText: '#2CB674',
      backGroundColor: '#000',
      grayColor: '#181818',
      wightColor: '#fff',
    } as PaletteColorOptions,
  },
});

export default DarkTheme;
