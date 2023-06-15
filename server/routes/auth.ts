import express from 'express';
export const authRouter = express.Router();

import { errorWrapper } from '../utils/errorHandler';
import signup from '../controllers/auth/signup';

authRouter.post('/signup', errorWrapper(signup));

export {};
