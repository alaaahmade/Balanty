import { NextFunction, Request, Response } from 'express';
import { CustomError, verifyToken } from '../utils';
import { IUser } from '../interfaces/auth';

const checkAuth = async (req: Request, res: Response, next: NextFunction) => {
  const { token } = req.cookies;

  if (!token) {
    throw new CustomError(400, 'Unauthorized');
  }
  try {
    const decoded = await verifyToken(token);
    req.user = decoded as IUser;
    console.log(decoded);

    next();
  } catch (error) {
    res.clearCookie('token');
    next(error);
  }
};

export default checkAuth;
