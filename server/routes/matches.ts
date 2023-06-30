import { Router } from 'express';
import { createMatch, getMatches, getStadiumMatches } from '../controllers';
import { errorWrapper } from '../utils';

const matchRouter: Router = Router();

matchRouter.get('/', errorWrapper(getMatches));
matchRouter.post('/', errorWrapper(createMatch));
matchRouter.get('/stadium/:stadiumId', errorWrapper(getStadiumMatches));

export default matchRouter;
