import { Request, Response } from 'express';
import { signupService } from '../services/auth';

const signup = async (req: Request, res: Response) => {
  const { newUser, token } = await signupService(req.body);

  res.cookie('token', token);
  res.status(200).json(newUser);
};

export default signup;
