import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database';

class playerAttributes extends Model {
  declare email: string;
  declare username: string;
  declare password: string;
  declare avatar: string;
  declare age: number;
  declare position: string;
  declare cover: string;
}
export const Player = playerAttributes.init(
  {
    email: { type: DataTypes.STRING, allowNull: false },
    username: { type: DataTypes.STRING(50), allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    avatar: { type: DataTypes.STRING },
    age: { type: DataTypes.INTEGER },
    position: { type: DataTypes.STRING(100) },
    cover: { type: DataTypes.STRING },
  },
  {
    sequelize,
    modelName: 'player',
    tableName: 'players',
  },
);
