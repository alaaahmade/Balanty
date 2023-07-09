"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginService = exports.signupService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const models_1 = require("../models");
const utils_1 = require("../utils");
const generateToken_1 = require("../utils/jwt/generateToken");
const validations_1 = require("../validations");
const sequelize_1 = require("sequelize");
const mailBuilder_1 = require("./mailBuilder");
const sendEmail_1 = __importDefault(require("./sendEmail"));
const signupService = async (userData) => {
    const { username, email, password, phone, role } = userData;
    await validations_1.signupSchema.validateAsync(userData);
    const userExists = await models_1.User.findOne({
        where: {
            [sequelize_1.Op.or]: [{ username }, { email }, { phone }],
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
    const hashedPassword = await bcrypt_1.default.hash(password, 10);
    const newUser = await models_1.User.create({
        username,
        phone,
        email,
        password: hashedPassword,
        role,
    });
    const { emailBody, emailText } = (0, mailBuilder_1.generateEmail)({
        name: username,
        greeting: 'مرحباً',
        signature: 'شكراً لكم',
        intro: 'نحن سعداء لانضمامك إلى مجتمعنا. كعضو في بلنتي، لديك الآن وصول إلى مجموعة كبيرة من الخدمات. سواء كنت هنا للانضمام لمباراة  ينوى عقدها أو إنشاء مباراتك الخاصة ، لا تتردد في استكشاف منصتنا وإخبار أصدقائك عنها!',
        outro: ' إذا كانت لديك أي أسئلة أو تحتاج إلى مساعدة، فلا تتردد في التواصل معنا. نحن هنا للمساعدة!',
    });
    await (0, sendEmail_1.default)({
        to: email,
        subject: '!تم تفعيل الحساب بنجاح',
        text: emailText,
        message: emailBody,
    });
    const token = await (0, generateToken_1.generateToken)({
        username,
        email,
        phone,
        role,
        id: newUser.id,
    });
    if (role === 'stadium') {
        const stadium = await models_1.Stadium.create({ UserId: newUser.id });
        await models_1.Gallery.create({ StadiumId: stadium.id });
    }
    else {
        await models_1.Player.create({ UserId: newUser.id });
    }
    return {
        status: 201,
        data: newUser,
        token,
    };
};
exports.signupService = signupService;
const loginService = async (userData) => {
    const { password, username } = userData;
    await validations_1.loginSchema.validateAsync(userData);
    const user = await models_1.User.findOne({
        where: { username },
    });
    if (!user) {
        throw new utils_1.CustomError(404, 'هناك خطأ في اسم المستخدم');
    }
    const result = await bcrypt_1.default.compare(password, user.dataValues.password);
    if (!result) {
        throw new utils_1.CustomError(401, 'خطأ في البريد الإلكتروني أو كلمة المرور');
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
    const token = await (0, generateToken_1.generateToken)(loggedUser);
    return { loggedUser, token };
};
exports.loginService = loginService;
