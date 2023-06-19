import { Router } from 'express';
import matchRouter from './matches';
import { authRouter } from './auth';

const router: Router = Router();

router.use('/user', authRouter);
router.use('/matches', matchRouter);

export { router };
