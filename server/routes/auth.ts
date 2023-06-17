import express from 'express';
import { errorWrapper } from '../utils';
import login from '../controllers/auth/login';
const authRouter = express.Router();

authRouter.post('/login', errorWrapper(login));

export default authRouter;
