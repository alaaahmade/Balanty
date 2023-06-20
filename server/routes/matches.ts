import express from 'express';
import { errorWrapper } from '../utils';
import getMatchesController from '../controllers/matches';

export const matchRouter = express.Router();

matchRouter.get('/', errorWrapper(getMatchesController));
