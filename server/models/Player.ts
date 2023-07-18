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
    avatar: {
      type: DataTypes.TEXT,
      defaultValue:
        'https://www.yourstru.ly/wp-content/uploads/2022/12/2022-12-22_12_lionel-messi-biograph.webp',
    },
    age: { type: DataTypes.INTEGER, defaultValue: 'لم يتم ادخال عمر' },
    position: {
      type: DataTypes.STRING(100),
      defaultValue: 'لم يتم ادخال مركز',
    },
    cover: {
      type: DataTypes.TEXT,
      defaultValue:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz-EbTsSBS9XCU_ten8O9UB1m9q4UwXxsZ_A&usqp=CAU',
    },
    bio: { type: DataTypes.TEXT, defaultValue: 'لم يتم ادخال وصف' },
  },
  {
    sequelize,
    modelName: 'Player',
    tableName: 'players',
  },
);

export default Player;
