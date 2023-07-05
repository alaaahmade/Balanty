import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database';

class Match extends Model {
  declare owner_id: number;
  declare stadiumId: number;
  declare title: string;
  declare description: string;
  declare startDate: Date;
  declare endDate: Date;
  declare seats: number;
}

Match.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
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
