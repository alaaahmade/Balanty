import React, {
  FC,
  createContext,
  useCallback,
  useState,
  useMemo,
  ReactNode,
} from 'react';

import axios, { AxiosError } from 'axios';
import {
  AuthContextData,
  User,
  signupProps,
  CustomErrorResponse,
} from '../interfaces';

export const AuthContext = createContext<AuthContextData>({
  user: null,
  login: async () => {
    return undefined;
  },
  signup: async () => {
    return undefined;
  },
  logout: async () => {
    return undefined;
  },
  errorMessage: '',
});

interface ChildrenProps {
  children: ReactNode;
}

export const AuthProvider: FC<ChildrenProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');

  function isAxiosError(error: unknown): error is AxiosError {
    return (error as AxiosError).isAxiosError !== undefined;
  }

  const login = useCallback(async (username: string, password: string) => {
    try {
      const response = await axios.post(`/api/v1/user/login`, {
        username,
        password,
      });
      setUser(response.data.data.user);
      localStorage.setItem('user', JSON.stringify(response.data.data.user));
    } catch (error) {
      if (isAxiosError(error)) {
        const axiosError = error as AxiosError<CustomErrorResponse>;
        if (axiosError.response) {
          const errorResponse = axiosError.response.data.data;
          setErrorMessage(errorResponse?.message);
        }
      } else {
        setErrorMessage((error as Error).message);
      }
    }
  }, []);

  const signup = useCallback(
    async (userData: signupProps, isplayer: string) => {
      try {
        const response = await axios.post(`/api/v1/user/signup`, {
          username: userData.username,
          email: userData.email,
          phone: userData.phone,
          password: userData.password,
          confirmPassword: userData.confirmPassword,
          role: isplayer === 'true' ? 'player' : 'stadium',
        });
        setUser(response.data.user);
        localStorage.setItem('user', JSON.stringify(response.data.user));
      } catch (error) {
        if (isAxiosError(error)) {
          const axiosError = error as AxiosError<CustomErrorResponse>;
          if (axiosError.response) {
            const errorResponse = axiosError.response.data.data;
            setErrorMessage(errorResponse?.message);
          }
        } else {
          setErrorMessage((error as Error).message);
        }
      }
    },
    [],
  );

  const logout = useCallback(async () => {
    try {
      await axios.post('/api/v1/user/logout');
      setUser(null);
      localStorage.removeItem('user');
    } catch (error) {
      if (isAxiosError(error)) {
        const axiosError = error as AxiosError<CustomErrorResponse>;
        if (axiosError.response) {
          const errorResponse = axiosError.response.data.data;
          setErrorMessage(errorResponse?.message);
        }
      } else {
        setErrorMessage((error as Error).message);
      }
    }
  }, []);

  const authContextValue = useMemo(
    () => ({ user, login, signup, logout, errorMessage }),
    [user, login, signup, logout, errorMessage],
  );

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
