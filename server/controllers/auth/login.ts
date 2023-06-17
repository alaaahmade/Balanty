import { Request, Response } from 'express';
import { CustomError } from '../../utils';
import { loginService } from '../../services';
import { generateToken } from '../../utils/jwt/generateToken';

const login = async (req: Request, res: Response) => {
  const user = await loginService(req.body);
  if (!user) {
    throw new CustomError(500, 'Internal Server Error');
  }
  const userName = user.username;
  const { email, phone, role } = user;

  const token = generateToken({ userName, email, phone, role });

  res.cookie('token', token).json({
    data: {
      error: false,
      message: 'Successfully Login',
      user,
    },
  });
};

export default login;
