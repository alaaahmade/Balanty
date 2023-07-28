"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = require("../database");
class Gallery extends sequelize_1.Model {
}
Gallery.init({
    StadiumId: sequelize_1.DataTypes.INTEGER,
    image: {
        type: sequelize_1.DataTypes.TEXT,
        defaultValue: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Etihad_Stadium.jpg/1024px-Etihad_Stadium.jpg',
    },
}, {
    sequelize: database_1.sequelize,
    modelName: 'Gallery',
    tableName: 'gallery',
});
exports.default = Gallery;
