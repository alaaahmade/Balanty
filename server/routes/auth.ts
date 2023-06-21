import express, { Router } from 'express';
export const authRouter: Router = express.Router();

import { errorWrapper } from '../utils/errorHandler';
import { signup, login } from '../controllers/auth';

authRouter.post('/signup', errorWrapper(signup));
authRouter.post('/login', errorWrapper(login));
