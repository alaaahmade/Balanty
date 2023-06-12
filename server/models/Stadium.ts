import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/connection';

class stadiumsAttributes extends Model {
  declare name: string;
  declare address: string;
  declare phone_number: number;
  declare password: string;
  declare description: string;
  declare price: number;
  declare ground: string;
  declare cover: string;
}

export const Stadium = stadiumsAttributes.init(
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
  {
    sequelize,
    modelName: 'stadium',
    tableName: 'stadium',
  },
);
