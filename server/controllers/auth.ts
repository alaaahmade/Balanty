import { Request, Response } from 'express';
import { signupService } from '../services/auth';

const signup = async (req: Request, res: Response) => {
  const { token } = await signupService(req.body);

  res.cookie('token', token);

  res.json({
    status: 200,
    messege: 'User created successfully',
  });
};

export default signup;
