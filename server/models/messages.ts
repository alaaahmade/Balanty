import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/config/connection';

class MessageDatatypes extends Model {
  declare id: number;
  declare player_id: number;
  declare match_id: number;
  declare message: string;
}

export const Message = MessageDatatypes.init(
  {
    username: { type: DataTypes.STRING(50), allowNull: false },
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    player_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
    },
    match_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Message',
    tableName: 'chat',
  },
);
