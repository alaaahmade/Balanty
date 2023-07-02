import { Router, Request, Response } from 'express';
import { authRouter } from './auth';
import { stadiumRouter } from './staduimRouter';
import { playerRouter } from './player';
import matchRouter from './matches';

const router: Router = Router();

router.use('/matches', matchRouter);
router.use('/user', authRouter);
router.use('/stadiums', stadiumRouter);
router.use('/players', playerRouter);

router.get('/', (req: Request, res: Response): void => {
  res.json({
    status: 200,
    msg: 'ok',
  });
});

export { router };
