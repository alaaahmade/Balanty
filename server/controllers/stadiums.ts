import { getAllStadiumsService } from '../services';
import { RequestHandler, Request, Response } from 'express';
import { getStadiumDetailsService } from '../services/';

export const getAllStadiums: RequestHandler = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const response = await getAllStadiumsService(req);
  res.json({
    status: 200,
    data: response,
  });
};

export const getStadiumDetails: RequestHandler = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const response = await getStadiumDetailsService(req);
  res.json({
    status: 200,
    data: response,
  });
};
