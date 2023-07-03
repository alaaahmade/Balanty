import { RequestHandler, Request, Response } from 'express';

import {
  getAllStadiumsService,
  getStadiumDetailsService,
  getStadiumMatchesService,
  getStadiumProfileService,
} from '../services';

export const getAllStadiums: RequestHandler = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const response = (await getAllStadiumsService()) as {
    status: number;
    data: object;
  };
  res.status(response?.status).json(response);
};

export const getStadiumDetails: RequestHandler = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const response = await getStadiumDetailsService(req);
  res.status(response?.status).json(response);
};

export const getStadiumMatches: RequestHandler = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const matches = await getStadiumMatchesService(req);
  res.status(matches.status).json(matches);
};

export const getStadiumProfile: RequestHandler = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const matches = await getStadiumProfileService(req);
  res.status(matches.status).json(matches);
};
