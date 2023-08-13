import { Response, Request, RequestHandler } from 'express';
import {
  createMatchService,
  getAllMatches,
  getMyMatchesService,
  JoinToMatchService,
} from '../services';
import { IServiceResponse } from '../interfaces';

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
  const data = await getAllMatches(req);
  res.status(data.status).json(data);
};

export const getMyMatches: RequestHandler = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const data = await getMyMatchesService(req);
  res.status(data.status).json(data);
};

export const JoinToMatch: RequestHandler = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const data = await JoinToMatchService(req);
  res.status(data.status).json(data);
};

export const searchMatches: RequestHandler = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const response = await getAllMatches(req);
  res.status(response.status).json(response);
};
