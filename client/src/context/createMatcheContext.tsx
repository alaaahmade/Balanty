import { createContext } from 'react';

interface OpenContextValue {
  openPage?: boolean;
  setOpenPage?: React.Dispatch<React.SetStateAction<boolean>>;
}

const open = createContext<OpenContextValue>({});
open.displayName = 'open';

export default open;
