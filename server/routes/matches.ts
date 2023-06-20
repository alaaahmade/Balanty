import express from 'express';
import { errorWrapper } from '../utils';
import getMatches from '../controllers/matches';

export const matchRouter = express.Router();

matchRouter.get('/', errorWrapper(getMatches));
