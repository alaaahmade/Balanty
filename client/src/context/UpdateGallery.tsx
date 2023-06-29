import { createContext, useMemo, useState } from 'react';
import { UpdateContextValue } from '../interfaces/StadiumProfile';
import { MyContextProviderProps } from '../interfaces';

export const UpdateGalleryContext = createContext<UpdateContextValue>(
  {} as UpdateContextValue,
);

export const UpdateGalleryContextProvider = ({
  children,
}: MyContextProviderProps) => {
  const [Agree, setAgree] = useState<boolean>(false);

  const values = useMemo(
    () => ({
      Agree,
      setAgree,
    }),
    [Agree],
  );
  return (
    <UpdateGalleryContext.Provider value={values}>
      {children}
    </UpdateGalleryContext.Provider>
  );
};
