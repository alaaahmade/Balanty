import express from 'express';
import { errorWrapper } from '../utils';
import getMatches from '../controllers/matches';
import { createMatch } from '../controllers';
import { Router } from 'express';

const matchRouter: Router = Router();

matchRouter.get('/', errorWrapper(getMatches));

matchRouter.post('/', errorWrapper(createMatch));

export default matchRouter;
