import bcrypt from 'bcrypt';
import { loginSchema } from '../validations';
import { CustomError } from '../utils';
import { User } from '../models';
import { Response } from 'express';
// import generateToken from './generateToken';
interface userAttrs {
  username: string;
  password: string;
}

const loginService = async (userData: userAttrs, res: Response) => {
  const { username, password } = userData;

  const validationResult = await loginSchema.validateAsync(userData);

  if (validationResult) {
    const user = await User.findOne({ where: { username } });
    if (!user) {
      throw new CustomError(422, 'Unprocessable Content');
    }
    const result = bcrypt.compare(user.password, password);
    if (!result) {
      throw new CustomError(401, 'Invalid Email or Password');
    }
    const userName = user.username;
    const { email, phone, role } = user;

    const token = generateToken({ userName, email, phone, role });

    res.cookie('token', token);

    return user;
  } else {
    throw new CustomError(422, 'Unprocessable Content');
  }
};

export default loginService;
