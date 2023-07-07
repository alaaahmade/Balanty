import { FC, ReactNode, createContext, useContext } from 'react';
import { AuthContext } from './AuthContext';
import { LandingPage } from '../pages';

const ProtectedContext = createContext<null>(null);

const ProtectedProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { user } = useContext(AuthContext);
  return (
    <ProtectedContext.Provider value={null}>
      {user ? children : <LandingPage />}
    </ProtectedContext.Provider>
  );
};

export default ProtectedProvider;
