import { Router } from 'express';
import { errorWrapper } from '../utils';
import {
  UpdateStadiumData,
  getAllStadiums,
  getStadiumDetails,
  getStadiumProfile,
} from '../controllers';
import {
  AddStadiumImage,
  UpdateStadiumGallery,
  deleteStadiumImage,
} from '../controllers/stadiums';

export const stadiumRouter: Router = Router();

stadiumRouter.get('/', errorWrapper(getAllStadiums));
stadiumRouter.get('/details/:id', errorWrapper(getStadiumDetails));
stadiumRouter.get('/profile/:id', errorWrapper(getStadiumProfile));
stadiumRouter.patch('/edit', errorWrapper(UpdateStadiumData));
stadiumRouter.patch('/gallery', errorWrapper(UpdateStadiumGallery));
stadiumRouter.post('/gallery', errorWrapper(AddStadiumImage));
stadiumRouter.delete(
  '/gallery/:ImageId/:StadiumId',
  errorWrapper(deleteStadiumImage),
);
