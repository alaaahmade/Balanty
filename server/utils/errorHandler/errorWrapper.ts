import { Request, Response, NextFunction, RequestHandler } from 'express';

const errorMappings: { [name: string]: number } = {
  JsonWebTokenError: 401,
  Unauthorized: 401,
  ValidationError: 422,
  NotFound: 404,
};

const errorWrapper = (controller: RequestHandler) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await controller(req, res, next);
    } catch (error: unknown) {
    const customeError = error as {name?: string, status?: number}
      const status = errorMappings[customeError?.name as string]
      customeError.status = status;
      next(customeError)
    }
  };
};

export default errorWrapper;
