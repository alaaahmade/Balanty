import { Request, RequestHandler, Response } from 'express';
import { playerService } from '../services/player';

const getPlayer: RequestHandler = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const userId = Number(req.params.id);
  const profileData = playerService(userId);

  res.json({
    status: 200,
    data: profileData,
  });
};

export { getPlayer };
