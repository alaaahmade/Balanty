import { FC, ReactNode, createContext, useContext } from 'react';
import { AuthContext } from './AuthContext';
import LoginWrapper from '../components/auth/LoginWrapper';

const ProtectedContext = createContext<null>(null);

const ProtectedProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { user } = useContext(AuthContext);
  return (
    <ProtectedContext.Provider value={null}>
      {user ? children : <LoginWrapper />}
    </ProtectedContext.Provider>
  );
};

export default ProtectedProvider;
