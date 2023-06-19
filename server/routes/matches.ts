import express, { Router } from 'express';
import { errorWrapper } from '../utils';
import { getStadiumMatches } from '../controllers';

const matchRouter: Router = express.Router();

matchRouter.get('/stadium/:stadiumId', errorWrapper(getStadiumMatches));

export default matchRouter;
