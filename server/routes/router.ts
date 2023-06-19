import { Router, Request, Response } from 'express';
import matchRouter from './matchesRouter';

export const router: Router = Router();

router.use('/matches', matchRouter);

router.get('/', (req: Request, res: Response): void => {
  res.json({
    status: 200,
    msg: 'ok',
  });
});
