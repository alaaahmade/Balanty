import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../dataBase';

class User extends Model {
  declare email: string;
  declare username: string;
  declare password: string;
  declare phone: string;
  declare role: 'PLAYER' | 'STADIUM';
}
User.init(
  {
    username: { type: DataTypes.STRING(50), allowNull: false, unique: true },
    phone: { type: DataTypes.STRING(50), allowNull: false, unique: true },
    email: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.ENUM('PLAYER', 'STADIUM') },
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'users',
  },
);

export default User;
