import { createContext, useState } from 'react';
import { OpenContextValue } from '../interfaces/matchInterface';

export const useCustomOpen = (): {
  openPage: boolean;
  updateOpen: (newValue: boolean) => void;
} => {
  const [openPage, setOpenPage] = useState(false);

  const updateOpen = (newValue: boolean) => {
    setOpenPage(newValue);
  };

  return { openPage, updateOpen };
};

export const open = createContext<OpenContextValue | object>({});
open.displayName = 'open';
