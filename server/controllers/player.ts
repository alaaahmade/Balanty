import { Request, RequestHandler, Response } from 'express';
import { getPlayerById, updatePlayerById } from '../services/player';

const getPlayer: RequestHandler = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const userId = Number(req.params.id);
  const profileData = getPlayerById(userId);

  res.json({
    status: 200,
    data: profileData,
  });
};

const updatePlayer: RequestHandler = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const playerId = req.params.id;
  const updatedData = req.body;

  const updatedPlayer = await updatePlayerById(playerId, updatedData);
  res.json({
    status: 200,
    data: updatedPlayer,
  });
};

export { getPlayer, updatePlayer };
