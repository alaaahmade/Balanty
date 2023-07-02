import { Router } from 'express';
import { errorWrapper } from '../utils';
import { addReview, getReview } from '../controllers';

const reviewRouter: Router = Router();

reviewRouter.get('/:stadiumId', errorWrapper(getReview));
reviewRouter.post('/:stadiumId', errorWrapper(addReview));

export default reviewRouter;
