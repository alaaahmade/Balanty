import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/config/connection';

class MessageDatatypes extends Model {
  declare player_id: number;
  declare match_id: number;
  declare message: string;
}

export const Message = MessageDatatypes.init(
  {
    username: { type: DataTypes.STRING(50), allowNull: false },
    player_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Player',
        key: 'id',
      },
    },
    match_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Match',
        key: 'id',
      },
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Message',
    tableName: 'messeges',
    timestamps: true,
  },
);
