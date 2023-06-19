import { Router, Request, Response } from 'express';
import matchRouter from './matchesRouter';
import { authRouter } from './auth';

const router: Router = Router();
router.use('/user', authRouter);

router.use('/match', matchRouter);

router.get('/', (req: Request, res: Response): void => {
  res.json({
    status: 200,
    msg: 'ok',
  });
});

export { router };
