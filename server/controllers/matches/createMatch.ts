import { Request, Response, NextFunction, RequestHandler } from 'express';
import { createMatchService } from '../../services';
import CustomRequest from '../../interfaces';

const createMatch: RequestHandler = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  // await console.log('hi');
  req.userData = { owner_id: 1 };
  await createMatchService(req);
};

export default createMatch;
