import { Router } from 'express';
import {
  JoinToMatch,
  createMatch,
  getMatches,
  getStadiumMatches,
} from '../controllers';
import { errorWrapper } from '../utils';

const matchRouter: Router = Router();

matchRouter.get('/', errorWrapper(getMatches));
matchRouter.post('/', errorWrapper(createMatch));
matchRouter.get('/stadium/:stadiumId', errorWrapper(getStadiumMatches));
matchRouter.get('/join/:matchId', errorWrapper(JoinToMatch));

export default matchRouter;
