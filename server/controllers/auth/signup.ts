import { Request, Response } from 'express';
import { signupService } from '../../services/auth';

const signup = async (req: Request, res: Response) => {
  const newUser = await signupService(req.body, res);
  if (newUser) {
    res.status(200).json(newUser);
  } else res.status(500).json({ error: true });
};

export default signup;
