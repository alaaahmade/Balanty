import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/connection';
import { playerAttributes } from '../interfaces';

export const players = sequelize.define<Model<playerAttributes>>('players', {
  email: { type: DataTypes.STRING, allowNull: false },
  username: { type: DataTypes.STRING(50), allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  avatar: { type: DataTypes.STRING },
  age: { type: DataTypes.INTEGER },
  position: { type: DataTypes.STRING(100) },
  cover: { type: DataTypes.STRING },
});
