"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = require("../database");
class Player extends sequelize_1.Model {
}
Player.init({
    avatar: {
        type: sequelize_1.DataTypes.TEXT,
        defaultValue: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png',
    },
    age: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: 'لم يتم ادخال عمر',
    },
    position: {
        type: sequelize_1.DataTypes.STRING(100),
        defaultValue: 'لم يتم ادخال مركز',
    },
    cover: {
        type: sequelize_1.DataTypes.TEXT,
        defaultValue: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz-EbTsSBS9XCU_ten8O9UB1m9q4UwXxsZ_A&usqp=CAU',
    },
    bio: { type: sequelize_1.DataTypes.TEXT, defaultValue: 'لم يتم ادخال وصف' },
}, {
    sequelize: database_1.sequelize,
    modelName: 'Player',
    tableName: 'players',
});
exports.default = Player;
