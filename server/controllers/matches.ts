import { Response, NextFunction, RequestHandler } from 'express';
import { createMatchService } from '../services';
import { CustomRequest, IServiceResponse } from '../interfaces';

const createMatch: RequestHandler = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  req.userData = { owner_id: 3 }; //user data will coming from checkAuth Middleware

  const data = (await createMatchService(req)) as IServiceResponse;

  res.status(data?.status).json(data);
};

export default createMatch;
