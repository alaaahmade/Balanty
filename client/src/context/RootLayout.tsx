import { createContext, useState } from 'react';
import { OpenContextValue, useCustomOpenI } from '../interfaces/matchInterface';

export const useCustomOpen = (): useCustomOpenI => {
  const [openPage, setOpenPage] = useState(false);

  const updateOpen = (newValue: boolean) => {
    setOpenPage(newValue);
  };

  return { openPage, updateOpen, ...({} as OpenContextValue) };
};

export const open = createContext<OpenContextValue>({} as OpenContextValue);
open.displayName = 'open';
