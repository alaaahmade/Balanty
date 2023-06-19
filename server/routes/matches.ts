import express, { Router } from 'express';
import { errorWrapper } from '../utils';
import getMatchesController from '../controllers/matches';

const matchRouter: Router = express.Router();

matchRouter.get('/', errorWrapper(getMatchesController));

export default matchRouter;
