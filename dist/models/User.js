"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = require("../database");
class User extends sequelize_1.Model {
}
User.init({
    username: { type: sequelize_1.DataTypes.STRING(25), allowNull: false, unique: true },
    phone: { type: sequelize_1.DataTypes.STRING(10), allowNull: false, unique: true },
    email: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    password: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    role: { type: sequelize_1.DataTypes.STRING, allowNull: false },
}, {
    sequelize: database_1.sequelize,
    modelName: 'User',
    tableName: 'users',
});
exports.default = User;
