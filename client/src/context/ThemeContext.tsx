import React, { FC, createContext, useEffect, useMemo, useState } from 'react';
import { ThemeProvider } from '@mui/material';
import { ChildrenProps, ThemeContextType } from '../interfaces';
import { DarkTheme, LightTheme } from '../themes';

export const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: true,
  toggleTheme: async () => {
    return undefined;
  },
});

export const ThemeProviderWrapper: FC<ChildrenProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const toggleTheme = () => {
    setIsDarkMode(prev => {
      localStorage.setItem('theme', JSON.stringify(!prev));
      return !prev;
    });
  };
  const ThemeContextValue = useMemo(
    () => ({ isDarkMode, toggleTheme }),
    [isDarkMode, toggleTheme],
  );

  useEffect(() => {
    const theme = JSON.parse(localStorage.getItem('theme') as string);
    setIsDarkMode(theme);
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={ThemeContextValue}>
      <ThemeProvider theme={isDarkMode ? DarkTheme : LightTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
