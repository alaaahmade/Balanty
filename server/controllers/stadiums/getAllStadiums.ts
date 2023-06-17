import { RequestHandler, Request, Response } from 'express';
import { getAllStadiumsService } from '../../services';

const getAllStadiums: RequestHandler = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const response = await getAllStadiumsService(req);
  res.json({
    status: 200,
    data: response,
  });
};

export default getAllStadiums;
