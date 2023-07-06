"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = require("../database");
class Player extends sequelize_1.Model {
}
Player.init({
    avatar: { type: sequelize_1.DataTypes.TEXT },
    age: { type: sequelize_1.DataTypes.INTEGER },
    position: { type: sequelize_1.DataTypes.STRING(100) },
    cover: { type: sequelize_1.DataTypes.TEXT },
    bio: { type: sequelize_1.DataTypes.TEXT },
}, {
    sequelize: database_1.sequelize,
    modelName: 'Player',
    tableName: 'players',
});
exports.default = Player;
