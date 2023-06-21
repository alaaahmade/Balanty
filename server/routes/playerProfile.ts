import { Router } from 'express';
import { playerProfile } from '../controllers/playerProfile';
import { errorWrapper } from '../utils';

export const playerRouter: Router = Router();

playerRouter.get('/profile/:id', errorWrapper(getPlayer));
