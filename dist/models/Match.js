"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = require("../database");
class Match extends sequelize_1.Model {
}
Match.init({
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    startDate: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    endDate: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    seats: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, { sequelize: database_1.sequelize, modelName: 'Match', tableName: 'matches' });
exports.default = Match;
