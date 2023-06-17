import { Router } from 'express';
import { errorWrapper } from '../utils';
import { getAllStadiums } from '../controllers';

export const stadiumRouter: Router = Router();

stadiumRouter.get('/', errorWrapper(getAllStadiums));
