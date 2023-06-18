import { Request, Response, NextFunction, RequestHandler } from 'express';
import { createMatchService } from '../services';
import CustomRequest from '../interfaces';

const createMatch: RequestHandler = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  req.userData = { owner_id: 1 };
  const data = await createMatchService(req);
  res.json({
    status: 202,
    data: data,
  });
};

export default createMatch;
