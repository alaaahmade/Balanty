import { Router } from 'express';
import { createMatch } from '../controllers';
import { errorWrapper } from '../utils';

const matchRouter: Router = Router();

matchRouter.post('/create', errorWrapper(createMatch));

export default matchRouter;
