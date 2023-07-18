import { createTheme } from '@mui/material';
import { CustomPaletteOptions } from '../interfaces';

const DarkTheme = createTheme({
  typography: {
    fontFamily: 'IBM Plex Sans Arabic',
  },
  direction: 'rtl',
  palette: {
    primary: {
      main: '#2CB674',
      contrastText: '#ccc',
    },

    customColors: {
      grayColor: '#181818',
      wightColor: '#fff',
      backGroundColor: '#000',
      second: '#181818',
    },
  } as CustomPaletteOptions,
});

export default DarkTheme;
