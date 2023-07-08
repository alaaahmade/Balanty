import React, { FC, createContext, useMemo, useState } from 'react';
import { ThemeProvider } from '@mui/material';
import { ChildrenProps } from '../interfaces';
import { DarkTheme, LightTheme } from '../themes';

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: true,
  toggleTheme: async () => {
    return undefined;
  },
});

export const ThemeProviderWrapper: FC<ChildrenProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };
  const ThemeContextValue = useMemo(
    () => ({ isDarkMode, toggleTheme }),
    [isDarkMode, toggleTheme],
  );
  return (
    <ThemeContext.Provider value={ThemeContextValue}>
      <ThemeProvider theme={isDarkMode ? DarkTheme : LightTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
