import { NextFunction, Request, Response } from 'express';
import { signupService } from '../../services/auth';
const signup = async (req: Request, res: Response) => {
  const registerUser = await signupService(req.body);
  if (registerUser) {
    res.json({
      error: false,
      data: {
        data: registerUser,
      },
    });
  }
};

export default signup;
