import { IUser } from '../../interfaces/auth';

declare global {
  namespace Express {
    export interface Request {
      user?: IUser;
    }
  }
}
