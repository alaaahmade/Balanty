import { createContext, useState } from 'react';
import { OpenContextValue } from '../interfaces/matchInterface';

export const useCustomOpen = (): OpenContextValue => {
  const [openPage, setOpenPage] = useState(false);

  const updateOpen = (newValue: boolean) => {
    setOpenPage(newValue);
  };

  return { openPage, updateOpen };
};

export const open = createContext<OpenContextValue>({});
open.displayName = 'open';
