import { Request, RequestHandler, Response } from 'express';
import {
  getPlayerService,
  getPlayersService,
  playerMatchesService,
  playerAvatarService,
  updatePlayerService,
  updateCoverService,
  updateAvatarService,
} from '../services';

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

const playerAvatar: RequestHandler = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { id } = req.params;
  const response = (await playerAvatarService(+id)) as {
    status: number;
    data: string;
  };
  res.status(response.status).json(response);
};

const getPlayers: RequestHandler = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const response = (await getPlayersService(req)) as {
    status: number;
    data: object;
  };
  res.status(response.status).json(response);
};

const updateCover: RequestHandler = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const response = await updateCoverService(req);
  res.status(response.status).json(response);
};

const updateAvatar: RequestHandler = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const response = await updateAvatarService(req);
  res.status(response.status).json(response);
};
export {
  getPlayer,
  updatePlayer,
  playerMatches,
  getPlayers,
  playerAvatar,
  updateCover,
  updateAvatar,
};
