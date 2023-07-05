import { Router } from 'express';
import { errorWrapper } from '../utils';
import {
  UpdateStadiumData,
  getAllStadiums,
  getStadiumDetails,
  getStadiumProfile,
  getStadiums,
} from '../controllers';
import {
  AddStadiumImage,
  UpdateStadiumGallery,
  deleteStadiumImage,
  getBestStadiums,
} from '../controllers/stadiums';

export const stadiumRouter: Router = Router();

stadiumRouter.get('/', errorWrapper(getAllStadiums));
stadiumRouter.get('/best', errorWrapper(getBestStadiums));
stadiumRouter.get('/all/:page', errorWrapper(getStadiums));
stadiumRouter.get('/details/:id', errorWrapper(getStadiumDetails));
stadiumRouter.get('/profile/:id', errorWrapper(getStadiumProfile));
stadiumRouter.patch('/edit', errorWrapper(UpdateStadiumData));
stadiumRouter.patch('/gallery', errorWrapper(UpdateStadiumGallery));
stadiumRouter.post('/gallery', errorWrapper(AddStadiumImage));
stadiumRouter.delete(
  '/gallery/:ImageId/:StadiumId',
  errorWrapper(deleteStadiumImage),
);
