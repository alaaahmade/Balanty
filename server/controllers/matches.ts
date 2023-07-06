import { Response, Request, RequestHandler } from 'express';
import { IServiceResponse } from '../interfaces';
import { createMatchService, getAllMatches } from '../services';

export const createMatch: RequestHandler = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const data = (await createMatchService(req)) as IServiceResponse;
  res.status(data?.status).json(data);
};

export const getMatches: RequestHandler = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const data = await getAllMatches();
  res.status(data.status).json(data);
};
