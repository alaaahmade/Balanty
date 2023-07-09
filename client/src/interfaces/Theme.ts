import { Palette, PaletteOptions, Theme } from '@mui/material';

export interface customPalette extends Palette {
  customColors: {
    grayColor: string;
    wightColor: string;
    backGroundColor: string;
    second: string;
  };
}

export interface PlayerPalette extends Palette {
  customColors: { grayColor: string };
}

export interface CustomTheme extends Theme {
  palette: PlayerPalette;
}

export interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export interface CustomPaletteOptions extends PaletteOptions {
  customColors: {
    grayColor: string;
    wightColor: string;
    backGroundColor: string;
    second: string;
  };
}
