<<<<<<< HEAD
import { Router, Request, Response } from 'express';
import matchRouter from './matchesRouter';
=======
import { Router } from 'express';
import { authRouter } from './auth';
>>>>>>> main

const router: Router = Router();

<<<<<<< HEAD
router.use('/match', matchRouter);

router.get('/', (req: Request, res: Response): void => {
  res.json({
    status: 200,
    msg: 'ok',
  });
});
=======
router.use('/user', authRouter);

export { router };
>>>>>>> main
