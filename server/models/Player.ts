import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../dataBase';

class Player extends Model {
  declare user_id: number;
  declare avatar: string;
  declare age: number;
  declare position: string;
  declare cover: string;
}

Player.init(
  {
    avatar: { type: DataTypes.TEXT },
    age: { type: DataTypes.INTEGER },
    position: { type: DataTypes.STRING(100) },
    cover: { type: DataTypes.TEXT },
  },
  {
    sequelize,
    modelName: 'Player',
    tableName: 'players',
  },
);

export default Player;
