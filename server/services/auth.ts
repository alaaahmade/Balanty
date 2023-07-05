import bcrypt from 'bcrypt';
import { Gallery, Player, Stadium, User } from '../models';
import { CustomError } from '../utils';
import { generateToken } from '../utils/jwt/generateToken';
import { UserData, newStadium, newUser } from '../interfaces/auth';
import { signupSchema, loginSchema } from '../validations';
import { userLoginAttrs } from '../interfaces/auth';

const signupService = async (
  userData: UserData,
): Promise<{ newUser: object; token: string }> => {
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

  const token = await generateToken({
    username,
    email,
    phone,
    role,
    id: newUser.id,
  });

  if (role === 'stadium') {
    const stadium = await Stadium.create({ UserId: (newUser as newUser).id });
    await Gallery.create({ StadiumId: (stadium as newStadium).id });
  } else {
    await Player.create({ UserId: (newUser as newUser).id });
  }

  return { newUser, token };
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

  const token = await generateToken(loggedUser);
  return { loggedUser, token };
};

export { signupService, loginService };
