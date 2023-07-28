"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = require("../database");
class Message extends sequelize_1.Model {
}
Message.init({
    message: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
}, {
    sequelize: database_1.sequelize,
    modelName: 'Message',
    tableName: 'messages',
    timestamps: true,
});
exports.default = Message;
