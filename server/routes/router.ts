import { Router, Request, Response } from 'express';
import matchRouter from './matches';

export const router: Router = Router();

router.get('/', (req: Request, res: Response): void => {
  res.json({
    status: 200,
    msg: 'ok',
  });
});

router.use('/matches', matchRouter);
