import { Router } from 'express';
import { errorWrapper } from '../utils';
import { getReview } from '../controllers';

const reviewRouter: Router = Router();

reviewRouter.get('/:stadiumId', errorWrapper(getReview));

export default reviewRouter;
