"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbUrl = exports.sequelizeOption = exports.SECRET_KEY = exports.PRODUCT_LINK = exports.PRODUCT = exports.EMAIL_PASSWORD = exports.EMAIL = exports.BUILD_DB = exports.PORT = exports.nodeEnv = void 0;
require("dotenv/config");
const { DEV_DB_URL, DATABASE_URL, TEST_URL, NODE_ENV, SECRET_KEY } = process.env;
exports.SECRET_KEY = SECRET_KEY;
exports.nodeEnv = NODE_ENV;
exports.PORT = (process.env || 8080).PORT;
exports.BUILD_DB = process.env.BUILD_DB;
_a = process.env, exports.EMAIL = _a.EMAIL, exports.EMAIL_PASSWORD = _a.EMAIL_PASSWORD, exports.PRODUCT = _a.PRODUCT, exports.PRODUCT_LINK = _a.PRODUCT_LINK;
if (!NODE_ENV || !SECRET_KEY) {
    throw new Error('Invalid Environment Variables');
}
exports.sequelizeOption = {
    dialect: 'postgres',
    dialectOptions: {
        ssl: false,
        charset: 'utf8mb4',
    },
};
exports.dbUrl = '';
if (NODE_ENV === 'production' && DATABASE_URL) {
    exports.dbUrl = DATABASE_URL;
    exports.sequelizeOption.dialectOptions.ssl = { rejectUnauthorized: false };
}
else if (NODE_ENV === 'development' && DEV_DB_URL) {
    exports.sequelizeOption.dialectOptions.ssl = false;
    exports.dbUrl = DEV_DB_URL;
    exports.sequelizeOption.dialectOptions = { ssl: false, charset: 'utf8mb4' };
}
else if (NODE_ENV === 'test' && TEST_URL) {
    exports.sequelizeOption.dialectOptions.ssl = false;
    exports.dbUrl = TEST_URL;
    exports.sequelizeOption.dialectOptions = { ssl: false, charset: 'utf8mb4' };
}
else {
    throw new Error('Invalid NODE_ENV');
}
exports.default = { SECRET_KEY };
