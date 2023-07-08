import { createTheme, PaletteOptions } from '@mui/material';

export interface CustomPaletteOptions extends PaletteOptions {
  customColors: {
    grayColor: string;
    wightColor: string;
    backGroundColor: string;
    second: string;
  };
}

const DarkTheme = createTheme({
  typography: {
    fontFamily: 'IBM Plex Sans Arabic',
  },
  direction: 'rtl',
  palette: {
    primary: {
      main: '#2CB674',
      contrastText: '#2CB674',
    },
    text: {
      primary: '#fff',
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
