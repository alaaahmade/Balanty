import { Request, RequestHandler, Response } from 'express';
import {
  getPlayerService,
  playerMatchesService,
  updatePlayerService,
} from '../services/player';

const getPlayer: RequestHandler = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { id } = req.params;
  const response = (await getPlayerService(+id)) as {
    status: number;
    data: object;
  };
  res.status(response?.status).json(response);
};

const updatePlayer: RequestHandler = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const response = (await updatePlayerService(req)) as {
    status: number;
    data: object;
  };
  res.status(response?.status).json(response);
};

const playerMatches: RequestHandler = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { id } = req.params;
  const response = (await playerMatchesService(+id)) as {
    status: number;
    data: object;
  };
  res.status(response?.status).json(response);
};

export { getPlayer, updatePlayer, playerMatches };
