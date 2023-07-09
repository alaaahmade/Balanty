import bcrypt from 'bcrypt';
import { Gallery, Player, Stadium, User } from '../models';
import { CustomError } from '../utils';
import { generateToken } from '../utils/jwt/generateToken';
import { UserData, newStadium, newUser } from '../interfaces/auth';
import { signupSchema, loginSchema } from '../validations';
import { userLoginAttrs } from '../interfaces/auth';
import { Op } from 'sequelize';
import { generateEmail } from './mailBuilder';
import sendEmail from './sendEmail';
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

  if (userExists?.username === username) {
    return {
      status: 409,
      data: 'اسم المستخدم موجود',
    };
  }
  if (userExists?.email === email) {
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

  const { emailBody, emailText } = generateEmail({
    name: username,
    greeting: 'مرحباً',
    signature: 'شكراً لكم',
    intro:
      'نحن سعداء لانضمامك إلى مجتمعنا. كعضو في بلنتي، لديك الآن وصول إلى مجموعة كبيرة من الخدمات. سواء كنت هنا للانضمام لمباراة  ينوى عقدها أو إنشاء مباراتك الخاصة ، لا تتردد في استكشاف منصتنا وإخبار أصدقائك عنها!',
    outro:
      ' إذا كانت لديك أي أسئلة أو تحتاج إلى مساعدة، فلا تتردد في التواصل معنا. نحن هنا للمساعدة!',
  });

  await sendEmail({
    to: email,
    subject: '!تم تفعيل الحساب بنجاح',
    text: emailText,
    message: emailBody,
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

  const token = await generateToken(loggedUser);
  return { loggedUser, token };
};

export { signupService, loginService };
