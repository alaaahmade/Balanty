import { Request, Response, NextFunction, RequestHandler } from 'express';
import CustomError from './CustomError';

const errorMappings: { [name: string]: number } = {
  JsonWebTokenError: 401,
  Unauthorized: 401,
  ValidationError: 422,
  NotFound: 404,
};

type ErrorType = InstanceType<typeof CustomError>;

const errorWrapper = (controller: RequestHandler) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await controller(req, res, next);
    } catch (error: unknown) {
      const customeError = error as ErrorType;
      const status = errorMappings[customeError?.name as string];
      customeError.status = status;
      next(customeError);
    }
  };
};

export default errorWrapper;
