import { NextFunction, Request, Response } from 'express';
declare const checkAuth: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export default checkAuth;
