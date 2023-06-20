import express, { Router } from 'express';
export const authRouter: Router = express.Router();

import { errorWrapper } from '../utils/errorHandler';
import signup from '../controllers/auth';

authRouter.post('/signup', errorWrapper(signup));

export {};
