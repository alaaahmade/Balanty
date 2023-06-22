import { Router, Request, Response } from 'express';
import { authRouter } from './auth';
import { stadiumRouter } from './staduimRouter';
import matchRouter from './matches';

const router: Router = Router();

router.use('/user', authRouter);
router.use('/user', authRouter);
router.use('/stadiums', stadiumRouter);

router.get('/', (req: Request, res: Response): void => {
  res.json({
    status: 200,
    msg: 'ok',
  });
});

export { router };
