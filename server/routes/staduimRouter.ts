import { Router } from 'express';
import { errorWrapper } from '../utils';
import { getAllStadiums, getStadiumDetails } from '../controllers';

export const stadiumRouter: Router = Router();

stadiumRouter.get('/', errorWrapper(getAllStadiums));
stadiumRouter.get('/details/:id', errorWrapper(getStadiumDetails));
