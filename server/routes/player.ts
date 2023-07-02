import { Router } from 'express';
import { getPlayer, playerMatches, updatePlayer } from '../controllers/player';
import { errorWrapper } from '../utils';

export const playerRouter: Router = Router();

playerRouter.get('/profile/:id', errorWrapper(getPlayer));
playerRouter.get('/profile/:id/matches', errorWrapper(playerMatches));
playerRouter.patch('/profile/edit', errorWrapper(updatePlayer));
