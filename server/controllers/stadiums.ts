import { Request, RequestHandler, Response } from 'express';
import { getStadiumMatchesService } from '../services';

export const getStadiumMatches: RequestHandler = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const matches = await getStadiumMatchesService(req);
  res.status(matches.status).json(matches);
};
