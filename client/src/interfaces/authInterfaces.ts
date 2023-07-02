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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
  name: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
  avatar: string;
  authToken?: string;
}
