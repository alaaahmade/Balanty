import React, {
  FC,
  createContext,
  useCallback,
  useState,
  useMemo,
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
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  login: async () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  signup: async () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  logout: async () => {},
  errorMessage: '',
});

export const AuthProvider: FC<React.PropsWithChildren<object>> = ({
  children,
}) => {
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
      localStorage.setItem('user', '');
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
      {children}
    </AuthContext.Provider>
  );
};
