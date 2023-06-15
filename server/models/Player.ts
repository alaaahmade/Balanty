import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database';

class playerAttributes extends Model {
  declare user_id: number;
  declare avatar: string;
  declare age: number;
  declare position: string;
  declare cover: string;
}
const Player = playerAttributes.init(
  {
    avatar: { type: DataTypes.STRING },
    age: { type: DataTypes.INTEGER },
    position: { type: DataTypes.STRING(100) },
    cover: { type: DataTypes.STRING },
  },
  {
    sequelize,
    modelName: 'Player',
    tableName: 'players',
  },
);

export default Player;
