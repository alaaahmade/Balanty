import { NextFunction, Response } from 'express';
import { CustomError, verifyToken } from '../utils';

const checkAuth = async (req: any, res: Response, next: NextFunction) => {
  const { token } = req.cookies;

  if (!token) {
    throw new CustomError(400, 'Unauthorized');
  }
  try {
    const decoded = await verifyToken(token);
    req.user = decoded;
    next();
  } catch (error) {
    res.clearCookie('token');
    next(error);
  }
};

export default checkAuth;
