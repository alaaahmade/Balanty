import express from 'express';
export const authRouter = express.Router();

import { errorWrapper } from '../utils/errorHandler';
import signup from '../controllers/auth';

authRouter.post('/signup', errorWrapper(signup));

export {};
