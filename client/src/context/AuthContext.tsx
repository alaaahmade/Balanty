import { createContext } from 'react';
import { User } from '../hooks/useUser';

interface AuthContext {
  user: User | null;
  setUser: (user: User | null) => void;
}

const AuthContext = createContext<AuthContext>({
  user: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setUser: () => {},
});

export default AuthContext;
