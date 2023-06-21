import { NextFunction, Request, RequestHandler, Response } from 'express';
import { CustomError, verifyToken } from '../utils';

const checkAuth: RequestHandler = (
  req: any,
  res: Response,
  next: NextFunction,
) => {
  const { token } = req.cookies;

  if (!token) {
    throw new CustomError(400, 'Unauthorized');
  }
  try {
    const decoded = verifyToken(token);
    req.user = decoded;
    next();
  } catch (error) {
    next(error);
  }
};

export default checkAuth;
