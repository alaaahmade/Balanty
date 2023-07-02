import { Router, Request, Response } from 'express';
import { authRouter } from './auth';
import { playerRouter } from './player';
import { stadiumRouter } from './staduimRouter';
import matchRouter from './matches';
import chatRouter from './matchChat';

const router: Router = Router();
router.use('/matches', matchRouter);

router.use('/user', authRouter);
router.use('/stadiums', stadiumRouter);
router.use('/players', playerRouter);
router.use('/message', chatRouter);

router.get('/', (req: Request, res: Response): void => {
  res.json({
    status: 200,
    msg: 'ok',
  });
});

export { router };
