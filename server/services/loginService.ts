import bcrypt from 'bcrypt';
import { loginSchema } from '../validations';
import { CustomError } from '../utils';
import { User } from '../models';
interface userAttrs {
  username: string;
  password: string;
}

const loginService = async (userData: userAttrs) => {
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

    return user;
  } else {
    throw new CustomError(422, 'Unprocessable Content');
  }
};

export default loginService;
