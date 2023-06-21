import { Router } from 'express';
import { errorWrapper } from '../utils';

export const playerProfileRouter: Router = Router();

playerProfileRouter.get('/users/:id', errorWrapper(playerProfile));
