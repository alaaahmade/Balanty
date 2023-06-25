import { Router } from 'express';
import { getPlayer, updatePlayer } from '../controllers/player';
import { errorWrapper } from '../utils';

export const playerRouter: Router = Router();

playerRouter.get('/profile/:id', errorWrapper(getPlayer));
playerRouter.get('/profile/followers', errorWrapper(getFollowers));
playerRouter.get('/profile/following', errorWrapper(getFollowing));
playerRouter.delete(
  '/profile/following/unfollow',
  errorWrapper(removeFollowing),
);
playerRouter.put('/profile/:id', errorWrapper(updatePlayer));
