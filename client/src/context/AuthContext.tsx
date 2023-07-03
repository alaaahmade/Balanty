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

// eslint-disable-next-line import/prefer-default-export
export const AuthContext = createContext<AuthContextData>({
  user: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  login: async () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  signup: async () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  logout: async () => {},
});
