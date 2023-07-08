import { createTheme } from '@mui/material';
import { CustomPaletteOptions } from './DarkTheme';

const LightTheme = createTheme({
  typography: {
    fontFamily: 'IBM Plex Sans Arabic',
  },
  direction: 'rtl',
  palette: {
    primary: {
      main: '#2CB674',
      contrastText: '#000',
    },
    text: {
      primary: '#fff',
    },
    customColors: {
      grayColor: '#F2FCF5',
      wightColor: '#fff',
      backGroundColor: '#fff',
      second: '#01031C',
    },
  } as CustomPaletteOptions,
});

export default LightTheme;
