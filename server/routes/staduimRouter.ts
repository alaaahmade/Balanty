import { Router } from 'express';
import { errorWrapper } from '../utils';
import {
  getAllStadiums,
  getStadiumDetails,
  getStadiumProfile,
  getStadiums,
} from '../controllers';

export const stadiumRouter: Router = Router();

stadiumRouter.get('/', errorWrapper(getAllStadiums));
stadiumRouter.get('/all', errorWrapper(getStadiums));
stadiumRouter.get('/details/:id', errorWrapper(getStadiumDetails));
stadiumRouter.get('/profile/:id', errorWrapper(getStadiumProfile));
