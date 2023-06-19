import { Request, RequestHandler, Response } from 'express';
import { getStadiumMatchesService } from '../services';

export const getStadiumMatches: RequestHandler = async (
  req: Request,
  res: Response,
) => {
  const matches = await getStadiumMatchesService(req);
  res.status(200).json({
    status: 200,
    data: matches,
  });
};
