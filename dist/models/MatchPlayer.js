"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = require("../database");
class MatchPlayer extends sequelize_1.Model {
}
MatchPlayer.init({
    userId: sequelize_1.DataTypes.INTEGER,
    matchId: sequelize_1.DataTypes.INTEGER,
}, { sequelize: database_1.sequelize, modelName: 'MatchPlayer', tableName: 'MatchPlayer' });
exports.default = MatchPlayer;
