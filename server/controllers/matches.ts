import { Response, RequestHandler } from 'express';
import { CustomRequest, IServiceResponse } from '../interfaces';
import {
  JoinToMatchService,
  createMatchService,
  getAllMatches,
} from '../services';

export const createMatch: RequestHandler = async (
  req: CustomRequest,
  res: Response,
): Promise<void> => {
  const data = (await createMatchService(req)) as IServiceResponse;
  res.status(data?.status).json(data);
};

export const getMatches: RequestHandler = async (
  req: CustomRequest,
  res: Response,
): Promise<void> => {
  const data = await getAllMatches(req);
  res.status(data.status).json(data);
};

export const JoinToMatch: RequestHandler = async (
  req: CustomRequest,
  res: Response,
): Promise<void> => {
  const data = await JoinToMatchService(req);
  res.status(data.status).json(data);
};
