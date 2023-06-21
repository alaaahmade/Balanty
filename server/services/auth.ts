import bcrypt from 'bcrypt';
import { User } from '../models';
import { CustomError } from '../utils';
import { signupSchema } from '../validations/schema';
import { generateToken } from '../utils/jwt/generateToken';
import { UserData } from '../interfaces/auth';
import { loginSchema } from '../validations';
import { userLoginAttrs } from '../interfaces/auth';

const signupService = async (userData: UserData) => {
  const { username, email, password, phone, role } = userData;

  await signupSchema.validateAsync(userData);

  const userExists = await User.findOne({ where: { username } });

  if (userExists) {
    throw new CustomError(500, 'User already exists');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    username,
    phone,
    email,
    password: hashedPassword,
    role,
  });

  const token = await generateToken({ username, email, phone, role });

  return { newUser, token };
};

const loginService = async (userData: userLoginAttrs) => {
  const { password, username } = userData;

  await loginSchema.validateAsync(userData);

  const user = await User.findOne({
    where: { username },
  });
  if (!user) {
    throw new CustomError(404, 'User Not Found');
  }

  const result = await bcrypt.compare(password, user.dataValues.password);

  if (!result) {
    throw new CustomError(401, 'Invalid Email or Password');
  }

  const userName = user.username;
  const { id, email, phone, role, createdAt, updatedAt } = user.dataValues;

  const loggedUser = {
    id,
    email,
    phone,
    role,
    createdAt,
    updatedAt,
  };
  const token = generateToken({ id, userName, email, phone, role });
  return { loggedUser, token };
};

export { signupService, loginService };
