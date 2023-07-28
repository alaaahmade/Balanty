"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
const checkAuth = async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        throw new utils_1.CustomError(400, 'Unauthorized');
    }
    try {
        const decoded = await (0, utils_1.verifyToken)(token);
        req.user = decoded;
        next();
    }
    catch (error) {
        res.clearCookie('token');
        next(error);
    }
};
exports.default = checkAuth;
