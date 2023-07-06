"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.login = exports.signup = void 0;
const auth_1 = require("../services/auth");
const services_1 = require("../services");
const signup = async (req, res) => {
    const { token, data } = await (0, auth_1.signupService)(req.body);
    res.cookie('token', token).json({
        status: 200,
        message: 'User created successfully',
        user: data,
        token,
    });
};
exports.signup = signup;
const login = async (req, res) => {
    const { loggedUser, token } = await (0, services_1.loginService)(req.body);
    res.cookie('token', token).json({
        status: 200,
        data: {
            message: 'Successfully Login',
            user: loggedUser,
        },
    });
};
exports.login = login;
const logout = (req, res) => {
    res.clearCookie('token').json({
        status: 200,
        data: {
            message: 'تم تسجيل الخروج بنجاح',
        },
    });
};
exports.logout = logout;
