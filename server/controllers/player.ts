import { Request, RequestHandler, Response } from 'express';
import { getPlayerService, updatePlayerService } from '../services/player';

const getPlayer: RequestHandler = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const userId = Number(req.params.id);
  const profileData = getPlayerService(userId);

  res.json({
    status: 200,
    data: profileData,
  });
};

const updatePlayer: RequestHandler = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const updatedPlayer = await updatePlayerService(req);
  res.json({
    status: 200,
    data: updatedPlayer,
  });
};

export { getPlayer, updatePlayer };
