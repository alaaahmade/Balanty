import React, {
  FC,
  createContext,
  useCallback,
  useState,
  ReactNode,
  useMemo,
} from 'react';
import axios from 'axios';
import { Alert } from '@mui/material';
import { AuthContextData, User, signupProps } from '../interfaces';

export const AuthContext = createContext<AuthContextData>({
  user: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  login: async () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  signup: async () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  logout: async () => {},
});

export const AuthProvider: FC<React.PropsWithChildren<object>> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  const login = useCallback(async (username: string, password: string) => {
    try {
      const response = await axios.post(`/api/v1/user/login`, {
        username,
        password,
      });

      setUser(response.data.data.user);
      localStorage.setItem('user', JSON.stringify(response.data.data.user));
      window.location.href = '/home';
    } catch (error) {
      <Alert>Login Failed</Alert>;
      // console.error('Login Failed', error);
    }
  }, []);

  const signup = useCallback(
    async (userData: signupProps, isplayer: boolean) => {
      try {
        const response = await axios.post(`/api/v1/user/signup`, {
          username: userData.username,
          email: userData.email,
          phone: userData.phone,
          password: userData.password,
          confirmPassword: userData.confirmPassword,
          role: isplayer ? 'player' : 'stadium',
        });
        setUser(response.data.user);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        window.location.href = '/home';
      } catch (error) {
        console.error('Signup Failed', error);
      }
    },
    [],
  );
};
