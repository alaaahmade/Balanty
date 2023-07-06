"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = require("../database");
class Stadium extends sequelize_1.Model {
}
Stadium.init({
    address: { type: sequelize_1.DataTypes.STRING, defaultValue: 'لم يتم ادخال عنوان' },
    description: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: 'لم يتم ادخال وصف',
    },
    price: { type: sequelize_1.DataTypes.INTEGER, defaultValue: 0 },
    ground: {
        type: sequelize_1.DataTypes.STRING(50),
        defaultValue: 'يمكنك اضافة نوع الارضية ',
    },
}, {
    sequelize: database_1.sequelize,
    modelName: 'Stadium',
    tableName: 'stadiums',
});
exports.default = Stadium;
