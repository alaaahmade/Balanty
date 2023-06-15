import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database';

class Message extends Model {
  declare player_id: number;
  declare match_id: number;
  declare message: string;
}
Message.init(
  {
    username: { type: DataTypes.STRING(50), allowNull: false },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Message',
    tableName: 'messages',
    timestamps: true,
  },
);

export default Message;
