import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database';


class MatchAttributes extends Model {
  declare owner: string;
  declare title: string;
  declare desctiption: string;
  declare time: Date;
  declare seats: boolean;
  declare players_id: number;
}

export const Match = MatchAttributes.init(
  {
    owner: {
      type: DataTypes.STRING(50),
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
