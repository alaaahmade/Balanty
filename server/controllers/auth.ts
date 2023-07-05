import { Request, Response } from 'express';
import { signupService } from '../services/auth';
import { loginService } from '../services';

const signup = async (req: Request, res: Response) => {
  const { newUser, token } = await signupService(req.body);

  res.cookie('token', token).json({
    status: 200,
    message: 'User created successfully',
    user: newUser,
    token,
  });
};

const login = async (req: Request, res: Response) => {
  const { loggedUser, token } = await loginService(req.body);

  res.cookie('token', token).json({
    status: 200,
    data: {
      message: 'Successfully Login',
      user: loggedUser,
    },
  });
};

const logout = (req: Request, res: Response) => {
  res.clearCookie('token').json({
    status: 200,
    data: {
      message: 'تم تسجيل الخروج بنجاح',
    },
  });
};

export { signup, login, logout };
