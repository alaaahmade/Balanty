import { ReactNode } from 'react';
import { Control, FieldError, FieldValues } from 'react-hook-form';

export interface loginProps {
  username: string;
  password: string;
}

export interface signupProps {
  username: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

export interface InputProps {
  type: string;
  label: string;
  placeholder: string;

  errors: { [key in keyof signupProps | keyof loginProps]?: FieldError };
  control: Control<signupProps> | Control<FieldValues>;
  name: keyof signupProps | keyof loginProps;
}

export interface User {
  id: number;
  username: string;
  email: string;
  avatar: string;
  authToken?: string;
  role: string;
}

export interface AuthContextData {
  user: User | null;
  login: (username: string, password: string) => Promise<void>;
  signup: (userData: signupProps, isplayer: string) => Promise<void>;
  logout: () => Promise<void>;
  errorMessage: string;
  isLoading: boolean;
}

export interface CustomErrorResponse {
  status: number;
  message: string;
  data: {
    message: string;
    status: number;
  };
}

export interface ChildrenProps {
  children: ReactNode;
}

export interface sinupProps {
  image: string;
  name: string;
  rate: { value: number }[];
  address: string;
  description: string;
}
