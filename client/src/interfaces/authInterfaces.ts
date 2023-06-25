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
