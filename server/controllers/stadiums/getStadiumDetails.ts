import { RequestHandler, Request, Response } from 'express';
import getStadiumDetailsService from '../../services/stadiums/getStadiumDetailsService';

const getStadiumDetails: RequestHandler = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const response = await getStadiumDetailsService(req);
  res.json({
    status: 200,
    data: response,
  });
};

export default getStadiumDetails;
