import express, { Router } from 'express';
export const authRouter: Router = express.Router();

import { errorWrapper } from '../utils/errorHandler';
import { signup, login, logout } from '../controllers/auth';

authRouter.post('/signup', errorWrapper(signup));
authRouter.post('/login', errorWrapper(login));
authRouter.post('/logout', logout);
