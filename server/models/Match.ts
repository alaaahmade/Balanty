import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database';

class MatchAttributes extends Model {
  declare owner_id: number;
  declare stadium_id: number;
  declare title: string;
  declare description: string;
  declare time: Date;
  declare seats: number;
}

const Match = MatchAttributes.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    startDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    endDate: {
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

export default Match;
