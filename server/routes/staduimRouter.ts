import { Router } from 'express';
import { errorWrapper } from '../utils';
import {
  getAllStadiums,
  getStadiumDetails,
  getStadiumMatches,
  getStadiumProfile,
} from '../controllers';

export const stadiumRouter: Router = Router();

stadiumRouter.get('/', errorWrapper(getAllStadiums));
stadiumRouter.get('/details/:id', errorWrapper(getStadiumDetails));
stadiumRouter.get('/profile/:id', errorWrapper(getStadiumProfile));
stadiumRouter.get('/matches/:stadiumId', errorWrapper(getStadiumMatches));
