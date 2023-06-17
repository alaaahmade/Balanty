import { Router, Request, Response } from 'express';
import { stadiumRouter } from './staduimRouter';

export const router: Router = Router();

router.use('/stadiums', stadiumRouter);

router.get('/', (req: Request, res: Response): void => {
  res.json({
    status: 200,
    msg: 'ok',
  });
});
