import { Response } from 'express';
import bcrypt from 'bcrypt';
// import { User } from '../models';
import { CustomError } from '../utils';
import { signupSchema } from '../validations/schema';
import { generateToken } from '../utils/jwt/generateToken';

interface userAttributes {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: number;
  role: string;
}
const signupService = async (userData: userAttributes, res: Response) => {
  const { username, email, password, phone, role } = userData;
  const validateResponse = await signupSchema.validateAsync(userData);

  if (validateResponse) {
    const userExists = await User.findOne({ where: { username } });

    if (userExists) {
      throw new CustomError(422, 'Unprocessable Content');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
      phone,
      role,
    });
    const token = await generateToken({ username, email, phone, role });

    res.cookie('token', token);

    return newUser;
  } else {
    throw new CustomError(422, 'Unprocessable Content');
  }
};

export { signupService };
