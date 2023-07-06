import { Router, Request, Response } from 'express';
import { authRouter } from './auth';
import { playerRouter } from './player';
import { stadiumRouter } from './staduimRouter';
import matchRouter from './matches';
import chatRouter from './matchChat';
import reviewRouter from './reviewRouter';
import { checkAuth } from '../middleware';

const router: Router = Router();
router.use('/matches', checkAuth, matchRouter);

router.use('/user', authRouter);
router.use('/stadiums', stadiumRouter);
router.use('/players', playerRouter);
router.use('/message', chatRouter);
router.use('/review', checkAuth, reviewRouter);

router.get('/', (req: Request, res: Response): void => {
  res.json({
    status: 200,
    msg: 'ok',
  });
});

export { router };
