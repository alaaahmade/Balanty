import { NextFunction, Request, Response } from 'express';
import { CustomError } from '../utils';
declare const serverError: (err: CustomError, req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
export default serverError;
