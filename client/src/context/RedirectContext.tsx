import { FC, ReactNode, createContext, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from './AuthContext';

export const RedirectContext = createContext<null>(null);

export const RedirectProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/home');
    }
  }, [user, navigate]);
  return (
    <RedirectContext.Provider value={null}>
      {!user && children}
    </RedirectContext.Provider>
  );
};
