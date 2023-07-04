import { FieldErrors, Control } from 'react-hook-form';

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
  errors: FieldErrors<loginProps | signupProps>;
  control: Control<loginProps | signupProps>;
  name: keyof (loginProps | signupProps);
}

export interface User {
  id: number;
  username: string;
  email: string;
  avatar: string;
  authToken?: string;
}

export interface AuthContextData {
  user: User | null;
  login: (username: string, password: string) => Promise<void>;
  signup: (userData: signupProps, isplayer: string) => Promise<void>;
  logout: () => Promise<void>;
  errorMessage: string;
}

export interface CustomErrorResponse {
  data: {
    message: string;
    status: number;
  };
}
