import { Router } from 'express';
import { errorWrapper } from '../utils';
import {
  getPlayer,
  getPlayers,
  playerMatches,
  updatePlayer,
} from '../controllers/player';

export const playerRouter: Router = Router();

playerRouter.get('/search/:page', errorWrapper(getPlayers));
playerRouter.get('/profile/:id', errorWrapper(getPlayer));
playerRouter.get('/profile/:id/matches', errorWrapper(playerMatches));
playerRouter.patch('/profile/edit', errorWrapper(updatePlayer));
