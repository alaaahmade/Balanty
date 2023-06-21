import { NextFunction, Response } from 'express';
import { verifyToken } from '../utils';

const isLogged = async (req: any, res: Response, next: NextFunction) => {
  const { token } = req.cookies;
  if (!token) {
    next();
  }
  try {
    await verifyToken(token);
    req.accessLogged = true;
    next();
  } catch (err) {
    res.clearCookie('token');
    next();
  }
};

export default isLogged;
