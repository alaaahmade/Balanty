import { createMatch, getMatches } from '../controllers';
import { errorWrapper } from '../utils';
import { Router } from 'express';

const matchRouter: Router = Router();

matchRouter.get('/', errorWrapper(getMatches));
matchRouter.post('/', errorWrapper(createMatch));

export default matchRouter;
