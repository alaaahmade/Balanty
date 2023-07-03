import bcrypt from 'bcrypt';
import { User } from '../models';
import { CustomError } from '../utils';
import { generateToken } from '../utils/jwt/generateToken';
import { UserData } from '../interfaces/auth';
import { signupSchema, loginSchema } from '../validations';
import { userLoginAttrs } from '../interfaces/auth';
import { Op } from 'sequelize';

const signupService = async (
  userData: UserData,
): Promise<{
  status: number;
  data: object | string;
  token?: string | null;
}> => {
  const { username, email, password, phone, role } = userData;

  await signupSchema.validateAsync(userData);

  const userExists = await User.findOne({
    where: {
      [Op.or]: [{ username }, { email }, { phone }],
    },
  });

  console.log(userExists);

  if (userExists?.username === username) {
    return {
      status: 409,
      data: 'اسم المستخدم موجود',
    };
  }
  if (userExists?.email === email) {
    console.log('email');
    return {
      status: 409,
      data: 'هذا الايميل مستخدم',
    };
  }
  if ((userExists?.phone ?? 0) === phone) {
    return {
      status: 409,
      data: 'هذا الهاتف مستخدم',
    };
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

  return {
    status: 201,
    data: newUser,
    token,
  };
};

const loginService = async (
  userData: userLoginAttrs,
): Promise<{ loggedUser: object; token: string }> => {
  const { password, username } = userData;

  await loginSchema.validateAsync(userData);

  const user = await User.findOne({
    where: { username },
  });
  if (!user) {
    throw new CustomError(404, 'هناك خطأ في اسم المستخدم');
  }

  const result = await bcrypt.compare(password, user.dataValues.password);

  if (!result) {
    throw new CustomError(401, 'خطأ في البريد الإلكتروني أو كلمة المرور');
  }

  const userName = user.username;
  const { id, email, phone, role, createdAt, updatedAt } = user.dataValues;

  const loggedUser = {
    id,
    username: userName,
    email,
    phone,
    role,
    createdAt,
    updatedAt,
  };
  const token = await generateToken({ id, userName, email, phone, role });
  return { loggedUser, token };
};

export { signupService, loginService };
