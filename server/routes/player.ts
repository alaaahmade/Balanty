import { Router } from 'express';
import {
  getPlayer,
  playerMatches,
  updatePlayer,
  playerAvatar,
  getPlayers,
  updateCover,
  updateAvatar,
} from '../controllers';
import { errorWrapper } from '../utils';

export const playerRouter: Router = Router();

playerRouter.get('/search/:page', errorWrapper(getPlayers));
playerRouter.get('/profile/:id', errorWrapper(getPlayer));
playerRouter.get('/profile/:id/matches', errorWrapper(playerMatches));
playerRouter.get('/avatar/:id', errorWrapper(playerAvatar));
playerRouter.patch('/profile/edit', errorWrapper(updatePlayer));
playerRouter.patch('/cover/:playerId', errorWrapper(updateCover));
playerRouter.patch('/avatar/:playerId', errorWrapper(updateAvatar));
