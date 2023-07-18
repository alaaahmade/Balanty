import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database';

class Player extends Model {
  declare UserId: number;
  declare avatar: string;
  declare age: number;
  declare position: string;
  declare cover: string;
  declare bio: string;
}

Player.init(
  {
    avatar: { type: DataTypes.TEXT },
    age: { type: DataTypes.INTEGER },
    position: {
      type: DataTypes.STRING(100),
      defaultValue: 'لم يتم ادخال مركز',
    },
    cover: { type: DataTypes.TEXT },
    bio: { type: DataTypes.TEXT, defaultValue: 'لم يتم ادخال وصف' },
  },
  {
    sequelize,
    modelName: 'Player',
    tableName: 'players',
  },
);

export default Player;
