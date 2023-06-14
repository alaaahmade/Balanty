import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/config/connection';

class MessageDatatypes extends Model {
  declare player_id: number;
  declare match_id: number;
  declare message: string;
}

const Message = MessageDatatypes.init(
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
