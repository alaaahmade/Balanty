import { Response, RequestHandler } from 'express';
import { CustomRequest, IServiceResponse } from '../interfaces';
import { createMatchService, getAllMatches } from '../services';

export const createMatch: RequestHandler = async (
  req: CustomRequest,
  res: Response,
): Promise<void> => {
  req.userData = { owner_id: 3 };
  const data = (await createMatchService(req)) as IServiceResponse;
  res.status(data?.status).json(data);
};
export const getMatches: RequestHandler = async (
  req: CustomRequest,
  res: Response,
): Promise<void> => {
  const data = await getAllMatches();
  res.status(data.status).json(data);
};
