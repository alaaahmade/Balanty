"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = require("../database");
class Review extends sequelize_1.Model {
}
Review.init({
    value: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            min: 0.5,
            max: 5,
        },
    },
}, {
    sequelize: database_1.sequelize,
    modelName: 'Review',
    tableName: 'reviews',
});
exports.default = Review;
