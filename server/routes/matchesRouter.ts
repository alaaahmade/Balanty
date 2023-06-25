import { Router } from 'express';
import { createMatch, getStadiumMatches } from '../controllers';
import { errorWrapper } from '../utils';

const matchRouter: Router = Router();

matchRouter.post('/', errorWrapper(createMatch));
matchRouter.get('/stadium/:stadiumId', errorWrapper(getStadiumMatches));

export default matchRouter;
