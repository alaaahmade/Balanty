import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database';

class MatchAttributes extends Model {
  declare owner_id: number;
  declare title: string;
  declare desctiption: string;
  declare time: Date;
  declare seats: number;
  declare is_player: boolean;
  declare players_id: number;
}

export const Match = MatchAttributes.init(
  {
    is_player: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    owner_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    desctiption: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    seats: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

  },
  { sequelize, modelName: 'Match', tableName: 'matches' },
);
