import { Router } from 'express';
import { getPlayer } from '../controllers/player';
import { errorWrapper } from '../utils';

export const playerRouter: Router = Router();

playerRouter.get('/profile/:id', errorWrapper(getPlayer));
playerRouter.put("/profile/:id", errorWrapper(updatePlayer))