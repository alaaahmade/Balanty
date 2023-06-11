import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/connection';
import { stadiumsAttributes } from '../interfaces';

export const stadiums = sequelize.define<Model<stadiumsAttributes>>(
  'stadiums',
  {
    name: { type: DataTypes.STRING(100), allowNull: false },
    address: { type: DataTypes.STRING },
    phone_number: { type: DataTypes.INTEGER, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING },
    price: { type: DataTypes.INTEGER },
    ground: { type: DataTypes.STRING(50) },
    cover: { type: DataTypes.STRING },
  },
);
