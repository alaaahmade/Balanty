// eslint-disable-next-line no-shadow
enum IRoleEnum {
  player = 'player',
  stadium = 'stadium',
}
export interface loginProps {
  username: string;
  password: string;
}

export interface signupProps {
  username: string;
  email: string;
  role: IRoleEnum;
  phone: number;
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
