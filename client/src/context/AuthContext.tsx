import React, {
  FC,
  createContext,
  useCallback,
  useState,
  useMemo,
} from 'react';

import axios, { AxiosError } from 'axios';

// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';

import {
  AuthContextData,
  User,
  signupProps,
  CustomErrorResponse,
  ChildrenProps,
} from '../interfaces';

import LoginWrapper from '../components/auth/LoginWrapper';

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

export const AuthProvider: FC<ChildrenProps> = ({ children }) => {
  const token = String(document.cookie.slice(6)) || null;
  const decodedToken = token && jwt_decode(token);

  const [user, setUser] = useState<User | null>(decodedToken as User);
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
          setErrorMessage(errorResponse.message);
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
        window.location.href = '/home';
      } catch (error) {
        if (isAxiosError(error)) {
          const axiosError = error as AxiosError<CustomErrorResponse>;
          if (axiosError.response) {
            const errorResponse = axiosError.response.data.data;
            setErrorMessage(errorResponse.message);
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
      window.location.href = '/';
    } catch (error) {
      if (isAxiosError(error)) {
        const axiosError = error as AxiosError<CustomErrorResponse>;
        if (axiosError.response) {
          const errorResponse = axiosError.response.data.data;
          setErrorMessage(errorResponse.message);
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
      {user ? children : <LoginWrapper />}
    </AuthContext.Provider>
  );
};
